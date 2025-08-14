# Background Music Setup

This guide explains how to add background music to the Thomas Memorial Site.

## Adding Your Music File

1. **Place your audio file** in the `public/audio/` directory
2. **Recommended format**: MP3 (widely supported)
3. **File naming**: Use `background-music.mp3` or update the component props

## Supported Audio Formats

- **MP3** (recommended) - Best compatibility across browsers
- **WAV** - High quality but larger file size
- **OGG** - Good compression, good browser support
- **M4A** - Good for Apple devices

## File Requirements

- **File size**: Keep under 10MB for faster loading
- **Duration**: Any length (the music will loop automatically)
- **Quality**: 128-320 kbps MP3 is recommended for good balance of quality and file size

## Customizing the Audio Source

If you want to use a different filename or path, you can modify the component:

```tsx
// In App.tsx, change the audioSrc prop:
<BackgroundMusic audioSrc="/audio/your-music-file.mp3" />
```

## Features

The background music component includes:

- **Play/Pause control** - Floating button in bottom-right corner
- **Volume control** - Hover over the button to see volume slider
- **Mute toggle** - Quick mute/unmute button
- **Auto-loop** - Music automatically restarts when it ends
- **Respectful design** - Subtle, non-intrusive controls
- **Mobile friendly** - Works on all devices

## Browser Compatibility

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support (may require user interaction first)
- **Mobile browsers**: Full support

## Troubleshooting

### Music won't play

- Ensure the audio file exists in `public/audio/`
- Check that the file path in the component matches your file
- Some browsers require user interaction before playing audio

### Volume controls not working

- Make sure you're hovering over the music button to see the controls
- Try refreshing the page if controls seem unresponsive

### Audio quality issues

- Use higher bitrate MP3 files (192-320 kbps)
- Ensure the original audio file is good quality
- Consider file size vs. quality balance

## Example Audio Files

You can use any appropriate background music such as:

- Gentle instrumental music
- Soft classical pieces
- Ambient sounds
- Memorial-appropriate music

## Legal Considerations

- Ensure you have rights to use the music
- Consider using royalty-free music
- Respect copyright laws
- For personal memorial sites, personal music collections are usually fine
