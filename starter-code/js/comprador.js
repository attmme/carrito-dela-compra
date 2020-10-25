import * as general from './script.js';


var addproductButton = document.getElementById("addProductsComprador");
addproductButton.addEventListener("click",addQuestionRowDom);


function createTextNode(text){
        return document.createTextNode(text);
}

function addQuestionRowDom(){
        let data = general.g_dataObjects
        let table = general.getElementByid("tableComprador");
        let ul = document.createElement("ul");


        let li = document.createElement("td");
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

        li.appendChild(select1);
        ul.appendChild(li);
      

        table.appendChild(ul);
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
        let ul = document.createElement("ul");


        let li1 = document.createElement("td"); 
        let p1 = document.createElement("p");
        p1.appendChild(createTextNode(obj.name));
        
        li1.appendChild(p1);
        ul.appendChild(li1);


        let li2 = document.createElement("td"); 
        let p2 = document.createElement("p"); 
        p2.appendChild(createTextNode(obj.price));

        li2.appendChild(p2);
        ul.appendChild(li2);

        let li3 = document.createElement("td"); 
        let p3 = document.createElement("p"); 
        p3.appendChild(createTextNode("QTY"));

        li3.appendChild(p3);
        ul.appendChild(li3);

        let li4 = document.createElement("td"); 
        let input4 = document.createElement("input"); 
        input4.setAttribute("type", "number");
        li4.appendChild(input4);
        ul.appendChild(li4);

        let li5 = document.createElement("td"); 
        let p5 = document.createElement("p");
        p5.appendChild(createTextNode("$0.00"));

        li5.appendChild(p5);
        ul.appendChild(li5);

        let li6 = document.createElement("td"); 
        let button6 = document.createElement("button");
        button6.appendChild(createTextNode("Delete"));
        button6.addEventListener("click",function() {
                deleteRow(this);
        })
        li6.appendChild(button6);
        ul.appendChild(li6);


        table.appendChild(ul);


}


function deleteRow(elemt){
        //Button < Td < TR
        elemt.parentElement.parentElement.remove()
}