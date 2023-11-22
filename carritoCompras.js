let carritoCompras = ["Elemento1", "Elemento2", "Elemento3"]

const agregarElemento = (array, elemento) => {
    array.push(elemento)
    console.log("El elemento " + elemento + " se ha agregado al carrito")
}

let array = [2, 3, 4, 5, 60]

const listarProductos = (array) =>{
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

listarProductos(array)

// Función para buscar un producto en el carrito

function buscarProducto(consulta) {
    return carrito.find(producto => producto.includes(consulta));   
  }


// Función para filtrar productos en el carrito

function filtrarProductos(consulta) {
    return carrito.filter(producto => producto.includes(consulta));
  }