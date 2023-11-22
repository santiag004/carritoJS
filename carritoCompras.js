let productos = ['Remera', 'Anteojos', 'Gorra', 'Short', 'Zapatillas', 'Jean'];
console.log("Los productos que puede elegir son: " );
 

let elemento = "Campera"
const agregarElemento = (productos, elemento) => {
    productos.push(elemento)
    console.log("El elemento " + elemento + " se ha agregado al carrito")
}
agregarElemento (productos, elemento);

 

const listarProductos = (productos) =>{
    for(let i = 0; i < productos.length; i++){
        console.log(productos[i])
    }
}

listarProductos(productos);
// Función para buscar un producto en el carrito

function buscarProducto(elemento) {
    return productos.find(productos => productos.includes(elemento));   
  }

  buscarProducto(elemento)

// Función para filtrar productos en el carrito


function filtrarProductos(consulta) {
    return productos.filter(elemento => elemento.includes(consulta));
  }

  function eliminarElemento(productos, elemento) {

    const indice = productos.indexOf(elemento);
  
    if (indice !== -1) {
  
        productos.splice(indice, 1);
  
    }
 
   actualizarCarrito(); 

  }

function actualizarCarrito(){
    console.log (productos)
}
