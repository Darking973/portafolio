// CREACION DEL ENCRIPTADOR
const letrasNoEncriptadas = ["e", "i", "a", "o", "u"];
const letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"]; 

function encriptador(mensaje, forma) {
    // Se utiliza el toLowerCase para convertir el texto recibido en minusculas, para su encriptacion.
    mensaje = mensaje.toLowerCase();

    if (forma == 1) {
        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
            // Se utiliza el mensaje recibido y se cambia las letras con el metodo replaceAll para cambiar las letras desencriptadas a encriptadas
            mensaje = mensaje.replaceAll(letrasNoEncriptadas[i], letrasEncriptadas[i]);
        }
    }

    else if (forma == 2) {
        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
            // Se utiliza el mensaje recibido y se cambia las letras con el metodo replaceAll para cambiar las letras desencriptadas a encriptadas
            mensaje = mensaje.replaceAll(letrasEncriptadas[i], letrasNoEncriptadas[i]);
        }
    }

    // Se retorna el mensaje nuevo
    return mensaje;
}

// DOM
const textoEntrada = document.querySelector("#textoEntrada");
const btnEncriptar = document.querySelector("#btnEncriptar");
const textoSalida = document.querySelector("#textoSalida");
const btnCopiar = document.querySelector("#btnCopiar")
const btnDesencriptar = document.querySelector("#btnDesencriptar")
const seccion2 = document.querySelectorAll(".area2")

const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const muneco = document.querySelector("#muneco");

//Boton Encriptar
btnEncriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 1);
            textoEntrada.value = "";
            textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);

// Boton Copiar
btnCopiar.addEventListener("click",
    () => {
        mostrarBranding();
        textoEntrada.value = textoSalida.value; // Copiado automatico
        textoSalida.value = ""; // Se limpia el valor del texto
    }
);

// Boton Desencriptar
btnDesencriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 2);
            textoEntrada.value = "";
            textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);


// Funciones DOM
function ocultarBranding() {
    titulo.classList.add("hide")
    parrafo.classList.add("hide")
    muneco.classList.add("hide")
    textoSalida.classList.remove("hide")
    btnCopiar.classList.remove("hide")
}

function mostrarBranding() {
    titulo.classList.remove("hide")
    parrafo.classList.remove("hide")
    muneco.classList.remove("hide")
    textoSalida.classList.add("hide")
    btnCopiar.classList.add("hide")
}