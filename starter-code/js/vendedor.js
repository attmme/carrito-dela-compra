import * as general from './script.js';



document.getElementById("addProductsVendedor").addEventListener("click", function () {
        createProduct(this);
});

export function showTable() {
        let allUl = general.getElementByid("tableVendedor").querySelectorAll("ul");
        for (let i = 0; i < allUl.length; i++) {
                allUl[i].remove()
        }
        let data = general.g_dataObjects
        for (let i = 0; i < data.length; i++) {
                addRowDom(data[i]);
        }
}


var cart = [];
function createTextNode(text) {
        return document.createTextNode(text);
}

function addQuestionRowDom() {
        let data = general.g_dataObjects
        data = filterProducts(data);
        let table = general.getElementByid("tableVendedor");
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
                        if (data[x].name == cart[i]) {
                                flag = true;
                        }
                }
                if (!flag) {
                        arrayFiltered.push(data[x]);
                }
        }
        return arrayFiltered;
}


function addRowDom(obj) {
        let table = general.getElementByid("tableVendedor");
        let ul = document.createElement("ul");
        ul.setAttribute("class", "product");


        let li1 = document.createElement("li");
        li1.innerHTML = obj.name;

        ul.appendChild(li1);


        let li2 = document.createElement("li");
        li2.innerHTML = "$" + obj.price;

        ul.appendChild(li2);


        let li3 = document.createElement("li");
        let input3 = document.createElement("input");
        input3.setAttribute("type", "number");
        input3.setAttribute("min", 0);
        input3.setAttribute("value", obj.quantity);
        input3.addEventListener("keypress", (event) => {
                event.preventDefault();
        });
        input3.addEventListener("change", function () {
                changeQuantity(this);
        })
        li3.appendChild(input3);
        ul.appendChild(li3);



        let li6 = document.createElement("li");
        let button6 = document.createElement("button");
        button6.appendChild(createTextNode("Delete"));
        button6.setAttribute("value", obj.name);
        button6.setAttribute("class", "btn-borrar");
        button6.addEventListener("click", function () {
                deleteRow(this);
        })
        li6.appendChild(button6);
        ul.appendChild(li6);


        table.appendChild(ul);


}


function deleteRow(elemt) {
        //Button < li < ul
        console.log(elemt);
        let productIndex = cart.indexOf(elemt.value);
        cart.splice(productIndex, 1);
        let arrayLi = elemt.parentNode.parentNode.childNodes;
        let product = createObj(arrayLi);
        general.removeProduct(product);
        elemt.parentElement.parentElement.remove()
}

function changeQuantity(elemt) {
        let arrayLi = elemt.parentNode.parentNode.childNodes;
        let product = createObj(arrayLi);
        general.changeQuantity(product);


}

function createObj(arrayLi) {
        let prod = new general.Product();

        prod.name = arrayLi[0].innerHTML;
        prod.price = arrayLi[1].innerHTML.slice(1);
        prod.quantity = arrayLi[2].childNodes[0].value;
        return prod;
}

function createProduct(elemt) {
        let name = general.getElementByid("nameProduct");
        let price = general.getElementByid("priceProduct");
        let quantity = general.getElementByid("quantityProduct");
        let data = general.g_dataObjects;
        let flag = false;
        for (let i = 0; i < data.length; i++) {
                if (data[i].name == name.value) {
                        flag = true;
                        break;
                }
        }
        if (!flag) {
                if (name.value.trim() != "" && price.value > 0 && quantity.value >= 0) {
                        let prod = new general.Product(name.value, price.value, quantity.value);
                        general.createProduct(prod);
                        showTable();
                        name.value = "";
                        price.value = 0;
                        quantity.value = 0;
                }
        }
}
/*
function purchase() {
        let table = general.getElementByid("tableComprador");


        let ul =  table.querySelectorAll("ul.product");
        let arrayCart = [];
        for (let i = 0; i < ul.length; i++) {
                let prod = new general.product();
                prod.name = ul[i].getElementsByTagName("li")[0].innerHTML;
                prod.price = ul[i].getElementsByTagName("li")[1].innerHTML;
                prod.quantity = ul[i].getElementsByTagName("li")[2].childNodes[0].value;
                prod.totalPrice = ul[i].getElementsByTagName("li")[3].innerHTML.slice(1);
                arrayCart.push(prod);
                ul[i].remove();
        }
        let allUl =  general.getElementByid("tableComprador").querySelectorAll("ul");
        for (let i = 0; i < allUl.length; i++) {
                allUl[i].remove()
        }
        addproductButton.disabled = false;

        cart=[];
        general.getElementByid("priceAll").innerHTML = "$0.00";
        console.log(arrayCart);
        general.purchase(arrayCart);
}*/