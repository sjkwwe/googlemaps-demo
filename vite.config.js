import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  envDir: '../'
})