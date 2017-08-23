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

  /*Iniciar las funciones al cargar la pagina*/
  init:function(){
    //Eventos del Mouse
    this.eventosMouse()
    //Iniciar los valores de las variables
    Calculadora.reiniciarCalculadora()
  },

  reiniciarCalculadora:function(){
    /*Reiniciar todos los parámetros*/
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

      /*Evento posición del mouse esta fuera del area de una tecla*/
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
      break;

      case "punto":
      numero = "." //Definir el valor del operador
      operador = "."
      break;

      //Boton On/C
      case "on":
      numero = "" //numero vacio.
      operador = "on" //Parametro on
      Calculadora.reiniciarCalculadora() //Ejecutar función Reiniciar
      break;

      case "raiz":
      numero = "operador" //Convertir el numero en operador
      operador = "raiz" //Operacion raiz
      break;

      case "sign":
      numero = "operador"//Convertir el número en operador
      operador = "sign"//Tipo de operación
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

    if ((typeof(numero) == 'number' || numero == ".")){ //Obtener el valor del numero o decimal seleccionado
      if (Calculadora.numeroPantalla.innerHTML.length < 8){//Limitar el operando a un maximo de 8 caracteres
        /*Determinar si la tecla presionada es un numero o un operador*/
        if (Calculadora.iniciarNumero == true && Calculadora.operacionCompletada == true){ //Si la operacion ha completado y se ingresa un nuevo numero
          Calculadora.reiniciarCalculadora() //reiniciar los valores de la calculadora
        }
        /*Obtener el valor de la tecla seleccionada y el numero en pantalla.*/
        if (numero == 0 && Calculadora.numeroPantalla.innerHTML == 0){
          console.log("Debe seleccionar un numero distinto de 0"); //Si ambos son 0 Mostrar mensaje en cónsola si el numero es 0
        }else{
          /*Verificar si el número es 0 o y es un nuevo numero*/
          if (Calculadora.numeroPantalla.innerHTML == 0 || Calculadora.iniciarNumero == true){
            Calculadora.variableTemporal += String(numero) //Convertir en cadena la cadena de teclas seleccionadas
            Calculadora.variableTemporal = Number(Calculadora.variableTemporal) //Convertir en Numero la cadena de teclas para realizar operaciones arigméticas
            Calculadora.numeroPantalla.innerHTML = Number(Calculadora.variableTemporal) //Mostrar en pantalla el valor de la cadena numerica
            if(numero == "."){ //Condicional sila tecla seleccionada es decimal
              Calculadora.variableTemporal = String("0.") //Convertir el valor en String para poder colocar el punto
              Calculadora.numeroPantalla.innerHTML = Calculadora.variableTemporal //Mostrar en pantalla
              Calculadora.decimal = true //Activar el modo decimal
            }
          }else{
            /*Verificar si la tecla seleccionada es "." y el número no es decimal*/
            if (numero == "." && Calculadora.decimal == false){
              Calculadora.variableTemporal += String(numero) //Convertir en cadena de caracteres los operandos actuales
              Calculadora.numeroPantalla.innerHTML = String(Calculadora.variableTemporal) //Mostrar la cadena de caracteres en pantalla
              Calculadora.decimal = true  //Iniciar el estado decimal
            }else{
              /*Verificar si la tecla seleccionada es "." y ya el número es decimal*/
              if(numero == "." && Calculadora.decimal==true){
                console.log("No puede agregar mas comas al numero");
              }else{
                Calculadora.variableTemporal +=String(numero)
                Calculadora.numeroPantalla.innerHTML = Number(Calculadora.variableTemporal)
              }
            }
          }
          /*Verificar si se pueden seguir agregando numeros al operador*/
          Calculadora.iniciarNumero = false
        }
      }else{
        //Mostrar mensaje en cónsola
        console.log("Ha ingresado el numero máximo de caracteres permitidos");
      }
    }

    /*Si el numero es operando*/
    if (typeof(numero) == "string") {
      switch (operador) {
        case "sign":
        operador =""
        Calculadora.cambiarSigno() //Ejecutar función cambiar de signo
        break;

        case "=":
        Calculadora.iniciarNumero = true //Se inicia un nuevo operando
        Calculadora.realizarOperacion(operador,Calculadora.ultimaOperacion) //Se envia como parámetro el operador ""=""  mas la ultima operación arigmática realizada
        Calculadora.decimal = false //Deshabilitar el estado decimal
        break;

        case "on":
        console.log("Reiniciar Parámetros"); //Mostrar mensaje en cónsola
        break;

        case "raiz":
        if (Calculadora.numeroPantalla.innerHTML >=0){ //Verificar que el número sea igual o mayor que 0
          Calculadora.raiz()
        }else{
          Calculadora.numeroPantalla.innerHTML = "ERROR" //Mostrar mensaje de error
          console.log("No se puede calcular la raiz cuadrada de un numero negativo"); //Mostrar Mensaje en Cónsola
        }
        break;

        case ".":
        console.log("decimal Habilitado"); //Mosrtar en cónsola activación del módulo decimal
        break;

        default: //Valor suma || resta || multiplicar  || dividir
        Calculadora.numeroPantalla.innerHTML = "" //Mostrar pantalla vacia para iniciar nuevo operando
        Calculadora.iniciarNumero = true //Se inicia un nuevo operando
        /*Condicional para permitir agregar mas operandos luego de presionar el boton igual*/
        if(Calculadora.iniciarNumero == true && Calculadora.operacionCompletada == true && operador != "="){ //Verificar que se espera una nueva entrada, la ultima operacion ha terminado y la tecla seleccionada es diferente a igual
          Calculadora.variableTemporal = ""; //Vaciar variable temporal
          Calculadora.operacionCompletada = false //Indicar que la operacion no ha sido completada
          Calculadora.ultimaOperacion = operador //Reemplazar la ultima operacion por la operacion actual
        }else{
          Calculadora.realizarOperacion(operador, operador) // se envian los parametros de operador y la operacion acual
          Calculadora.operacionCompletada = false //Definir que la operacion no ha sido completada
          Calculadora.decimal = false //Iniciar el nuevo operando sin propiedad decimal
        }
      }
    }
  },

  realizarOperacion: function(operador, operadorCalculadora) {
    Calculadora.ultimoNumero = Calculadora.variableTemporal
    /*Si el operando es "=" Verivicar que no hayan operaciones pendientes*/
    if(operador== "=" && Calculadora.iniciarNumero==true){
      this.verificarOperacion(operadorCalculadora) //realizar la operación con utilizando la última operacion realizada
      Calculadora.resultado = resultado //Asignar el resultado como primer parametros
      Calculadora.numeroPantalla.innerHTML = Calculadora.resultado //mostrar en pantalla el valor del resultado
      Calculadora.operacionCompletada = true //Indicar que la operacion ha completado
      Calculadora.iniciarNumero = true //Se espera nuevo operando
    }else{
      this.verificarOperacion(operador) //si hay operaciones pendientes se realizan primero
      Calculadora.variableTemporal = "" //Variable Temporal Vacia.
      Calculadora.ultimaOperacion = operador //Asignar el valor de la íltima operación seleccionada.
    }
    Calculadora.numero = Calculadora.resultado //Se guarda el resltado para utilizarlo como operador en la siguiente cadena de operaciones.
    Calculadora.ajustarResultado() //Verificar que el resultado no sea mayor de 8 caracteres
  },

  verificarOperacion: function(operador){
    if(Calculadora.numero == "vacio") { //La calculadora se ha reiniciado
      Calculadora.resultado = Calculadora.variableTemporal
    }else{
      if(Calculadora.operacionCompletada == true){ /*Verificar que no hayan operaciones completas*/
        operaciones="("+ Calculadora.numero+ ")" +operador+ "(" +Calculadora.variableTemporal+ ")"; // escribimos la operación en una cadena de caracteres
        resultado=eval(operaciones) //convertimos la cadena a código y resolvemos
        Calculadora.resultado=resultado; //guardamos la solución
        //console.log(Calculadora.resultado+operador+Calculadora.variableTemporal+"="+resultado);
      }else{
        operaciones="(" +Calculadora.numero+ ")" +Calculadora.ultimaOperacion+ "(" +Calculadora.variableTemporal+ ")"; // escribimos la operación en una cadena de caracteres
        resultado=eval(operaciones) //convertimos la cadena a código y resolvemos
        Calculadora.resultado=resultado; //Guardamos la solución
      }
      console.log(operaciones+"="+resultado); //Mostrar operación en pantalla
    }
  },
  ajustarResultado:function(){
    pantalla = Calculadora.numeroPantalla.innerHTML
    if(pantalla.length > 8){
      var resultadoMaximo = pantalla.slice(0,8); //Obtener sólo los primeros 8 números de la cadena del resultado en pantalla
      Calculadora.numeroPantalla.innerHTML = resultadoMaximo; //Mostrar el resultado en pantalla
      Calculadora.numero = Calculadora.numeroPantalla.innerHTML
    }
  },

  cambiarSigno: function(){
    var pantalla = Calculadora.numeroPantalla.innerHTML
    if (pantalla != 0){
      var resultadoSigno = Number(-Calculadora.numeroPantalla.innerHTML) //Asignar el numero en pantalla con signo opuesto
      Calculadora.numeroPantalla.innerHTML = resultadoSigno //Mostrar en pantalla el numero con signo opuesto
    }

    if(Calculadora.operacionCompletada == true && Calculadora.iniciarNumero == true){//Verificar que no hay operaciones pendientes
      Calculadora.numero = resultadoSigno //Si no hay operaciones pendientes guardar el numero en pantalla como resultado
      Calculadora.variableTemporal = resultadoSigno //Asignar el numero en pantalla como operando
    }else if(Calculadora.operacionCompletada == false && Calculadora.iniciarNumero == false){ //Verificar que no hay operaciones pendientes y se puede continuar editando el numero
      Calculadora.variableTemporal = resultadoSigno //Asignar en numero en pantalla como operando
    }
  },

  raiz: function () {
    Calculadora.numeroPantalla.innerHTML=Math.sqrt(Calculadora.numeroPantalla.innerHTML) //resolver raíz cuadrada.
    resultadoRaiz = Calculadora.numeroPantalla.innerHTML //Asignar el numero en pantalla como resiltado
    Calculadora.variableTemporal = resultadoRaiz //Asignar el valor del resultado de la raiz al operando actual
    Calculadora.numero = resultadoRaiz //Asignar el resultado de la raiz a la variable resultado
    Calculadora.ultimaOperacion = "raiz" //Asignar "raiz" como ultima operacion
    Calculadora.operacionCompletada = true; //Terminar operacion
    Calculadora.iniciarNumero = false //Esperando nuevo operando
    Calculadora.ajustarResultado() //Ejecutar operacion ajustar resultado
  },
}
Calculadora.init();
