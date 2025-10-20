import "./opcion-btn.css"


export const crearBotonOpcion = ( icono: string, texto: string ) => {

    // Importar contenidos del boton
    const boton = document.createElement("button");
    const img = document.createElement("i"); 
    const contenido = document.createElement("p");

    contenido.textContent = texto;
    boton.append(img,contenido);
    img.classList = `fa-solid fa-${icono} opcion-btn__texto`;
    
    boton.classList.add("opcion-btn__button");
    contenido.classList.add("opcion-btn__texto")


    return boton;
}