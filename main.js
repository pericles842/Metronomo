 
let barraDeTiempo = document.getElementById(`barraDeTiempo`);
let cajaNumeral = document.getElementById(`cajaNumeral`);
let botonUno = document.getElementById(`botonUno`);//detener
let botonDos = document.getElementById(`botonDos`);//comenzar 
let tresCuartos = document.getElementById(`tresCuartos`);
let dosCuartos = document.getElementById(`dosCuartos`);
let seisOctavos = document.getElementById(`seisOctavos`);




// evento de la barra 
barraDeTiempo.addEventListener(`input`, mostrar); 
//evento de boton1
botonUno.addEventListener(`click`,Detener);
//evento de boton2
botonDos.addEventListener(`click`,Comenzar);
//eventos de tiempos 
 tresCuartos.addEventListener(`click`,tiempoUno);
 dosCuartos.addEventListener(`click`,tiempoDos);
 seisOctavos.addEventListener(`click`, tiempoTres);

//funciones 
function mostrar() { //actualizar numero de pantalla 
    
    cajaNumeral.innerHTML = barraDeTiempo.value + ` BPM`;
} 
   
function Detener (){
   window.location.reload();
    
}
function Comenzar() {
    const Music = new Audio(`sonidoFx.wav`);
     Music.play();
     
    setTimeout(Comenzar,barraDeTiempo.value);
}  
function tiempoUno() {
    const Music = new Audio(`sonidoFx.wav`);
     Music.play();
   setTimeout(tiempoUno,1000); 
}
function tiempoDos() {
    const Music = new Audio(`sonidoFx.wav`);
     Music.play();
   setTimeout(tiempoDos,480); 
}
 function  tiempoTres() {
    const Music = new Audio(`sonidoFx.wav`);
    Music.play();
  setTimeout(tiempoTres,380);
 }
