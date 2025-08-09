# Supabase Integration Setup

This document explains how to set up and configure Supabase for the Thomas Memorial Site.

## Environment Variables

You need to set up the following environment variables:

### Local Development

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=https://eanyyadcjxwstgyopofu.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhbnl5YWRjanh3c3RneW9wb2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NjQ0ODUsImV4cCI6MjA3MDM0MDQ4NX0.97BPgsmZamT5X7B7J_uRIluV80KB5hyXnuriUyX_IFk
```

### GitHub Actions Deployment

Add the following secrets to your GitHub repository:

1. Go to repository Settings → Secrets and variables → Actions
2. Add these secrets:
   - `VITE_SUPABASE_URL`: https://eanyyadcjxwstgyopofu.supabase.co
   - `VITE_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhbnl5YWRjanh3c3RneW9wb2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NjQ0ODUsImV4cCI6MjA3MDM0MDQ4NX0.97BPgsmZamT5X7B7J_uRIluV80KB5hyXnuriUyX_IFk

## Database Schema

### Tables

#### `cms-text`
Stores editable text content for different sections of the site.

```sql
CREATE TABLE "cms-text" (
  id SERIAL PRIMARY KEY,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  slot TEXT NOT NULL UNIQUE,
  text TEXT NOT NULL
);
```

**Suggested slots:**
- `hero-subtitle`: Hero section subtitle text
- `about-paragraph-1`: First paragraph in About section
- `about-paragraph-2`: Second paragraph in About section  
- `about-paragraph-3`: Third paragraph in About section

#### `cms-memories-tribute`
Stores memories and tributes from family and friends.

```sql
CREATE TABLE "cms-memories-tribute" (
  id SERIAL PRIMARY KEY,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "order" INTEGER NOT NULL DEFAULT 0,
  name TEXT NOT NULL,
  show_name BOOLEAN NOT NULL DEFAULT true,
  text TEXT NOT NULL
);
```

### Storage

#### `cms-thomas-memorial-multimedia`
Storage bucket for images and videos.

**Folder structure suggestion:**
```
/photos/
  /gallery/
    /f1-racing/
    /karting/
    /family/
    /memories/
  /hero/
  /about/
/videos/
```

## Sample Data

### CMS Text Examples

```sql
INSERT INTO "cms-text" (slot, text) VALUES 
('hero-subtitle', 'Forever in our hearts'),
('about-paragraph-1', '我不要獨佔你們的祝福，眼淚流過後，謹記要好好走你們的旅程，要讓你們的一生也精彩，在天上離你們遠一點的我，在你們樂意並需要時，我也要像以往一樣笑微微的繼續聽你們分享經歷旅程中的樂與悲。'),
('about-paragraph-2', '我在這裡的24年，是場精彩的旅程，每個人的步伐不一樣，沿途風景不一樣，認識的人不一樣。多謝你們來到這裡懷念我，你會驚訝在這奇妙旅程的每一段落中，每個王顥銘都不很一樣。記得要開開心心的想起我，帶著快快樂樂的回憶走下去。讓你的未來也有我的助攻，那就不枉我們相識一場。'),
('about-paragraph-3', '我沒有把你們擱在旅程中的任何地方，只是換個身份，換個角度，仍然在一起。');
```

### Memories & Tributes Examples

```sql
INSERT INTO "cms-memories-tribute" ("order", name, show_name, text) VALUES 
(1, 'Family Member', true, 'Thomas was always passionate about racing. Even as a child, he would spend hours watching Formula 1 races and dreaming about being on the track.'),
(2, 'Racing Friend', true, 'His dedication to the sport was inspiring. Thomas never gave up, always pushing to improve his skills and learn more about racing.'),
(3, 'Anonymous', false, 'Thomas brought joy to everyone around him. His smile was infectious and his love for life was evident in everything he did.');
```

## Usage in Components

The site automatically loads all data from Supabase on startup. Components can access this data using the `useData` hook:

```tsx
import { useData } from '../contexts/DataContext'

const MyComponent = () => {
  const { getCmsTextBySlot, memoriesTributes, isLoading } = useData()
  
  const heroText = getCmsTextBySlot('hero-subtitle')
  
  if (isLoading) return <div>Loading...</div>
  
  return (
    <div>
      <h1>{heroText}</h1>
      {memoriesTributes.map(memory => (
        <div key={memory.id}>{memory.text}</div>
      ))}
    </div>
  )
}
```

## Media Files

To use images from Supabase storage in components:

```tsx
import { getMediaUrl } from '../lib/supabase'

const ImageComponent = () => {
  const imageUrl = getMediaUrl('photos/hero/thomas-hero.jpg')
  
  return <img src={imageUrl} alt="Thomas" />
}
```
