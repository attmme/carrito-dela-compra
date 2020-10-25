import * as general from './script.js';


var addproductButton = document.getElementById("addProductsComprador");
addproductButton.addEventListener("click",addQuestionRowDom);


function createTextNode(text){
        return document.createTextNode(text);
}

function addQuestionRowDom(){
        console.log("hola");
        let data = general.g_dataObjects
        let table = general.getElementByid("tableComprador");
        let tr = document.createElement("tr");


        let td1 = document.createElement("td");
        let select1 = document.createElement("select");
        select1.addEventListener("change",function() {
                selectProduct(this);
        });

        let option1 = document.createElement("option");
        option1.setAttribute("disabled", true);
        
        option1.setAttribute("Selected",true);
        option1.appendChild(createTextNode("Productos"));
        select1.appendChild(option1);
        for (let x = 0; x < data.length; x++) {
                let option1 = document.createElement("option");
                option1.setAttribute("value",data[x].name)
                option1.appendChild(createTextNode(data[x].name));
                select1.appendChild(option1);
        }

        td1.appendChild(select1);
        tr.appendChild(td1);
      

        table.appendChild(tr);
        addproductButton.disabled = true;

}
function selectProduct(params) {
        let data = general.g_dataObjects
        let product = data.find(obj => obj.name == params.value);
        addproductButton.disabled = false;
        params.remove();
        addRowDom(product);

}



function addRowDom(obj){
        let table = general.getElementByid("tableComprador");
        let tr = document.createElement("tr");


        let td1 = document.createElement("td"); 
        let p1 = document.createElement("p");
        p1.appendChild(createTextNode(obj.name));
        
        td1.appendChild(p1);
        tr.appendChild(td1);


        let td2 = document.createElement("td"); 
        let p2 = document.createElement("p"); 
        p2.appendChild(createTextNode(obj.price));

        td2.appendChild(p2);
        tr.appendChild(td2);

        let td3 = document.createElement("td"); 
        let p3 = document.createElement("p"); 
        p3.appendChild(createTextNode("QTY"));

        td3.appendChild(p3);
        tr.appendChild(td3);

        let td4 = document.createElement("td"); 
        let input4 = document.createElement("input"); 

        td4.appendChild(input4);
        tr.appendChild(td4);

        let td5 = document.createElement("td"); 
        let p5 = document.createElement("p");
        p5.appendChild(createTextNode("$0.00"));

        td5.appendChild(p5);
        tr.appendChild(td5);

        let td6 = document.createElement("td"); 
        let button6 = document.createElement("button");
        button6.appendChild(createTextNode("Delete"));

        td6.appendChild(button6);
        tr.appendChild(td6);


        table.appendChild(tr);


}