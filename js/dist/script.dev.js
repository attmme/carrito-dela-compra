"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = hello;

/* Recoger contenido json (?) */
var myRequest = new Request('../data/products.json');
var g_dataObjects;

window.onload = function () {
  //console.log("1");
  loadData();
};

function loadData() {
  fetch(myRequest).then(function (response) {
    return response.json();
  }).then(function (l_data) {
    //console.log(l_data[0])
    g_dataObjects = l_data;
  });
}

function hello() {
  console.log("hello");
}
/* CREAR PRODUCTO -> Ver que hacer con el fichero json que ya hay productos

Función encargada de crear cada uno de los productos, se recibe por parámetros el Nombre, Precio y cantidad en Stock.
Cuando se ejecute, tiene que hacer un push a un un array de objetos y guardarlo en el local storage en el siguiente formato:

producto = [{
    id: `${idProducto}`,
    nombre: `${nombreProducto}`,
    cantidad: `${cantidadProducto}`,
    precio: `${precioProducto}`,
}];

Después ejecuta la función de visualizar producto para actualizar.
*/


var createProduct = function createProduct(n, p, s) {};
/* BORRAR PRODUCTO -> Ver que hacer con el fichero json que ya hay productos

Función encargada de borrar los productos indicados, se recibe por parametro la id del producto
y se borra del local storage, después ejecuta la función de visualizar producto para actualizar.
*/


var deleteProduct = function deleteProduct(id) {};
/* VISUALIZAR PRODUCTO

Función encargada de visualizar un producto (vista del vendedor)
Esta función solo se ejecutará después de cada modificación de producto (añadir o borrar producto de la "base de datos").
*/


var showProduct = function showProduct() {};
/* AÑADIR PRODUCTO AL CARRITO

        Por definir

*/


var addProduct = function addProduct() {};
/* BORRAR PRODUCTO DEL CARRITO

            Por definir

*/


var removeProduct = function removeProduct() {};
/* VISUALIZAR CARRITO

        Por definir

*/


var showCart = function showCart() {};
/* CALCULAR PRECIO TOTAL CARRITO

        Por definir

*/


var calcTotalPrice = function calcTotalPrice() {};
/* COMPROBACIÓN LIMITE DE STOCK

        Por definir

*/


var checkStock = function checkStock() {};
/* REALIZAR LA COMPRA

        Por definir

*/


var completePurchase = function completePurchase() {};
/*
Funciones ya hechas, mirar si nos sirve alguna

const deleteItem = (e) =>{

}

const getPriceByProduct = (itemNode) =>{

}

const updatePriceByProduct = (productPrice, index) =>{

}

const getTotalPrice = ()  =>{

}

const createQuantityInput = () =>{

}

const createDeleteButton = () =>{

}

const createQuantityNode = () =>{

}

const createItemNode = (dataType, itemData) =>{

}

const createNewItemRow = (itemName, itemUnitPrice) =>{

}

const createNewItem = () =>{

}

addEventListener = ('load',  ()=>{
});
 */