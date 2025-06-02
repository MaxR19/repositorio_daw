/* const nuevoArray = arrayOriginal.map((elemento, indice, array) => {
    //elemento es obligatorio
    // índice y array son opcionales

    //Lógica de transformación
    return elementoTransformado
});
*/

const numeros = [1, 2, 3, 4]

// Duplciar los números en un nuevo array usando .map

const doubles = numeros.map((numero) => {
    return numero * 2;
});

console.log("Array original: ", numeros);
console.log("Array nuevo: ", doubles);

console.log("-------------------------------------");

//Devolver un array con todos los nombres en mayúsculas
const nombres = ["Valerion", "Johanien", "Pedron", "Sharik"];

const nombresMayus = nombres.map((nombre) => {
    return nombre.toUpperCase();
});

console.log("Array nombres originales: ", nombres);
console.log("Array nombres en Mayúsculas: ", nombresMayus);

console.log("-------------------------------------");

const productos = [{producto: "Laptop", precio: 250}, 
                   {producto: "Tablet", precio: 75}, 
                   {producto: "Mochila", precio: 50}
];

//Devolver un array nuevo con todos los precios de los objetos con un 10% de descuento

const productosDescuento = productos.map((objetoProducto) => {
    
    const {producto, precio} = objetoProducto;

    return {producto: producto, precio: (precio * 0.9)};
});

console.log("Array productos originales: ", productos);
console.log("Array productos con descuento: ", productosDescuento);


console.log("-------------------------------------");

const etiquetasProducto = productosDescuento.map((producto) => {
    return `${producto.producto}: ${producto.precio}`;
});

console.log("Array productos originales: ", productosDescuento);
console.log("Array productos con descuento: ", etiquetasProducto);


console.log("-------------------------------------");

const usuarios = [
    {
        firstName: "Pepito",
        lastName: "Perez",
        age: 33,
        active: true
    },
    {
        firstName: "Ana",
        lastName: "Perez",
        age: 28,
        active: true
    },
    {
        firstName: "Maria",
        lastName: "Lopez",
        age: 17,
        active: false
    }
];

/* Devolver un array nuevo que cada objeto tenga esta estructura:
{
    id: firstName_lastName
    fullName: firstName lastName,
    isAdult: true o false dependiendo de la edad
    status: 'Active' o 'Inactive dependiendo del campo active
    }
*/

const usuariosNuevo = usuarios.map((usuario, index) => {
    
    const {firstName, lastName, age, active} = usuario;

    return {
    id: `${index}_${firstName}_${lastName}`,
    fullName: `${firstName} ${lastName}`,
    isAdult: age > 18 ?true:false,
    status: active ? 'Active': 'Inactive'};
});

console.log("Array productos originales: ", usuarios);
console.log("Array productos con descuento: ", usuariosNuevo);
