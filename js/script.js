const nombre = document.getElementById("autoSizingInput");
const saludoPersonalizado = document.getElementById("saludo");
const cambios = document.querySelectorAll(".cambios");
const ocultar = document.querySelector("formCasas");
let check = document.getElementsByClassName("check");

function recuperarUsuario(storage) {
  let userInStorage = JSON.parse(storage.getItem("usuario"));
  return userInStorage;
}

/*function saludar(usuario) {
  saludoPersonalizado.innerHTML = `Hola, <span>${usuario.user}</span>!
  Esperamos que puedas probar tus conocimientos
  y sumar puntos para <span>${usuario.casa}. Comencemos!`
}*/

function guardado(usuario) {
  if (usuario) {
    //saludoPersonalizado(usuario);
    mostrarPreguntas(cambios, "disNon");
  }
}

function mostrarPreguntas(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

/* ------------------------------------ CORRECCIÓN ------------------------------------------*/

 //LLAMO A TODOS LOS BOTONES QUE CONTENGA LA MISMA CLASE EN EL HTML (AGREGUE la clase en el html CHECK)

for (const checkbox of check) {
  //RECORRO TODOS LOS BOTONES CON LA CLASE "CHECK"
  checkbox.onclick = validarDatos; //A LOS BOTONES QUE enconte con la clase "check", le agrego la funcion validarDatos
}

//FUNCION PARA VALIDAR DATOS
function validarDatos(e) {
  btn = e.target;

  if (nombre.value == "") {
    //VALIDO que se ingrese algun texto al input
    alert("Debes ingresar tu nombre y elige una casa para enviar información");
  } else {
    
    //SACAR INFO DE LOS CHECKBOX
    casaSelect = btn.value; //MUESTRA EL CHECKBOX SELECCIONADO

    let user = nombre.value; //ADJUNTO VALOR A LAS VARIABLES
    let casa = casaSelect; //ADJUNTO VALOR A LAS VARIABLES

    //MANDAR INFO AL LOCALSTORAGE
    const usuario = {
      user: user, //CREO OBJETO
      casa: casa,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario)); //Envio al LOCALSTORAGE


    // saludoPersonalizado(recuperarUsuario(localStorage));
    //mostrarPreguntas(cambios, "disNon");
  }
  swal.fire({
    titulo:"Hola, " + usuario.user,
    text:"Esperamos que puedas probar tus conocimientos y sumar puntos para " + usuario.casa,
    confirmButtonText: "Comencemos!"
  }).then((result)=>{
    if(result.isConfirmed){
      mostrarPreguntas(cambios, "disNon");
    }
  })
}

/*swal.fire({
  titulo:"Hola, " + usuario.user,
  text:"Esperamos que puedas probar tus conocimientos y sumar puntos para " + usuario.casa,
  confirmButtonText: "Comencemos!"
}).then((result)=>{
  if(result.isConfirmed){
    mostrarPreguntas(cambios, "disNon");
  }
})*/









/*function saludar(usuario) {
  saludoPersonalizado.innerHTML = `Hola, <span>${usuario.user}</span>!
  Esperamos que puedas probar tus conocimientos
  y sumar puntos para <span>${usuario.casa}. Comencemos!`;
}*/







/*function ingresar (nombre){
  alert(`Hola, ${nombre}`);
    
}

btnIngresar.addEventListener("click", (e)=>{
  e.preventDefault();
  const nombre = document.getElementById("nombreIngresado").value;
  ingresar(nombre);
});*/







