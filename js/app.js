/************Cambiar tamaño de botones seleccionados**************/

//Inicializar las varriables
var tecla = document.getElementsByClassName('tecla'),
numeroPantalla = document.getElementById('display'),
variableTemporal = "", //variable que contiene los caracteres presionados.
numero = 0,
resultado = 0,
numeroTemporal = 0,
ultimoNumero = 0,
operacion="",
operador="",
iniciarNumero = true, //Detectar si se continua escribiendo un numero.
decimal = false

//Asignar valores con eventos de mouse
function teclaSeleccionada(){
  for (i=0; i < tecla.length; i++){

    tecla[i].addEventListener("mousedown",function(event){//Mientras el boton se mantiene presionado
      var valor = event.currentTarget.id
      document.getElementById(valor).style="transform:scale(0.9); opacity:0.95"
      console.log(valor);
      validarTecla(valor, operador)
    })

    tecla[i].addEventListener("mouseout",function(event){//Cuando el boton sale del area de la imagen
      var valor = event.currentTarget.id
      document.getElementById(valor).style="transform:scale(1); opacity:1"
    })

    tecla[i].addEventListener("mouseup",function(event){ //Cuando se suelta la tecla
      var valor = event.currentTarget.id
      document.getElementById(valor).style="transform:scale(1); opacity:1"
    })

    tecla[i].addEventListener("mouseover",function(event){ //Cuando se pasa el boton por encima de la tecla
      var valor = event.currentTarget.id
      document.getElementById(valor).style="transform:scale(1); opacity:0.95"
    })

  }
}
console.log(ultimoNumero);
//Identificar Tecla Seleccionada y asignarle un valor:
function validarTecla(valor, operador){
  console.log("Operador en validar Tecla: " +operador);
  switch (valor) {
    /*Operandos*/
    case "igual":
    numero ="operador"
    operador="igual"
    break;

    case "on":  //Boton On/C
    numero = "operador"
    operador = "reiniciar"
    break;

    case "sign":
    numero = "operador"
    operador = "sign"
    break;

    case "por":
    numero = "operador"
    operador = "multiplicar"
    break;

    case "mas":
    numero = "operador"
    operador = "sumar"
    break;

    break;

    case "menos":
    numero = "operador"
    operador = "restar"
    break;

    case "punto":
    numero = "."
    operador = ""
    break;

    case "dividido":
    numero = "operador"
    operador = "dividir"
    break;


    /****** Valor de Teclas********/
    case "0":
    numero = 0
    operador = ""

    break;

    case "1":
    numero = 1
    operador = ""
    break;


    case  "2":
    numero = 2
    operador=""
    break;

    case "3":
    numero = 3
    operador=""
    break;


    case "4":
    numero = 4
    operador = ""
    break;

    case "5":
    numero = 5
    operador = ""
    break;

    case "6":
    numero = 6
    operador = ""
    break;


    case "7":
    numero = 7
    operador = ""
    break;

    case "8":
    numero = 8
    operador = ""
    break;

    case "9":
    numero = 9
    operador = ""
    break;

    default:
    numero = "No es un numero"
    break;
  }

  switch (operador) {
    case "":
        if(decimal == false){
          if ((numeroPantalla.innerHTML).length < 8){
            identificarOperando(numero, operador)
          }else{
            alert("Has alcanzado el numero maximo de caracteres permitidos")
          }
        }else{
          if ((numeroPantalla.innerHTML).length < 9){
            identificarOperando(numero, operador)
          }else{
            alert("Has alcanzado el numero maximo de caracteres permitidos")
          }
        }
      break;
    default:
    identificarOperando(numero, operador)
  }

}

