
const btnGryffindor = document.getElementById("gridRadios1");
const btnHufflepuff = document.getElementById("gridRadios2");
const btnRavenclaw = document.getElementById("gridRadios3");
const btnSlytherin = document.getElementById("gridRadios4");
const btnProbarSuerte = document.getElementById("gridRadios5");
const btnEnviar = document.getElementById("enviar");




function enviar (nombre){
  alert(`Hola, ${nombre}`);
    
}

btnEnviar.addEventListener("click"), ()=>{
  let nombre = document.getElementById("nombreIngresado").value;
  enviar(nombre);
}







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



//for (const i=0;i=userAnswer;i++){}





//preguntas


/*function quiz (questions,options,results){
  function showQuestions (questions,options){
    const output =[];
    const answers=[];
    const questions=[
      {
        question1: "Qué edad tenia Harry Potter cuando recibió su primer carta de Howarts?",
        answers: {
          a: "10",
          b: "11",
          c: "12"
        },
        correctAnswer: "b"
      }
    ]
    alert (prompt("Qué edad tenia Harry Potter cuando recibió su primer carta de Howarts? \n10 \n11 \n12"));
    for(const i=0;i<questions.length;i++){
      answers = [];
      for(letter in questions[i].answers){
        answers.push(questions[i].answer[letter]);
      }
      output.push(questions[i].question1 + answers.join);
    }
    alert(options.showQuestions = output.join);
    }

    function showResults (questions,options,results){

      const userAnswer = "";
      const numCorrect = 0;
      for(const i=0;i<questions.length;i++){
        if (userAnswer===questions[i].correctAnswer){
          numCorrect++;
          alert ("correcto!");
        }
        else {alert("Incorrecto!");
        }
      }
      
      alert (results = numCorrect + 'out of' + questions.length);
    }
    function showQuestions (questions,options);
    function showResults (questions,options,results)

      
}*/






/*switch (buyerOpction) {
    case "Cerveza Negra": 
      mostrarCompra(buyerOpction); 
      if (opction = "Cerveza Negra") {
        opction2 = parseInt(prompt("Elige cuantas quieres!"));
        mostrarTotal(sumar(opction2,opction));
      }else if (isNaN(opction2)){
        alert("Ingresá un número");
      }
      continue;
      
    case "Cerveza Rubia":
      mostrarCompra(buyerOpction);
      if (opction = "Cerveza Rubia"){
        opction2 = parseInt(prompt("Elige cuantas quieres!"));
        mostrarTotal(sumar(opction2,opction));  
      }else if (isNaN(opction2)){
        alert("Ingresá un número");
      }
      continue;

    case "Finalizar compra":
      alert("Muchas Gracias por Comprar :D");
      continue;
    default:
      alert("Ingrese las opciones RECOMENDADAS");
      continue;*/