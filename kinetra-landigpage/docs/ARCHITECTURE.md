# Kinetra — Arquitectura de la Aplicación

Documentación de la estructura de carpetas, responsabilidades y flujo de la landing page (Vite + React 19, sin librerías externas).

---

## 1. Estructura de carpetas

```
kinetra-landigpage/
├── index.html                 # Entrada: meta tags, title/descripción (SEO), #root, script main
├── vite.config.js             # Config del build (Vite 8 + plugin-react)
├── package.json               # scripts: dev / build / lint / preview
├── pnpm-lock.yaml             # Lockfile
├── README.md                  # Readme del proyecto
├── ARCHITECTURE.md            # Este documento
├── public/
│   ├── icons.svg              # Símbolos SVG del sitio (github, x, linkedin, TV, misc)
│   └── icon-kinetra.jpeg      # Logo raster
├── src/
│   ├── main.jsx               # Bootstrap: createRoot + wrappers (Consent, Theme)
│   ├── index.css              # Entry: @import de Style/index.css
│   ├── App.jsx                # Router (pathname, popstate; Home | Terms | Privacy)
│   ├── Page/
│   │   ├── index.jsx          # Export default → LandingPage
│   │   ├── LandingPage.jsx    # Compone todo: Navbar + secciones + Footer + TVs
│   │   ├── TermsPage.jsx      # Términos y condiciones (plantilla)
│   │   ├── PrivacyPage.jsx    # Política de privacidad (plantilla)
│   │   ├── PortfolioPage.jsx  # Landing alternativa (TV estilo, cosas futuras)
│   │   └── WebPreviewPage.jsx # Mockup de web en CI
│   ├── Components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # Nav principal (comic/remote/common)
│   │   │   ├── PortfolioNav.jsx # Nav de portfolio (TV estilo?)
│   │   │   ├── Footer.jsx     # Footer (comic)
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx        # Hero principal (C/DD)
│   │   │   ├── ServicesSection.jsx    # Servicios (iconos + C secundario)
│   │   │   ├── BenefitsSection.jsx    # Beneficios (bento)
│   │   │   ├── ProcessSection.jsx     # Proceso (timeline)
│   │   │   ├── ProjectsSection.jsx    # Proyectos/portafolio (placeholder)
│   │   │   ├── TestimonialsSection.jsx# Testimonios (placeholder)
│   │   │   ├── FAQSection.jsx         # FAQ (acordeón, a11y)
│   │   │   └── ContactSection.jsx     # Formulario (useForm + Skeleton)
│   │   ├── tv/                # Estilo Televisión (TV estilo Landing alternativa)
│   │   │   ├── TVChassis.jsx, CRTScreen.jsx, OSDOverlay.jsx
│   │   │   ├── ControlPanel.jsx, RotaryKnob.jsx, StaticBurst.jsx
│   │   │   └── channels/ (Home, Services, Projects, Contact)
│   │   └── ui/                # Componentes base (reutilizables)
│   │       ├── Button.jsx, Card.jsx, Container.jsx, Section.jsx
│   │       ├── Heading.jsx, Badge.jsx, Icon.jsx, Skeleton.jsx
│   │       ├── Input.jsx, Textarea.jsx, Select.jsx, Label.jsx, Form.jsx
│   │       ├── SiteMockup.jsx, CommandBar.jsx
│   ├── Hook/
│   │   ├── index.js           # Export de barrel
│   │   ├── useInView.js       # IntersectionObserver (fade up/down)
│   │   ├── useActiveSection.js# highlight activo navbar
│   │   ├── useScrollProgress.js# barra de progreso scroll
│   │   └── useForm.js         # validación + estados form (required/email/phone/minLength)
│   ├── Context/
│   │   ├── ThemeContext.jsx   # Tema (dark/light, localStorage, system)
│   │   └── ConsentContext.jsx # Consentimiento de privacidad (estado UI)
│   ├── Style/
│   │   ├── index.css          # Entry: importa tokens → reset → animaciones → tipografía → grid
│   │   ├── layout/
│   │   │   ├── components.css   # Estilos de todos los componentes + secciones + estilos comic + TV
│   │   │   ├── typography.css   # Escalas de texto (display/body/label), radio descomprimido
│   │   │   ├── grid.css         # Grids responsive (services 1/2/4, projects, footer 4cols, ...)
│   │   │   ├── cli-theme.css    # Tema CLI/terminal (apariencia de terminal)
│   │   │   ├── command-bar.css  # Estilos barra de comandos (site command bar)
│   │   │   └── portfolio.css    # Estilos portafolio
│   │   └── utils/
│   │       ├── tokens.css       # Tokens: colores comic + dark, espaciado 4px, breakpoints, duraciones
│   │       ├── reset.css        # Reset universal + defaults responsive
│   │       └── animations.css   # keyframes (fadeIn*, slideInRight, glowPulse), scroll progress bar
│   ├── styles/
│   │   └── index.css          # Estilos de app legacy/nuevas (variables actuales, clases app)
│   ├── sections/
│   │   └── Hero.jsx           # Hero component (apariencia actualizada)
│   ├── data/
│   │   ├── channels.js        # Datos de canales (TV estilo)
│   │   ├── content.js         # Contenido centralizado (metadatos, textos de hero...)
│   │   └── portfolio.js       # Datos de portafolio
│   ├── utils/
│   │   └── links.js           # Link utilities (anchors, mailto, socials)
│   ├── hooks/
│   │   └── useSynthAudio.js   # Hook de audio sintético (VHS hum entre secciones)
│   └── assets/                # (hero.png, react.svg, vite.svg — creados con Vite Scaffolding)
└── skills-lock.json           # Lock de skills de agente (OpenCode)
```

