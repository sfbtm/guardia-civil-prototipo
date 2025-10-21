import { cardPersona } from "../../components/lista-cards/cards-lista-persona";
import { crearTitulo } from "../../components/titulo/titulo"

const jose = {
    name: "jose",
    rol: "papa",
    age: 49,
    number: "000-000-000",
    medicine: "pan",
    blood: "a+"
}

export const integrantes = () => {

    const main = document.createElement("main");

    const tarjetaJose = cardPersona(jose)

    const titulo = crearTitulo("Integrantes de la familia", "Información base de los integrantes de la familia");

    const agregar = document.createElement("button");
    agregar.textContent = "+ Agregar Integrante";

    main.classList.add("main__integrantes");
    titulo.classList.add("integrantes__titulo");
    agregar.classList.add("integrantes__boton");

    main.append(titulo,agregar,tarjetaJose);

    return main

}