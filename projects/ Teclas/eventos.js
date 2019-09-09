var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("mousedown", a);

function a(evento){
  console.log(evento);
  xf=evento.layerX;
  yf=evento.layerY;
  dibujarLinea("blue", xi, yi, xf, yf, papel);
  xi=xf;
  yi=yf;
}

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var xi = 150;
var yi = 150;

var xf = 149;
var yf = 149;
dibujarLinea("red", xi, yi, xf, yf, papel);

var movimiento = 10;
function dibujarTeclado(evento){

    switch(evento.keyCode){

      case teclas.UP:
        yf=yi-movimiento;
      break;

      case teclas.DOWN:
        yf=yi+movimiento;
      break;

      case teclas.LEFT:
        xf=xi-movimiento;
      break;

      case teclas.RIGHT:
        xf=xi+movimiento;
      break;

      default:
        console.log("OTRA TECLA");
    }
    dibujarLinea("blue", xi, yi, xf, yf, papel);
    xi=xf;
    yi=yf;
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth= 3;
  lienzo.moveTo( xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
