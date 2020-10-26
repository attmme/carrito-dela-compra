/* Recoger contenido json (?) */
const myRequest = new Request('../data/products.json');
import * as vendedor from './vendedor.js';

export var g_dataObjects ;
window.onload = function () {
        //console.log("1");
        loadData();
                
}

function loadData() {
        fetch(myRequest)
        .then(response => response.json())
        .then(l_data => {
                console.log(l_data[0])
                g_dataObjects = l_data;
                vendedor.showTable();
        });
}


export class product{
        constructor(name,price,quantity,totalPrice){
                this.name = name;
                this.price = price;
                this.quantity = quantity;
                this.totalPrice = totalPrice;
        }

}
export function purchase(array) {
        console.log(array);
        for (let i = 0; i < g_dataObjects.length; i++) {
                for (let x = 0; x < array.length; x++) {
                        if (g_dataObjects[i].name == array[x].name) {
                                console.log(g_dataObjects[i].name + "  -  " + array[x].name);
                                console.log(g_dataObjects[i].quantity + "  -  " + array[x].quantity);

                                g_dataObjects[i].quantity -= array[x].quantity
                                console.log(g_dataObjects[i].quantity);

                                break;
                        }
                }
        }
        console.log(g_dataObjects[0].name);
        console.log(g_dataObjects[0].quantity);
}


export function getElementByid(id) {
        return document.getElementById(id);
        
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
const createProduct = (n, p, s) => {

}


/* BORRAR PRODUCTO -> Ver que hacer con el fichero json que ya hay productos

Función encargada de borrar los productos indicados, se recibe por parametro la id del producto
y se borra del local storage, después ejecuta la función de visualizar producto para actualizar.
*/
const deleteProduct = (id) => {

}


/* VISUALIZAR PRODUCTO

Función encargada de visualizar un producto (vista del vendedor)
Esta función solo se ejecutará después de cada modificación de producto (añadir o borrar producto de la "base de datos").
*/
const showProduct = () => {

}


/* AÑADIR PRODUCTO AL CARRITO

        Por definir

*/
const addProduct = () => {

}


/* BORRAR PRODUCTO DEL CARRITO

            Por definir

*/
const removeProduct = () => {

}


/* VISUALIZAR CARRITO

        Por definir

*/
const showCart = () => {

}


/* CALCULAR PRECIO TOTAL CARRITO

        Por definir

*/
const calcTotalPrice = () => {

}

/* COMPROBACIÓN LIMITE DE STOCK

        Por definir

*/
const checkStock = () => {

}


/* REALIZAR LA COMPRA

        Por definir

*/
const completePurchase = () => {

}





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