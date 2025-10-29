import { crearBotonOpcion } from "../../components/boton-opciones/opcion-btn"
import { navigateTo } from "../../router";
import { fetchFamilia } from "../../services/get-familia";




export const planMenu = async() => {
    
    const main = document.createElement("main");
    const titulo = document.createElement("h3");
    const boton = document.createElement("button");
    
    
    // fetchear la familia (Solo funciona como prueba, esto lo debe hacer la BD en parte)
    // la arquitectura es ineficiente, pues no actualiza los datos de cada vista. Uso completamente estético. DEBE SER CAMBIADO TAN PRONTO SE PUEDA
    try {
        const familia = await fetchFamilia(1);
        titulo.textContent = `Familia ${familia.FamiliaNombre}`
    }
    catch {
        titulo.textContent = "Nombre no cargado"
    }

    boton.textContent = "Ver PDF"

    main.classList.add("main__plan-menu");
    titulo.classList.add("plan-menu__titulo");
    boton.classList.add("plan-menu__boton")
    main.append(titulo, boton);

    // array que contiene iconos y texto correspondiente para meterlos a cada boton
    const contenidosBoton = [
        {icono: "user-plus", texto: "Integrantes", ruta: "integrantes"},
        {icono: "paw", texto: "Mascotas o animales", ruta: "mascotas"},
        {icono: "triangle-exclamation", texto: "Factores de Riesgo", ruta: "factores-de-riesgo"},
        {icono: "hand-holding-medical", texto: "Recursos Disponibles", ruta: "recursos-disponibles"},
        {icono: "house", texto: "Grafico de la vivienda", ruta: "grafico-vivienda"},
        {icono: "sheet-plastic", texto: "Plan de Accion", ruta: "plan-accion"},
        {icono: "mountain", texto: "Grafico del Entorno", ruta: "grafico-entorno"},
    ]

    // Bucle que crea un boton por cada 
    contenidosBoton.forEach(contenido => {
        const botonOpcion = crearBotonOpcion(contenido.icono,contenido.texto)
        main.appendChild(botonOpcion);

        // Añadir evento al boton
        botonOpcion.addEventListener("click", () => {
            navigateTo(contenido.ruta)
        })
    })


    return main
}