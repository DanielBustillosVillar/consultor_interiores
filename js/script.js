const abrirMenu = document.querySelector('#menu-open')
const cerrarMenu = document.querySelector('#menu-close')
const menu = document.querySelector('#menu')

abrirMenu.addEventListener('click',abrir)
cerrarMenu.addEventListener('click',cerrar)
/* ==============================FUNCIONES==================================== */
function abrir(){
    menu.classList.add('abierto')
}
function cerrar(){
    menu.classList.remove('abierto')
}


