import "./header.css"


export const crearHeader = () => {

    // crear elementos
    const header = document.createElement("header");
    const logo = document.createElement("div");
    const titulo = document.createElement("h3");
    
    // añadir texto al nodo titulo
    titulo.textContent = "Plan Familiar de Emergencia";
    
    // asignar clases
    header.classList.add("header");
    logo.classList.add("header__logo");
    titulo.classList.add("header__titulo")

    // emparentar objetos
    header.appendChild(logo);
    header.appendChild(titulo);
    
    return header
}

