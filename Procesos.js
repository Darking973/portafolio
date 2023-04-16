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