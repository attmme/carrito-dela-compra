"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var general = _interopRequireWildcard(require("./script.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var myRequest = new Request('../data/products.json');
var g_dataObjects;

function loadData() {
  fetch(myRequest).then(function (response) {
    return response.json();
  }).then(function (l_data) {
    console.log(l_data);
    g_dataObjects = l_data;
  });
}

function addRowDom() {
  var tr = document.createElement("tr");
  var td1 = docuemnt.createElement("td");
  var p1 = docuemnt.createElement("p");
  var td2 = docuemnt.createElement("td");
  var p2 = docuemnt.createElement("p");
  var td3 = docuemnt.createElement("td");
  var p3 = docuemnt.createElement("p");
  var td4 = docuemnt.createElement("td");
  var input4 = docuemnt.createElement("input");
  var td5 = docuemnt.createElement("td");
  var p5 = docuemnt.createElement("p");
  var td6 = docuemnt.createElement("td"); //6

  var button6 = docuemnt.createElement("button"); //6
}