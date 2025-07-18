# Jenel's Portfolio

## Project Initialization

This project was bootstrapped using the Next.js CLI:

```bash
npx create-next-app@latest jenel-portfolio
```

During setup, the following options were selected:

- **TypeScript:** Yes
- **ESLint:** Yes
- **Tailwind CSS:** Yes
- **`src/` directory:** Yes
- **App Router (`app/` directory):** Yes
- **Custom import alias:** No

These settings provide a modern, type-safe, and scalable foundation for the portfolio.

This is a personal portfolio web application built with [Next.js](https://nextjs.org/) and [React](https://react.dev/). It showcases projects, skills, and information about Jenel. The project uses TypeScript, Tailwind CSS for styling, and is optimized for both light and dark themes.

## Features

- Modern, responsive design
- Built with Next.js App Router
- TypeScript support
- Tailwind CSS for rapid UI development
- Custom fonts (Geist)
- Dark mode support
- Easy deployment to Vercel

## Getting Started

To run the project locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Project Structure

```
jenel-portfolio/
├── public/                  # Static assets (SVGs, images, favicon)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/                 # Main Next.js app directory
│       ├── favicon.ico
│       ├── globals.css      # Global styles (Tailwind, custom CSS)
│       ├── layout.tsx       # Root layout component
│       ├── page.tsx         # Home page
│       ├── about/
│       │   └── page.tsx     # About page
│       ├── achievements/
│       │   └── page.tsx     # Achievements page
│       ├── nav/
│       │   └── [[...slug]]/
│       │       └── page.tsx # Dynamic catch-all route for navigation
│       └── projects/
│           ├── page.tsx     # Projects list page
│           └── [project_id]/
│               ├── page.tsx # Individual project page
│               └── sample/
│                   ├── page.tsx # Project sample list page
│                   └── [sample_id]/
│                       └── page.tsx # Individual sample page
├── package.json             # Project metadata and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
└── README.md                # Project documentation
```

## Next.js File-based Routing Details

Next.js App Router uses the filesystem to define routes. Here are the main types of routing you can use:

- **Static Routes:**
  - `src/app/about/page.tsx` → `/about`
  - `src/app/projects/page.tsx` → `/projects`

- **Dynamic Routes:**
  - Use square brackets for dynamic segments.
  - Example: `src/app/projects/[project_id]/page.tsx` → `/projects/123`, `/projects/abc`

- **Catch-all Routes:**
  - Use `[...param]` for required catch-all segments.
  - Example: `src/app/docs/[...slug]/page.tsx` → `/docs/a`, `/docs/a/b/c`

- **Optional Catch-all Routes:**
  - Use `[[...param]]` for optional catch-all segments.
  - Example: `src/app/nav/[[...slug]]/page.tsx` → `/nav`, `/nav/a`, `/nav/a/b`

- **Layout and Nested Routing:**
  - `layout.tsx` files define layouts for all routes inside their directory.
  - You can nest layouts and pages for complex UI structures.

**Note:** All route files must be named `page.tsx` (not `app.tsx`) to be recognized as a route by Next.js App Router.

For more, see the [Next.js Routing documentation](https://nextjs.org/docs/app/building-your-application/routing).

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

## Customization

You can update the content in `src/app/page.tsx` to personalize your portfolio. Static assets (like SVGs) can be placed in the `public/` folder.

### Dynamic Navigation Route

The navigation bar uses a dynamic catch-all route at `src/app/nav/[[...slug]]/page.tsx`. This allows for flexible nested navigation URLs. **Note:** The file must be named `page.tsx` (not `app.tsx`) for Next.js App Router to recognize it as a route. If you encounter issues, ensure the filename and directory structure match this convention.

## License

This project is open source and available under the [MIT License](LICENSE) (add a LICENSE file if needed).