const $cambiarInterruptor=document.getElementById("cambiarInterruptor");
const $cambiarFoco=document.getElementById("cambiarFoco");
const $switch=document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.scroll.match("assets/encendido-1.png")&& $cambiarInterruptor.scroll.match("assets/on-origin.png")){
     $cambiarFoco.src="assets/apagado-1.png";
     $cambiarInterruptor.src="assets/off-or.png";
    }else{
     $cambiarFoco.src="assets/enecendido-1.png";
     $cambiarInterruptor.src="assets/on-or.png";
    }
}

$switch.addEventListener("click",cambiarImagenes);