const CONFIG = {

    whatsapp: "5491140699159",

    tiktok: "goplarg",

    email: "ejemplo@gmail.com"

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