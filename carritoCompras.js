// Función para buscar un producto en el carrito

function buscarProducto(consulta) {
    return carrito.find(producto => producto.includes(consulta));   
  }


// Función para filtrar productos en el carrito

function filtrarProductos(consulta) {
    return carrito.filter(producto => producto.includes(consulta));
  }

