import * as general from './script.js';
const myRequest = new Request('../data/products.json');


var g_dataObjects ;


function loadData() {
        fetch(myRequest)
        .then(response => response.json())
        .then(l_data => {
                console.log(l_data)
                g_dataObjects = l_data;
        });
}


function addRowDom(){

}