import "../../styles/seccional-geo.css"

import { crearTitulo } from "../../components/titulo/titulo";
import { botonContinuar } from "../../components/boton-continuar/boton-continuar";


export const seccionalGeo = () => {

// creacion de elementos
    const titulo = crearTitulo("Geolocalizacion","Ubique en el mapa la ubicacion del hogar de la familia");
    const main = document.createElement("main");
    const nota = document.createElement("p");
    const boton = botonContinuar("/plan-familiar-emergencia/menu")

    //Placeholder donde debe ir un mapa mientras se decide que tecnologia usar (Google maps, earth, alternativas gratis)
    const mapaPlaceholder = document.createElement("div");
    "DEBE SER DISCUTIDO"

    main.classList.add("main__seccional-geo")
    nota.classList.add("seccional-geo__nota");
    mapaPlaceholder.classList.add("seccional-geo__placeholder")

// dar contenido a la nota 
    nota.textContent = "*Indique en el lugar en donde se encuentra la familia y el sistema le indicara las coordenadas exactas";

//añadir todo a main
    main.append(titulo,nota,mapaPlaceholder,boton)

    return main;

}