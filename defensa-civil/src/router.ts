import { renderLogin } from "./views/login";
import { seccionalIntro } from "./views/seccional/seccional-intro";
import { crearHeader } from "./components/header/header";
import { seccionalForm } from "./views/seccional/seccional-form";
import { seccionalGeo } from "./views/seccional/seccional-geo";
import { planMenu } from "./views/plan/plan-menu";
import { integrantes } from "./views/plan/integrantes/integrantes";
import { integrantePage } from "./views/plan/integrantes/integrante-page";

// Funcion encargada de procesar la navegacion, actualizando el historial del window y ejecutando la funcion para renderizar la vista
// Param: MouseEvent
const navigate = async(event: MouseEvent) => {
    event.preventDefault();
    // Se trata como un HTMLAnchorElement 
    const target = event.target as HTMLAnchorElement;
    if (!target || !target.href) return;
    // Se quita el comportamiento por defecto del elemento del evento
    event.preventDefault();
    window.history.pushState({},"",target.href);
    await handleLocation();
}
// Tipo de funcion que dibuja cada vista
type RouteFunction = ( param: Record<string, string> ) => HTMLElement | Promise<HTMLElement>

// Objeto ruta, contiene la ruta en expresion regular, la funcion de la vista y el nombre de la ruta
type Route = {
    path: RegExp;
    view: RouteFunction;
    name: string;
}

const routes: Route[] = [
    { path: /^\/login$/, view: renderLogin, name: "login" },
    { path: /^\/seccional\/intro$/, view: seccionalIntro, name: "seccional-intro" },
    { path: /^\/seccional\/form$/, view:seccionalForm, name: "seccional-form" },
    { path: /^\/seccional\/geolocalizacion$/, view:seccionalGeo, name: "seccional-geo" },
    { path: /^\/plan-familiar-emergencia\/menu$/, view: planMenu, name: "plan-menu" },
    { path: /^\/plan-familiar-emergencia\/integrantes$/, view: integrantes, name: "plan-menu" },
    { path: /^\/plan-familiar-emergencia\/integrantes\/integrante\/(?<id>[a-zA-Z0-9]+)$/, view: (params) => integrantePage(params?.id), name: "integrante-page"}
]

// Funcion encargada de dibujar cada vista
const handleLocation = async() => {
    
    const path = window.location.pathname; // Obtener la ruta nueva
    const app = document.getElementById("app")!; //Obtener el contenedor principal (app)
    
    let routeMatch: RegExpExecArray | null = null;
    let selectedRoute: Route | undefined;

    // bucle que buscará todas las coincidencias de rutas
    for (const route of routes){
        routeMatch = route.path.exec(path);
        if (routeMatch){
            selectedRoute = route;
            break;
        }
    }

    // usar la ruta seleccionada, o usar la ruta pasada si no hay coincidencias
    const routeFn = selectedRoute?.view || routes[routes.length - 1].view;

    // extraer los parametros dinamicos
    const params = routeMatch?.groups || {};

    

    // Validacion para dibujar el header
    console.log(path)
    
    app.innerHTML = "";
    if (path != "/login" && path != "/"){
        console.log("XD")
        app.appendChild(crearHeader())
    }
    app.appendChild(await routeFn(params));
}



// Funcion para arrancar el enrutador. Usada en el main.ts
export const initRouter = async() => {
    window.onpopstate = handleLocation;
    
    document.addEventListener("click", (e) => {
        const target = e.target as HTMLAnchorElement;
        if (target.matches("[data-link]")){
            navigate(e)
        }
    
    })
    
    await handleLocation();
}
