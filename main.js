import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
var darkmod = true;
function kepalkotas(){
  let url = document.getElementById("url").value;
  let szeleseg = document.getElementById("szeleseg").value;
  let keretvastagsag = document.getElementById("keretvastagsag").value;
  let keretszin = document.getElementById("keretszin").value;
  let keretvas = keretvastagsag+"px";
  let szel = szeleseg+"px";
  console.log(keretszin)
  document.getElementById("kep").src = url;
  document.getElementById("kep").style.borderColor = keretszin;
  document.getElementById("kep").style.borderWidth = keretvas;
  document.getElementById("kep").style.width = szel;
}
function darkmode(){
  if(darkmod == true){
    darkmod = false;
    document.body.style.backgroundColor = "#000000";
    document.getElementById("label1").style.color ="#ffffff";
    document.getElementById("label2").style.color ="#ffffff";
    document.getElementById("label3").style.color ="#ffffff";
    document.getElementById("label4").style.color ="#ffffff";
    document.getElementById("label5").style.color ="#ffffff";
  }
  else if(darkmod == false){
    darkmod = true;
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById("label1").style.color ="#000000";
    document.getElementById("label2").style.color ="#000000";
    document.getElementById("label3").style.color ="#000000";
    document.getElementById("label4").style.color ="#000000";
    document.getElementById("label5").style.color ="#000000";
  }
}

function init(){
  document.getElementById("gomb").addEventListener("click",kepalkotas);
  document.getElementById("darkmode").addEventListener("click",darkmode);
}

document.addEventListener("DOMContentLoaded", init);