/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  type CmsText,
  type CmsMemoriesTribute,
  type CmsAlbum,
  type CmsAlbumPhoto,
  getAllCmsText,
  getMemoriesTributes,
  getAllAlbumsWithPhotos,
  getMediaUrl,
} from '../lib/supabase'

// PhotoGallery component compatible types
export interface Photo {
  id: number
  title: string
  description: string
  image: string
}

export interface PhotoSection {
  id: number
  title: string
  description: string
  photos: Photo[]
}

interface DataContextType {
  cmsTexts: CmsText[]
  memoriesTributes: CmsMemoriesTribute[]
  albums: (CmsAlbum & { photos: CmsAlbumPhoto[] })[]
  isLoading: boolean
  error: string | null
  getCmsTextBySlot: (slot: string) => string
  getPhotoSections: () => PhotoSection[]
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

interface DataProviderProps {
  children: React.ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [cmsTexts, setCmsTexts] = useState<CmsText[]>([])
  const [memoriesTributes, setMemoriesTributes] = useState<CmsMemoriesTribute[]>([])
  const [albums, setAlbums] = useState<(CmsAlbum & { photos: CmsAlbumPhoto[] })[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Load all data in parallel
        const [cmsTextData, memoriesData, albumsData] = await Promise.all([
          getAllCmsText(),
          getMemoriesTributes(),
          getAllAlbumsWithPhotos(),
        ])

        setCmsTexts(cmsTextData)
        setMemoriesTributes(memoriesData)
        setAlbums(albumsData)
      } catch (err) {
        console.error('Error loading data:', err)
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const getCmsTextBySlot = (slot: string): string => {
    const cmsText = cmsTexts.find(text => text.slot === slot)
    return cmsText?.text || ''
  }

  const getPhotoSections = (): PhotoSection[] => {
    return albums.map(album => ({
      id: album.id,
      title: album.title,
      description: album.description,
      photos: album.photos.map(photo => ({
        id: photo.id,
        title: photo.title,
        description: photo.description,
        image: getMediaUrl(photo.image),
      })),
    }))
  }

  const value: DataContextType = {
    cmsTexts,
    memoriesTributes,
    albums,
    isLoading,
    error,
    getCmsTextBySlot,
    getPhotoSections,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
