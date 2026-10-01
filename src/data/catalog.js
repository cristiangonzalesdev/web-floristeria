export const business = {
  name: 'Sweet Palace',
  phone: '573015812482',
  instagram: 'https://www.instagram.com/sweetpalace_sp?stkn=YmIwOHRrNjFjc3Nu',
  tiktok: 'https://www.tiktok.com/@sweetpalacesp?_r=1&_t=ZS-9ABXmcXIEIj',
  tiktokVideoId: '7576432357956144402',
};

export const products = [
  {
    id: 'sunshine', name: 'Ramo de girasoles', category: 'Ramos', price: 30000,
    image: '/catalogo/girasoles.jpg', tag: 'Favorito',
    description: 'Un detalle lleno de luz para alegrar cualquier día.',
    details: '3 girasoles, 3 rosas, 3 claveles, follaje mixto y empaque en espiral.',
    flowers: [{ name: 'Girasol', quantity: 3, color: '#f4aa35' }],
  },
  {
    id: 'rocher-sunflowers', name: 'Girasoles con chocolates', category: 'Ramos', price: 60000,
    image: '/catalogo/bouquet.jpg', tag: 'Hecho con cariño',
    description: 'Girasoles, follaje y un detalle dulce para acompañar.',
    details: '3 girasoles, 5 chocolates Rocher y tarjeta.',
    flowers: [{ name: 'Girasol', quantity: 3, color: '#f4aa35' }],
  },
  {
    id: 'sunflower-roses', name: 'Girasol y rosas', category: 'Ramos', price: 35000,
    image: '/catalogo/rosas-mixtas.jpg', tag: 'Para sorprender',
    description: 'La energía del girasol y el encanto de las rosas.',
    details: '1 girasol, 6 rosas, margaritas, follaje mixto y empaque en espiral.',
    flowers: [{ name: 'Girasol', quantity: 1, color: '#f4aa35' }, { name: 'Rosa', quantity: 6, color: '#dc7791' }],
  },
  {
    id: 'tulip-bouquet', name: 'Bouquet de tulipanes', category: 'Tulipanes', price: 98000,
    image: '/catalogo/tulipanes.jpg', tag: 'Elegante',
    description: 'Una forma delicada de hacer inolvidable el momento.',
    details: 'Envoltura, follaje, dedicatoria, listón y preservantes incluidos.',
    variants: [
      { id: '6', label: '6 tulipanes', price: 98000, note: 'El PDF también lista $100.000 para seis; confirma el valor vigente.', flowers: [{ name: 'Tulipán', quantity: 6 }] },
      { id: '7', label: '7 tulipanes', price: 115000, flowers: [{ name: 'Tulipán', quantity: 7 }] },
      { id: '8', label: '8 tulipanes', price: 128000, flowers: [{ name: 'Tulipán', quantity: 8 }] },
      { id: '10', label: '10 tulipanes', price: 158000, flowers: [{ name: 'Tulipán', quantity: 10 }] },
      { id: '12', label: '12 tulipanes', price: 185000, flowers: [{ name: 'Tulipán', quantity: 12 }] },
    ],
  },
  {
    id: 'korean-roses', name: 'Rosas coreanas', category: 'Rosas', price: 42000,
    image: '/catalogo/rosas-coreanas.jpg', tag: 'Delicadas',
    description: 'Rosas y follaje en una composición de estilo coreano.',
    details: 'Follaje, envoltura estilo coreano, dedicatoria, listón y preservantes.',
    variants: [
      { id: '6', label: '6 rosas', price: 42000, flowers: [{ name: 'Rosa', quantity: 6 }] },
      { id: '10', label: '10 rosas', price: 49000, flowers: [{ name: 'Rosa', quantity: 10 }] },
      { id: '15', label: '15 rosas', price: 69000, flowers: [{ name: 'Rosa', quantity: 15 }] },
      { id: '20', label: '20 rosas', price: 89000, flowers: [{ name: 'Rosa', quantity: 20 }] },
    ],
  },
  {
    id: 'classic-roses', name: 'Ramo de rosas clásicas', category: 'Rosas', price: 32000,
    image: '/catalogo/rosas-clasicas.jpg', tag: 'Un clásico',
    description: 'Rosas y follaje en un arreglo que siempre encuentra las palabras.',
    details: 'Envoltura en espiral, follaje, dedicatoria, listón y preservantes.',
    variants: [
      { id: '6', label: '6 rosas', price: 32000, flowers: [{ name: 'Rosa', quantity: 6 }] },
      { id: '10', label: '10 rosas', price: 42000, flowers: [{ name: 'Rosa', quantity: 10 }] },
      { id: '15', label: '15 rosas', price: 62000, flowers: [{ name: 'Rosa', quantity: 15 }] },
      { id: '20', label: '20 rosas', price: 79000, flowers: [{ name: 'Rosa', quantity: 20 }] },
      { id: '30', label: '30 rosas', price: 120000, flowers: [{ name: 'Rosa', quantity: 30 }] },
      { id: '50', label: '50 rosas', price: 189000, flowers: [{ name: 'Rosa', quantity: 50 }] },
    ],
  },
  {
    id: 'sixty-roses', name: 'Semi ramo buchón', category: 'Rosas', price: 260000,
    image: '/catalogo/semi-ramo.jpg', tag: 'Gran detalle',
    description: 'Una composición generosa para celebrar en grande.',
    details: '60 rosas mixtas, 12 lirios, follaje, empaque, tarjeta y listón.',
    flowers: [{ name: 'Rosa', quantity: 60, color: '#d97082' }, { name: 'Lirio', quantity: 12, color: '#f3e9df' }],
  },
];

export const builderFlowers = [
  { name: 'Rosa', color: '#d45c74', price: null, note: 'Precio por tallo por confirmar' },
  { name: 'Girasol', color: '#e9a52e', price: null, note: 'Precio por tallo por confirmar' },
  { name: 'Tulipán', color: '#c888a0', price: null, note: 'Precio por tallo por confirmar' },
  { name: 'Lirio', color: '#eee4cf', price: null, note: 'Precio por tallo por confirmar' },
  { name: 'Clavel', color: '#de9aad', price: null, note: 'Precio por tallo por confirmar' },
  { name: 'Margarita', color: '#f0d26d', price: null, note: 'Precio por tallo por confirmar' },
];

export const addOns = [
  { name: 'Envoltura', price: null, note: 'Incluida en varios arreglos; confirmar estilo' },
  { name: 'Tarjeta personalizada', price: 0, note: 'Una tarjeta sin costo por arreglo' },
  { name: 'Chocolates', price: null, note: 'Opciones y disponibilidad por confirmar' },
];

export const formatMoney = (value) => new Intl.NumberFormat('es-CO', {
  style: 'currency', currency: 'COP', maximumFractionDigits: 0,
}).format(value);
