/************Cambiar tamaño de botónes seleccionados**************/

//Inicializar las varriables
var tecla = document.getElementsByClassName('tecla'), //definir la variable "tecla" obtener los valores dentro de este contenedor
numeroPantalla = document.getElementById('display'), //obtener el contenedor con la clase "display"
variableTemporal = "", //variable que contiene los caracteres presionados.
numero = 0, //Variable que contiene el numero a operar.
ultimoNumero = 0, //Variable que contiene el último operando.
resultado = "", //Variable que contiene el resultado.
//numeroTemporal = 0, //
operacion="", //Operacion actual
operador="", //Define el Tipo de variable
ultimaOperacion = "" //Variable que contiene la última operación realizada
decimal = false //Define si el numero es decimal.
iniciarNumero = true, //Detectar si se continua escribiendo un número.
operacionCompletada = false //Permite deterctar si no existen operaciones pendientes

//Asignar valores con eventos de mouse
function teclaSeleccionada()
{
  for (i=0; i < tecla.length; i++)
  { /*Asignar un evento a todos los contenedores hijos dentro del contenedor principal "tecla"*/

  tecla[i].addEventListener("mousedown",function(event) /*Evento mantener el botón del mouse presionado*/
  {/*Mientras el botón se mantiene presionado*/
    var valor = event.currentTarget.id /*Asignar el valor "id" de la tecla seleccionada*/
    document.getElementById(valor).style="transform:scale(0.9); opacity:0.95"
    validarTecla(valor, operador)
  })


  tecla[i].addEventListener("mouseout",function(event) //Evento posición del mouse esta fuera del area de una tecla
  {/*Cuando el botón sale del area de la imagen*/
    var valor = event.currentTarget.id
    document.getElementById(valor).style="transform:scale(1); opacity:1"
  })


  tecla[i].addEventListener("mouseup",function(event)//Evento soltar el mouse luego de presionado
  { /*Cuando se suelta la tecla*/
    var valor = event.currentTarget.id
    document.getElementById(valor).style="transform:scale(1); opacity:1"
  })


  tecla[i].addEventListener("mouseover",function(event)//Evento posición del mouse esta sobre el area de una tecla
  { //Cuando se pasa el botón por encima de la tecla
    var valor = event.currentTarget.id
    document.getElementById(valor).style="transform:scale(1); opacity:0.95"
  })
}
}

function validarTecla(valor, operador) //Identificar Tecla Seleccionada y asignarle un valor:
{
  switch (valor) {
    /*Operandos*/
    case "igual":
    numero = String(numero) //Convertir el numero en cadena de caracteres
    operador="igual" //Definir el tipo de operador
    break;

    case "on":  //Boton On/C
    numero = "operador" //Convertir el numero en operador
    operador = "reiniciar"//Definir el tipo de operador
    break;

    case "sign":
    numero = "operador"//Convertir el numero en operador
    operador = "sign"//Tipo de operación
    ultimaOperacion = "sign"//Definir la ultimaOperacion
    break;

    case "punto":
    numero = "." //Definir el valor del operador
    operador = ""//Definir el operador como vacio para definirlo numero
    break;

    case "por":
    Calculadora.operar(ultimaOperacion, resultado, numero) //Ejecutar la ultima operación realizada para obtener el resultado como primer parámetro en cadena de operaciones
    numero = "operador" //Convertir el número en operador
    operador = "multiplicar" //Tipo de operación
    ultimaOperacion = "multiplicar" //Definir la ultimaOperacion
    break;

    case "mas":
    Calculadora.operar(ultimaOperacion, resultado, numero)//Ejecutar la última operación realizada para obtener el resultado como primer parámetro en cadena de operaciones
    numero = "operador"//Convertir el número en operador
    operador = "sumar"//Tipo de operación
    ultimaOperacion = "sumar"//Definir la ultimaOperacion
    break;

    case "menos":
    Calculadora.operar(ultimaOperacion, resultado, numero)//Ejecutar la ultima operación realizada para obtener el resultado como primer parámetro en cadena de operaciones
    numero = "operador"//Convertir el número en operador
    operador = "restar"//Tipo de operación
    ultimaOperacion = "restar"//Definir la ultimaOperacion
    break;

    case "dividido":
    Calculadora.operar(ultimaOperacion, resultado, numero)//Ejecutar la ultima operación realizada para obtener el resultado como primer parámetro en cadena de operaciones
    numero = "operador"//Convertir el número en operador
    operador = "dividir"//Tipo de operación
    ultimaOperacion = "dividir"//Definir la ultimaOperacion
    break;

    /****** Valor de Teclas Numéricas********/
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
    numero = "No es un número"
    break;
  }
  switch (operador) {
    case "":
    if(decimal == false || numeroPantalla.innerHTML < 0 ){ //Definir número máximo de 8 caracteres si el número no es decimal o Negativo
      if ((numeroPantalla.innerHTML).length < 8){
        identificarOperando(numero, operador) //Identificar el tipo y valor de la tecla seleccionada
      }else{
        console.log("Has alcanzado el número máximo de caracteres permitidos");//Mostrar alerta en cónsola
      }
    }else{
      if ((numeroPantalla.innerHTML).length < 9){// Definir número máximo de 9 caracteres si el número es decimal o negativo
        identificarOperando(numero, operador)
      }else{
        console.log("Has alcanzado el número máximo de caracteres permitidos");//Mostrar alerta en cónsola
      }
    }
    break;
    default:
    identificarOperando(numero, operador)
  }
}

