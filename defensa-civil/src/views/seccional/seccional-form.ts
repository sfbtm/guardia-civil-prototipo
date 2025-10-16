import "../../styles/seccional-form.css"
import { crearTitulo } from "../../components/titulo/titulo";

export const seccionalForm = () => {
    
    const main = document.createElement("main");

    const form = document.createElement("form");

    const boton = document.createElement("button");

    // dar contenido de texto al boton
    boton.textContent = "Continuar";

    // asignar clases
    main.classList.add("main__seccional-form");
    form.classList.add("form__seccional-form")
    boton.classList.add("boton","boton--seccional")

    // agregar titulo
    const titulo = crearTitulo(
        "Identificacion de la familia",
        "Llene los datos con la informacion de la familia"
    )

    main.appendChild(titulo);
    main.appendChild(form);

    
    

    // lista de valores para cada label de input
    const valores = ["SECCIONAL:","Familia Segura N°:","Nombre de la familia:","Dirección:","Barrio - comuna - localidad:","Telefono fijo:","Calidad de la vivienda (Arriendo/propietario):"]

    // contado para asignarle un id a cada input
    let cont = 1;

    // bucle que crea los inputs con sus campos
    valores.forEach((valor) => {

        // creacion de cada elemento
        const contenedorCampo = document.createElement("div");
        const campo = document.createElement("label");
        const input = document.createElement("input");

        //valor de texto para campo
        campo.textContent = valor;

        // asignando IDs y for 
        input.id = `campo${cont}`
        campo.htmlFor = input.id;

        //asignando clases
        contenedorCampo.classList.add("contenedor-input");
        campo.classList.add("contenedor-input__label");
        input.classList.add("contenedor-input__input")

        // condicional que valide si el campo es el de "seccional" (Ese en especifico va con fondo azul)
        if (valor == valores[0]){
            contenedorCampo.classList.add("contenedor-input--seccional")
            campo.classList.add("contenedor-input__label--seccional")
            input.classList.add("contenedor-input__input--seccional")
        }

        // emparentando elementos
        contenedorCampo.append(campo,input);
        form.appendChild(contenedorCampo);

        cont++
    })

    main.appendChild(boton)

    return main;
}