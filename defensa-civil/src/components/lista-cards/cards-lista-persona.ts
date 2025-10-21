import { cardListaBase } from "./cards-lista-base"
import { insIcono } from "../../helpers/insertar-icono";

type Persona = {
    name: string, 
    rol: string,
    age: number,
    number: string,
    medicine: string | false,
    blood: string
}

export const cardPersona = (
    {name, rol, age, number, medicine, blood} : Persona 

) => {

    const card = cardListaBase();

    const nombre =  document.createElement("p");
    const info = document.createElement("p");
    const numero = document.createElement("p");
    const medicamento = document.createElement("p");
    const sangre = document.createElement("p");

    nombre.textContent = name;
    info.textContent = `${rol}, ${age} años`;
    numero.textContent = number;

    if (medicine){
        medicamento.textContent = medicine;
        medicamento.appendChild(insIcono("prescription-bottle-medical"))

    }

    sangre.textContent = blood;

    card.append(nombre,info,numero,medicamento,sangre)

    return card;
}