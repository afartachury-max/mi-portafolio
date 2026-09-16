import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe-lightbox.esm.min.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Control de navegación entre pestañas
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

  // 2. Arreglo completo con todas las obras al óleo
  const obrasOleo = [
    { archivo: "1Frida.webp", titulo: "Alma de Frida", dimensiones: "160 x 90  cm", estado: "Colección Privada", disponible: false },
    { archivo: "2Frida.webp", titulo: "Alma de Frida", dimensiones: "160 x 90 cm", estado: "Colección Privada", disponible: false },
    { archivo: "3NYD.webp", titulo: "Movimiento en color", dimensiones: "340 x 110 cm", estado: "Colección Privada", disponible: false },
    { archivo: "4NYD.webp", titulo: "Movimiento en color", dimensiones: "340 x 110  cm", estado: "Colección Privada", disponible: false },
    { archivo: "5STG.webp", titulo: "Pasion en NY", dimensiones: "70 x 50 cm", estado: "Colección Privada", disponible: false },
    { archivo: "6STG.webp", titulo: "Pasion en NY", dimensiones: "70 x 50 cm", estado: "Colección Privada", disponible: false },
    { archivo: "7RD.webp", titulo: "Pausa Dorada", dimensiones: "170 x 100 cm", estado: "Colección Privada", disponible: false },
    { archivo: "8RD.webp", titulo: "Pausa Dorada", dimensiones: "170 x 100 ", estado: "Colección Privada", disponible: false },
    { archivo: "9RD.webp", titulo: "Fluir alado", dimensiones: "170 x 100 cm", estado: "Colección Privada", disponible: false },
    { archivo: "10RD.webp", titulo: "Fluir alado ", dimensiones: "170 x 100 cm", estado: "Colección Privada", disponible: false },
    { archivo: "11SG.webp", titulo: "Amor al Oleo", dimensiones: "90 x 70 cm", estado: "Colección Privada", disponible: false },
    { archivo: "12AZ.webp", titulo: "Para los nietos ", dimensiones: "80 x 60 cm", estado: "Colección Privada", disponible: false }
  ];

  const rutaCarpeta = "./1Oleo/";
  const contenedorGaleria = document.getElementById("galeria-oleo");

  if (contenedorGaleria) {
    contenedorGaleria.innerHTML = ""; // Limpia el contenedor antes de insertar

    obrasOleo.forEach((obra) => {
      const article = document.createElement("article");
      article.className = "tarjeta-obra";

      const estiloEstado = obra.disponible 
        ? 'color: green; font-weight: bold;' 
        : 'color: gray; font-weight: bold;';

      article.innerHTML = `
        <a href="${rutaCarpeta}${obra.archivo}" class="lightbox-link" data-pswp-width="1920" data-pswp-height="1080" target="_blank">
          <img src="${rutaCarpeta}${obra.archivo}" alt="${obra.titulo}" loading="lazy">
        </a>
        <h3>${obra.titulo}</h3>
        <p><strong>Técnica:</strong> Óleo sobre lienzo</p>
        <p><strong>Dimensiones:</strong> ${obra.dimensiones}</p>
        <p><strong>Estado:</strong> <span style="${estiloEstado}">${obra.estado}</span></p>
      `;

      contenedorGaleria.appendChild(article);
    });
  }

  // 3. Inicializar PhotoSwipe DESPUÉS de haber generado las imágenes en el DOM
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#galeria-oleo, .galeria, .galeria-grid',
    children: 'a.lightbox-link',
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 2,
    maxZoomLevel: 4,
    pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe.esm.min.js')
  });
  lightbox.init();
});
