// ==========================================
// 1. Categoría Óleo
// ==========================================
const obrasOleo = [
  { archivo: "1SG.webp", titulo: "Serie SG - Pieza 1", dimensiones: "100 x 80 cm", estado: "Colección Privada", disponible: false },
  { archivo: "2SG.webp", titulo: "Serie SG - Pieza 2", dimensiones: "120 x 90 cm", estado: "Disponible", disponible: true },
  { archivo: "3SG.webp", titulo: "Serie SG - Pieza 3", dimensiones: "80 x 60 cm", estado: "Colección Privada", disponible: false },
  { archivo: "4SG.webp", titulo: "Serie SG - Pieza 4", dimensiones: "100 x 100 cm", estado: "Disponible", disponible: true },
  { archivo: "5SG.webp", titulo: "Serie SG - Pieza 5", dimensiones: "150 x 100 cm", estado: "Colección Privada", disponible: false },
  { archivo: "6SG.webp", titulo: "Serie SG - Pieza 6", dimensiones: "70 x 50 cm", estado: "Disponible", disponible: true },
  { archivo: "7SG.webp", titulo: "Serie SG - Pieza 7", dimensiones: "110 x 85 cm", estado: "Colección Privada", disponible: false },
  { archivo: "8SG.webp", titulo: "Serie SG - Pieza 8", dimensiones: "90 x 90 cm", estado: "Disponible", disponible: true },
  { archivo: "9SG.webp", titulo: "Serie SG - Pieza 9", dimensiones: "130 x 95 cm", estado: "Colección Privada", disponible: false },
  { archivo: "10SG.webp", titulo: "Serie SG - Pieza 10", dimensiones: "100 x 80 cm", estado: "Disponible", disponible: true },
  { archivo: "11SG.webp", titulo: "Serie SG - Pieza 11", dimensiones: "90 x 70 cm", estado: "Colección Privada", disponible: false },
  { archivo: "12AZ.webp", titulo: "Serie AZ - Pieza 12", dimensiones: "100 x 80 cm", estado: "Colección Privada", disponible: false },
  { archivo: "13RB.webp", titulo: "Serie rb - robot", dimensiones: "190 x 90 cm", estado: "Colección Privada", disponible: false }
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

// ==========================================
// 2. Categoría Retratos Grafito
// ==========================================
const obrasRetratosGrafito = [
  { archivo: "grafito1.jpg", titulo: "Retrato 1" },
  { archivo: "grafito2.jpg", titulo: "Retrato 2" },
  { archivo: "grafito3.jpg", titulo: "Retrato 3" },
  { archivo: "grafito4.jpg", titulo: "Retrato 4" },
  { archivo: "grafito5.jpg", titulo: "Retrato 5" },
  { archivo: "grafito6.jpg", titulo: "Retrato 6" },
  { archivo: "grafito7.jpg", titulo: "Retrato 7" },
  { archivo: "grafito8.jpg", titulo: "Retrato 8" },
  { archivo: "grafito9.jpg", titulo: "Retrato 9" }
];

const rutaRetratosGrafito = "./retratos-grafito/retratos-grafito/";
const contenedorRetratosGrafito = document.getElementById("galeria-retratos-grafito");

if (contenedorRetratosGrafito) {
  contenedorRetratosGrafito.innerHTML = "";
  obrasRetratosGrafito.forEach((obra) => {
    const article = document.createElement("article");
    article.className = "tarjeta-obra";
    const urlImagen = `${rutaRetratosGrafito}${obra.archivo}`;

    article.innerHTML = `
      <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080" target="_blank">
        <img src="${urlImagen}" alt="${obra.titulo}" loading="lazy">
      </a>
      <h3>${obra.titulo}</h3>
      <p><strong>Técnica:</strong> Grafito</p>
      <p><strong>Estado:</strong> <span style="color: gray; font-weight: bold;">Colección personal</span></p>
    `;
    contenedorRetratosGrafito.appendChild(article);
  });
}

// ==========================================
// 3. Categoría Camisas (Corregido con Lightbox)
// ==========================================
const obrasCamisas = [
  { archivo: "camisa1.webp", titulo: "Camisa Intervenida 1", talla: "M", estado: "Disponible", disponible: true },
  { archivo: "camisa2.webp", titulo: "Camisa Intervenida 2", talla: "L", estado: "Colección Privada", disponible: false },
  { archivo: "camisa3.webp", titulo: "Camisa Intervenida 3", talla: "S", estado: "Disponible", disponible: true }
];

const rutaCamisas = "./camisas/";
const contenedorCamisas = document.getElementById("galeria-camisas");

if (contenedorCamisas) {
  contenedorCamisas.innerHTML = "";
  obrasCamisas.forEach((obra) => {
    const article = document.createElement("article");
    article.className = "tarjeta-obra";
    const estiloEstado = obra.disponible ? 'color: green; font-weight: bold;' : 'color: gray; font-weight: bold;';
    const urlImagen = `${rutaCamisas}${obra.archivo}`;

    article.innerHTML = `
      <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080" target="_blank">
        <img src="${urlImagen}" alt="${obra.titulo}" loading="lazy">
      </a>
      <h3>${obra.titulo}</h3>
      <p><strong>Técnica:</strong> Textil Intervenido</p>
      <p><strong>Talla:</strong> ${obra.talla}</p>
      <p><strong>Estado:</strong> <span style="${estiloEstado}">${obra.estado}</span></p>
    `;
    contenedorCamisas.appendChild(article);
  });
}

// ==========================================
// 4. Categoría Muralismo
// ==========================================
const rutaMuralismo = "./5 Muralismo/";
const contenedorMuralismo = document.getElementById("galeria-muralismo");

if (contenedorMuralismo && typeof obrasMuralismo !== 'undefined') {
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

// ==========================================
// 5. Navegación por pestañas
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const pestanas = document.querySelectorAll(".pestana");
  const secciones = document.querySelectorAll(".contenido-seccion");

  pestanas.forEach((pestana) => {
    pestana.addEventListener("click", (e) => {
      e.preventDefault();
      
      pestanas.forEach((p) => p.classList.remove("active"));
      secciones.forEach((s) => s.classList.remove("active"));

      pestana.classList.add("active");
      const idSeccion = pestana.getAttribute("data-seccion");
      const seccionObjetivo = document.getElementById(idSeccion);
      
      if (seccionObjetivo) {
        seccionObjetivo.classList.add("active");
      }
    });
  });
});
