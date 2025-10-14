import "../styles/login.css"

import { navigateTo } from "../router";

import { crearHeader } from "../components/header/header";

export const renderLogin = (app: HTMLElement) => {
    const main = document.createElement("main");
    const loginContainer = document.createElement("div");

    const loginImg = document.createElement("div");
    const titulo = document.createElement("h1");
    const subtTitulo = document.createElement("h3");
    const form = document.createElement("form");

    const inputNombre = document.createElement("input");
    const inputContrasena = document.createElement("input");
    const loginBoton = document.createElement("button");

    const recuperarContrasena = document.createElement("a");

    // Asignar propiedades

    titulo.textContent = "Bienvenido";
    subtTitulo.textContent = "Inicie sesión";
    
    inputNombre.placeholder = "Correo electrónico";
    inputContrasena.placeholder = "Contraseña";
    loginBoton.textContent = "Ingresar";

    recuperarContrasena.textContent = "¿Olvidaste tu contraseña?";

    // Asignar clases

    loginContainer.classList.add("login-container");
    loginImg.classList.add("login-img");
    titulo.classList.add("titulo");
    subtTitulo.classList.add("subtitulo");
    form.classList.add("form-login");
    inputNombre.classList.add("input-login");
    inputContrasena.classList.add("input-login");
    loginBoton.classList.add("btn-login");
    recuperarContrasena.classList.add("login-remember");

    // Agregar elementos al login container
    loginContainer.appendChild(loginImg);
    loginContainer.appendChild(titulo);
    loginContainer.appendChild(subtTitulo);
    loginContainer.appendChild(form);
    loginContainer.appendChild(recuperarContrasena);
    
    form.appendChild(inputNombre);
    form.appendChild(inputContrasena);
    form.appendChild(loginBoton);

    loginContainer.appendChild(loginBoton);

    crearHeader(app);

    // Agregar loginContainer al DOM
    main.appendChild(loginContainer)
    app.appendChild(main);

    // Agregar listener al boton para ir a otra pagina
    loginBoton.addEventListener("click", (e) => {
        navigateTo("/seccional-intro")
    })
}