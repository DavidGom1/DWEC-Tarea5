// EJERCICIO 1

// Punto 1
const titulo = document.getElementById('titulo');
titulo.innerText = 'David Gómez Lozano';

// Punto 2
const seccionNoticias = document.getElementById('noticias');
const primeraFila = seccionNoticias.children[0];
const segundaNoticia = primeraFila.children[1];
const imagenSegundaNoticia = segundaNoticia.querySelector('img');
imagenSegundaNoticia.src = 'noticia1.jpg';

// Punto 3
const segundaFila = seccionNoticias.children[1];
const ultimoArticulo = segundaFila.lastElementChild;
ultimoArticulo.style.visibility = "hidden";
console.log(ultimoArticulo);

// Punto 4
const articulos = seccionNoticias.querySelectorAll('article');
let numArticulo = 1;
articulos.forEach(element => {
    element.firstElementChild.innerText = numArticulo + ' - ' + element.firstElementChild.innerText;
    numArticulo++;
});

// Punto 5
articulos.forEach(element =>{
    element.firstElementChild.className = "cabecera";
});

// Punto 6
articulos.forEach(element =>{
    element.children[1].innerText = element.children[1].innerText.replace( "Servicio Murciano de Salud", "S.M.S");
});
