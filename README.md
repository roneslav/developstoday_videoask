# Vehicle Information Finder

This project is a vehicle information search application that allows users to
select a vehicle make and model year, and then view the available vehicle models
for that make and year. The application uses data from the National Highway
Traffic Safety Administration (NHTSA) API to fetch vehicle makes and models.

## Features

- Select vehicle make from a dropdown.
- Select model year from a dropdown.
- View vehicle models for the selected make and year.
- Display vehicle information including the make name and model name.
- Responsive design built with Tailwind CSS.
- Easy-to-use interface powered by Next.js and React.

## Architecture

This application is built using:

- **Next.js** (for the front-end and server-side rendering)
- **React** (for the UI components)
- **Axios** (for making HTTP requests to the NHTSA API)
- **Tailwind CSS** (for styling)
- **ESLint** and **Prettier** (for code quality and consistency)

The app is structured into the following key components:

- **HomePage**: This is the landing page where users can select a vehicle make
  and year.
- **ResultPage**: Displays the vehicle models for the selected make and year.
- **API Integration**: API requests are handled by Axios in `vehicleApi.js` to
  fetch makes, years, and models.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Create a .env.local file in the root directory and add the following environment
variable: NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov

To run the application locally: npm run dev

To build the application for production: npm run build

To start the production server: npm start

The project uses ESLint and Prettier for code quality and consistency. You can
run the linting script with: npm run lint

Directory Structure Here is an overview of the project's folder structure:

/my-nextjs-app
├── /public                # Static files like images and fonts
├── /src
│   ├── /app              # Next.js app directory
│   │   ├── /homePage     # Home page component
│   │   ├── /resultPage   # Result page component
│   │   ├── /api          # API integration (Axios calls)
│   │   ├── /service      # API generateStaticParams (generated static paths for the result page)
│   │   ├── /loader       # Component Loader for waiting response from server
│   ├── /styles           # Global CSS and Tailwind config
├── .env.local            # Environment variables
├── .eslintrc.config.mjs   # ESLint configuration
├── .prettierrc.json       # Prettier configuration
├── next.config.mjs         # Next.js configuration
├── tailwind.config.mjs     # TailwindCSS configuration
├── package.json           # Project dependencies and scripts
└── README.md             # Project documentation
 # Project documentation

Open [http://localhost:3000](http:/localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.js`. The page auto-updates
as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel. /
