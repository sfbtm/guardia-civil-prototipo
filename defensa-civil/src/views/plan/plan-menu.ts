import { crearBotonOpcion } from "../../components/boton-opciones/opcion-btn";
import { fetchFamilia } from "../../services/get-familia";
import "../../styles/plan-menu.css"




export const planMenu = async() => {
    
    const contenedor = document.createElement("div");
    const grid_contenedor = document.createElement("div");
    const main = document.createElement("main");
    const titulo = document.createElement("h3");
    const boton = document.createElement("button");

    contenedor.append(titulo, boton);
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
    main.append(contenedor, grid_contenedor);
    contenedor.classList.add("plan-menu-header");
    grid_contenedor.classList.add("plan-menu-grid-contenedor");

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
        const botonOpcion = crearBotonOpcion(contenido.icono,contenido.texto, `/plan-familiar-emergencia/${contenido.ruta}`)
        grid_contenedor.appendChild(botonOpcion);
    })


    return main
}