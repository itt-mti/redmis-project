document.getElementById("myTestContainer").onclick =  myFunction;
let myState = 1;

let lis = document.getElementById("myList").getElementsByTagName('li');

function myFunction() {

  switch(myState){
    case 1:
      document.getElementById("flex2").hidden = true;
      document.getElementById("myBtn").hidden = true;
      document.getElementById("myListTitle").innerHTML = "Obligaciones";
      lis.item(0).innerHTML = "Participación activa en las juntas semanales, al menos el 80% de asistencia a dichas reuniones.";
      lis.item(1).innerHTML = "Participación activa en alguno de los subcomités creados en la red.";
      myState = 2;
      break;
    case 2:
      document.getElementById("flex2").hidden = false;
      document.getElementById("myBtn").hidden = false;
      document.getElementById("myListTitle").innerHTML = "Beneficios";
      lis.item(0).innerHTML = "Ser considerado como instructor de los talleres, diplomados, seminarios que se ofertarán.";
      lis.item(1).innerHTML = "Descuento en los congresos: Conisoft, ci2t, Cims";
      myState = 1;
      break;
    default:
  }

}