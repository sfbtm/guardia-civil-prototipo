

import "../../styles/style.css";

export const seccionalIntro = () => {
    // crear items
    const main = document.createElement("main");
    const img = document.createElement("div");
    const titulo = document.createElement("h1");
    const boton = document.createElement("button");

    // agregar propiedades
    titulo.textContent = "Bienvenido al Plan Familiar de Emergencia!";
    boton.textContent = "Continuar";

    // agregar clases
    main.classList.add("main__seccional")
    img.classList.add("image");
    titulo.classList.add("titulo");
    boton.classList.add("boton");

    // emparentar elementos
    main.appendChild(img);
    main.appendChild(titulo);
    main.appendChild(boton);
    return main
};