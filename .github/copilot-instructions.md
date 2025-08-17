# GitHub Copilot Instructions - Daniel Hilmer Portfolio

## Architecture Overview

This is a German freelance web developer portfolio built with:

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** + **shadcn/ui** components (New York style)
- **Supabase** for database (via custom endpoint: https://super.danielhilmer.de)
- **Nodemailer** for contact form emails
- **Matomo** analytics + GDPR compliance (Usercentrics)

## Project Structure Conventions

### Route Organization

- Standard pages: `src/app/[page]/page.tsx`
- Route groups: `src/app/(angebote)/`, `src/app/(datenschutz)/` for logical grouping without URL nesting
- Protected/special routes: `_werdegang` (underscore prefix)

### Component Architecture

```
src/components/
├── ui/           # shadcn/ui components (button.tsx, form.tsx, etc.)
├── icons/        # Custom SVG icons (CheckIcon.tsx, WhatsappIcon.tsx)
├── Timeline/     # Feature-specific components
└── [Feature].tsx # Top-level feature components
```

### Styling Patterns

- **German-first**: All text, metadata, and form validation in German
- **Custom CSS vars**: Brand colors defined in `globals.css` (primary: `hsl(196 64% 24%)`)
- **Nunito font**: Self-hosted fonts in `src/fonts/`, imported via `fonts.css`
- **Rounded buttons**: All buttons use `rounded-full` (overriding shadcn defaults)

## Development Workflows

### Form Handling Standard

```tsx
// All forms use react-hook-form + zod + shadcn Form components
const formSchema = z.object({
  email: z.string().email({ message: 'Bitte gib eine gültige E-Mail ein.' }),
  // German error messages throughout
});
```

### Database Patterns

- **Supabase client**: Import from `@/server/db/supabase`
- **Environment**: Uses `process.env.SUPABASE_KEY`
- **Drizzle ORM**: Available but Supabase client is primary

### Email Integration

Contact forms use server action pattern:

```tsx
// KontaktForm.tsx -> sendEmail.ts server action
import { sendEmail } from './sendEmail';
```

## Key Dependencies & Usage

- **FontAwesome**: Icons via `@fortawesome/react-fontawesome`
- **Formik + React Hook Form**: Dual form libraries (prefer react-hook-form for new)
- **class-variance-authority**: For component variants (see `button.tsx`)
- **next-themes**: Dark mode support (configured but minimal usage)

## Content & SEO Patterns

### Metadata Standards

```tsx
export const metadata: Metadata = {
  title: 'Daniel Hilmer - Webentwicklung',
  description:
    'Freiberuflicher Webentwickler spezialisiert auf JavaScript-Frameworks...',
  keywords: 'Webentwicklung, JavaScript, React, NodeJS, NextJS...', // German keywords
};
```

### Project Showcase Structure

Projects stored as arrays in components (see `src/app/projekte/dev/page.tsx`):

```tsx
const projectData = [
  {
    icons: [faReact, faNodeJs], // FontAwesome icons
    tooltips: ['NextJS', 'TailwindCSS'], // Tech stack
    heading: 'Project Name',
    description: 'German description...',
    labels: [{ name: 'Abgeschlossen' }], // Status labels
    imageSrc: importedImage,
    link: 'https://...',
  },
];
```

## Critical Environment Setup

1. **SUPABASE_KEY**: Required for database connections
2. **MATOMO**: Conditional analytics loading
3. **Usercentrics CMP**: GDPR compliance script (EU-mode enabled)

## Import Path Standards

Always use `@/` aliases:

- `@/components/` for all components
- `@/lib/utils` for utilities
- `@/images/` for static assets
- `@/server/db/` for database clients

## Localization Notes

- **German-first UX**: All user-facing text in German
- **Form validation**: German error messages via zod
- **Metadata**: German SEO content
- **WhatsApp integration**: German contact flow via `https://wa.me/message/SUK6VOGPWX2HJ1`

When making changes, maintain the established German language patterns and professional freelancer branding throughout the codebase.
