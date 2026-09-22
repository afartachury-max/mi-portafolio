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

  // 2. Arreglo completo de la categoría Óleo
  const obrasOleo = [
    { archivo: "1Frida.webp", titulo: "Serie Frida - Pieza 1", dimensiones: "80 x 60 cm", estado: "Colección Privada", disponible: false },
    { archivo: "2Frida.webp", titulo: "Serie Frida - Pieza 2", dimensiones: "100 x 70 cm", estado: "Colección Privada", disponible: false },
    { archivo: "3NYD.webp", titulo: "Serie NYD - Pieza 3", dimensiones: "60 x 50 cm", estado: "Colección Privada", disponible: false },
    { archivo: "4NYD.webp", titulo: "Serie NYD - Pieza 4", dimensiones: "60 x 50 cm", estado: "Colección Privada", disponible: false },
    { archivo: "5STG.webp", titulo: "Serie STG - Pieza 5", dimensiones: "70 x 50 cm", estado: "Colección Privada", disponible: false },
    { archivo: "6STG.webp", titulo: "Serie STG - Pieza 6", dimensiones: "70 x 50 cm", estado: "Colección Privada", disponible: false },
    { archivo: "7RD.webp", titulo: "Serie RD - Pieza 7", dimensiones: "80 x 60 cm", estado: "Colección Privada", disponible: false },
    { archivo: "8RD.webp", titulo: "Serie RD - Pieza 8", dimensiones: "80 x 60 cm", estado: "Colección Privada", disponible: false },
    { archivo: "9RD.webp", titulo: "Serie RD - Pieza 9", dimensiones: "80 x 60 cm", estado: "Colección Privada", disponible: false },
    { archivo: "10RD.webp", titulo: "Serie RD - Pieza 10", dimensiones: "80 x 60 cm", estado: "Colección Privada", disponible: false },
    { archivo: "11SG.webp", titulo: "Serie SG - Pieza 11", dimensiones: "90 x 70 cm", estado: "Colección Privada", disponible: false },
    { archivo: "12AZ.webp", titulo: "Serie AZ - Pieza 12", dimensiones: "100 x 80 cm", estado: "Colección Privada", disponible: false }
  ];

  const rutaOleo = "./1Oleo/";
  const contenedorOleo = document.getElementById("galeria-oleo");

  if (contenedorOleo) {
    contenedorOleo.innerHTML = "";
    obrasOleo.forEach((obra) => {
      const article = document.createElement("article");
      article.className = "tarjeta-obra";
      const estiloEstado = obra.disponible ? 'color: green; font-weight: bold;' : 'color: gray; font-weight: bold;';

      const urlImagen = `${rutaOleo}${obra.archivo}`;

      article.innerHTML = `
        <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080" target="_blank">
          <img src="${urlImagen}" alt="${obra.titulo}" loading="lazy">
        </a>
        <h3>${obra.titulo}</h3>
        <p><strong>Técnica:</strong> Óleo sobre lienzo</p>
        <p><strong>Dimensiones:</strong> ${obra.dimensiones}</p>
        <p><strong>Estado:</strong> <span style="${estiloEstado}">${obra.estado}</span></p>
      `;
      contenedorOleo.appendChild(article);
    });
  }
const retratosGrafito = [
  { src: "./retratos-grafito/grafito1.webp", alt: "Retrato 1", titulo: "Retrato 1" },
  { src: "./retratos-grafito/grafito2.webp", alt: "Retrato 2", titulo: "Retrato 2" },
  { src: "./retratos-grafito/grafito3.webp", alt: "Retrato 3", titulo: "Retrato 3" },
  { src: "./retratos-grafito/grafito4.webp", alt: "Retrato 4", titulo: "Retrato 4" },
  { src: "./retratos-grafito/grafito5.webp", alt: "Retrato 5", titulo: "Retrato 5" },
  { src: "./retratos-grafito/grafito6.webp", alt: "Retrato 6", titulo: "Retrato 6" },
  { src: "./retratos-grafito/grafito7.webp", alt: "Retrato 7", titulo: "Retrato 7" },
  { src: "./retratos-grafito/grafito8.webp", alt: "Retrato 8", titulo: "Retrato 8" },
  { src: "./retratos-grafito/grafito9.webp", alt: "Retrato 9", titulo: "Retrato 9" }
];
  // 3. Arreglo completo de la categoría Muralismo (8 imágenes)
  const obrasMuralismo = [
    { archivo: "Mural 1.webp", titulo: "Mural 1", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false },
    { archivo: "Mural 2.webp", titulo: "Mural 2", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false },
    { archivo: "Mural 3.webp", titulo: "Mural 3", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false },
    { archivo: "Mural 4.webp", titulo: "Mural 4", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false },
    { archivo: "Mural 5.webp", titulo: "Mural 5", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false },
    { archivo: "Mural 6.webp", titulo: "Mural 6", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false },
    { archivo: "Mural 7.webp", titulo: "Mural 7", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false },
    { archivo: "Mural 8.webp", titulo: "Mural 8", dimensiones: "Dimensiones variables", estado: "Colección Privada", disponible: false }
  ];

  const rutaMuralismo = "./5 Muralismo/";
  const contenedorMuralismo = document.getElementById("galeria-muralismo");

  if (contenedorMuralismo) {
    contenedorMuralismo.innerHTML = "";
    obrasMuralismo.forEach((obra) => {
      const article = document.createElement("article");
      article.className = "tarjeta-obra";
      const estiloEstado = obra.disponible ? 'color: green; font-weight: bold;' : 'color: gray; font-weight: bold;';

      const urlImagen = `${rutaMuralismo}${encodeURIComponent(obra.archivo)}`;

      article.innerHTML = `
        <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080" target="_blank">
          <img src="${urlImagen}" alt="${obra.titulo}" loading="lazy">
        </a>
        <h3>${obra.titulo}</h3>
        <p><strong>Técnica:</strong> Muralismo / Acrílico</p>
        <p><strong>Dimensiones:</strong> ${obra.dimensiones}</p>
        <p><strong>Estado:</strong> <span style="${estiloEstado}">${obra.estado}</span></p>
      `;
      contenedorMuralismo.appendChild(article);
    });
  }

  // 4. Inicializar PhotoSwipe
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.galeria-grid',
    children: 'a.lightbox-link',
    pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.7/photoswipe.esm.min.js')
  });
  lightbox.init();
});
