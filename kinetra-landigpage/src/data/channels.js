/* Datos de los ocho canales de la televisión Kinetra.
   Cada canal equivale a una ruta del router y a una posición del CH SELECTOR. */

export const CHANNELS = [
  { id: 0, code: 'CH 01', name: 'INICIO', path: '/', navLabel: null },
  { id: 1, code: 'CH 02', name: 'SERVICIOS', path: '/servicios', navLabel: 'Servicios' },
  { id: 2, code: 'CH 03', name: 'WEBS', path: '/webs', navLabel: 'Webs' },
  { id: 3, code: 'CH 04', name: 'PROCESO', path: '/proceso', navLabel: 'Proceso' },
  { id: 4, code: 'CH 05', name: 'PROYECTOS', path: '/proyectos', navLabel: 'Proyectos' },
  { id: 5, code: 'CH 06', name: 'TESTIMONIOS', path: '/testimonios', navLabel: 'Testimonios' },
  { id: 6, code: 'CH 07', name: 'FAQ', path: '/faq', navLabel: 'FAQ' },
  {
    id: 7,
    code: 'CH 08',
    name: 'SINTONIZAR PROYECTO',
    path: '/contacto',
    navLabel: null,
  },
]

export const NAV_CHANNELS = CHANNELS.filter((channel) => channel.navLabel)

export const COLOR_MODES = [
  { id: 0, name: 'TRINITRON ESTÁNDAR', short: 'TRINITRON' },
  { id: 1, name: 'NEON OVERDRIVE', short: 'NEON' },
  { id: 2, name: 'WARM 80S SUNSET', short: 'WARM 80s' },
]

/* El pathname de useLocation ya viene sin basename. */
export function getChannelIndex(pathname = '/') {
  const clean = pathname.replace(/\/+$/, '') || '/'
  const exact = CHANNELS.findIndex((channel) => channel.path === clean)
  if (exact !== -1) return exact
  if (clean.startsWith('/webs/')) return 2
  return -1
}

export const services = [
  {
    index: '01',
    title: 'Desarrollo Web a Medida',
    text: 'Plataformas robustas, accesibles y pensadas para crecer con tu negocio.',
    tag: '--a-medida',
  },
  {
    index: '02',
    title: 'Landing Pages de Alto Impacto',
    text: 'Velocidad, claridad y conversión desde la primera pantalla.',
    tag: '--conversion',
  },
  {
    index: '03',
    title: 'Aplicaciones React/Web',
    text: 'Interfaces interactivas y mantenibles con componentes reutilizables.',
    tag: '--react',
  },
]

export const projects = [
  {
    id: 'nebula',
    title: 'Nebula Cloud',
    category: 'PLATAFORMA SAAS',
    metric: '+38% conversión',
    description: 'Rediseño de producto y landing con un recorrido de conversión más corto.',
    signal: 'EMISIÓN 01',
  },
  {
    id: 'norte',
    title: 'Estudio Norte',
    category: 'WEB EDITORIAL',
    metric: '2.4x tiempo en página',
    description: 'Sitio editorial para un estudio creativo con ritmo de lectura pausado.',
    signal: 'EMISIÓN 02',
  },
  {
    id: 'ops',
    title: 'Panel de Operaciones',
    category: 'DASHBOARD INTERNO',
    metric: '-27% tiempo de reporte',
    description: 'Consola de métricas y procesos para el equipo de operaciones.',
    signal: 'EMISIÓN 03',
  },
]

export const processSteps = [
  { num: '01', title: 'Diagnóstico', text: 'Entendemos tu negocio, objetivos y requisitos para definir la solución ideal.' },
  { num: '02', title: 'Diseño', text: 'Wireframes y prototipos que validamos contigo antes de escribir una línea de código.' },
  { num: '03', title: 'Desarrollo', text: 'Entregas semanales, componentes reutilizables y seguimiento continuo.' },
  { num: '04', title: 'Pruebas y lanzamiento', text: 'QA interno, validación con usuarios y despliegue optimizado.' },
  { num: '05', title: 'Soporte', text: 'Mantenimiento asistido, mejoras y evolución después del lanzamiento.' },
]

export const testimonials = [
  { name: 'Marta R.', role: 'CEO · Nebula Cloud', text: 'Entendieron el producto en una reunión y nos entregaron una web que convierte mejor.' },
  { name: 'Javier L.', role: 'Fundador · Estudio Norte', text: 'El proceso fue claro desde el primer día. Sin sorpresas y con entregas reales.' },
  { name: 'Andrea P.', role: 'Operations Lead', text: 'El panel interno nos ahorra horas cada semana. La señal, siempre estable.' },
  { name: 'Carlos M.', role: 'Producto digital', text: 'Nos acompañaron después del lanzamiento. Eso marca la diferencia.' },
]

export const faqs = [
  {
    q: '¿Cuánto tarda un proyecto con Kinetra?',
    a: 'De 4 semanas (landing) a 8-12 semanas (aplicaciones completas). Las fechas se estiman desde el diagnóstico.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'No. Nosotros nos encargamos de diseño, desarrollo, pruebas y entrega; tú solo validas los resultados.',
  },
  {
    q: '¿Qué incluye el soporte técnico?',
    a: 'Actualizaciones, corrección de incidencias y optimizaciones de rendimiento mediante tickets por email.',
  },
  {
    q: '¿Y si aún no tengo clara la idea?',
    a: 'El diagnóstico es el primer paso del proceso: definimos juntos el alcance antes de empezar a construir.',
  },
  {
    q: '¿Puedo pagar por etapas?',
    a: 'Sí. El contrato se estructura en hitos con pagos aprobados en cada entrega.',
  },
  {
    q: '¿Dónde puedo ver ejemplos de trabajo?',
    a: 'En CH 05 · Proyectos y en CH 03 · Webs, con propuestas navegables de sitios completos.',
  },
]
