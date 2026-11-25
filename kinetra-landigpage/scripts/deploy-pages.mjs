/* Publica el sitio compilado en la raíz de la rama activa.
   GitHub Pages está configurado como "Deploy from a branch" (raíz), así que
   el index.html generado por Vite debe vivir en la raíz del repositorio. */

import { spawnSync } from 'node:child_process'
import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const repoRoot = resolve(projectDir, '..')
const distDir = join(projectDir, 'dist')

const run = (command, args, cwd, useShell = false) => {
  console.log(`\n> ${command} ${args.join(' ')}`)
  const result = spawnSync(command, args, { cwd, stdio: 'inherit', shell: useShell })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

// 1. Compilar con la base /Kinetra_web/ ya configurada en vite.config.js.
// En Windows pnpm es un .cmd, así que necesita shell.
run('pnpm', ['run', 'build'], projectDir, process.platform === 'win32')

// 2. Limpiar la salida anterior en la raíz para no acumular hashes viejos.
const generated = [
  'index.html',
  '404.html',
  'assets',
  'icon-kinetra.jpeg',
  'icons.svg',
  'sitemap.xml',
]
for (const name of generated) {
  rmSync(join(repoRoot, name), { recursive: true, force: true })
}

// 3. Copiar todo dist/ a la raíz (index.html, assets/, 404.html, etc.).
mkdirSync(distDir, { recursive: true })
for (const name of readdirSync(distDir)) {
  cpSync(join(distDir, name), join(repoRoot, name), { recursive: true })
}

// 4. Evitar que Jekyll manipule los archivos (y que ignore los que empiezan por .).
writeFileSync(join(repoRoot, '.nojekyll'), '')

// 5. Publicar: confirmar los archivos generados y empujar la rama activa.
const published = [...generated, '.nojekyll']
run('git', ['add', '-f', '--', ...published], repoRoot)
run('git', ['commit', '-m', 'deploy: publish built site to GitHub Pages', '--', ...published], repoRoot)
run('git', ['push', 'origin', 'HEAD'], repoRoot)

console.log('\nListo. La web se publica en https://kinetratm.github.io/Kinetra_web/')
