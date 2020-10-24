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
        let tr = document.createElement("tr");
        let td1 = docuemnt.createElement("td"); 
        let p1 = docuemnt.createElement("p"); 


        let td2 = docuemnt.createElement("td"); 
        let p2 = docuemnt.createElement("p"); 

        let td3 = docuemnt.createElement("td"); 
        let p3 = docuemnt.createElement("p"); 


        let td4 = docuemnt.createElement("td"); 
        let input4 = docuemnt.createElement("input"); 


        let td5 = docuemnt.createElement("td"); 
        let p5 = docuemnt.createElement("p"); 


        let td6 = docuemnt.createElement("td"); //6
        let button6 = docuemnt.createElement("button"); //6





}