function identificarOperando(numero, operador){
  if ((typeof(numero) == 'number' || numero == ".")){
    if (numero == 0 && numeroPantalla.innerHTML == 0){
      console.log("Debe seleccionar un numero distinto de 0");
    }else{
      if (numeroPantalla.innerHTML == 0 || iniciarNumero == true){ //Verificar si el numero es 0 o Es un nuevo numero
        variableTemporal += String(numero) //Convertir en cadena
        variableTemporal = Number(variableTemporal) //Convertir en Numero
        numeroPantalla.innerHTML = Number(variableTemporal)
        console.log(variableTemporal);
        if(numero == "."){
          variableTemporal = String("0.")
          numeroPantalla.innerHTML = variableTemporal
          decimal = true
          console.log("decimal Habilitado: " + numeroPantalla.innerHTML);
        }
      }else{
        if (numero == "." && decimal == false){
          variableTemporal += String(numero)
          numeroPantalla.innerHTML = String(variableTemporal)
          decimal = true
          console.log("decimal Habilitado: " + numeroPantalla.innerHTML);
        }else{
          if( numero == "." && decimal==true){
            console.log("No puede agregar mas comas al numero");
          }else{
            variableTemporal +=String(numero)
            numeroPantalla.innerHTML = Number(variableTemporal)
            console.log(Number(numeroPantalla.innerHTML));
          }
        }
      }
      iniciarNumero = false
    }
  }

else if (numero == "operador") {
  switch (operador) {
    case "igual":
    Calculadora.ultimaOperacion(operador,numero, ultimoNumero)
    break;

    case "sign":
    variableTemporal = Number(-variableTemporal)
    numeroPantalla.innerHTML = variableTemporal
    break;

    case "sumar":
    numero = variableTemporal
    Calculadora.sumar(numero)
    break;

    case "restar":
    numero = variableTemporal
    Calculadora.restar(numero)
    break;

    case "multiplicar":
    numero = variableTemporal
    Calculadora.multiplicar(numero)
    break;

    case "dividir":
    numero = variableTemporal
    Calculadora.dividir(numero)
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
    variableTemporal = "", //variable que contiene los caracteres presionados.
    numero = 0,
    resultado = 0,
    numero2 = "",
    numeroTemporal = 0,
    operacion="",
    operador="",
    iniciarNumero = true, //Detectar si se continua escribiendo un numero.
    decimal = false
  },

  eventosMouse:function(){
    teclaSeleccionada()
  },

  teclaSoltar:function(event){
    var tecla = event.currentTarget.id
    (document.getElementById(seleccion))
  },

  sumar: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = resultado
      operador = "sumar" //Guardar ultima Operacion
      //ultimoNumero = variableTemporal
    }else {
      resultado =  Number(resultado) + Number(numero)
      iniciarNumero = true;
      variableTemporal = 0;
      numeroPantalla.innerHTML = resultado;
      operador = "sumar" //Guardar ultima Operacion
    }
  },

  restar: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = resultado
      operador = "restar" //Guardar ultima Operacion
      //ultimoNumero = variableTemporal
    }else {
      resultado = Number(resultado) - Number(numero)
      iniciarNumero = true;
      variableTemporal = 0;
      numeroPantalla.innerHTML = resultado;
      operador = "restar" //Guardar ultima Operacion
    }
  },

  multiplicar: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = resultado
      operador = "multiplicar" //Guardar ultima Operacion
      //ultimoNumero = variableTemporal
    }else {
      resultado = Number(numero) * Number(resultado)
      iniciarNumero = true;
      variableTemporal = 0;
      numeroPantalla.innerHTML = resultado;
      operador = "multiplicar" //Guardar ultima Operacion
    }
  },

  dividir: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = resultado
      operador = "dividir" //Guardar ultima Operacion
      //ultimoNumero = variableTemporal
    }else {
      resultado = Number(resultado) / Number(numero)
      iniciarNumero = true;
      variableTemporal = 0;
      numeroPantalla.innerHTML = resultado;
      operador = "dividir" //Guardar ultima Operacion
    }
  },
  ultimaOperacion: function(operador, numero){
    console.log("Operador: "+operador + " Numero: " + numero);
  }
}

Calculadora.init();