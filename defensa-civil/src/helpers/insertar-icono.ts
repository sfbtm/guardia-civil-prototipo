export const insIcono = ( nombreIcono: string ) => {
    const icono = document.createElement("i");
    icono.classList.add(`fa-solid`, `fa-${nombreIcono}`);
    return icono

}