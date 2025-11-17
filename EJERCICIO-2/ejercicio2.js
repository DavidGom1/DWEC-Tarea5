// EJERCICIO 2

// Punto 1
const cuerpo = document.querySelector('body');      // Capturo el body en cuerpo
const cabecera = document.createElement('header');  // Creo header para meter el title
const titulo = document.createElement('h1');        // Creo title dentro de titulo
titulo.innerText = "EJERCICIO DAVID GÓMEZ LOZANO";            // Le pongo mi nombre dentro
cabecera.appendChild(titulo);                       // Meto el title en el header
cuerpo.appendChild(cabecera);                       // Meto el header en el body

// Punto 2
const contenedorPrincipal = document.createElement('main'); // Creo el main para contener todo
const seccionProductos = document.createElement('section'); // Creo el section donde iran productos
seccionProductos.className = 'articulos';

datos.forEach(producto => {
    const articulo = document.createElement('article');
    articulo.className = 'articulo'
    const nombre = document.createElement('p');
    const descripcion = document.createElement('p');
    const precio = document.createElement('p');
    const imagen = document.createElement('img');
    nombre.innerText = producto.nombre;
    nombre.className = 'name';
    articulo.appendChild(nombre);
    descripcion.innerText = producto.descripcion;
    articulo.appendChild(descripcion);
    precio.innerText = producto.precio + ' €';
    articulo.appendChild(precio);
    imagen.src = producto.imagen;
    articulo.appendChild(imagen);
    seccionProductos.appendChild(articulo);
    console.log(producto);
});
contenedorPrincipal.appendChild(seccionProductos);
cuerpo.appendChild(contenedorPrincipal);