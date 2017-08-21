var Calculadora = {
  //Inicializar las varriables
  numeroPantalla : document.getElementById('display'),
  variableTemporal : 0,
  tecla : document.getElementsByClassName('tecla'),
  valor : "",
  numero: "vacio",
  ultimoNumero:0,
  resultado : "",
  operacion:"", //Operacion actual
  operador:"", //Define el Tipo de variable
  ultimaOperacion : "", //Variable que contiene la última operación realizada
  decimal : false, //Define si el numero es decimal.
  iniciarNumero : true, //Detectar si se continua escribiendo un número.
  operacionCompletada : true, //Permite deterctar si no existen operaciones pendientes

 //definir la variable "tecla" obtener los valores dentro de este contenedor

  init:function(){
    //Eventos del Mouse
    this.eventosMouse()
    Calculadora.reiniciarCalculadora()
    //teclaSoltar();
  },

  reiniciarCalculadora:function(){
    Calculadora.numeroPantalla.innerHTML = 0,
    Calculadora.variableTemporal = "", //variable que contiene los caracteres presionados.
    Calculadora.numeroTemporal = 0,
    Calculadora.numero = "vacio", //Variable que contiene el numero a operar.
    Calculadora.ultimoNumero = 0, //Variable que contiene el último operando.
    Calculadora.resultado = "", //Variable que contiene el resultado.
    Calculadora.iniciarNumero = true
    //numeroTemporal = 0, //
    Calculadora.valor="",
    Calculadora.operacion="", //Operacion actual
    Calculadora.operador="", //Define el Tipo de variable
    Calculadora.ultimaOperacion = "" //Variable que contiene la última operación realizada
    Calculadora.decimal = false //Define si el numero es decimal.
    Calculadora.iniciarNumero = true, //Detectar si se continua escribiendo un número.
    Calculadora.operacionCompletada = false //Permite deterctar si no existen operaciones pendientes
  },

  eventosMouse: function(event){
    for (i=0; i < this.tecla.length; i++)
    { /*Asignar un evento a todos los contenedores hijos dentro del contenedor principal "tecla"*/

    this.tecla[i].addEventListener("mousedown",function(event) /*Evento mantener el botón del mouse presionado*/
    {/*Mientras el botón se mantiene presionado*/
      var valor = event.currentTarget.id /*Asignar el valor "id" de la tecla seleccionada*/
      document.getElementById(valor).style="transform:scale(0.9); opacity:0.95"
      Calculadora.validarTecla(valor, Calculadora.operador)
    })

    this.tecla[i].addEventListener("mouseout",function(event) //Evento posición del mouse esta fuera del area de una tecla
    {/*Cuando el botón sale del area de la imagen*/
      var valor = event.currentTarget.id
      document.getElementById(valor).style="transform:scale(1); opacity:1"
    })

    /*Evento soltar el mouse luego de presionado*/
    this.tecla[i].addEventListener("mouseup",function(event)
    { /*Cuando se suelta la tecla*/
      var valor = event.currentTarget.id
      document.getElementById(valor).style="transform:scale(1); opacity:1"
    })

    /*Evento posición del mouse esta sobre el area de una tecla*/
    this.tecla[i].addEventListener("mouseover",function(event)
    { //Cuando se pasa el botón por encima de la tecla
      var valor = event.currentTarget.id
      document.getElementById(valor).style="transform:scale(1); opacity:0.95"
    })
  }
  },

  validarTecla:function(valor) //Identificar Tecla Seleccionada y asignarle un valor:
  {
    switch (valor) {
      /*Operandos*/
      case "igual":
      numero = String(numero) //Convertir el numero en cadena de caracteres
      operador="=" //Definir el tipo de operador
      break;

      case "on":  //Boton On/C
      Calculadora.reiniciarCalculadora()
      Calculadora.operador = "reiniciar"
      break;

      case "sign":
      numero = "operador"//Convertir el numero en operador
      operador = "sign"//Tipo de operación
      Calculadora.cambiarSigno()
      break;

      case "punto":
      numero = "." //Definir el valor del operador
      break;

      case "por":
      numero="operador"
      operador = "*"
      Calculadora.ultimaOperacion = "*"
      break;

      case "mas":
      numero="operador"
      operador = "+"
      Calculadora.ultimaOperacion = "+"
      break;

      case "menos":
      numero="operador"
      operador = "-"
      Calculadora.ultimaOperacion = "-"
      break;

      case "dividido":
      numero="operador"
      operador = "/"
      Calculadora.ultimaOperacion = "/"
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
      if ((Calculadora.numeroPantalla.innerHTML).length < 8){ //Limitar el operando a un maximo de 8 caracteres
        /*Determinar si la tecla presionada es un numero o un operador*/
        if ((typeof(numero) == 'number' || numero == ".")){ //Obtener el valor del numero o decimal seleccionado
          if (numero == 0 && Calculadora.numeroPantalla.innerHTML == 0){ //Obtener el valor de la tecla seleccionada y el numero en pantalla.
            console.log("Debe seleccionar un numero distinto de 0"); //Si ambos son 0 Mostrar mensaje en cónsola si el numero es 0
          }else{
            if (Calculadora.numeroPantalla.innerHTML == 0 || Calculadora.iniciarNumero == true){ //Verificar si el número es 0 o y es un nuevo numero
              Calculadora.variableTemporal += String(numero) //Convertir en cadena la cadena de teclas seleccionadas
              Calculadora.variableTemporal = Number(Calculadora.variableTemporal) //Convertir en Numero la cadena de teclas para realizar operaciones arigméticas
              Calculadora.numeroPantalla.innerHTML = Number(Calculadora.variableTemporal) //Mostrar en pantalla el valor de la cadena numerica
              //console.log(variableTemporal);
              if(numero == "."){ //Condicional sila tecla seleccionada es decimal
                Calculadora.variableTemporal = String("0.") //Convertir el valor en String para poder colocar el punto
                Calculadora.numeroPantalla.innerHTML = Calculadora.variableTemporal //Mostrar en pantalla
                Calculadora.decimal = true //Activar el modo decimal
                console.log("decimal Habilitado: " + Calculadora.numeroPantalla.innerHTML); //Mosrtar en cónsola activación del módulo decimal
              }
            }else{
              if (numero == "." && decimal == false){
                Calculadora.variableTemporal += String(numero)
                Calculadora.numeroPantalla.innerHTML = String(Calculadora.variableTemporal)
                decimal = true
                console.log("decimal Habilitado: " + Calculadora.numeroPantalla.innerHTML);
              }else{
                if(numero == "." && decimal==true){
                  console.log("No puede agregar mas comas al numero");
                }else{
                  Calculadora.variableTemporal +=String(numero)
                  Calculadora.numeroPantalla.innerHTML = Number(Calculadora.variableTemporal)
                  console.log("Numero pantalla Calculadora "+Number(Calculadora.numeroPantalla.innerHTML));
                }
              }
            }
            //ultimoNumero = variableTemporal
            Calculadora.iniciarNumero = false //El Se pueden seguir agregando numeros al operador
          }
        }
        /*Si el numero es operando*/
        else if (typeof(numero) == "string") {
          if (operador == "=") {
            Calculadora.iniciarNumero = true //Se inicia un nuevo operando
              Calculadora.realizarOperacion(operador,Calculadora.ultimaOperacion) //Se envia como parámetro el operador =  mas la ultima operación
          }else{
            Calculadora.iniciarNumero = true //Se inicia un nuevo operando
            Calculadora.realizarOperacion(operador, operador) // se envian los parametros de operador
          }
      }
    }
  },

realizarOperacion(operador, operadorCalculadora) {
  Calculadora.ultimoNumero = Calculadora.variableTemporal
  if(operador== "=" && Calculadora.iniciarNumero==true ){
    alert("Both Ok")
    this.verificarOperacion(operadorCalculadora)
    console.log(Calculadora.numero+operadorCalculadora+Calculadora.ultimoNumero+"="+resultado);
    Calculadora.numeroPantalla.innerHTML = Calculadora.resultado
    console.log(Calculadora.resultado);
    Calculadora.iniciarNumero = false
    Calculadora.operacionCompletada == true
  }else{
    this.verificarOperacion(operador) //si hay operaciones pendientes se realizan primero
           //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
           Calculadora.numero = Calculadora.resultado
           Calculadora.operacion=operador; //guardamos tipo de operación.
           Calculadora.variableTemporal = ""
    }
},

verificarOperacion: function(operador){
      //console.log("NumeroTemporal: " +Calculadora.resultado + " Operador: " + Calculadora.operador + "" + " Numero: "+ Calculadora.variableTemporal);
      if(Calculadora.numero == "vacio") {
        Calculadora.resultado = Calculadora.variableTemporal
      }else{
        operaciones=Calculadora.resultado+operador+Calculadora.ultimoNumero; // escribimos la operación en una cadena
        console.log("Operaciones:"+ operaciones);
        resultado=eval(operaciones) //convertimos la cadena a código y resolvemos
        Calculadora.resultado=resultado; //guardamos la solución
        console.log(Calculadora.numero+operador+Calculadora.variableTemporal+"="+resultado);
        //Calculadora.variableTemporal = ""; //se puede reiniciar la pantalla.
        //Calculadora.numeroPantalla.innerHTML = Calculadora.variableTemporal
      }
        Calculadora.operacionCompletada=true; //ya no hay operaciones pendientes
        //alert("Operacion No Completada" + Calculadora.resultado)
},

  cambiarSigno: function(){
    var pantalla = Calculadora.numeroPantalla.innerHTML
    if (pantalla != 0){
      var signo ="-"
      var resultado = - (Calculadora.numeroPantalla.innerHTML)
      Calculadora.numeroPantalla.innerHTML = resultado
    }
    Calculadora.operacionCompletada = true;
    console.log("Operacion Completada: "+ Calculadora.operacionCompletada);
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