---

## 2. Flujo de datos y componentes clave

### App → Page
```
main.jsx → App.jsx (router: pathname) → Page/index → Page/LandingPage (Home)
                                                → Page/TermsPage (ruta /terminos)
                                                → Page/PrivacyPage (ruta /privacidad)
                                                → Page/PortfolioPage, WebPreviewPage
```

### LandingPage composition (Sections en orden)
```
Navbar (layout)
HeroSection
ServicesSection
BenefitsSection
ProcessSection
ProjectsSection
TestimonialsSection
FAQSection
ContactSection
Footer (layout)
```

Hooks usados en LandingPage: `useScrollProgress()`, `useActiveSection([hero, servicios, beneficios, proceso, proyectos, testimonios, faq, contacto])`.

### ContactSection → useForm
```
useForm({ initialFields: {name, email, phone, consultType, message}, onSubmit })
validate → setErrors → submit → Button (disabled={!isValid})
```

### Style Import Flow (Style/index.css)
```
tokens.css → reset.css → animations.css → typography.css → grid.css
```
(Style/layout/components.css, cli-theme.css, portfolio.css y tv/ importados por su comprensión desde cada component que los necesita)

---

## 3. Paleta y estilo

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#FFD700` (amarillo comic) | CTA, acentos, muestra |
| `--color-blue*` | `#5BCEFA`, `#0077FF` | Azul electrico |
| `--color-green*` | `#C3FF36`, `#99D800` | Verde lima |
| `--color-cyan*` | `#00FFE0`, `#00C3C3` | Cian brillante |
| `--color-pink*` | `#FF5A7B`, `#FFB3C5` | Rosa comic (accesorios, hover, TV) |
| `--color-text` | `#1C1C1C` | Texto negraso |
| `--color-text-muted` | `#4F4F4F` | Texto muted |
| `--color-border` | `#1C1C1C` | Contornos |
| `--shadow-sm/md/lg` | offset+blur (comic) | Efectos de pop |

Tema: `data-theme="dark"` (opcional, definido en `tokens.css`), `ThemeContext.tsx`.

---

## 4. Accesibilidad (saliente en Components/ui y secciones)

- HTML semántico (`main`, `nav`, `section`, `article`, `button`, `a`).
- ARIA: `aria-label`, `aria-labelledby`, `role` enación buscar f Altos textos.
- FAQ: acordeón con `<details>` + ARIA.
- Formularios: `Label[for]`, `placeholder`, errores con `role="alert"`.
- Foco visible (`:focus-visible`), contraste correcto en comic palette.
- `prefers-reduced-motion` respetado (`.animate-in` cambio o).

---

## 5. SEO

- `index.html`: title, description, og:*, twitter:card, sitemap link.
- `public/sitemap.xml`: urls `/`, `/terminos`, `/privacidad`.

---

## 6. Convenciones

- Componentes: 1 export por archivo en `Components/ui/*` o `Components/sections/*` o `Components/layout/*`.
- CSS: variables globales en `Style/utils/tokens.css`, nodifica CSS en `Style/layout/*.css`.
- Textos hardcodeados en `Components/**` solo en Fase 4-5 (luego se migran a `src/data/content.js`).
- Router: sin librerías externas (pathname + popstate).

---

## 7. Roadmap completado

- Fase 0: setup ✓
- Fase 1: UI base ✓
- Fase 2: Layout (Navbar, Footer) ✓
- Fase 3: Secciones (Hero, Services, Benefits, Process, Projects, Testimonials, FAQ, Contact) ✓
- Fase 4: Copy & Localization ✓ (en progreso — escribiendo textos finales)
- Fase 5: Context & Hooks ✓
- Fase 6: Routing & Pages ✓
- Fase 7: Polish ✓
- Fase 8: SEO ✓
- Style Cómico + Style Televisión: aplicados (2026-11-24).

---

## 8. Notas de contexto para alia que tome la batuta

- El proyecto empezó como template de Vite + React (Index.html default) — se sobrescribió por completo (App.jsx, main.jsx, index.css).
- La paleta cómica (amarillo, cyan, verde lima, rosa) ya está integrada; los estilos comic e TV fueron aplicados a nav/footer/hero/cards.
- `animejs` está como dependencia adicional usada en componentes de estilo TV (ciclos de scramble, OSD overlays).
- Archivos `data/content.js`, `Page/PortfolioPage.jsx`, `Components/tv/*` referencian contenido semilla "placeholder" para Fase 4.
- consultar README.md para instrucciones de ejecución (`pnpm dev`, `pnpm build`, `pnpm lint`).
