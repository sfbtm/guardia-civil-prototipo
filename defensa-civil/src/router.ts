import { renderLogin } from "./views/login";
import { seccionalIntro } from "./views/seccional/seccional-intro";
import { crearHeader } from "./components/header/header";
import { seccionalForm } from "./views/seccional/seccional-form";
import { seccionalGeo } from "./views/seccional/seccional-geo";
import { planMenu } from "./views/plan/plan-menu";
import { integrantes } from "./views/plan/integrantes";

// Funcion encargada de procesar la navegacion, actualizando el historial del window y ejecutando la funcion para renderizar la vista
// Param: MouseEvent
const navigate = (event: MouseEvent) => {
    event.preventDefault();
    // Se trata como un HTMLAnchorElement 
    const target = event.target as HTMLAnchorElement;
    if (!target || !target.href) return;
    // Se quita el comportamiento por defecto del elemento del evento
    event.preventDefault();
    window.history.pushState({},"",target.href);
    handleLocation();
}
// Tipo de funcion que dibuja cada vista
type RouteFunction = () => HTMLElement

// Un objeto de rutas, con valores de las funciones RouteFunction
const routes: Record<string, RouteFunction> = {
    "/login": renderLogin,
    "/seccional-intro": seccionalIntro,
    "/seccional-form": seccionalForm,
    "/seccional-geo": seccionalGeo,
    "/plan-menu": planMenu,
    "/integrantes": integrantes,
}

// Funcion encargada de dibujar cada vista
const handleLocation = () => {
    
    const path = window.location.pathname; // Obtener la ruta nueva
    const routeFn = routes[path] || routes["/login"]; // Obtener la funcion de la vista correspondiente
    const app = document.getElementById("app")!; //Obtener el contenedor principal (app)
    // Validacion para dibujar el header
    console.log(path)
    
    app.innerHTML = "";
    if (path != "/login" && path != "/"){
        app.appendChild(crearHeader())
    }
    app.appendChild(routeFn());
}



// Funcion para arrancar el enrutador. Usada en el main.ts
export const initRouter = () => {
    
    window.onpopstate = handleLocation;
    
    document.addEventListener("click", (e) => {
        const target = e.target as HTMLAnchorElement;
        if (target.matches("[data-link]")){
            navigate(e)
        }
    
    })
    
    handleLocation();
}

// Funcion para navegar a otra ruta, sin usar un <a>
export const navigateTo = (path: string) => {
    window.history.pushState({},"",path);
    handleLocation();
}
