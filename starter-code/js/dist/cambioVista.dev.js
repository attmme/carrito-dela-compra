"use strict";

// Botones del header
var btnVendedor = document.getElementsByClassName('btn-nav')[0];
var btnComprador = document.getElementsByClassName('btn-nav')[1];
var btnManager = document.getElementsByClassName('btn-nav')[2];
var btnsHeader = [btnVendedor, btnComprador, btnManager]; // Caja de cada vista

var boxVendedor = document.getElementById('vendedor');
var boxComprador = document.getElementById('comprador');
var boxManager = document.getElementById('manager');
var boxesHeader = [boxVendedor, boxComprador, boxManager];
/* Cambio de vista */

btnVendedor.addEventListener('click', function () {
  reset();
  boxVendedor.style.display = "block";
  btnVendedor.className = "apretado";
});
btnComprador.addEventListener('click', function () {
  reset();
  boxComprador.style.display = "block";
  btnComprador.className = "apretado";
});
btnManager.addEventListener('click', function () {
  reset();
  boxManager.style.display = "block";
  btnManager.className = "apretado";
});

var reset = function reset() {
  btnsHeader.map(function (el) {
    return el.className = "";
  });
  boxesHeader.map(function (el) {
    return el.style.display = "none";
  });
};