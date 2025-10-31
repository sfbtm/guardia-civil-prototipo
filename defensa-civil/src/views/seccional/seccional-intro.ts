
import { botonContinuar } from "../../components/boton-continuar/boton-continuar";
import "../../styles/seccional-intro.css";

export const seccionalIntro = () => {
    // crear items
    const main = document.createElement("main");
    const img = document.createElement("div");
    const titulo = document.createElement("h1");
    const boton = botonContinuar("/seccional/form")

    // agregar propiedades
    titulo.textContent = "Bienvenido al Plan Familiar de Emergencia!";

    // agregar clases
    main.classList.add("main__seccional-intro")
    img.classList.add("image");
    titulo.classList.add("titulo");

    // emparentar elementos
    main.appendChild(img);
    main.appendChild(titulo);
    main.appendChild(boton);

    return main
};