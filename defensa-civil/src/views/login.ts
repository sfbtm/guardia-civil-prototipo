import "../styles/login.css"

export const renderLogin = () => {
    const main = document.createElement("main");
    const loginContainer = document.createElement("div");

    const loginImg = document.createElement("div");
    const titulo = document.createElement("h1");
    const subtTitulo = document.createElement("h3");
    const form = document.createElement("form");

    const inputNombre = document.createElement("input");
    const inputContrasena = document.createElement("input");
    const loginBoton = document.createElement("a");

    const recuperarContrasena = document.createElement("a");

    // Asignar propiedades

    titulo.textContent = "Bienvenido";
    subtTitulo.textContent = "Inicie sesión";
    
    inputNombre.placeholder = "Correo electrónico";
    inputContrasena.placeholder = "Contraseña";

    loginBoton.textContent = "Ingresar";
    loginBoton.href = "/seccional/intro";
    loginBoton.dataset.link = ""

    recuperarContrasena.textContent = "¿Olvidaste tu contraseña?";

    // Asignar clases

    main.classList.add("main__login")
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

    // Agregar loginContainer al DOM
    main.appendChild(loginContainer)

    return main;
}