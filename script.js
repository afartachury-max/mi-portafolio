import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe-lightbox.esm.min.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar PhotoSwipe (Mantiene el Zoom activo para todas las galerías)
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.galeria, .galeria-grid',
    children: 'a.lightbox-link',
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 2,
    maxZoomLevel: 4,
    pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe.esm.min.js')
  });
  lightbox.init();

  // 2. Control de navegación entre pestañas
  const pestanas = document.querySelectorAll('.pestana');
  const secciones = document.querySelectorAll('.contenido-seccion');

  pestanas.forEach((pestana) => {
    pestana.addEventListener('click', (e) => {
      e.preventDefault();

      // Desactivar pestañas y secciones previas
      pestanas.forEach((p) => p.classList.remove('active'));
      secciones.forEach((s) => s.classList.remove('active'));

      // Activar pestaña seleccionada
      pestana.classList.add('active');

      // Mostrar la sección correspondiente
      const seccionId = pestana.getAttribute('data-seccion');
      const seccionDestino = document.getElementById(seccionId);
      if (seccionDestino) {
        seccionDestino.classList.add('active');
      }
    });
  });
});