/*let ingreso;
let casas;
let question1;
let question2;
let question3;



//ingreso a la pag.
do {
    ingreso = prompt("Hola! para poder ingresar a esta página deberás decirnos a qué casa perteneces. En caso de ser un muggle, con un simple VOY A PROBAR SUERTE ya estarás dentro, pero debo advertirte que no te será fácil superar los desafíos. \nEn caso de arrepentirte, con X saldrás ;D");
    switch (ingreso) {
    case "Gryffindor":
        mostrarMensaje(ingreso);
        if (ingreso = "Gryffindor") {
            alert("Ahora podrás comenzar con el quiz");
            question1 = prompt("Qué edad tenia Harry Potter cuando recibió su primer carta de Howarts? Ingresa una letra: \na.10 \nb.11 \nc.12");
            if (userAnswer != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question2 = prompt("qué criatura se presenta en la casa de los tíos de Harry para impedir que valla al colegio? Ingresa una letra: \na.Una Acromántula \nb.Un Elfo \nc.Un Gnomo");
            if (userAnswer != "b"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question3 = prompt("A quién debe salvar de la muerte Harry en su tercer año escolar? Ingresa una letra: \na.Su padrino y un Hipogrifo \nb.Su tio y un Hipogrifo \nc.Su mejor amigo y un Elfo");
            if (userAnswer != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            const options1={
              a: 10,
              b: 0,
              c: 0
            }
            const options2={
              a: 0,
              b: 10,
              c: 0
            }
            const options3={
              a: 10,
              b: 0,
              c: 0
            }
          
            function questions (array,fn){
              for (const element of array){
                fn(element);
              }
          
            }
            function suma (num){
              return num + num + num;
            }

          const results = [];

          alert ("Felicitaciones"+ questions(results,suma) + " puntos en total para Gryffindor!");


        }
        break;

    case "Hufflepuff":
        mostrarMensaje(ingreso);
        if (ingreso = "Hufflepuff") {
          alert("Ahora podrás comenzar con el quiz");
            question1 = prompt("Qué edad tenia Harry Potter cuando recibió su primer carta de Howarts? Ingresa una letra: \na.10 \nb.11 \nc.12");
            if (question1 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question2 = prompt("qué criatura se presenta en la casa de los tíos de Harry para impedir que valla al colegio? Ingresa una letra: \na.Una Acromántula \nb.Un Elfo \nc.Un Gnomo");
            if (question2 != "b"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question3 = prompt("A quién debe salvar de la muerte Harry en su tercer año escolar? Ingresa una letra: \na.Su padrino y un Hipogrifo \nb.Su tio y un Hipogrifo \nc.Su mejor amigo y un Elfo");
            if (question3 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            const options1={
              a: 10,
              b: 0,
              c: 0
          }
          const options2={
            a: 0,
            b: 10,
            c: 0
          }
          const options3={
            a: 10,
            b: 0,
            c: 0
          }
          
          function questions (array,fn){
            for (const element of array){
              fn(element);
            }
          
          }
          function suma (num){
              return num + num + num;
          }

          const results = [options1,options2,options3];

          alert ("Felicitaciones"+ questions(results,suma) + " puntos en total para Hufflepuff!");
        }
        break;
        
    case "Ravenclaw":
        mostrarMensaje(ingreso);
        if (ingreso = "Ravenclaw") {
          alert("Ahora podrás comenzar con el quiz");
            question1 = prompt("Qué edad tenia Harry Potter cuando recibió su primer carta de Howarts? Ingresa una letra: \na.10 \nb.11 \nc.12");
            if (question1 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question2 = prompt("qué criatura se presenta en la casa de los tíos de Harry para impedir que valla al colegio? Ingresa una letra: \na.Una Acromántula \nb.Un Elfo \nc.Un Gnomo");
            if (question2 != "b"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question3 = prompt("A quién debe salvar de la muerte Harry en su tercer año escolar? Ingresa una letra: \na.Su padrino y un Hipogrifo \nb.Su tio y un Hipogrifo \nc.Su mejor amigo y un Elfo");
            if (question3 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            const options1={
              a: 10,
              b: 0,
              c: 0
          }
          const options2={
            a: 0,
            b: 10,
            c: 0
          }
          const options3={
            a: 10,
            b: 0,
            c: 0
          }
          
          function questions (array,fn){
            for (const element of array){
              fn(element);
            }
          
          }
          function suma (num){
              return num + num + num;
          }

          const results = [options1,options2,options3];

          alert ("Felicitaciones"+ questions(results,suma) + " puntos en total para Ravenclaw!");
        }
        break;

    case "Slytherin":
        mostrarMensaje(ingreso);
        if (ingreso = "Slytherin") {
          alert("Ahora podrás comenzar con el quiz");
            question1 = prompt("Qué edad tenia Harry Potter cuando recibió su primer carta de Howarts? Ingresa una letra: \na.10 \nb.11 \nc.12");
            if (question1 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question2 = prompt("qué criatura se presenta en la casa de los tíos de Harry para impedir que valla al colegio? Ingresa una letra: \na.Una Acromántula \nb.Un Elfo \nc.Un Gnomo");
            if (question2 != "b"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            question3 = prompt("A quién debe salvar de la muerte Harry en su tercer año escolar? Ingresa una letra: \na.Su padrino y un Hipogrifo \nb.Su tio y un Hipogrifo \nc.Su mejor amigo y un Elfo");
            if (question3 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para" + " " + ingreso);
            }
            const options1={
              a: 10,
              b: 0,
              c: 0
          }
          const options2={
            a: 0,
            b: 10,
            c: 0
          }
          const options3={
            a: 10,
            b: 0,
            c: 0
          }
          
          function questions (array,fn){
            for (const element of array){
              fn(element);
            }
          
          }
          function suma (num){
              return num + num + num;
          }

          const results = [options1,options2,options3];

          alert ("Felicitaciones"+ questions(results,suma) + " puntos en total para Slytherin!");
        }

        break;          

    case "VOY A PROBAR SUERTE":
        alert ("Bienvenid@ querid@ muggle, sabemos que tienes curiosidad y te damos la oportunidad de ver cuánto sabes sobre nuestro mundo! \nPero no te decepciones si tus conocimientos son vagos, pues hay cosas que solo nosotros podemos entender.");
        if (ingreso = "VOY A PROBAR SUERTE") {
          alert("Ahora podrás comenzar con el quiz");
            question1 = prompt("Qué edad tenia Harry Potter cuando recibió su primer carta de Howarts? Ingresa una letra: \na.10 \nb.11 \nc.12");
            if (question1 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para ti!");
            }
            question2 = prompt("qué criatura se presenta en la casa de los tíos de Harry para impedir que valla al colegio? Ingresa una letra: \na.Una Acromántula \nb.Un Elfo \nc.Un Gnomo");
            if (question2 != "b"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para ti!");
            }
            question3 = prompt("A quién debe salvar de la muerte Harry en su tercer año escolar? Ingresa una letra: \na.Su padrino y un Hipogrifo \nb.Su tio y un Hipogrifo \nc.Su mejor amigo y un Elfo");
            if (question3 != "a"){
              alert ("Incorrecto!");
            }else {
              alert ("Correcto! 10 puntos para ti!");
            }
            
            const options1={
                a: 10,
                b: 0,
                c: 0
            }
            const options2={
              a: 0,
              b: 10,
              c: 0
            }
            const options3={
              a: 10,
              b: 0,
              c: 0
            }
            
            function questions (array,fn){
              for (const element of array){
                fn(element);
              }
            
            }
            function suma (num){
                return num + num + num;
            }

            const results = [options1,options2,options3];

            alert ("Felicitaciones, tu puntaje total es "+ questions(results,suma));
            
        }
        break;

    default:
        alert ("Por favor ingresa una opción correcta.");
        break;
    } 
} while (ingreso != "X");


function mostrarMensaje(casa){
    alert ("Bienvenid@" + " " + casa + "!" + "\nTendrás la oportunidad de probar cuánto sabes sobre tu mundo mágico!"); 
}*/

/*
function question1 (userAnswer);
function question2 (userAnswer);
function question3 (userAnswer);*/
/*const results = [{
  options1:{
    a: 10,
    b: 0,
    c: 0
  },
  options2:{
    a: 0,
    b: 10,
    c: 0
  },
  options3:{
    a: 10,
    b: 0,
    c: 0
  }
}]


function questions (array,fn){
  for (const element of array){
    fn(element);
  }

}
function suma (num){
    return num + num + num;
}*/



