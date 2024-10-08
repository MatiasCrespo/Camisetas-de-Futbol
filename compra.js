/*Primer Funcionalidad*/
const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('producto');

// Definir productos
const productos = {
    argentinaTitular: {
        imagen: './img/Arg titular.webp',
        descripcion: 'Selección Argentina Titular',
        precio: 70000
    },
    argentinaSuplente: {
        imagen: './img/Arg suplente.webp',
        descripcion: 'Selección Argentina Suplente',
        precio: 70000
    },
    argentinaEntrenamiento: {
        imagen: './img/Arg entrenamiento.webp',
        descripcion: 'Selección Argentina Entrenamiento',
        precio: 65000
    },
    river: {
        imagen: './img/River.webp',
        descripcion: 'River Plate',
        precio: 90000
    },
    boca: {
        imagen: './img/Boca.webp',
        descripcion: 'River Plate',
        precio: 60000
    },
    independiente: {
        imagen: './img/independiente.webp',
        descripcion: 'Independiente',
        precio: 55000
    },
    racing: {
        imagen: './img/Racing.webp',
        descripcion: 'Racing',
        precio: 55000
    },
    sanLorenzo: {
        imagen: './img/San Lorenzo.webp',
        descripcion: 'San Lorenzo',
        precio: 60000
    },
    realMadrid: {
        imagen: './img/Real Madrid.webp',
        descripcion: 'Real Madrid',
        precio: 80000
    },
    barcelona: {
        imagen: './img/Barcelona.webp',
        descripcion: 'Barcelona',
        precio: 75000
    },
    arsenal: {
        imagen: './img/Arsenal.webp',
        descripcion: 'Arsenal',
        precio: 50000
    },
    bayernMunich: {
        imagen: './img/Bayern Munich.webp',
        descripcion: 'Bayern Munich',
        precio: 60000
    },
    manchesterCity: {
        imagen: './img/Manchester City.webp',
        descripcion: 'Manchester City',
        precio: 65000
    },
};

const productoSeleccionado = productos[productoId];


if (productoSeleccionado) {
    document.getElementById('imagen-camiseta').src = productoSeleccionado.imagen;
    document.getElementById('descripcion-camiseta').textContent = productoSeleccionado.descripcion;
    
// Segunda Funcionalidad
    const precioSinImpuesto = productoSeleccionado.precio;
    const impuesto = 21;
    const multiplicacion = (precioSinImpuesto * (impuesto/100));
    const preciofinal =  precioSinImpuesto + multiplicacion;


    document.getElementById('precio-sin-impuesto').textContent = `Precio: $${precioSinImpuesto}`;
    document.getElementById('precio-con-impuesto').textContent = `Precio con impuesto: $${preciofinal}`;
} 
