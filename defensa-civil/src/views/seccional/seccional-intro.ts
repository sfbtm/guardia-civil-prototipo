
import "../../styles/seccional-intro.css";

export const seccionalIntro = () => {
    // crear items
    const main = document.createElement("main");
    const img = document.createElement("div");
    const titulo = document.createElement("h1");
    const boton = document.createElement("a"); 

    // agregar propiedades
    titulo.textContent = "Bienvenido al Plan Familiar de Emergencia!";

    boton.textContent = "Continuar";
    boton.href = "/seccional/form";
    boton.dataset.link = "";

    // agregar clases
    main.classList.add("main__seccional-intro")
    img.classList.add("image");
    titulo.classList.add("titulo");
    boton.classList.add("seccional-intro__boton");

    // emparentar elementos
    main.appendChild(img);
    main.appendChild(titulo);
    main.appendChild(boton);

    return main
};