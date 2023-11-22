let carritoCompras = ["Elemento1", "Elemento2", "Elemento3"]

const agregarElemento = (array, elemento) => {
    array.push(elemento)
}

let array = [2, 3, 4, 5, 60]

const listarProductos = (array) =>{
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

listarProductos(array)

