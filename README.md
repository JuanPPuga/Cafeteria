# Documentación del Proyecto: Página Web para Cafetería

## Descripción General
Esta página web está diseñada para una cafetería llamada "Coffee Shop". Cuenta con una página de inicio, una página de menú con 17 productos, y un pie de página con información de contacto, ubicación, horarios y redes sociales. La navegación entre secciones se hace sin recargar la página usando JavaScript.

---

## Herramientas Usadas

- **HTML5**: Estructura y contenido de la página.
- **CSS3**: Estilos visuales y diseño responsivo.
- **JavaScript**: Funcionalidad para navegación dinámica entre secciones sin recargar la página.

---

## Estructura y Estilos (CSS)

- **Estilos Generales**:
  - `body`: Fuente Arial, color de fondo beige claro (#f3f0e9).
  - `.container`: Centrado con un ancho máximo de 800px, fondo claro (#fff8e1), bordes redondeados y sombra para un aspecto limpio y moderno.
  - `h1`: Color marrón oscuro (#4e342e).
  - `.btn`: Botones con fondo marrón (#6d4c41), texto blanco, bordes redondeados y efecto hover para mejor interacción visual.

- **Tabla del Menú**:
  - Tablas con ancho 100%, bordes colapsados.
  - Celdas con padding y bordes grises claros.
  - Encabezados con fondo marrón medio (#a1887f) y texto blanco.

- **Secciones**:
  - `.section`: Oculta por defecto con `display: none`.
  - `.active`: Sección visible con `display: block`.

- **Pie de Página**:
  - Fondo beige oscuro (#d7ccc8), texto marrón (#4e342e).
  - Disposición en línea (flexbox) con separación entre los elementos.
  - Enlaces con subrayado y cambio de color al pasar el cursor.

- **Responsividad**:
  - Para pantallas menores a 768px, el pie de página cambia a diseño vertical para mejor lectura.

---

## Funciones Técnicas (JavaScript)

- **Función `mostrarSeccion(id)`**:
  - Selecciona todas las secciones con clase `.section` y les quita la clase `.active`.
  - Luego añade la clase `.active` solo a la sección cuyo `id` coincida con el argumento recibido.
  - Esto permite mostrar u ocultar secciones sin recargar la página, creando una navegación fluida.

---

## Flujo de Usuario

1. El usuario entra a la página y ve la sección de inicio con un botón para ir al menú.
2. Al hacer clic en el botón "Ver Menú", se oculta la sección inicio y se muestra la sección menú.
3. En la sección menú, se muestra una tabla con 17 productos, sus precios y tiempos de espera.
4. Desde el menú, el usuario puede regresar a la página inicio con el botón "Volver al Inicio".
5. En cualquier momento, el pie de página proporciona información de contacto, ubicación, horarios y un enlace a Instagram.

---

## Consideraciones

- El logo debe estar disponible en el archivo `Logo.jpg` para mostrarse correctamente.
- Los enlaces y contactos en el pie de página pueden personalizarse según la información real del negocio.
- La página está diseñada para ser sencilla, clara y accesible.

---

## Posibles Mejoras Futuras

- Agregar formularios de contacto o reservas.
- Incluir imágenes de los productos en el menú.
- Añadir animaciones para transiciones más suaves.
- Implementar un diseño totalmente responsivo para dispositivos móviles.

---
