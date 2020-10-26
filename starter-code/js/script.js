/* Recoger contenido json (?) */
const myRequest = new Request('../data/products.json');
import * as vendedor from './vendedor.js';

export var g_dataObjects;
export var g_purchases=[];
window.onload = function () {
        loadData();

}

function loadData() {
        fetch(myRequest)
                .then(response => response.json())
                .then(l_data => {
                        g_dataObjects = l_data;
                        vendedor.showTable();
                });
}


export class Product {
        constructor(name, price, quantity, totalPrice) {
                this.name = name;
                this.price = price;
                this.quantity = quantity;
                this.totalPrice = totalPrice;
        }

}
export function changeQuantity(obj) {
        for (let i = 0; i < g_dataObjects.length; i++) {
                if (g_dataObjects[i].name == obj.name) {
                        g_dataObjects[i].quantity = obj.quantity;
                }
        }
}
export function purchase(array) {
        
        for (let i = 0; i < array.length; i++) {
                let index = g_purchases.findIndex(obj => obj.name == array[i].name);
                if (index != -1) {
                        g_purchases[index].quantity += array[i].quantity;
                }else{
                        g_purchases.push(array[i]);
                }

        }
        for (let i = 0; i < g_dataObjects.length; i++) {
                for (let x = 0; x < array.length; x++) {
                        if (g_dataObjects[i].name == array[x].name) {
                                g_dataObjects[i].quantity -= array[x].quantity
                                break;
                        }
                }
        }
console.log(g_purchases);
}


export function getElementByid(id) {
        return document.getElementById(id);

}

export function createProduct(obj) {
        g_dataObjects.push(obj);
}
export function removeProduct(obj) {
        for (let i = 0; i < g_dataObjects.length; i++) {
                if (g_dataObjects[i].name == obj.name) {
                        g_dataObjects.splice(i,1);
                }
        }
        
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
/*const createProduct = (n, p, s) => {

}*/


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
/*const removeProduct = () => {

}*/


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