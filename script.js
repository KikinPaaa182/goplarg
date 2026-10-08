const CONFIG = {

    whatsapp: "5491140699159",

    tiktok: "goplarg",

    instagram: "goplarggas",

    email: "Sorianicolas335@gmail.com"

};

const whatsappURL =
`https://wa.me/${CONFIG.whatsapp}?text=Hola,%20vi%20la%20pagina%20de%20GOPLARG%20y%20quisiera%20consultar`;

document.getElementById("btn-presupuesto").href =
whatsappURL;

document.getElementById("btn-whatsapp-float").href =
whatsappURL;

document.getElementById("btn-whatsapp-red").href =
whatsappURL;

document.getElementById("btn-tiktok").href =
`https://www.tiktok.com/@${CONFIG.tiktok}`;

document.getElementById("btn-ig").href =
`https://www.instagram.com/${CONFIG.instagram}`;

document.getElementById("email-link").href =
`mailto:${CONFIG.email}`;

document.getElementById("email-link").textContent =
CONFIG.email;

const btnPresupuestoFinal =
document.getElementById("btn-presupuesto-final");

if(btnPresupuestoFinal){
    btnPresupuestoFinal.href = whatsappURL;
    btnPresupuestoFinal.target = "_blank";
}

/* ============================= */
/* GALERIA */
/* ============================= */

const galeriaSlider = document.getElementById("galeria-slider");
const galeriaAnterior = document.getElementById("galeria-anterior");
const galeriaSiguiente = document.getElementById("galeria-siguiente");

const mediaItems = document.querySelectorAll(".media-item");

const visorGaleria = document.getElementById("visor-galeria");
const visorContenido = document.getElementById("visor-contenido");
const visorCerrar = document.getElementById("visor-cerrar");
const visorAnterior = document.getElementById("visor-anterior");
const visorSiguiente = document.getElementById("visor-siguiente");

let mediaActual = 0;


/* ============================= */
/* FLECHAS DE LA GALERIA */
/* ============================= */

if (galeriaAnterior && galeriaSiguiente && galeriaSlider) {

    galeriaAnterior.addEventListener("click", () => {

        galeriaSlider.scrollBy({
            left: -galeriaSlider.clientWidth,
            behavior: "smooth"
        });

    });


    galeriaSiguiente.addEventListener("click", () => {

        galeriaSlider.scrollBy({
            left: galeriaSlider.clientWidth,
            behavior: "smooth"
        });

    });

}


/* ============================= */
/* ABRIR VISOR */
/* ============================= */

function abrirVisor(indice) {

    mediaActual = indice;

    const media = mediaItems[mediaActual];

    if (!media) return;

    visorContenido.innerHTML = "";

    const imagen = media.querySelector("img");
    const video = media.querySelector("video");

    if (imagen) {

        const nuevaImagen = document.createElement("img");

        nuevaImagen.src = imagen.src;
        nuevaImagen.alt = imagen.alt || "Trabajo de GOPLARG";

        visorContenido.appendChild(nuevaImagen);

    }

    if (video) {

        const nuevoVideo = document.createElement("video");

        nuevoVideo.src = video.src;
        nuevoVideo.controls = true;
        nuevoVideo.autoplay = true;

        visorContenido.appendChild(nuevoVideo);

    }

    visorGaleria.classList.add("activo");

    document.body.style.overflow = "hidden";
}


/* ============================= */
/* CERRAR VISOR */
/* ============================= */

function cerrarVisor() {

    visorGaleria.classList.remove("activo");

    visorContenido.innerHTML = "";

    document.body.style.overflow = "";

}


/* ============================= */
/* CLIC EN IMAGEN / VIDEO */
/* ============================= */

mediaItems.forEach((media, indice) => {

    media.addEventListener("click", () => {

        abrirVisor(indice);

    });

});


/* ============================= */
/* FLECHA ANTERIOR DEL VISOR */
/* ============================= */

visorAnterior.addEventListener("click", (event) => {

    event.stopPropagation();

    mediaActual--;

    if (mediaActual < 0) {
        mediaActual = mediaItems.length - 1;
    }

    abrirVisor(mediaActual);

});


/* ============================= */
/* FLECHA SIGUIENTE DEL VISOR */
/* ============================= */

visorSiguiente.addEventListener("click", (event) => {

    event.stopPropagation();

    mediaActual++;

    if (mediaActual >= mediaItems.length) {
        mediaActual = 0;
    }

    abrirVisor(mediaActual);

});


/* ============================= */
/* BOTON CERRAR */
/* ============================= */

visorCerrar.addEventListener("click", (event) => {

    event.stopPropagation();

    cerrarVisor();

});


/* ============================= */
/* CERRAR HACIENDO CLICK AFUERA */
/* ============================= */

visorGaleria.addEventListener("click", (event) => {

    if (event.target === visorGaleria) {
        cerrarVisor();
    }

});


/* ============================= */
/* TECLADO */
/* ============================= */

document.addEventListener("keydown", (event) => {

    if (!visorGaleria.classList.contains("activo")) {
        return;
    }

    if (event.key === "Escape") {
        cerrarVisor();
    }

    if (event.key === "ArrowLeft") {
        visorAnterior.click();
    }

    if (event.key === "ArrowRight") {
        visorSiguiente.click();
    }

});