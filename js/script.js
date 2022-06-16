const nombre = document.getElementById("autoSizingInput");
const cambios = document.querySelectorAll(".cambios");
const ocultar = document.querySelector("formCasas");
let check = document.getElementsByClassName("check");

function recuperarUsuario(storage) {
  let userInStorage = JSON.parse(storage.getItem("usuario"));
  return userInStorage;
}

function guardado(usuario) {
  if (usuario) {
    mostrarPregunta(cambios, "disNon");
  }
}

function mostrarPregunta(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox of check) {
  checkbox.onclick = validarDatos; 
}

//FUNCION PARA VALIDAR DATOS
function validarDatos(e) {
  btn = e.target;

  if (nombre.value == "") {
    alert("Debes ingresar tu nombre y elige una casa para enviar información");
  } else {
    casaSelect = btn.value; //MUESTRA EL CHECKBOX SELECCIONADO

    let user = nombre.value; //ADJUNTO VALOR A LAS VARIABLES
    let casa = casaSelect; //ADJUNTO VALOR A LAS VARIABLES

    //MANDAR INFO AL LOCALSTORAGE
    const usuario = {
      user: user, //CREO OBJETO
      casa: casa,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario)); //Envio al LOCALSTORAGE

  }
  swal.fire({
    title:"Hola, " + nombre.value,
    text:"Esperamos que puedas probar tus conocimientos y sumar puntos para " + casaSelect,
    confirmButtonText: "Comencemos!"
  }).then((result)=>{
    if(result.isConfirmed){
      mostrarPregunta(cambios, "disNon");
    }
  })
}

//---------------------------PRIMER PREGUNTA----------------------------------------------------------------
let check1 = document.getElementsByClassName("check1");
let answer1 = document.getElementsByClassName("answer1");
let answer2 = document.getElementsByClassName("answer2");
let answer3 = document.getElementsByClassName("answer3");

function recuperarQ1(storage) {
  let q1InStorage = JSON.parse(storage.getItem("question1"));
  return q1InStorage;
}

for (const checkbox1 of check1) {
  checkbox1.onclick = validarCheck1; 
}

function validarCheck1(e) {
  btn = e.target
  answerSelect = btn.value;

  if (!answerSelect == answer1){
    swal.fire({
      title: "Incorrecto!",
      confirmButtonText: "Siguente"
      
    })      
  }else{
    swal.fire({
      title: "Correcto!",
      text: "10 puntos para " + casaSelect,
      confirmButtonText: "Siguente"
    }).then((result)=>{
      
      if(result.isConfirmed){
        //mostrarPregunta2(cambios, "disNon2");    
      }
    })
  }
  

  /*De la manera en que esta arriba solo me muestra el correcto, y en la forma comentada solo incorrecto. 
  No entiendo como hacer que funciones bien.
  Además no me toma el mostrarPregunta2 al final del .then
  La segunda pregunta está declarada mas abajo */


  /*if (answerSelect == answer1){
    swal.fire({
      title: "Correcto!",
      text: "10 puntos para " + casaSelect,
      confirmButtonText: "Siguente"
      
    })      
  }else{
    swal.fire({
      title: "Incorrecto!",
      confirmButtonText: "Siguente"
      
    }).then((result)=>{
      
      if(result.isConfirmed){
        //mostrarPregunta2(cambios, "disNon2");    
      }
    })
  }*/

  const valorAq1 = {
    answer1: 10,
    answer2: 0,
    answer3: 0
  }
  localStorage.setItem("valorAq1", JSON.stringify(valorAq1));

}

//---------------------------SEGUNDA PREGUNTA---------------------------------------------------------------

let check2 = document.getElementsByClassName("check2");
let answer4 = document.getElementsByClassName("answer4");
let answer5 = document.getElementsByClassName("answer5");
let answer6 = document.getElementsByClassName("answer6");


function recuperarQ2(storage) {
  let q2InStorage = JSON.parse(storage.getItem("question2"));
  return q2InStorage;
}

function guardado2(question2) {
  if (question2) {
    mostrarPregunta2(cambios, "disNon2");
  }
}

function mostrarPregunta2(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox2 of check2) {
  checkbox2.onclick = validarCheck2; 
}

function validarCheck2(e) {
  btn = e.target
  answerSelect2 = btn.value;

  if (answerSelect2 == answer5){
    swal.fire({
      title: "Correcto!",
      text: "10 puntos para " + casaSelect,
      confirmButtonText: "Siguente"
    })
    
  }else if (answerSelect2 == answer4 || answer7){
    swal.fire({
      title: "Incorrecto!",
      confirmButtonText: "Siguente"
    }).then((result)=>{
      if(result.isConfirmed){
        mostrarPregunta3(cambios, "disNon3");
      }
    })
  }
  
  
  const valorAq2 = {
    answer4: 0,
    answer5: 10,
    answer6: 0
  }
  localStorage.setItem("valorAq2", JSON.stringify(valorAq2));

}



