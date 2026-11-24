import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages sirve el repo en https://kinetratm.github.io/Kinetra_web/
// (si se usa un dominio personalizado en la raíz, cambiar a base: '/').
const base = '/Kinetra_web/'

/* GitHub Pages no tiene rewrites: las rutas profundas (/webs/slug) devuelven 404.
   Este plugin genera un 404.html que conserva la ruta y vuelve al index,
   donde main.jsx la restaura con history.replaceState. */
const pagesFallback = () => {
  let outDir = 'dist'

  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      writeFileSync(
        resolve(outDir, '404.html'),
        `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kinetra — redirigiendo…</title>
    <script>
      sessionStorage.setItem('gh-pages-redirect', location.pathname + location.search + location.hash)
      location.replace('${base}')
    </script>
  </head>
  <body>Redirigiendo…</body>
</html>
`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pagesFallback()],
  base,
})
