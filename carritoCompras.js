let productos = ['Remera', 'Anteojos', 'Gorra', 'Short', 'Zapatillas', 'Jean'];

let elemento = "Campera"

const agregarElemento = (array, elemento) => {
    array.push(elemento)
    console.log("El elemento " + elemento + " se ha agregado al carrito")
}
agregarElemento(productos, elemento)

let array = [2, 3, 4, 5, 60]

const listarProductos = (array) =>{
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
listarProductos(productos)

// Función para buscar un producto en el carrito

function buscarProducto(array, consulta) {
    return console.log(array.find(array => array.includes(consulta)));   
  }

buscarProducto(productos, "Remera")

// Función para filtrar productos en el carrito

function filtrarProductos(array, consulta) {
    return console.log(array.filter(producto => producto.includes(consulta)));
  }
filtrarProductos(productos, elemento)