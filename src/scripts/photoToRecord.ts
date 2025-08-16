import { supabase } from './supabase'
export const getMediaUrl = (path: string): string => {
  const { data } = supabase.storage.from('cms-thomas-memorial-multimedia').getPublicUrl(path)

  return data.publicUrl
}

const folder = 'childhood'
const albumId = 3
async function listFolder(folderName: string): Promise<string[]> {
  const data = await supabase.storage.from('cms-thomas-memorial-multimedia').list(folderName)
  if (data.data) {
    return data.data.map(item => item.name)
  } else {
    return []
  }
}

async function main() {
  const files = await listFolder(folder)
  console.log(files)
  const p = await Promise.all(
    files.map((file, idx) => {
      return supabase.from('cms-album-photos').insert({
        created_at: new Date().toISOString(),
        description: '',
        title: '',
        order: idx,
        image: `${folder}/${file}`,
        album_id: albumId,
      })
    })
  )
  console.log(p)
  console.log('success migrate', folder, albumId)
}

main()
