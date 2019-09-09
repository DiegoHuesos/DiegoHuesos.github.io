class Billete{
  constructor(v, c, src){
    this.valor = v;
    this.cantidad = c;
    this.image = new Image();
    this.image.src = src;
  }
}

var imgBill = {
  diez : "10.png",
  veinte : "20.jpg",
  cincuenta : "50.jpeg"
}

var caja = [];
var entregado = [];

caja.push( new Billete(50, 3, imgBill.cincuenta) );
caja.push( new Billete(20, 2, imgBill.veinte) );
caja.push( new Billete(10, 2, imgBill.diez) );

var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var src = " " ;

function entregarDinero(){
  dinero = document.getElementById("dinero").value;
  console.log("Dinero inical: " + dinero);

  var i = 0;
  while( dinero > 0 &&  i < caja.length){
    var bi = caja[i];

    div = Math.floor(dinero / bi.valor);
    if(div > bi.cantidad)
      papeles = bi.cantidad;
    else
      papeles = div;


    if(bi.valor === 50)
      src = imgBill.cincuenta;
    else
    if( bi.valor === 20)
      src = imgBill.veinte;
      else
      if( bi.valor === 10)
        src = imgBill.diez;

    entregado.push( new Billete(bi.valor, papeles, src) );
    dinero = dinero - (bi.valor  * papeles);
    console.log("Dinero final: " + dinero);
    i++;
  }

  if(dinero > 0){
    resultado.innerHTML = "Soy un cajero pobre no tengo dinero suficiente." ;
  }
  else{
    var e;
    for(var j=0; j<caja.length; j++){
      try{
        e=entregado[0];
        caja[j].cantidad -= e.cantidad;
        if(e.cantidad > 0)
          console.log(e.cantidad + " billetes de $" + e.valor);
          //resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor +"<br/>" ;

          for(var i = 0 ;  i < e.cantidad  ; i++ ){
            document.getElementById("resultado").innerHTML += '<img src=" '+e.image.src+' "height="80" style="margin:10px" />';
            //document.getElementById("resultado").appendChild(e.image);
          }
          entregado.shift(); //dequeue: remove first element of the array
      }
      catch(err){

      }

    }
  }

//(1*)
}

//Agregar Event-Listener al botón de
var b = document.getElementById('extraer');
b.addEventListener("click", entregarDinero);


//(1*)
/*
for(var bi of caja){
  if(dinero > 0){
    div = Math.floor(dinero / bi.valor);
    if(div > bi.cantidad)
      papeles = bi.cantidad;
    else
      papeles = div;
    entregado.push( new Billete(bi.valor, papeles) );
    dinero = dinero - (bi.valor  * papeles);
    bi.cantidad = bi.cantidad - papeles;
  }

}
*/
//console.log("Dinero final: " + dinero);
//console.log("Entregado: " ); console.log(entregado);
//console.log("Restante en caja"); console.log(caja);
