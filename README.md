# Sweet Palace · Floristería en línea

Sitio web de catálogo y pedidos para **Sweet Palace**, una floristería colombiana. La experiencia permite descubrir arreglos florales, consultar el catálogo completo, redactar una tarjeta para acompañar el ramo y preparar una solicitud de pedido para confirmar por WhatsApp.

> Esta versión es una vitrina web con flujo de pedido asistido. No procesa pagos, no reserva inventario y no guarda pedidos en un servidor.

## Descripción y problema que resuelve

Los clientes suelen necesitar ver opciones, comparar presentaciones y precios, y explicar detalles especiales antes de encargar flores. Esta página reúne esa información en un solo sitio adaptable a celular y computador. También organiza los datos del pedido —arreglo, dedicatoria, entrega y método de pago preferido— para que el cliente los envíe a Sweet Palace en un mensaje de WhatsApp y confirme los detalles con la floristería.

## Funciones disponibles

- **Diseño pensado para celular:** tarjetas amplias, navegación táctil y filtros horizontales por tamaño; también se adapta a pantallas grandes.
- **Animaciones al desplazarse:** las secciones y los productos aparecen suavemente al hacer scroll; se respeta la preferencia del sistema por reducir movimiento.
- **Catálogo por tamaños:** opciones XS, S, M, L y XL, con presentaciones, precios, descripciones y fotos de referencia.
- **Vista ampliada:** cada producto puede abrirse en un detalle con imagen grande, descripción, precio y presentaciones.
- **Catálogo completo en línea:** enlace directo al catálogo vigente de Sweet Palace: <https://catalogosweetpalace.netlify.app/>.
- **Bolsa de compra:** agregar arreglos, cambiar cantidades y retirar productos antes de continuar.
- **Tarjeta dedicatoria:** escribir un mensaje, elegir entre tres estilos de tipografía y consultar una vista previa. El mensaje se incluye en el resumen del pedido.
- **Solicitud de cambios o extras:** campo opcional para consultar colores, chocolates u otros complementos; la solicitud se envía junto con el pedido y queda sujeta a disponibilidad.
- **Fecha solicitada de entrega:** selector de fecha que pide agendar con al menos tres días de anticipación. La floristería debe confirmar disponibilidad.
- **Preferencia de pago:** permite indicar Nequi, tarjeta débito/crédito, PSE o dejar el método por confirmar. Solo comunica una preferencia; no recibe ni procesa datos de pago.
- **Pedido por WhatsApp:** prepara un mensaje con productos, cantidades, datos de entrega, dedicatoria, fecha y método de pago elegido para que el cliente lo revise y lo envíe.
- **Redes sociales:** enlaces a Instagram y TikTok, además del reproductor incrustado del video de TikTok proporcionado para el sitio.
- **Contacto directo:** acceso a WhatsApp desde la página.

## Tecnologías

- **React** para construir la interfaz con componentes.
- **Vite** para el servidor local de desarrollo y la compilación de producción.
- **JavaScript (ES modules)** para el comportamiento del sitio.
- **CSS** para estilos, animaciones y adaptación responsive.
- **Lucide React** para los iconos de la interfaz.
- **npm** para instalar las dependencias indicadas en `package.json`.

## Requisitos

- Node.js en una versión LTS compatible con Vite.
- npm (se instala junto con Node.js).
- Visual Studio Code (opcional, recomendado para editar el proyecto).

## Abrir y ejecutar en Visual Studio Code

1. En VS Code, selecciona **Archivo → Abrir carpeta…**.
2. Abre esta carpeta del proyecto:

   ```text
   C:\Users\User\Documents\pag_floristeria
   ```

3. Abre una terminal integrada desde **Terminal → Nuevo terminal** y confirma que la ruta actual termina en `pag_floristeria`.
4. En la terminal, instala las dependencias y arranca el servidor local:

   ```bash
   npm install
   npm run dev
   ```

5. Abre en el navegador la dirección local que muestre Vite (normalmente `http://localhost:5173/`). Para detener el servidor, vuelve a la terminal y presiona `Ctrl+C`.

### Otros comandos

```bash
# Crear la compilación de producción en dist/
npm run build

# Servir localmente la compilación ya generada
npm run preview
```

## Estructura del proyecto

```text
pag_floristeria/
├── public/
│   └── catalogo/                 # Imágenes y PDF que usa el sitio
├── src/
│   ├── components/
│   │   ├── DedicationCard.jsx    # Editor y vista previa de la dedicatoria
│   │   ├── Header.jsx            # Encabezado y navegación
│   │   └── ProductCard.jsx       # Ficha de producto y presentaciones
│   ├── data/
│   │   └── catalog.js            # Datos del negocio y productos
│   ├── App.jsx                   # Secciones, bolsa y flujo de pedido
│   ├── feature-overrides.css     # Estilos adicionales de funciones nuevas
│   ├── main.jsx                  # Punto de entrada de React
│   └── styles.css                # Estilos principales
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### Dónde editar contenido

- Los productos, presentaciones, precios y redes sociales están en `src/data/catalog.js`.
- Las fotos optimizadas están en `public/catalogo/ramos/`; el PDF adjunto inicialmente se conserva en `public/catalogo/` y el catálogo vigente se abre en línea.
- La estructura de secciones y el flujo del carrito y checkout están en `src/App.jsx`.
- La tarjeta y sus tipografías están en `src/components/DedicationCard.jsx`.
- La apariencia general está en `src/styles.css` y `src/feature-overrides.css`.



## Git y GitHub

La carpeta ya tiene un repositorio Git local propio. Para publicar el proyecto en un repositorio de GitHub:

1. Crea un repositorio vacío en GitHub y copia su URL HTTPS o SSH.
2. En VS Code, abre **Archivo → Abrir carpeta…** y selecciona `C:\Users\User\Documents\pag_floristeria`.
3. Desde la terminal integrada de VS Code, ejecuta estos comandos. Reemplaza `<URL-DE-TU-REPOSITORIO>` por la URL que copiaste:

   ```bash
   git status
   git add .
   git commit -m "Publica sitio de Sweet Palace"
   git branch -M main
   git remote add origin <URL-DE-TU-REPOSITORIO>
   git push -u origin main
   ```

También puedes usar el panel **Control de código fuente** de VS Code para revisar los archivos, preparar los cambios, crear el commit y hacer **Publicar rama**. Comprueba siempre que la carpeta abierta sea `pag_floristeria`.

No incluyas `node_modules/`, `dist/` ni `.pnpm-store/`; están excluidos por `.gitignore`. Si el repositorio de GitHub ya contiene commits o archivos, sincronízalo antes de publicar para evitar un rechazo del push.
