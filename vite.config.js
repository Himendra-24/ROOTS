import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Automatically detect GitHub repository name in GitHub Actions, or fallback to /ROOTS/
const repoName = process.env.GITHUB_REPOSITORY 
  ? // 
  : '/ROOTS/';

export default defineConfig({
  plugins: [react()],
  base: repoName,
});
