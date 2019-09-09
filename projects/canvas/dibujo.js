
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var texto= document.getElementById("txtNumLineas");
var boton= document.getElementById("btn");
boton.addEventListener("click",dibujoPorClick);

dibujarLinea("black", 1, 1, 1, 300);
dibujarLinea("black", 1, 299, 299, 299);


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo( xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  var x= parseInt(texto.value);
  var m= 300/x;
  for(var i=0; i<x; i++){
    dibujarLinea("red", 0, i*m, i*m,300);
    dibujarLinea("red",  i*m, 0, 300 , i*m);
    dibujarLinea("red",  300, i*m, 300-i*m, 300);
    dibujarLinea("red",  0, i*m, 300-i*m, 0);
  }

}
