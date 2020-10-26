import {showTable} from './vendedor.js';
import * as general from './script.js';
import * as comprador from './comprador.js';


// Botones del header
let btnVendedor = document.getElementsByClassName('btn-nav')[0];
let btnComprador = document.getElementsByClassName('btn-nav')[1];
let btnManager = document.getElementsByClassName('btn-nav')[2];
let btnsHeader = [btnVendedor, btnComprador, btnManager];

// Caja de cada vista
let boxVendedor = document.getElementById('vendedor');
let boxComprador = document.getElementById('comprador');
let boxManager = document.getElementById('manager');
let boxesHeader = [boxVendedor, boxComprador, boxManager];

/* Cambio de vista */
btnVendedor.addEventListener('click', () => {
        reset();
        boxVendedor.style.display = "block";
        btnVendedor.className = "apretado";
        showTable();
        resetComprador();
        

});

btnComprador.addEventListener('click', () => {
        reset();
        boxComprador.style.display = "block";
        btnComprador.className = "apretado";
});

btnManager.addEventListener('click', () => {
        reset();
        resetComprador();
        boxManager.style.display = "block";
        btnManager.className = "apretado";
});

function resetComprador(params) {
        comprador.resetComprador();


}
const reset = () => {

        btnsHeader.map((el) => el.className = "");
        boxesHeader.map((el) => el.style.display = "none");
}