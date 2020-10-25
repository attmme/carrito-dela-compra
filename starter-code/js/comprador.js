import * as general from './script.js';


var addproductButton = document.getElementById("addProductsComprador");
addproductButton.addEventListener("click", addQuestionRowDom);

var calculateAllButton = document.getElementById("calculateAll");
calculateAllButton.addEventListener("click", calculateAll);

var cart = [];
function createTextNode(text) {
        return document.createTextNode(text);
}

function addQuestionRowDom() {
        let data = general.g_dataObjects
        data = filterProducts(data);
        let table = general.getElementByid("tableComprador");
        let ul = document.createElement("ul");


        let li = document.createElement("li");
        let select1 = document.createElement("select");
        select1.addEventListener("change", function () {
                selectProduct(this);
        });

        let option1 = document.createElement("option");
        option1.setAttribute("disabled", true);

        option1.setAttribute("Selected", true);
        option1.appendChild(createTextNode("Productos"));
        select1.appendChild(option1);
        for (let x = 0; x < data.length; x++) {
                let option1 = document.createElement("option");
                option1.setAttribute("value", data[x].name)
                option1.appendChild(createTextNode(data[x].name));
                select1.appendChild(option1);
        }

        li.appendChild(select1);
        ul.appendChild(li);


        table.appendChild(ul);
        addproductButton.disabled = true;

}
function selectProduct(elemt) {
        let data = general.g_dataObjects
        let product = data.find(obj => obj.name == elemt.value);
        addproductButton.disabled = false;
        cart.push(elemt.value);
        elemt.parentElement.parentElement.remove();
        addRowDom(product);

}

function filterProducts(data) {
        let arrayFiltered = [];
        for (let x = 0; x < data.length; x++) {
                let flag = false;    

                for (let i = 0; i < cart.length; i++) {
                        if (data[x].name==cart[i]) {
                            flag = true;    
                        }                        
                }
                if(!flag){
                        arrayFiltered.push(data[x]);
                }          
        }
        return arrayFiltered;
}


function addRowDom(obj) {
        let table = general.getElementByid("tableComprador");
        let ul = document.createElement("ul");


        let li1 = document.createElement("li");
        let p1 = document.createElement("p");
        p1.appendChild(createTextNode(obj.name));

        li1.appendChild(p1);
        ul.appendChild(li1);


        let li2 = document.createElement("li");
        let p2 = document.createElement("p");
        p2.appendChild(createTextNode(obj.price));

        li2.appendChild(p2);
        ul.appendChild(li2);

        let li3 = document.createElement("li");
        let p3 = document.createElement("p");
        p3.appendChild(createTextNode("QTY"));

        li3.appendChild(p3);
        ul.appendChild(li3);

        let li4 = document.createElement("li");
        let input4 = document.createElement("input");
        input4.setAttribute("type", "number");
        input4.setAttribute("max", obj.quantity);
        input4.setAttribute("min", 0);
        input4.addEventListener("keypress", (event) => {
                event.preventDefault();
        });
        input4.addEventListener("change", function () {
                changePrice(this);
        })
        li4.appendChild(input4);
        ul.appendChild(li4);

        let li5 = document.createElement("li");
        let p5 = document.createElement("p");
        p5.appendChild(createTextNode("$0.00"));

        li5.appendChild(p5);
        ul.appendChild(li5);

        let li6 = document.createElement("li");
        let button6 = document.createElement("button");
        button6.appendChild(createTextNode("Delete"));
        button6.setAttribute("value",obj.name);
        button6.setAttribute("class","btn-borrar");
        button6.addEventListener("click", function () {
                deleteRow(this);
        })
        li6.appendChild(button6);
        ul.appendChild(li6);


        table.appendChild(ul);


}


function deleteRow(elemt) {
        //Button < Td < TR
        let productIndex = cart.indexOf(elemt.value);
        cart.splice(productIndex,1);
        elemt.parentElement.parentElement.remove()
}

function changePrice(elemt) {
console.log(elemt.parentElement.parentElement.childNodes);
        let arrayLi = elemt.parentNode.parentNode.childNodes;
        console.log(arrayLi);

        console.log(arrayLi[4]);
        console.log(arrayLi[3].childNodes[0].value);
        console.log(arrayLi[1].childNodes[0].innerHTML);


        if (arrayLi[3].childNodes[0].value == 0) {
                arrayLi[4].innerHTML = "$0.00";
        } else {
                let result = arrayLi[1].childNodes[0].innerHTML * arrayLi[3].childNodes[0].value;

                arrayLi[4].innerHTML = "$" + result;
        }
}

function calculateAll(){
        let table = general.getElementByid("tableComprador");
        let ul =  table.getElementsByTagName("ul");
        let result = 0;
        for (let i = 0; i < ul.length; i++) {
                console.log(ul[i].getElementsByTagName("li")[4].childNodes[0]);
                let val = ul[i].getElementsByTagName("li")[4].innerHTML.slice(1);
                console.log(val);
                
                result = result + parseInt(val);
                console.log(result + " - " + val)
        }
               console.log(table.getElementsByTagName("ul")[0].getElementsByTagName("li")[4].innerHTML);  
        general.getElementByid("priceAll").innerHTML = "  $"+result;
}
