# Thomas Wong Memorial Site

A beautiful memorial website honoring the life of Thomas Wong 王顥銘 (2001-2025), a passionate Formula 1 racing enthusiast.

## Features

- **Respectful Design**: Elegant memorial layout with subtle Formula 1 racing elements
- **Interactive Photo Gallery**: Accordion-style carousel with full-width display
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Timeline**: Chronological journey through Thomas's racing passion
- **Memories & Tributes**: Space for family and friends to share memories
- **Tailwind CSS**: Modern, maintainable styling

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages.

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### Automatic Deployment

The project uses GitHub Actions for automatic deployment. Every push to the `main` branch will trigger a build and deployment to GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About Thomas
│   ├── Timeline.tsx      # Racing timeline
│   ├── PhotoGallery.tsx  # Interactive photo gallery
│   ├── Memories.tsx      # Tributes and memories
│   ├── Family.tsx        # Family section
│   └── Contact.tsx       # Contact information
├── App.tsx               # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## Customization

### Adding Photos

1. Place your images in the `public/images/` directory
2. Update the photo paths in `src/components/PhotoGallery.tsx`
3. Replace placeholder content with real photos and descriptions

### Updating Content

- Edit component files to update text content
- Modify the timeline events in `Timeline.tsx`
- Update contact information in `Contact.tsx`

### Styling

The project uses Tailwind CSS for styling. Custom colors and fonts are defined in `tailwind.config.js`.

## Live Site

Visit the memorial site at: [https://edwardwong.github.io/thomas-memorial-site](https://edwardwong.github.io/thomas-memorial-site)

## License

This project is private and created for memorial purposes.
