/* Recoger contenido json */
const myRequest = new Request('../products.json');
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
                        g_purchases[index].quantity +=  array[i].quantity;
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