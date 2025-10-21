import { crearBotonOpcion } from "../../components/boton-opciones/opcion-btn"

export const planMenu = () => {

    const main = document.createElement("main");
    const titulo = document.createElement("h3");
    const boton = document.createElement("button");

// Titulo de la familia (se fetchea en una base de datos en un futuro)
    titulo.textContent = "Familia [Ejemplo]"
    boton.textContent = "Ver PDF"

    main.classList.add("main__plan-menu");
    titulo.classList.add("plan-menu__titulo");
    boton.classList.add("plan-menu__boton")
    main.append(titulo, boton);

    // array que contiene nombres de iconos para meterlos a cada boton
    const iconos = [
        {icono: "user-plus", texto: "Integrantes"},
        {icono: "paw", texto: "Mascotas o animales"},
        {icono: "triangle-exclamation", texto: "Factores de Riesgo"},
        {icono: "hand-holding-medical", texto: "Recursos Disponibles"},
        {icono: "house", texto: "Grafico de la vivienda"},
        {icono: "sheet-plastic", texto: "Plan de Accion"},
        {icono: "mountain", texto: "Grafico del Entorno"},
    ]

    iconos.forEach(objeto => {
        const boton = crearBotonOpcion(objeto.icono,objeto.texto)
        main.appendChild(boton);
    })


    return main
}