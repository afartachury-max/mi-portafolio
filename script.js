// ==========================================
// 1. Categoría Óleo
// ==========================================
const obrasOleo = [
  { archivo: "1Frida.webp", titulo: "Frida 1" },
  { archivo: "2Frida.webp", titulo: "Frida 2" },
  { archivo: "3Frida.webp", titulo: "Frida 3" },
  { archivo: "4Frida.webp", titulo: "Frida 4" },
  { archivo: "5Frida.webp", titulo: "Frida 5" },
  { archivo: "6Frida.webp", titulo: "Frida 6" },
  { archivo: "7Frida.webp", titulo: "Frida 7" },
  { archivo: "8Frida.webp", titulo: "Frida 8" },
  { archivo: "9Frida.webp", titulo: "Frida 9" },
  { archivo: "10RD.webp", titulo: "Resiliencia 10" },
  { archivo: "11SG.webp", titulo: "Serie SG - Pieza 11" },
  { archivo: "12AZ.webp", titulo: "Serie AZ - Pieza 12" },
  { archivo: "13RB.webp", titulo: "Serie RB - Robot" }
];

const rutaOleo = "./1Oleo/";
const contenedorOleo = document.getElementById("galeria-oleo");

if (contenedorOleo) {
  contenedorOleo.innerHTML = "";
  obrasOleo.forEach((obra) => {
    const article = document.createElement("article");
    article.className = "tarjeta-obra";
    const urlImagen = `${rutaOleo}${obra.archivo}`;

    article.innerHTML = `
      <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080">
        <img src="${urlImagen}" alt="${obra.titulo}" loading="lazy">
      </a>
      <h3>${obra.titulo}</h3>
      <p><strong>Técnica:</strong> Óleo sobre lienzo</p>
      <p><strong>Estado:</strong> <span style="color: gray; font-weight: bold;">Colección personal</span></p>
    `;
    contenedorOleo.appendChild(article);
  });
}

// ==========================================
// 2. Categoría Retratos Grafito
// ==========================================
const obrasRetratosGrafito = [
  { archivo: "grafito1.webp", titulo: "Retrato 1" },
  { archivo: "grafito2.webp", titulo: "Retrato 2" },
  { archivo: "grafito3.webp", titulo: "Retrato 3" },
  { archivo: "grafito4.webp", titulo: "Retrato 4" },
  { archivo: "grafito5.webp", titulo: "Retrato 5" },
  { archivo: "grafito6.webp", titulo: "Retrato 6" },
  { archivo: "grafito7.webp", titulo: "Retrato 7" },
  { archivo: "grafito8.webp", titulo: "Retrato 8" },
  { archivo: "grafito9.webp", titulo: "Retrato 9" }
];

const rutaRetratosGrafito = "./retratos-grafito/";
const contenedorRetratosGrafito = document.getElementById("galeria-retratos-grafito");

if (contenedorRetratosGrafito) {
  contenedorRetratosGrafito.innerHTML = "";
  obrasRetratosGrafito.forEach((obra) => {
    const article = document.createElement("article");
    article.className = "tarjeta-obra";
    const urlImagen = `${rutaRetratosGrafito}${obra.archivo}`;

    article.innerHTML = `
      <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080">
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
// 3. Categoría Camisas
// ==========================================
const obrasCamisas = [
  { archivo: "camisa1.webp", titulo: "Camisa 1" },
  { archivo: "camisa2.webp", titulo: "Camisa 2" },
  { archivo: "camisa3.webp", titulo: "Camisa 3" },
  { archivo: "camisa4.webp", titulo: "Camisa 4" },
  { archivo: "Camisa5.webp", titulo: "Camisa 5" },
  { archivo: "Camisa6.webp", titulo: "Camisa 6" },
  { archivo: "Camisa7.webp", titulo: "Camisa 7" },
  { archivo: "Camisa8.webp", titulo: "Camisa 8" },
  { archivo: "Camisa9.webp", titulo: "Camisa 9" },
  { archivo: "Camisa10.webp", titulo: "Camisa 10" },
  { archivo: "Camisa11.webp", titulo: "Camisa 11" }
];

const rutaCamisas = "./camisas/";
const contenedorCamisas = document.getElementById("galeria-camisas");

if (contenedorCamisas) {
  contenedorCamisas.innerHTML = "";
  obrasCamisas.forEach((obra) => {
    const article = document.createElement("article");
    article.className = "tarjeta-obra";
    const urlImagen = `${rutaCamisas}${obra.archivo}`;

    article.innerHTML = `
      <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080">
        <img src="${urlImagen}" alt="${obra.titulo}" loading="lazy">
      </a>
      <h3>${obra.titulo}</h3>
      <p><strong>Técnica:</strong> Textil Intervenido / Decoloración</p>
      <p><strong>Estado:</strong> <span style="color: gray; font-weight: bold;">Colección personal</span></p>
    `;
    contenedorCamisas.appendChild(article);
  });
}
// ==========================================
// 4. Categoría Muralismo
// ==========================================
const obrasMuralismo = [
  { archivo: "mural-1.webp", titulo: "Mural 1" },
  { archivo: "mural-2.webp", titulo: "Mural 2" },
  { archivo: "mural-3.webp", titulo: "Mural 3" },
  { archivo: "mural-4.webp", titulo: "Mural 4" },
  { archivo: "mural-5.webp", titulo: "Mural 5" },
  { archivo: "mural-6.webp", titulo: "Mural 6" },
  { archivo: "mural-7.webp", titulo: "Mural 7" },
  { archivo: "mural-8.webp", titulo: "Mural 8" }
];

const rutaMuralismo = "./mural/";
const contenedorMuralismo = document.getElementById("galeria-mural");

if (contenedorMuralismo) {
  contenedorMuralismo.innerHTML = "";
  obrasMuralismo.forEach((obra) => {
    const article = document.createElement("article");
    article.className = "tarjeta-obra";
    const urlImagen = `${rutaMuralismo}${obra.archivo}`;
    article.innerHTML = `
      <a href="${urlImagen}" class="lightbox-link" data-pswp-src="${urlImagen}" data-pswp-width="1920" data-pswp-height="1080">
        <img src="${urlImagen}" alt="${obra.titulo}" loading="lazy">
      </a>
      <h3>${obra.titulo}</h3>
      <p><strong>Técnica:</strong> Muralismo / Pintura en pared</p>
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
