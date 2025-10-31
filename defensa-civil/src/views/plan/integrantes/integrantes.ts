import { cardContainer } from "../../../components/cardContainer/cardContainer";
import { cardPersona } from "../../../components/lista-cards/cards-lista-persona";
import { crearTitulo } from "../../../components/titulo/titulo"
import { fetchFamilia } from "../../../services/get-familia";

import type { Persona } from "../../../services/get-familia";

import "../../../styles/integrantes.css"


export const integrantes = async() => {
    
    const main = document.createElement("main");
    
    const titulo = crearTitulo("Integrantes de la familia", "Información base de los integrantes de la familia");

    //boton para agregar integrantes
    const agregar = document.createElement("button");

    // contenedor de tarjetas de cada integrante
    const contenedorCard = cardContainer();

    // try y catch que agrega tarjetas de cada integrante de la familia al contenedor de tarjetas
    try {
        const familia = await fetchFamilia(1);
        const personas = familia.Personas;
        personas.forEach( ( persona: Persona ) => {
            const tarjeta = cardPersona({
                name: persona.NombresApellidos,
                rol: persona.Parentesco,
                id: persona.NumeroDocumento,
                number: persona.Celular,
                birthday: persona.FechaNacimiento,
                blood: persona.GrupoSanguineo
            })

            contenedorCard.append(tarjeta)
        })
    } catch {
        contenedorCard.append("No se logró insertar informacion")
    }


    // texto del boton de agregar integrante
    agregar.textContent = "+ Agregar Integrante";


    // asignar clases
    main.classList.add("main__integrantes");
    titulo.classList.add("integrantes__titulo");
    agregar.classList.add("integrantes__boton");

    // meter elementos al main
    main.append(titulo,agregar,contenedorCard);

    return main

}