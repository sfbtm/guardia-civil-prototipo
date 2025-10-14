import { crearHeader } from "../../components/header/header";
import "../../styles/style.css";

export const seccionalIntro = (app: HTMLElement) => {
    // crear items
    const img = document.createElement("div");
    const titulo = document.createElement("h1");
    const boton = document.createElement("button");

    // agregar propiedades
    titulo.textContent = "Bienvenido al Plan Familiar de Emergencia!";
    boton.textContent = "Continuar";

    // agregar clases
    img.classList.add("image");
    titulo.classList.add("titulo");
    boton.classList.add("boton");
};