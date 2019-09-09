var vp = document.getElementById("villaplatzi"); //Elemento canvas del html
var papel = vp.getContext("2d");

var fondo={
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo(){
  fondo.cargaOK=true
  dibujar();
}

function cargarVaca(){
  vaca.cargaOK=true;
  dibujar();
}

function  cargaCerdo(){
  cerdo.cargaOK=true;
  dibujar();
}

function cargarPollo(){
  pollo.cargaOK=true;
  dibujar();
}

function dibujar(){
  var cantidad;
  var x, y;

  if(fondo.cargaOK)
    papel.drawImage(fondo.imagen, 0,0);

  if(vaca.cargaOK){
    cantidad = aleatorio(1, 20);
    for( var v=0; v<cantidad; v++){
      x = aleatorio(0, 6)*70;
      y = aleatorio(0, 6)*70;
      papel.drawImage(vaca.imagen, x,y);
    }
  }

  if(cerdo.cargaOK){
    cantidad = aleatorio(1, 20);
    for( var v=0; v<cantidad; v++){
      x = aleatorio(0, 6)*70;
      y = aleatorio(0, 6)*70;
      papel.drawImage(cerdo.imagen, x,y);
    }
  }

  if(pollo.cargaOK){
    cantidad = aleatorio(5, 20);
    for( var v=0; v<cantidad; v++){
      x = aleatorio(0, 6)*70;
      y = aleatorio(0, 6)*70;
      papel.drawImage(pollo.imagen, x,y);
    }
  }
}


function aleatorio(min, max){
  var resultado;
  resultado = Math.floor( Math.random() * (max - min + 1) ) + min ;
  return resultado;
}
