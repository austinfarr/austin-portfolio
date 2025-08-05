# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (with Turbo mode)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture Overview

This is a Next.js 14 portfolio website using the App Router pattern. The codebase follows a component-based architecture with clear separation of concerns.

### Key Architectural Decisions

1. **Next.js App Router**: All pages are in `/app` directory using the new App Router structure
2. **Component Organization**: Reusable components in `/components` with sub-folders for organization
3. **Styling**: TailwindCSS with ShadCN UI components, extensive custom theming in `tailwind.config.js`
4. **State Management**: Uses React hooks and context (ThemeProvider for dark mode)
5. **Data Flow**: 
   - Static project data in `/lib/projectData.js`
   - Sanity CMS integration prepared but not fully implemented
   - Contact form API route at `/app/api/contact/route.js`

### Important Patterns

1. **Path Imports**: Use `@/` alias for imports (e.g., `import { Button } from '@/components/ui/button'`)
2. **Component Structure**: Most components use client-side rendering with `"use client"` directive
3. **Styling Pattern**: Utility-first with Tailwind, custom animations defined in config
4. **Theme System**: CSS variables in `globals.css` for consistent theming across light/dark modes
5. **Form Handling**: React Hook Form with Zod validation for contact form

### Project Structure

- `/app` - Next.js pages and API routes
- `/components` - All React components (sections, UI, navigation)
- `/lib` - Utilities, API clients, and data
- `/hooks` - Custom React hooks
- `/public` - Static assets organized by section
- `/config` - Configuration files (e.g., nodemailer)

### Key Dependencies

- **Next.js 14.2.2** - Core framework
- **React 18** - UI library
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **ShadCN UI** - Component library
- **Sanity/next-sanity** - CMS (integration prepared)
- **React Hook Form + Zod** - Form validation
- **Nodemailer** - Email functionality

### Development Notes

- Main branch is `main`, development happens on `develop`
- No test framework configured - only ESLint for code quality
- Contact form requires email configuration in environment variables
- Sanity CMS client is configured but studio is not set up