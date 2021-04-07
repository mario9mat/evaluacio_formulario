"use strict";
var lista = document.getElementById("lista");
var input = document.createElement("input");
input.type = "text";
input.id = "nombre";
input.maxLength = 10;
input.placeholder = "nombre completo";
lista.appenChild(input);
