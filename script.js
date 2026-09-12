function abrirSeccion(evt, nombreSeccion) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.contenido-seccion');
  secciones.forEach(sec => sec.classList.remove('active'));

  // Quitar estado activo de todos los botones
  const botones = document.querySelectorAll('.btn-pestana');
  botones.forEach(btn => btn.classList.remove('active'));

  // Mostrar la sección seleccionada y marcar el botón activo
  document.getElementById(nombreSeccion).classList.add('active');
  evt.currentTarget.classList.add('active');
}
import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe-lightbox.esm.min.js';

// Función para cambiar de pestañas en el portafolio
window.abrirSeccion = function(evt, nombreSeccion) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.contenido-seccion');
  secciones.forEach(sec => sec.classList.remove('active'));

  // Quitar estado activo de todos los botones
  const botones = document.querySelectorAll('.btn-pestana');
  botones.forEach(btn => btn.classList.remove('active'));

  // Mostrar la sección seleccionada y marcar el botón activo
  document.getElementById(nombreSeccion).classList.add('active');
  evt.currentTarget.classList.add('active');
};

// Inicializar el visor PhotoSwipe con soporte para zoom
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.galeria',
    children: 'a.lightbox-link',
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 2,
    maxZoomLevel: 4,
    pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe.esm.min.js')
  });

  lightbox.init();
});
