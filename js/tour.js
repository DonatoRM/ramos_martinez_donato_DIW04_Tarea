let estadoMenu = false;
const botonHamburguesa = document.getElementById("botonMenu");
const menuDesplegable = document.getElementById("menuDesplegable");
const accionMenu = () => {
    this.event.preventDefault();
    if (estadoMenu == false) {
        menuDesplegable.classList.toggle("abrirMenu");
        estadoMenu = true;
    } else {
        menuDesplegable.classList.toggle("cerrarMenu");
        estadoMenu = false;
    }
};
botonHamburguesa.addEventListener("click", accionMenu);
