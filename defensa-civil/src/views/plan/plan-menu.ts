import { crearBotonOpcion } from "../../components/boton-opciones/opcion-btn"

export const planMenu = () => {

    const main = document.createElement("main");

    main.classList.add("main__plan-menu")
    const boton = crearBotonOpcion("user-plus", "XD")

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

    main.append(boton);

    return main
}