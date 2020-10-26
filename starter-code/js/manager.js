import * as general from './script.js';

orderData();
export function orderData() {
        let data = general.g_purchases;
        let div = document.getElementById("ranking");
        div.innerHTML="";
        if (data.length > 0) {
                data = data.sort(function (a, b) {
                        if (a.quantity > b.quantity) {
                                return -1;
                        }
                        if (a.quantity < b.quantity) {
        
                                return 1;
                        }
        
                        return 0;
                });
                createList(data);
        }
        
}

function createList(data){
        let div = document.getElementById("ranking");
        let ol = document.createElement("ol");
        for (let i = 0; i < data.length; i++) {
                let li = document.createElement("li");

                li.innerHTML = data[i].name + "Quantity: "+ data[i].quantity;
                ol.appendChild(li);
        }
        div.appendChild(ol);
}