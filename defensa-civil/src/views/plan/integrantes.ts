import { cardPersona } from "../../components/lista-cards/cards-lista-persona";
import { crearTitulo } from "../../components/titulo/titulo"

const jose = {
    name: "Jose Diaz",
    rol: "papa",
    id: "1234556",
    number: "000-000-000",
    birthday: "23/09/22",
    blood: "A+"
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