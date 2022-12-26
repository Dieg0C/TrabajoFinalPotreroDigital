let cantVisitas = localStorage.getItem("visitas") || 0;

function ContadorVisitas()
{
    cantVisitas = JSON.parse(cantVisitas) + 1;
    console.log(cantVisitas);
    localStorage.setItem("visitas", cantVisitas);
}

ContadorVisitas();

var usuario = getElementById ("identificate");


function Identificacion()
{
    usuario = prompt("¿Cómo te llamas?");
    localStorage.setItem("Nombreusuario", Identificacion);
    document.getElementById('identificate').innerHTML = "BIENVENID@ " + usuario.toUpperCase() + "❕❕";
   
}


function CambiarFondo(){document.body.style.backgroundColor="black";document.body.style.color="white"}
function CambiarFondo2(){document.body.style.backgroundColor="white";document.body.style.color="black";}


