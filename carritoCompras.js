const productosCarrito = document.querySelectorAll('.producto-carrito');

productosCarrito.forEach(producto => {
    producto.addEventListener('click', eliminarProducto);
  });

  function eliminarProducto(event) {
    const productoId = event.target.dataset.id;
    const indice = carrito.findIndex(producto => producto.id === productoId);
        if (indice !== -1) {
      carrito.splice(indice, 1);
    } actualizarCarrito()
}

function actualizarCarrito(){
    console.log (carrito)
}