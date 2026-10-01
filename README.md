# Sweet Palace · Floristería en línea

Sitio web de catálogo y pedidos para **Sweet Palace**, una floristería colombiana. La experiencia permite descubrir arreglos florales, consultar el catálogo completo, redactar una tarjeta para acompañar el ramo y preparar una solicitud de pedido para confirmar por WhatsApp.

> Esta versión es una vitrina web con flujo de pedido asistido. No procesa pagos, no reserva inventario y no guarda pedidos en un servidor.

## Descripción y problema que resuelve

Los clientes suelen necesitar ver opciones, comparar presentaciones y precios, y explicar detalles especiales antes de encargar flores. Esta página reúne esa información en un solo sitio adaptable a celular y computador. También organiza los datos del pedido —arreglo, dedicatoria, entrega y método de pago preferido— para que el cliente los envíe a Sweet Palace en un mensaje de WhatsApp y confirme los detalles con la floristería.

## Funciones disponibles

- **Diseño responsive:** navegación y contenido adaptados a pantallas de escritorio y móviles.
- **Animaciones al desplazarse:** las secciones y los productos aparecen suavemente al hacer scroll; se respeta la preferencia del sistema por reducir movimiento.
- **Catálogo filtrable:** productos organizados por categoría, con fotografías, descripciones, precios y presentaciones cuando están disponibles.
- **Consulta del catálogo completo:** acceso al PDF original de 21 páginas incluido en el proyecto.
- **Bolsa de compra:** agregar arreglos, cambiar cantidades y retirar productos antes de continuar.
- **Tarjeta dedicatoria:** escribir un mensaje, elegir entre tres estilos de tipografía y consultar una vista previa. El mensaje se incluye en el resumen del pedido.
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
- **pnpm** para instalar dependencias; `pnpm-lock.yaml` registra las versiones resueltas.

## Requisitos

- Node.js en una versión LTS compatible con Vite.
- pnpm.
- Visual Studio Code (opcional, recomendado para editar el proyecto).

## Abrir y ejecutar en Visual Studio Code

1. En VS Code, selecciona **Archivo → Abrir carpeta…**.
2. Abre esta carpeta del proyecto:

   ```text
   C:\Users\User\Documents\pag_floristeria
   ```

3. Abre una terminal integrada desde **Terminal → Nuevo terminal** y confirma que la ruta actual termina en `pag_floristeria`.
4. Instala las dependencias y arranca el servidor local:

   ```bash
   pnpm install
   pnpm run dev
   ```

5. Abre en el navegador la dirección local que muestre Vite (normalmente `http://localhost:5173/`). Para detener el servidor, vuelve a la terminal y presiona `Ctrl+C`.

### Otros comandos

```bash
# Crear la compilación de producción en dist/
pnpm run build

# Servir localmente la compilación ya generada
pnpm run preview
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
├── pnpm-lock.yaml
├── vite.config.js
└── README.md
```

### Dónde editar contenido

- Los productos, presentaciones, precios y redes sociales están en `src/data/catalog.js`.
- Las fotografías y el catálogo PDF están en `public/catalogo/`.
- La estructura de secciones y el flujo del carrito y checkout están en `src/App.jsx`.
- La tarjeta y sus tipografías están en `src/components/DedicationCard.jsx`.
- La apariencia general está en `src/styles.css` y `src/feature-overrides.css`.

## Próximas mejoras

Estas funciones **todavía no están implementadas** y requieren definir información del negocio y/o conectar servicios externos:

1. **Confirmar catálogo y precios vigentes:** unificar los valores que difieren en el PDF, revisar disponibilidad y definir precios por zona o presentación.
2. **Calendario de entregas con disponibilidad real:** bloquear días no disponibles y coordinar horarios, zonas y tarifas de domicilio.
3. **Pagos en línea:** integrar una pasarela autorizada para Nequi, tarjetas o PSE. La selección actual no efectúa el cobro.
4. **Backend y base de datos:** guardar pedidos, catálogo, inventario y estados de entrega de forma persistente.
5. **Panel administrativo:** actualizar precios, productos, disponibilidad y consultar pedidos sin modificar el código.
6. **Confirmaciones automáticas:** enviar al cliente confirmación y cambios de estado por los canales que el negocio elija.
7. **Validación de pedidos:** calcular el envío y el total final según ciudad, barrio, fecha y disponibilidad.

## Consideraciones antes de publicar

- Revisa los precios y la disponibilidad del catálogo antes de recibir pedidos reales. El PDF muestra dos precios para la presentación de seis tulipanes: **$98.000** en el cuadro general y **$100.000** en otra página; el sitio presenta $98.000 y recomienda confirmarlo.
- Las tarifas de domicilio y la cobertura se confirman manualmente por WhatsApp.
- La fecha del formulario es una solicitud, no una reserva automática.
- La opción de pago indica la preferencia del cliente; el sitio no solicita números de tarjeta ni credenciales de Nequi.
- Asegúrate de tener autorización para publicar las fotografías y el contenido de redes sociales utilizados.

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
