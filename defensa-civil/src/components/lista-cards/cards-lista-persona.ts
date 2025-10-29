import { cardListaBase } from "./cards-lista-base"
import { insIcono } from "../../helpers/insertar-icono";

import "./card-lista-personas.css"

type PersonaCard = {
    name: string, 
    rol: string,
    id: string,
    number: string,
    birthday: string,
    blood: string,
}


export const cardPersona = ( persona : PersonaCard ) => {

    // Si falta un dato en la tarjeta, acá se marca como "N/A" en vez de aparecer un espacio vacío
    (Object.keys(persona) as (keyof PersonaCard)[]).forEach(clave => {
        if (persona[clave] == ""){
            persona[clave] = "N/A"
        }
    })

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
    const nombre =  document.createElement("a");
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
    nombre.append(persona.name);
    nombre.href = `/integrantes/${persona.id}`
    nombre.dataset.link = ""

    parentesco.append(insIcono("people-roof"),persona.rol);
    info.append(insIcono("id-card"), persona.id);
    numero.append(insIcono("phone"),persona.number);
    nacimiento.append(insIcono("cake-candles"),persona.birthday),
    sangre.append(persona.blood);

    card.append(cardHeader,cardDetails)

    return card;
}