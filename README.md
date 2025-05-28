# 📄 Documentación Técnica - Sitio Web de Coffee Shop

## Índice

1. [Descripción General](#descripción-general)
2. [Lenguajes y Herramientas Utilizadas](#lenguajes-y-herramientas-utilizadas)
3. [Estructura del Código](#estructura-del-código)
    - [1. HTML](#1-html)
    - [2. CSS](#2-css)
    - [3. JavaScript](#3-javascript)
4. [Componentes del Sitio](#componentes-del-sitio)
    - [Inicio](#inicio)
    - [Menú](#menú)
    - [Nosotros](#nosotros)
    - [Galería](#galería)
    - [Pie de Página](#pie-de-página)
5. [Responsividad](#responsividad)
6. [Conclusión](#conclusión)

---

## Descripción General

Este sitio web está diseñado para una cafetería ficticia llamada **Coffee Shop**. Es una página web estática construida con HTML, CSS y JavaScript puro. Proporciona información del menú, una galería de imágenes, detalles sobre la empresa, promociones, y una navegación sencilla entre secciones sin necesidad de recargar la página.

---

## Lenguajes y Herramientas Utilizadas

| Lenguaje/Herramienta | Uso Principal |
|----------------------|----------------|
| **HTML5**            | Estructura del contenido de la página |
| **CSS3**             | Estilos visuales y diseño responsivo |
| **JavaScript**       | Interacción y navegación dinámica entre secciones |
| **Editor de código** (Visual Studio Code, etc.) | Edición y mantenimiento del código |
| **Imágenes locales** (`.jpg`) | Contenido visual en la sección de galería |

---

## Estructura del Código

### 1. HTML

El archivo HTML es la base del sitio web. Se utiliza la estructura semántica `<head>` y `<body>`, y dentro de `<body>` se encuentran varias divisiones (`<div>`) que funcionan como páginas internas (`.section`).

### 2. CSS

El CSS está incluido directamente en el `<head>` dentro de la etiqueta `<style>`. Aquí se define:

- El diseño visual (colores, márgenes, tipografía).
- La apariencia de botones, tablas y secciones.
- La galería de imágenes con `flexbox`.
- Estilos responsivos usando `@media`.

### 3. JavaScript

Se utiliza un pequeño bloque de JavaScript al final del documento para alternar la visibilidad de las secciones del sitio mediante la función:

```javascript
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(seccion => seccion.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
```

---

## Componentes del Sitio

### Inicio

Contiene:

- Bienvenida.
- Imagen del logo.
- Botones para navegar a otras secciones (`menu`, `nosotros`, `galeria`).

### Menú

- Tabla con productos, costos y tiempos de espera.
- Diseño limpio y accesible.

### Nosotros

Secciones que explican:

- Quiénes somos
- Misión y visión
- Servicios disponibles
- Promociones y ubicación

### Galería

- Contiene imágenes de productos como café, crepas, batidos y pan.
- Utiliza `flex-wrap` para mostrar imágenes de forma adaptable.
- Efecto `hover` con escalado para mejorar la experiencia visual.

```html
<div class="galeria">
    <img src="Coffe_Image1.jpg" alt="Café">
    <img src="Crepp_1.jpg" alt="Crepa">
    ...
</div>
```

### Pie de Página

- Redes sociales
- Horarios
- Contacto
- Ubicación

Responsivo y organizado en formato horizontal usando `flexbox`.

---

## Responsividad

Se utiliza un `@media query`:

```css
@media (max-width: 768px) {
    .footer-horizontal {
        flex-direction: column;
        align-items: flex-start;
    }
}
```

Esto asegura que el pie de página se adapte a pantallas pequeñas como móviles y tablets.

---

## Conclusión

Este proyecto es un excelente ejemplo de una **SPA básica** (Single Page Application) sin frameworks. Gracias al uso de HTML, CSS y JavaScript puros, se logra una navegación fluida entre secciones sin recargar la página, un diseño limpio y amigable para el usuario, y una estructura fácilmente escalable.

> Ideal para pequeñas cafeterías, restaurantes o proyectos escolares.
