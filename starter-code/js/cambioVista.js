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

console.log("hello1");

/* Cambio de vista */
btnVendedor.addEventListener('click', () => {
        reset();
        boxVendedor.style.display = "block";
        btnVendedor.className = "apretado";
});

btnComprador.addEventListener('click', () => {
        reset();
        boxComprador.style.display = "block";
        btnComprador.className = "apretado";
});

btnManager.addEventListener('click', () => {
        reset();
        boxManager.style.display = "block";
        btnManager.className = "apretado";
});

const reset = () => {
        btnsHeader.map((el) => el.className = "");
        boxesHeader.map((el) => el.style.display = "none");
}