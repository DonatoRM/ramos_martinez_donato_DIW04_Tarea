const botonHamburguesa = document.getElementById("botonMenu");
const menuDesplegable = document.getElementById("menuDesplegable");
const abrirMenu = () => {
    this.event.preventDefault();
    menuDesplegable.classList.toggle("abrirMenu");
};
botonHamburguesa.addEventListener("click", abrirMenu);
