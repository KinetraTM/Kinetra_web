/* Catálogo de posibles webs — ejemplos navegables del portafolio. */

export const websites = [
  {
    slug: 'nebula-cloud',
    name: 'Nebula Cloud',
    kind: 'Landing de producto',
    summary: 'Una landing directa, con una sola acción principal y prueba social visible.',
    description:
      'Propuesta de sitio para una plataforma de infraestructura: mensaje central, beneficios medibles y un recorrido de conversión sin distracciones.',
    stack: ['React', 'CSS Grid', 'Vite'],
    variant: 'producto',
    preview: {
      brand: 'NEBULA_CLOUD',
      headline: 'Infraestructura que escala contigo',
      subline: 'Despliega, observa y crece sin frictiones técnicas.',
      cta: 'Comenzar despliegue',
      meta: 'v1.0.0 · /producto',
    },
    highlights: ['Jerarquía de un solo CTA', 'Bloques de beneficios', 'Prueba social integrada'],
  },
  {
    slug: 'estudio-norte',
    name: 'Estudio Norte',
    kind: 'Web editorial',
    summary: 'Una web de estudio creativo con ritmo editorial y lectura pausada.',
    description:
      'Propuesta editorial para un estudio de diseño: índice numérico, tipografía protagonista y secciones de proyecto con espacio en blanco.',
    stack: ['HTML semántico', 'CSS', 'Sin librerías'],
    variant: 'editorial',
    preview: {
      brand: 'ESTUDIO_NORTE',
      headline: 'Diseño con intención',
      subline: 'Identidad, producto y dirección de arte para marcas que piensan a largo plazo.',
      cta: 'Ver manifiesto',
      meta: 'issue_01 / 2026',
    },
    highlights: ['Índice navegable', 'Ritmo editorial', 'Secciones de proyecto'],
  },
  {
    slug: 'panel-operaciones',
    name: 'Panel de operaciones',
    kind: 'Dashboard interno',
    summary: 'Una consola de métricas para operaciones diarias con lectura instantánea.',
    description:
      'Propuesta de panel interno: indicadores clave, estado de procesos y accesos rápidos en una sola pantalla.',
    stack: ['React', 'CSS Custom Properties', 'Componentes UI'],
    variant: 'dashboard',
    preview: {
      brand: 'OPS_CONSOLE',
      headline: 'Resumen de operación',
      subline: 'Estado del sistema, entregas y actividad reciente.',
      cta: 'Abrir informe',
      meta: 'live · datos de ejemplo',
    },
    highlights: ['Indicadores clave', 'Estado de procesos', 'Accesos rápidos'],
  },
]

export const getWebsite = (slug) => websites.find((site) => site.slug === slug)
