import "./titulo.css"

export const crearTitulo = (titulo: string, subTitulo: string) => {
    const tituloContainer = document.createElement("div")
    const tituloNodo = document.createElement("h3");
    const subTituloNodo = document.createElement("p");

    // agregar textcontents
    tituloNodo.textContent = titulo;
    subTituloNodo.textContent = subTitulo;

    // asignar clases
    tituloContainer.classList.add("titulo-contenedor");
    tituloNodo.classList.add("titulo-contenedor__titulo");
    subTituloNodo.classList.add("titulo-contenedor__subtitulo");

    tituloContainer.append(tituloNodo,subTituloNodo);

    return tituloContainer;
}