# Sweet Palace — Floristería en línea 💐

Sitio web para explorar arreglos florales y preparar pedidos personalizados para **Sweet Palace**, una floristería colombiana.

🌐 **Ver sitio publicado:** [Sweet Palace](https://sweetpalce.netlify.app/)

## Sobre el proyecto

El objetivo es facilitar la consulta del catálogo y organizar los detalles de los pedidos en un solo lugar. Los clientes pueden explorar los arreglos, elegir cantidades, escribir una dedicatoria y preparar una solicitud que se envía por WhatsApp para confirmar los detalles con la floristería.

> **Alcance actual:** es un catálogo con flujo de pedido asistido. No procesa pagos en línea, no reserva inventario ni almacena pedidos en un servidor. La disponibilidad y el pedido deben confirmarse directamente con la floristería.

## Funcionalidades

- **Catálogo de arreglos:** productos con imágenes, descripciones, precios y presentaciones por tamaño.
- **Detalle de producto:** vista ampliada para consultar cada arreglo.
- **Bolsa de compra:** agregar productos, cambiar cantidades y retirar artículos.
- **Tarjeta de dedicatoria:** escribir un mensaje, elegir un estilo de tipografía y revisar una vista previa.
- **Personalización:** campo para consultar colores, chocolates y otros complementos, sujetos a disponibilidad.
- **Fecha de entrega:** selector de fecha con al menos tres días de anticipación; la floristería debe confirmar la disponibilidad.
- **Preferencia de pago:** permite indicar Nequi, tarjeta débito/crédito, PSE o dejar el método pendiente de confirmar. No procesa datos bancarios.
- **Pedido por WhatsApp:** organiza productos, cantidades, dedicatoria y datos de entrega en un mensaje que el cliente revisa y envía.
- **Catálogo completo y redes sociales:** enlaces para consultar más información del negocio.
- **Diseño adaptable:** interfaz para celular y computador, con animaciones que respetan la preferencia de reducir movimiento.

## Tecnologías

- **React:** interfaz basada en componentes.
- **Vite:** entorno de desarrollo y compilación.
- **JavaScript:** lógica e interacciones.
- **CSS:** estilos, animaciones y diseño adaptable.
- **Lucide React:** iconos.
- **Git y GitHub:** control de versiones y repositorio.
- **Netlify:** despliegue del sitio.

## Ejecutar el proyecto localmente

### Requisitos

- Node.js en una versión compatible con Vite.
- npm.

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/cristiangonzalesdev/web-floristeria.git
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd web-floristeria
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre en el navegador la dirección local que indique Vite, normalmente `http://localhost:5173/`.

### Comandos disponibles

```bash
npm run dev      # Inicia el entorno de desarrollo
npm run build    # Genera la versión de producción en dist/
npm run preview  # Previsualiza la compilación
```

## Estructura principal

```text
public/
└── catalogo/              # Recursos del catálogo
src/
├── components/
│   ├── DedicationCard.jsx # Editor de dedicatoria
│   ├── Header.jsx         # Encabezado y navegación
│   └── ProductCard.jsx    # Tarjetas de producto
├── data/
│   └── catalog.js         # Datos de productos y negocio
├── App.jsx                # Secciones, bolsa y flujo del pedido
├── main.jsx               # Punto de entrada
├── styles.css             # Estilos principales
└── feature-overrides.css  # Ajustes adicionales
```

## Posibles mejoras futuras

- Integrar un backend y una base de datos para administrar productos y pedidos.
- Incorporar una pasarela de pago segura.
- Crear un panel administrativo para actualizar el catálogo, los precios y la disponibilidad.
- Añadir pruebas automatizadas y mejorar el seguimiento del estado de los pedidos.

---

Desarrollado como proyecto web para facilitar la consulta y solicitud de arreglos florales.

