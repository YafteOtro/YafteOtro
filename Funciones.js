function agregar(){
    //prompt('Nombre de la pelicula:');
    let nompeli = prompt('Nombre de la pelicula');
    //alert (nompeli);
    let calif = prompt('Calificacion:');
    //alert (calif);
    let direcc = prompt('URL de la Portada de la pelicula:');
    //alert (url);
}

//Cambio de imagenes
let foto = document.querySelectorAll('.Fn');
foto[0].addEventListener('mouseover', ()=>{cambiar("imgp/Codigo enigma.jpg", "Enigma")});
foto[1].addEventListener('mouseover', ()=>{cambiar("imgp/Hidden Figures.jpg" , "Hidden")});
foto[2].addEventListener('mouseover', ()=>{cambiar("imgp/Enemigos.jpg", "Enemigos")});
foto[3].addEventListener('mouseover', ()=>{cambiar("imgp/Bastardos.jpg", "Bastardos")});
foto[4].addEventListener('mouseover', ()=>{cambiar("imgp/Cars.jpg", "Cars")});

function cambiar(ruta, titulos){
    let imagenMatrix = document.querySelector('#Catalogo');
    imagenMatrix.src = ruta;

    let cabecera = document.querySelector('#cabecera');
    cabecera.textContent = titulos;
}
