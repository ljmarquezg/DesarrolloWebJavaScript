/************Cambiar tamaño de botones seleccionados**************/
var tecla = document.getElementsByClassName('tecla'),
numeroPantalla = document.getElementById('display'),
variableTemporal = 0,
decimal = false,
numero ="",
numero1 = 0,
numero2 = 0,
numeroTemporal = 0,
ultimoNumero ="",
operacion="",
operando="",
operacionUltima = "",
operandos = [0,0];

//Asignar valores con eventos de mouse
function teclaSeleccionada(){
  for (i=0; i < tecla.length; i++){
    tecla[i].addEventListener("click",function(event){
      var valor = event.currentTarget.id
      validarTecla(valor)
    })
  }
}

function validarTecla(valor){
  switch (valor) {
    /*Operandos*/
    case "igual":
    numero = "operando"
    operando = "igual"
    ultimaOperacion(valor)
    numeroPantalla.innerHTML = operandos[0]
    break;

    case "on":  //Boton On/C
    Calculadora.reiniciarCalculadora()
    numero = "operando"
    operando = "reiniciar"
    break;

    case "sign":
    numero = "operando"
    operando = "signos"
    break;

    case "por":
    numero = "operando"
    operando = "multiplicar"
    break;

    case "mas":
    numero = "operando"
    operando = "sumar"
    break;

    case "menos":
    numero = "operando"
    operando = "restar"
    break;


    case "punto":
    numero = "operando"
    operando = "punto"
    break;

    case "dividido":
    numero = "operando"
    operando = "dividir"
    break;


    /****** Valor de Teclas********/
    case "0":
    numero = 0
    operando = ""

    break;

    case "1":
    numero = 1
    operando = ""
    break;


    case  "2":
    numero = 2
    operando=""
    break;

    case "3":
    numero = 3
    operando=""
    break;


    case "4":
    numero = 4
    operando = ""
    break;

    case "5":
    numero = 5
    operando = ""
    break;

    case "6":
    numero = 6
    operando = ""
    break;


    case "7":
    numero = 7
    operando = ""
    break;

    case "8":
    numero = 8
    operando = ""
    break;

    case "9":
    numero = 9
    operando = ""
    break;

    default:
    numero = "No es un numero"
    break;
  }

  if (numero == 0 && variableTemporal == 0){
    console.log("Debe seleccionar un numero distinto de 0");
  }else{
    operarNumeros(numero,operando)
  }
}

function ultimaOperacion(valor){
  if (valor != "igual"){
    console.log("Esta es la ultima Operacion:"+ valor);
    operacionUltima = valor
  }else{
    switch case:
    console.log("repetir la operacion de" + operacionUltima);
  }
}

function operarNumeros(numero, operando){
  console.log(operando)
  if (typeof(numero) == 'number' && typeof(numero) != 'string'){
    if (String(variableTemporal).length <= 8){//Convertir la variableTemporal en String y determinar si posee 8 o menos caracteres
      variableTemporal += String(numero) //Convertir el numero en String
      numeroPantalla.innerHTML = Number(variableTemporal) //Convertir el valor en Numero y mostrarlo en pantalla
      numeroTemporal = Number(variableTemporal) //Definir el valor temporal como Numero
    }else{
      alert("Has alcanzado el numero maximo de caracteres permitidos")
    }
  }
  else if (numero == "operando") {
    guardarOperandos(numeroTemporal, operando)

    //console.log("3 - Operando: " + operando + " Numero Muestra: " +numero);
    switch (operando) {
      /*case "igual":
      numeroPantalla.innerHTML = operandos[0]
      break;*/

      case "sumar":
      ultimaOperacion(operando)
      numero = 0
      variableTemporal = 0
      break;

      case "restar":
      ultimaOperacion(operando)
      numero = 0
      variableTemporal = 0
      break;

      case "multiplicar":
      ultimaOperacion(operando)
      numero = 0
      variableTemporal = 0
      break;

      case "dividir":
      ultimaOperacion(operando)
      numero = 0
      variableTemporal = 0
      break;

      case "reiniciar":
      Calculadora.reiniciarCalculadora()
      console.log(" 4 - REINICIAR CALCULADORA reiniciando");
      break;
      default:
    }
  }else{
    alert("No es un numero")
  }
}

/*Guardar numeros a operar en un array*/
function guardarOperandos(numeroTemporal,operacion){
  if(operandos.length < 2){
    operandos.push(numeroTemporal)
    console.log("Lenght Operandos: " +operandos.length);
    console.log("Esperando un segundo parametro");
  }
}


/*function guardarOperandos(numeroTemporal,operacion){
if(operandos.length < 2){
operandos.push(numeroTemporal)
console.log("Lenght Operandos: " +operandos.length);
console.log(operandos);
if (operandos.length >= 2){
Calculadora.sumar(operandos[0], operandos[1])
numeroPantalla.innerHTML = operandos[0]
}
}
}*/

function calcular(){
  suma = valor1 + valor2;
  return suma;
}


var Calculadora = {
  //Definicion de Variable
  init:function(){
    //Eventos del Mouse
    this.eventosMouse()
    this.reiniciarCalculadora()
    //teclaSoltar();
  },

  reiniciarCalculadora:function(){
    numeroPantalla.innerHTML = 0,
    variableTemporal = 0,
    decimal = false,
    numero1 = 0,
    numero2 = 0,
    numeroTemporal,
    ultimoNumero ="",
    numero ="",
    operacion="",
    operandos = new Array();
  },


  eventosMouse:function(){
    teclaSeleccionada()
  },

  teclaSoltar:function(event){
    var tecla = event.currentTarget.id
    retornarColorBotonesAccion(document.getElementById(seleccion))
  },

  sumar: function(numero1, numero2){
    resultado = numero1 + numero2
    this.guardarResultado(resultado)
  },

  restar: function(numero1, numero2){
    resultado = numero1 - numero2
    this.guardarResultado(resultado)
  },

  multiplicar: function(numero1, numero2){
    resultado = numero1 * numero2
    this.guardarResultado(resultado)
  },

  dividir: function(numero1, numero2){
    resultado = numero1 /  numero2
    this.guardarResultado(resultado)
  },

  guardarResultado: function(resultado){
    operandos[0] = resultado;
    operandos.splice(1,1)
  },

  repetirResultado: function(resultado){

  }
}

Calculadora.init();
