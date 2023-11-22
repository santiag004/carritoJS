// Crear un carrito de compras. 

// ■ Crear una aplicación de carrito de compras donde se ingresen

// productos como elementos en un array.

// ■ las tareas que debe hacer son las siguientes:

// ● Agregar producto al carrito

// ● Listar los productos del carrito

// ● Buscar un producto en el carrito

// ● Filtrar productos que coincidan con una palabra, parte de ella

// o una letra

// ● Eliminar producto del carrito

let productos = ['Remera', 'Anteojos', 'Gorra', 'Short', 'Zapatillas', 'Jean'];
console.log("Los productos que puede elegir son: " );
for (let i =0 ; i<productos.length; i++){
    console.log("Numero " + i +     ": " + productos[i]);
}