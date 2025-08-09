# PhotoGallery Integration Guide

This document shows how to update `PhotoGallery.tsx` to use dynamic data from Supabase without altering the existing component structure.

## Required Changes

To make PhotoGallery.tsx use dynamic data, replace the hardcoded `photoSections` array with data from the DataContext:

```tsx
// Add this import at the top
import { useData } from '../contexts/DataContext'

// Replace the hardcoded photoSections array with:
const PhotoGallery: React.FC = () => {
  const { getPhotoSections } = useData()
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  // Replace the hardcoded photoSections with dynamic data
  const photoSections = getPhotoSections()

  // Rest of the component remains unchanged...
}
```

## Database Structure

The system now supports two new tables:

### cms-album

- `id`: Primary key
- `title`: Album title (e.g., "F1 Racing")
- `description`: Album description (e.g., "At the track")
- `show`: Boolean to control visibility
- `created_at`: Timestamp

### cms-album-photos

- `id`: Primary key
- `title`: Photo title (e.g., "Race Day")
- `description`: Photo description (e.g., "Excitement at the track")
- `image`: Image path in Supabase storage
- `order`: Display order within album
- `album_id`: Foreign key to cms-album
- `created_at`: Timestamp

## Data Flow

1. **DataContext** loads albums and photos from Supabase
2. **getPhotoSections()** transforms the database data into PhotoGallery-compatible format:
   - Albums become PhotoSections
   - Album photos become Photos with full media URLs
3. **PhotoGallery** receives the exact same data structure it expects

## Benefits

- Zero breaking changes to PhotoGallery.tsx component
- Full CMS control over photo galleries
- Automatic image URL generation from Supabase storage
- Maintains existing UI/UX behavior
- Albums can be shown/hidden via database flag

## Example Usage

```tsx
// The PhotoGallery component will automatically receive data like:
const photoSections = [
  {
    id: 1,
    title: 'F1 Racing',
    description: 'At the track',
    photos: [
      {
        id: 1,
        title: 'Race Day',
        description: 'Excitement at the track',
        image:
          'https://supabase-url/storage/v1/object/public/cms-thomas-memorial-multimedia/race-day.jpg',
      },
      // ... more photos
    ],
  },
  // ... more albums
]
```

This maintains perfect compatibility with the existing PhotoGallery component while enabling full CMS functionality.
