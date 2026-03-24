# Vite + React + TypeScript Starter

This project is a modern frontend starter template built with React, TypeScript, Vite, and Tailwind CSS.

## 🛠 Tech Stack & Versions

This project uses the following core technologies and versions:

- **Core Framework**: React `^18.3.1`
- **Language**: TypeScript `^5.5.3`
- **Build Tool**: Vite `5.4.2`
- **Styling**: Tailwind CSS `^3.4.1`
- **Routing**: React Router DOM `^6.22.0`
- **Icons**: Lucide React `^0.344.0`

### Build & Linting
- **PostCSS**: `^8.4.35`
- **Autoprefixer**: `^10.4.18`
- **ESLint**: `^9.9.1`

## 🚀 How to Recreate This Project

Follow these steps to create a new project with this exact configuration, specifically focusing on the Tailwind CSS setup.

### 1. Initialize Project
Create a new Vite project with React and TypeScript:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```

### 2. Install Dependencies
Install the core dependencies and dev dependencies:

```bash
# Install main dependencies
npm install react-router-dom lucide-react

# Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss@3 postcss autoprefixer
```

### 3. Configure Tailwind CSS

**Step A: Initialize Configuration**
Generate the `tailwind.config.js` and `postcss.config.js` files:

```bash
npx tailwindcss init -p
```

**Step B: Update `tailwind.config.js`**
Replace the content of `tailwind.config.js` with the following to ensure it scans your files correctly:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Step C: Update `postcss.config.js`**
Ensure `postcss.config.js` looks like this:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 4. Add Tailwind Directives to CSS
Open `src/index.css` and replace its content with the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Configure Vite (Optional but Recommended)
Update `vite.config.ts` to optimize dependencies (like excluding lucide-react from optimization if needed):

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### 6. Run the Project

```bash
npm run dev
```

## 📜 Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint
