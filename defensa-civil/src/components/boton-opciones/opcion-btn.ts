import "./opcion-btn.css"


export const crearBotonOpcion = ( icono: string, texto: string, ruta: string ) => {

    // Importar contenidos del boton
    const boton = document.createElement("div");
    const img = document.createElement("i"); 
    const link = document.createElement("a");

    link.textContent = texto;
    link.href = ruta;
    link.dataset.link = ""

    boton.append(img,link);
    img.classList = `fa-solid fa-${icono} opcion-btn__texto`;
    
    boton.classList.add("opcion-btn__button");
    link.classList.add("opcion-btn__texto")


    return boton;
}