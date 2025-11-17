// EJERCICIO 3

// Referencia al cuerpo del documento y carga inicial desde localStorage
const cuerpo = document.querySelector('body');
let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

// Contenedores principales de la interfaz
const contenedorPrincipal = document.createElement('main');
const contenedorRegistro = document.createElement('div');
contenedorRegistro.id = "registro";

// Controles del formulario de registro
const nombreForm = document.createElement('input');
nombreForm.type = 'text';
nombreForm.placeholder = 'Nombre';
const apellidoForm = document.createElement('input');
apellidoForm.type = 'text';
apellidoForm.placeholder = 'Apellido';
const botonAñadir = document.createElement('button');
botonAñadir.innerText = 'Añadir';
const botonEliminar = document.createElement('button');
botonEliminar.innerText = 'Eliminar';


contenedorRegistro.appendChild(nombreForm);
contenedorRegistro.appendChild(apellidoForm);
contenedorRegistro.appendChild(botonAñadir);
contenedorRegistro.appendChild(botonEliminar);

// Tabla donde se mostrarán los usuarios almacenados
const tablaUsuarios = document.createElement('table');

function crearTabla() {
    // Encabezado fijo de la tabla
    tablaUsuarios.innerHTML = '<tr><th>Nombre</th><th>Apellido</th></tr>';
    // Inserta una fila por cada usuario en memoria
    usuarios.forEach(e => {
        const nuevaLinea = document.createElement('tr');
        nuevaLinea.innerHTML = `<td>${e.nombre}</td><td>${e.apellido}</td>`;
        tablaUsuarios.appendChild(nuevaLinea);
    });
}

crearTabla();

contenedorPrincipal.appendChild(contenedorRegistro);
contenedorPrincipal.appendChild(tablaUsuarios);
cuerpo.appendChild(contenedorPrincipal);


// Gestiona el alta de usuarios
botonAñadir.addEventListener('click', () => {
    const nombre = nombreForm.value.trim();
    const apellido = apellidoForm.value.trim();
    // Comprueba si el usuario ya existe (nombre + apellido)
    const yaExiste = usuarios.some(
        u => u.nombre == nombre && u.apellido == apellido
    );

    // Validaciones de campos obligatorios
    if (!nombre && !apellido) {
        alert('ERROR: Nombre y apellidos no pueden estar vacios');
    } else if (!nombre) {
        alert('ERROR: Nombre no puede estar vacio');
    } else if (!apellido) {
        alert('ERROR: Apellido no puede estar vacio');
    } else if (yaExiste) {
        alert('ERROR: Ese usuario ya existe')
    } else {
        // Guarda el nuevo usuario y refresca la tabla/almacenamiento
        const nuevoUsuario = { nombre, apellido };
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        crearTabla();
        nombreForm.value = '';
        apellidoForm.value = '';
    }
});

// Gestiona la eliminación de usuarios existentes
botonEliminar.addEventListener('click', () => {
    const nombre = nombreForm.value;
    const apellido = apellidoForm.value;
    // Obtiene el índice del usuario que coincide con los datos introducidos
    // findIndex devuelve -1 cuando no se encuentra coincidencia
    const indiceBusqueda = usuarios.findIndex(
        u => u.nombre == nombre && u.apellido == apellido
    );

    // Validaciones de entrada y existencia del usuario
    if (!nombre && !apellido) {
        alert('ERROR: Nombre y apellidos no pueden estar vacios');
    } else if (!nombre) {
        alert('ERROR: Nombre no puede estar vacio');
    } else if (!apellido) {
        alert('ERROR: Apellido no puede estar vacio');
    } else if (indiceBusqueda === -1) {
        alert('ERROR: Ese usuario no existe, no se puede eliminar')
    } else {
        // Elimina el usuario encontrado y sincroniza la vista/almacenamiento
        const usuarioEliminar = usuarios[indiceBusqueda];
        usuarios.splice(indiceBusqueda, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        crearTabla();
        nombreForm.value = '';
        apellidoForm.value = '';
    }
});