function identificarOperando(numero, operador){
  if (operacionCompletada == true) { //Verificar que la ultima cadena de operaciones ha terminado
    if (typeof(numero) == "number"){ //Verificar que la tecla seleccionada sea de tipo numerico
      resultado = 0 //inicializar el resultado en 0
      operacionCompletada = false //Iniciar una nueva cadena de operaciones
    }else if(typeof(numero) == "string"){//Si se selecciona un operador, no se reiniciará el resultado
      operacionCompletada = false //Existe una operación en proceso
    }
  }
  if ((typeof(numero) == 'number' || numero == ".")){ //Obtener el valor del numero o decimal seleccionado
    if (numero == 0 && numeroPantalla.innerHTML == 0){ //Obtener el valor de la tecla seleccionada y el numero en pantalla.
      console.log("Debe seleccionar un numero distinto de 0"); //Si ambos son 0 Mostrar mensaje en cónsola si el numero es 0
    }else{
      if (numeroPantalla.innerHTML == 0 || iniciarNumero == true){ //Verificar si el número es 0 o y es un nuevo numero
        variableTemporal += String(numero) //Convertir en cadena la cadena de teclas seleccionadas
        variableTemporal = Number(variableTemporal) //Convertir en Numero la cadena de teclas para realizar operaciones arigméticas
        numeroPantalla.innerHTML = Number(variableTemporal) //Mostrar en pantalla el valor de la cadena numerica
        //console.log(variableTemporal);
        if(numero == "."){ //Condicional sila tecla seleccionada es decimal
          variableTemporal = String("0.") //Convertir el valor en String para poder colocar el punto
          numeroPantalla.innerHTML = variableTemporal //Mostrar en pantalla
          decimal = true //Activar el modo decimal
          console.log("decimal Habilitado: " + numeroPantalla.innerHTML); //Mosrtar en cónsola activación del módulo decimal
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
      ultimoNumero = variableTemporal
      iniciarNumero = false
    }
  }

  else if (typeof(numero) == "string") {
    switch (operador) {
      case "igual":
      Calculadora.ultimaOperacion(ultimaOperacion, resultado, ultimoNumero)
      console.log("Ultimo Numero: " + ultimoNumero + " Ultima Operacion: " +ultimaOperacion + " Resultado: "+resultado + " variableTemporal" + variableTemporal);
      numeroPantalla.innerHTML = resultado
      break;

      case "sign":
      numero = variableTemporal
      decimal = false
      console.log("empezar a dividir");
      Calculadora.dividir(numero)
      break;

      case "sumar":
      numero = variableTemporal
      decimal = false
      //Calculadora.sumar(numero)
      Calculadora.operar(ultimaOperacion, resultado, numero)
      break;

      case "restar":
      numero = variableTemporal
      decimal = false
      Calculadora.operar(ultimaOperacion, resultado, numero)
      break;

      case "multiplicar":
      numero = variableTemporal
      decimal = false
      Calculadora.multiplicar(numero)
      break;

      case "dividir":
      numero = variableTemporal
      decimal = false
      Calculadora.dividir(numero)
      break;

      case "reiniciar":
      Calculadora.reiniciarCalculadora()
      console.log(" 4 - REINICIAR CALCULADORA reiniciando");
      break;
      default:
    }
  }else{
    alert("Operación Inválida") // Mostrar una alerta en el explorador si el usuawrio realiza una accion no permitida
  }
  //console.log("Operador en validar Tecla: " +operador + "Ultima Operacion realizada: "+ ultimaOperacion);
  //console.log(resultado)
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
    resultado = "vacio",
    numero2 = "",
    //numeroTemporal = 0,
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
      numeroPantalla.innerHTML = numero
    }else {
      if (resultado == "vacio"){
        resultado = numero
      }else{
        resultado =  Number(resultado) + Number(numero)
      }
      if(String(resultado).length > 8){
        resultado = resultado.toPrecision(1)
      }
      variableTemporal = "";
      iniciarNumero = true;
      numeroPantalla.innerHTML = variableTemporal;
      operador = "sumar" //Guardar ultima Operacion
    }
  },

  restar: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = numero
    }else {
      if (resultado == "vacio"){
        resultado = numero
      }else{
        resultado = Number(resultado) - Number(numero)
      }
      iniciarNumero = true;
      variableTemporal = "";
      numeroPantalla.innerHTML = variableTemporal;
      operador = "restar" //Guardar ultima Operacion
    }
  },

  multiplicar: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = numero
    }else {
      if (resultado == "vacio"){
        resultado = numero
      }else{
        resultado = Number(numero) * Number(resultado)
      }
      console.log("multiplicar: " + numero +  "resultado " +(resultado));
      iniciarNumero = true;
      variableTemporal = "";
      numeroPantalla.innerHTML = variableTemporal;
      operador = "multiplicar" //Guardar ultima Operacion
    }
  },

  dividir: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = numero
    }else {
      if (resultado == "vacio"){
        resultado = numero
      }else{
        resultado = Number(resultado) / Number(numero)
      }
      iniciarNumero = true;
      variableTemporal = "";
      numeroPantalla.innerHTML = variableTemporal;
      operador = "dividir" //Guardar ultima Operacion
    }
  },

  sign: function(numero){
    if(iniciarNumero == true){
      numeroPantalla.innerHTML = numero
    }else {
      if (resultado == "vacio"){
        resultado = numero
        alert(resultado)
      }else{
        resultado = Number(resultado) / Number(numero)
      }
      iniciarNumero = true;
      variableTemporal = "";
      numeroPantalla.innerHTML = variableTemporal;
      operador = "dividir" //Guardar ultima Operacion
    }
  },

  ultimaOperacion: function(ultimaOperacion, resultado, numero){
    if(variableTemporal == ""){
      iniciarNumero = false //Está pendiente una operacion
      console.log("Esperando parámetros")
    }else{
      alert(variableTemporal)
    }
    this.operar(ultimaOperacion, resultado,numero)
    console.log("Operador: "+operador + " Ultimo Numero: " + ultimoNumero + " Resultado: " + resultado);
    operacionCompletada = true
    console.log(resultado + " Operador: " +operador);
  },

  operar: function(ultimaOperacion, resultado,numero){
    switch (ultimaOperacion) {
      case "sumar":
      this.sumar(numero)
      break;

      case "restar":
      this.restar(numero)
      break;

      case "multiplicar":
      this.multiplicar(numero)
      break;

      case "dividir":
      this.dividir(numero)
      break;
    }
  }
}
Calculadora.init();
