import { cardListaBase } from "./cards-lista-base"
import { insIcono } from "../../helpers/insertar-icono";

import "./card-lista-personas.css"

type Persona = {
    name: string, 
    rol: string,
    id: string,
    number: string,
    birthday: string,
    blood: string,
}


export const cardPersona = (
    {name, rol, id, number, birthday, blood} : Persona 

) => {

    const card = cardListaBase();
    // agregar modificador BEM a la tarjeta
    card.classList.add("card-lista-base--persona");

    // Secciones de la tarjeta
    const cardHeader = document.createElement("div");
    const cardDetails = document.createElement("div");

    // añadir clases a las secciones
    cardHeader.classList.add("card-lista-base--persona__header");
    cardDetails.classList.add("card-lista-base--persona__details");

    // elementos de la tarjeta
    const nombre =  document.createElement("p");
    const parentesco =  document.createElement("p");
    const info = document.createElement("p");
    const numero = document.createElement("p");
    const nacimiento = document.createElement("p");
    const sangre = document.createElement("p");
    const sangreCaja = document.createElement("div")

    // agregar clase para nombre y sangre
    nombre.classList.add("card-lista-base__name")
    sangreCaja.classList.add("card-lista-base--persona__blood-contenedor")
    sangre.classList.add("card-lista-base--persona__blood")

    sangreCaja.appendChild(sangre)

    // meter los elementos en su seccion correspondiente
    cardHeader.append(nombre,sangreCaja);
    cardDetails.append(info,parentesco,numero,nacimiento);

    // Informacion de cada elemento
    nombre.append(name);
    parentesco.append(insIcono("people-roof"),rol);
    info.append(insIcono("id-card"), id);
    numero.append(insIcono("phone"),number);
    nacimiento.append(insIcono("cake-candles"),birthday),
    sangre.append(blood);

    card.append(cardHeader,cardDetails)

    return card;
}