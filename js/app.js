var Calculadora = {
  //Inicializar las varriables
  numeroPantalla : document.getElementById('display'),
  variableTemporal : 0,
  tecla : document.getElementsByClassName('tecla'),
  valor : "", //Guarda el valor de la tecla seleccionada
  numero: "vacio", //Guarda el ultimo resultado
  ultimoNumero:0, //Guarda el último numero guardado
  resultado : "", //Guarda el resultado
  operacion:"", //Operacion actual
  operador:"", //Define el tipo de variable numérica || caracteres
  ultimaOperacion : "", //Guarda la última operación realizada
  decimal : false, //Define si el numero es decimal.
  iniciarNumero : true, //Define si se continua escribiendo un número o se espera nuevo parámetros.
  operacionCompletada : true, //Detercta si se han completado todas las operaciones.

  init:function(){ //Iniciar las funciones al cargar la pagina
    //Eventos del Mouse
    this.eventosMouse()
    //Iniciar los valores de las variables
    Calculadora.reiniciarCalculadora()
  },

  reiniciarCalculadora:function(){
    Calculadora.numeroPantalla.innerHTML = 0,
    Calculadora.variableTemporal = "",
    Calculadora.numeroTemporal = 0,
    Calculadora.numero = "vacio",
    Calculadora.ultimoNumero = 0,
    Calculadora.resultado = "",
    Calculadora.iniciarNumero = true,
    Calculadora.valor="",
    Calculadora.operacion="",
    Calculadora.operador="",
    Calculadora.ultimaOperacion = "",
    Calculadora.decimal = false ,
    Calculadora.iniciarNumero = true,
    Calculadora.operacionCompletada = false ;
  },

  eventosMouse: function(event){
    /*Asignar un evento a todos los contenedores hijos dentro del contenedor principal "tecla"*/
    for (i=0; i < this.tecla.length; i++)
    {
      /*Evento mantener el botón del mouse presionado*/
      this.tecla[i].addEventListener("mousedown",function(event)
      {
        var valor = event.currentTarget.id /*Asignar el valor "id" de la tecla seleccionada*/
        document.getElementById(valor).style="transform:scale(0.9); opacity:0.95"
        Calculadora.validarTecla(valor, Calculadora.operador)
      })

      //Evento posición del mouse esta fuera del area de una tecla
      this.tecla[i].addEventListener("mouseout",function(event)
      {
        var valor = event.currentTarget.id
        document.getElementById(valor).style="transform:scale(1); opacity:1"
      })

      /*Evento soltar el mouse luego de presionado*/
      this.tecla[i].addEventListener("mouseup",function(event)
      {
        var valor = event.currentTarget.id
        document.getElementById(valor).style="transform:scale(1); opacity:1"
      })

      /*Evento posición del mouse esta sobre el area de una tecla*/
      this.tecla[i].addEventListener("mouseover",function(event)
      {
        var valor = event.currentTarget.id
        document.getElementById(valor).style="transform:scale(1); opacity:0.95"
      })
    }
  },

  validarTecla:function(valor) //Identificar Tecla Seleccionada y asignarle un valor:
  {
    switch (valor) {
      /*Operandos*/

      case "igual": //Boton Igual
      numero = String(numero) //Convertir el numero en cadena de caracteres
      operador="=" //Definir el tipo de operador
      Calculadora.iniciarNumero = true //Se inicia un nuevo operando
      Calculadora.realizarOperacion(operador,Calculadora.ultimaOperacion) //Se envia como parámetro el operador ""=""  mas la ultima operación arigmática realizada
      break;

      //Boton On/C
      case "on":
      numero = "" //numero vacio.
      operador = "on" //Parametro on
      Calculadora.reiniciarCalculadora() //Ejecutar función Reiniciar
      break;

      case "sign":
      numero = "operador"//Convertir el número en operador
      operador = "sign"//Tipo de operación
      Calculadora.cambiarSigno() //Ejecutar función cambiar de signo
      break;

      case "punto":
      numero = "." //Definir el valor del operador
      break;

      case "por":
      numero="operador" //Definir la tecla como un operador
      operador = "*" //Operación multiplicar
      break;

      case "mas":
      numero="operador" //Definir la tecla como un operador
      operador = "+" //Operación sumar
      break;

      case "menos":
      numero="operador" //Definir la tecla como un operador
      operador = "-" //Operación restar
      break;

      case "dividido":
      numero="operador" //Definir la tecla como un operador
      operador = "/" //Operación Dividir
      break;

      /****** Valor de Teclas Numéricas********/
      case "0":
      numero = 0 //Valor numérico
      operador = "" //No es un operador
      break;

      case "1":
      numero = 1 //Valor numérico
      operador = "" //No es un operador
      break;


      case  "2":
      numero = 2 //Valor numérico
      operador="" //No es un operador
      break;

      case "3":
      numero = 3 //Valor numérico
      operador="" //No es un operador
      break;


      case "4":
      numero = 4 //Valor numérico
      operador = "" //No es un operador
      break;

      case "5":
      numero = 5 //Valor numérico
      operador = "" //No es un operador
      break;

      case "6":
      numero = 6 //Valor numérico
      operador = "" //No es un operador
      break;


      case "7":
      numero = 7 //Valor numérico
      operador = "" //No es un operador
      break;

      case "8":
      numero = 8 //Valor numérico
      operador = "" //No es un operador
      break;

      case "9":
      numero = 9 //Valor numérico
      operador = "" //No es un operador
      break;

      default:
      numero = "No es un número" //Valor predeterminada de error
      break;
    }
    if ((Calculadora.numeroPantalla.innerHTML).length < 8){ //Limitar el operando a un maximo de 8 caracteres
      /*Determinar si la tecla presionada es un numero o un operador*/
      if ((typeof(numero) == 'number' || numero == ".")){ //Obtener el valor del numero o decimal seleccionado
        if (Calculadora.iniciarNumero == true && Calculadora.operacionCompletada == true) //Si la operacion ha completado y se ingresa un nuevo numero
        {
          Calculadora.reiniciarCalculadora() //reiniciar los valores de la calculadora
        }else if(Calculadora.iniciarNumero == true && Calculadora.operacionCompletada == false){
          console.log("Operaciones Pendientes");
        }

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
              }
            }
          }
          //ultimoNumero = variableTemporal
          Calculadora.iniciarNumero = false //El Se pueden seguir agregando numeros al operador
        }
      }
      /*Si el numero es operando*/
      else if (typeof(numero) == "string") {

        switch (operador) {
          case "=":

          break;

          case "on":
          console.log("Reiniciar Parámetros");
          break;

          case "sign":
          console.log("Cambiar Signo:" +Calculadora.resultado);
          break;

          default:
          Calculadora.numeroPantalla.innerHTML = "" //Mostrar pantalla vacia para iniciar nuevo operando
          Calculadora.iniciarNumero = true //Se inicia un nuevo operando
          //Condicional para permitir agregar mas operandos luego de presionar el boton igual
          if(Calculadora.iniciarNumero == true && Calculadora.operacionCompletada == true && operador != "="){ //Verificar que se espera una nueva entrada, la ultima operacion ha terminado y la tecla seleccionada es diferente a igual
            Calculadora.variableTemporal = ""; //Vaciar variable temporal
            Calculadora.iniciarNumero = true //Se inicia un nuevo operando
            Calculadora.operacionCompletada = false
          }
          Calculadora.realizarOperacion(operador, operador) // se envian los parametros de operador
          Calculadora.operacionCompletada = false
          //Calculadora.ultimaOperacion = "+"
        }
      }
    }
  },

  realizarOperacion: function(operador, operadorCalculadora) {
    Calculadora.ultimoNumero = Calculadora.variableTemporal
    //console.log("operacionCompletada :"+Calculadora.operacionCompletada);
    if(operador== "=" && Calculadora.iniciarNumero==true){ //Si el operando es "=" Verivicar que no hayan operaciones pendientes
      this.verificarOperacion(operadorCalculadora) //realizar la
      Calculadora.numeroPantalla.innerHTML = Calculadora.resultado
      Calculadora.operacionCompletada = true //Indicar que la operacion ha completado
      Calculadora.iniciarNumero = true //Se espera nuevo operando
    }else{
      this.verificarOperacion(operador) //si hay operaciones pendientes se realizan primero
      Calculadora.variableTemporal = "" //Variable Temporal Vacia.
      Calculadora.ultimaOperacion = operador //Asignar el valor de la íltima operación seleccionada.
    }
    Calculadora.numero = Calculadora.resultado //Se guarda el resltado para utilizarlo como operador en la siguiente cadena de operaciones.

  },

  verificarOperacion: function(operador){
    //console.log("NumeroTemporal: " +Calculadora.resultado + " Operador: " + Calculadora.operador + "" + " Numero: "+ Calculadora.variableTemporal);
    if(Calculadora.numero == "vacio") { //La calculadora se ha reiniciado
      Calculadora.resultado = Calculadora.variableTemporal
    }else{
      if(Calculadora.operacionCompletada == true){
        operaciones=Calculadora.resultado+operador+Calculadora.variableTemporal; // escribimos la operación en una cadena
        resultado=eval(operaciones) //convertimos la cadena a código y resolvemos
        Calculadora.resultado=resultado; //guardamos la solución
        console.log(Calculadora.numero+operador+Calculadora.variableTemporal+"="+resultado);
      }else{
        //console.log("Se espera nuevo parametro. Estado de la operacion: "+Calculadora.operacionCompletada + " ; IniciarNumero:" +Calculadora.iniciarNumero + " Resultado:"+Calculadora.resultado + " Ultimo numero:"+Calculadora.ultimoNumero + " ultimaOperacion:"+Calculadora.ultimaOperacion + " Operador:"+operador);
        //console.log("UltimaOperacion: "+ Calculadora.ultimaOperacion);
        operaciones=Calculadora.resultado+Calculadora.ultimaOperacion+Calculadora.variableTemporal; // escribimos la operación en una cadena
        //console.log("Operaciones:"+ operaciones);
        resultado=eval(operaciones) //convertimos la cadena a código y resolvemos
        Calculadora.resultado=resultado; //guardamos la solución
        console.log(Calculadora.numero+Calculadora.ultimaOperacion+Calculadora.variableTemporal+"="+resultado);
      }
    }
  },

  cambiarSigno: function(){
    var pantalla = Calculadora.numeroPantalla.innerHTML
    if (pantalla != 0){
      var signo ="-"
      var resultado = - (Calculadora.numeroPantalla.innerHTML)
      Calculadora.numeroPantalla.innerHTML = resultado
      Calculadora.resultado = resultado
    }
    Calculadora.operacionCompletada = true;
    console.log("Operacion Completada: "+ Calculadora.operacionCompletada);
  },
}
Calculadora.init();
