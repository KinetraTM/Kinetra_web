/* Datos de los cuatro canales de la televisión Kinetra. */

export const CHANNELS = [
  { id: 0, code: 'CH 01', name: 'INICIO' },
  { id: 1, code: 'CH 02', name: 'SERVICIOS' },
  { id: 2, code: 'CH 03', name: 'PROYECTOS' },
  { id: 3, code: 'CH 04', name: 'CONTACTO' },
]

export const COLOR_MODES = [
  { id: 0, name: 'TRINITRON ESTÁNDAR', short: 'TRINITRON' },
  { id: 1, name: 'NEON OVERDRIVE', short: 'NEON' },
  { id: 2, name: 'WARM 80S SUNSET', short: 'WARM 80s' },
]

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
