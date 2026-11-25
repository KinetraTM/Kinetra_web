# Kinetra Trinitron 2000

## Enrutamiento

La TV usa `react-router-dom` con `BrowserRouter basename={import.meta.env.BASE_URL}`.
El chasis, el panel lateral, el estado de `POWER` y `VOL` viven en `TVLayout`; solo cambia el contenido del tubo (`<Outlet />`).

Canales: `/` (CH 01), `/servicios`, `/webs`, `/proceso`, `/proyectos`, `/testimonios`, `/faq`, `/contacto` (CH 08). Cualquier otra ruta muestra `CH 404 · SIN SEÑAL`.

Para desplegar en GitHub Pages bajo una subcarpeta:

```bash
VITE_BASE_URL=/<repo>/ pnpm run build
```

`public/404.html` redirige las recargas de subrutas al `index.html`, que restaura la ruta original antes de montar el router.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
