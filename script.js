/**
 * Función para mostrar una sección y ocultar las demás
 * @param {string} id - El id de la sección a mostrar
 */
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(seccion => seccion.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
