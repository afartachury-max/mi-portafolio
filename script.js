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

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

  const lightbox = new PhotoSwipeLightbox({
    // Selector para las galerías de imágenes
    gallery: '.galeria',

    // Selector para los elementos que abrirán el lightbox
    children: 'a.lightbox-link',

    // Opciones para la funcionalidad de zoom
    initialZoomLevel: 'fit', // Ajustar imagen a la pantalla inicialmente
    secondaryZoomLevel: 2, // Nivel de zoom secundario (al hacer doble clic/tap)
    maxZoomLevel: 4, // Nivel máximo de zoom

    // Módulo de PhotoSwipe core
    pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe.esm.min.js')
  });

  // Inicializar el lightbox
  lightbox.init();

});
