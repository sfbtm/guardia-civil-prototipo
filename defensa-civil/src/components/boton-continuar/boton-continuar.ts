import "./boton-continuar.css"

// funcion que crea un boton para continuar a otro sitio
// el boton es una etiqueta <a> estilizada como boton, por semantica

export const botonContinuar = (href: string, texto: string = "Continuar",) => {

    //crear elementos
    const boton = document.createElement("a");
    boton.textContent = texto;
    boton.href = href;
    boton.dataset.link = "";

    boton.classList.add("boton-continuar")

    return boton
}