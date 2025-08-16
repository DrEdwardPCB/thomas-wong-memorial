/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
function setupSupabase() {
  const supabaseUrl = process?.env.VITE_SUPABASE_URL
  const supabaseAnonKey = process?.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = setupSupabase()

// Database types
export interface CmsText {
  id: number
  createdAt: string
  slot: string
  text: string
}

export interface CmsMemoriesTribute {
  id: number
  created_at: string
  order: number
  name: string
  show_name: boolean
  text: string
}

export interface CmsAlbum {
  id: number
  created_at: string
  description: string
  title: string
  show: boolean
}

export interface CmsAlbumPhoto {
  id: number
  created_at: string
  description: string
  title: string
  order: number
  image: string
  album_id: number
}

// Helper functions
export const getCmsText = async (slot: string): Promise<string> => {
  const { data, error } = await supabase.from('cms-text').select('text').eq('slot', slot).single()

  if (error) {
    console.error('Error fetching CMS text:', error)
    return ''
  }

  return data?.text || ''
}

export const getAllCmsText = async (): Promise<CmsText[]> => {
  const { data, error } = await supabase
    .from('cms-text')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching all CMS text:', error)
    return []
  }

  return data || []
}

export const getMemoriesTributes = async (): Promise<CmsMemoriesTribute[]> => {
  const { data, error } = await supabase
    .from('cms-memories-tribute')
    .select('*')
    .order('order', { ascending: true })

  if (error) {
    console.error('Error fetching memories/tributes:', error)
    return []
  }

  return data || []
}

export const getAlbums = async (): Promise<CmsAlbum[]> => {
  const { data, error } = await supabase
    .from('cms-album')
    .select('*')
    .eq('show', true)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching albums:', error)
    return []
  }

  return data || []
}

export const getAlbumPhotos = async (albumId?: number): Promise<CmsAlbumPhoto[]> => {
  let query = supabase.from('cms-album-photos').select('*').order('order', { ascending: true })

  if (albumId) {
    query = query.eq('album_id', albumId)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching album photos:', error)
    return []
  }

  return data || []
}

export const getAllAlbumsWithPhotos = async (): Promise<
  (CmsAlbum & { photos: CmsAlbumPhoto[] })[]
> => {
  try {
    const [albums, photos] = await Promise.all([getAlbums(), getAlbumPhotos()])

    return albums.map(album => ({
      ...album,
      photos: photos.filter(photo => photo.album_id === album.id),
    }))
  } catch (error) {
    console.error('Error fetching albums with photos:', error)
    return []
  }
}

export const getMediaUrl = (path: string): string => {
  const { data } = supabase.storage.from('cms-thomas-memorial-multimedia').getPublicUrl(path)

  return data.publicUrl
}
