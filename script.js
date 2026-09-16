import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe-lightbox.esm.min.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar PhotoSwipe
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

      // Desactivar pestañas y secciones
      pestanas.forEach((p) => p.classList.remove('active'));
      secciones.forEach((s) => s.classList.remove('active'));

      // Activar pestaña actual
      pestana.classList.add('active');

      // Mostrar sección
      const seccionId = pestana.getAttribute('data-seccion');
      const seccionDestino = document.getElementById(seccionId);
      if (seccionDestino) {
        seccionDestino.classList.add('active');
      }
    });
  });

  // 3. Cargar dinámicamente las imágenes de la carpeta Oleo
  const imagenesOleo = [
    "3NYD.webp",
    "4NYD.webp",
    "5STG.webp",
    "6STG.webp",
    "7RD.webp",
    "8RD.webp",
    "9RD.webp",
    "10RD.webp",
    "11SG.webp",
    "12AZ.webp"
  ];

  const rutaCarpeta = "./1Oleo/";
  const contenedorGaleria = document.getElementById("galeria-oleo");

  if (contenedorGaleria) {
    contenedorGaleria.innerHTML = ""; // Evita duplicados

    imagenesOleo.forEach((nombreImagen) => {
      const img = document.createElement("img");
      img.src = `${rutaCarpeta}${nombreImagen}`;
      img.alt = `Obra al óleo: ${nombreImagen.split('.')[0]}`;
      img.loading = "lazy";
      contenedorGaleria.appendChild(img);
    });
  }
});
