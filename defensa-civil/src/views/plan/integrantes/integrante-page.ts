import { crearForm } from "../../../components/form/form";
import { crearTitulo } from "../../../components/titulo/titulo";

export const integrantePage = async(id: string) => {
    const main = document.createElement("main");
    const titulo = crearTitulo("Integrante de la familia", "Llene los datos con la informacion del integrante")
    main.append(titulo)

    const form = [
        {icono: "user",placeholder: "Nombres y Apellidos",type: "text"},
        {icono: "id-card-clip", placeholder: "Tipo", type: "text", group: "documento"},
        {icono: "hashtag", placeholder: "Documento", type: "text", group: "documento"},
        {icono: "cake-candles", placeholder: "Edad", type: "text", group: "edad-sangre"},
        {icono: "droplet", placeholder: "Grupo Sanguíneo", type: "text", group: "edad-sangre"},
        {icono: "people-roof", placeholder: "Parentesco", type: "text"},
        {icono: "notes-medical", placeholder: "EPS", type: "text", group: "eps-celular"},
        {icono: "phone", placeholder: "Celular", type: "text", group: "eps-celular"},
        {icono: "earth-americas", placeholder: "Nacionalidad", type: "text"},
        {icono: "suitcase-medical", placeholder: "Enfermedad, discapacidad o alergia", type: "text"},
    ];

    const formulario = crearForm(form)

    main.append(formulario)

    return main
}