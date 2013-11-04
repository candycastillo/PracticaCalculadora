
function suma()
{

if ((isNaN(document.getElementById("num1").value))||(isNaN(document.getElementById("num2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
 }

var n1 = parseInt(document.getElementById("num1").value);

var n2 = parseInt(document.getElementById("num2").value);

var sum = n1 + n2; 

document.getElementById("result").value = sum;
}

function mult()
{

if ((isNaN(document.getElementById("num1").value))||(isNaN(document.getElementById("num2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
 }

var n1 = parseInt(document.getElementById("num1").value);

var n2 = parseInt(document.getElementById("num2").value);

var multiplica = n1 * n2; 

document.getElementById("result").value = multiplica;
}


function res()
{


if ((isNaN(document.getElementById("num1").value))||(isNaN(document.getElementById("num2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
 }

var n1 = parseInt(document.getElementById("num1").value);

var n2 = parseInt(document.getElementById("num2").value);

var resta = n1 - n2; 

document.getElementById("result").value = resta;
}

function div()
{

if ((isNaN(document.getElementById("num1").value))||(isNaN(document.getElementById("num2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
 }

var n1 = parseInt(document.getElementById("num1").value);

var n2 = parseInt(document.getElementById("num2").value);

if(n1 == 0 || n2 == 0){

alert("No se puede dividir entre 0");

}

else {var divide = n1 / n2;

document.getElementById("result").value = divide;

}


  }


function carga()
{
document.getElementById("mas").onclick = suma; 

document.getElementById("por").onclick = mult; 

document.getElementById("menos").onclick = res; 

document.getElementById("entre").onclick = div; 

}
window.onload = carga;


