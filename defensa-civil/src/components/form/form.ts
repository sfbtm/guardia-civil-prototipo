import { insIcono } from "../../helpers/insertar-icono";
import "./form.css"

type FormInput = {
    icono: string;
    placeholder: string;
    type: string;
    group?: string; //atributo group, para agrupar dos o mas inputs en un container (Sirve para estilizar)
}

type Form = FormInput[]


export const crearForm = (form: Form) => {

    const formulario = document.createElement("form");
    formulario.classList.add("form")

    form.forEach(campo => {
        // crear elementos del input 
        const input = document.createElement("input");
        const icon = insIcono(`${campo.icono}`)
        const inputContainer = document.createElement("div");

        input.placeholder = campo.placeholder
        input.type = campo.type

        inputContainer.classList.add("form__container")
        input.classList.add("form__container__input");
        icon.classList.add("form__container__icon");
        
        
        inputContainer.append(icon,input)
        
        if (campo.group) {
            if (formulario.querySelector(`.form--${campo.group}`)){

                const groupContainer = formulario.querySelector(`.form--${campo.group}`)!;
                groupContainer.append(inputContainer)

                
            } else {
                const groupContainer = document.createElement("div");
                groupContainer.classList.add(`form--${campo.group}`)
                groupContainer.append(inputContainer)
                formulario.append(groupContainer)
            }

            inputContainer.classList.add(`form--${campo.group}__container`)
            input.classList.add(`form--${campo.group}__container__input`);
            icon.classList.add(`form--${campo.group}__container__icon`);
            
        } else {

            formulario.append(inputContainer)
        }
        
    })


    return formulario
}