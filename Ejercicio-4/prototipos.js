// Objeto Persona con las propiedades apellido, nombre, género, y el método obtDetalles(), que
// muestra por consola las propiedades de la persona.

class Persona {
    constructor(apellido,nombre,genero) {
    this.apellido = apellido;
    this.nombre = nombre;
    this.genero = genero;
    }
    obtDetalles (persona) {
    console.log(persona)
    }
    }

// Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura, comisión y el
// método asignar(), que muestra por consola a que comisión se asignó.
    
class Profesor extends Persona {
    constructor(apellido,nombre,genero,asignatura,comision) {
        super(apellido,nombre,genero);
        this.asignatura = asignatura;
        this.comision = comision;
    }
    asignar(profesor) {
        console.log("Comision: "+profesor.comision)
    }
    }

    var profesores = []

    function agregarProfesor (){

        //inicio validacion de campos completos
        var flag = 0;
        var input = document.getElementById("cant").value
        var i=0;
        for(i=0;i<input;i++){
            var ape = document.getElementById(`apellido_${i}`).value;
            var nom = document.getElementById(`nombre_${i}`).value;
            var gen = document.getElementById(`gen_${i}`).value;
            var asig = document.getElementById(`asignatura_${i}`).value;
            var com = document.getElementById(`comision_${i}`).value;
            if(ape==""||nom==""||gen==""||asig==""||com==""){
                flag=1;
            }
        }
        if(flag==1){alert("Completar campos")}
        //fin validacion de campos completos
        if(flag==0){
            for(i=0;i<input;i++){
                var ape = document.getElementById(`apellido_${i}`).value;
                var nom = document.getElementById(`nombre_${i}`).value;
                var gen = document.getElementById(`gen_${i}`).value;
                var asig = document.getElementById(`asignatura_${i}`).value;
                var com = document.getElementById(`comision_${i}`).value;
                let profesor = new Profesor(ape,nom,gen,asig,com);
                profesores.push(profesor)
            }
        }
        console.log(profesores)
        listar(profesores)         
    }

    function listar(profesores){
        var i=0;

        let lista = document.getElementById("lista");
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    
    for(i=0;i<profesores.length;i++){

        var hilera = document.createElement("tr");
    
             var celda = document.createElement("td");
             celda.id=`apellido${i}`;
             var textoCelda = document.createTextNode(
                `${profesores[i].apellido}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

             var celda = document.createElement("td");
             celda.id=`nombre${i}`;
             var textoCelda = document.createTextNode(
                `${profesores[i].nombre}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

             var celda = document.createElement("td");
             celda.id=`asignatura${i}`;
             var textoCelda = document.createTextNode(
                `${profesores[i].asignatura}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

             var celda = document.createElement("td");
             celda.id=`comision${i}`;
             var textoCelda = document.createTextNode(
                `${profesores[i].comision}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

             var celda = document.createElement("td");
             var button = document.createElement("button");
             var Eliminar = document.createTextNode(
                "Eliminar"
              );
             button.id=`${i}`;
             button.addEventListener('click', event => {
                profesores.splice(event.target.id, 1);
                listar(profesores)
                })
             button.appendChild(Eliminar);
             celda.appendChild(button);
             hilera.appendChild(celda);
             

        lista.appendChild(hilera);
    }
     }


    function addInputs(){

        var input = document.getElementById("cant").value
        let formularios = document.getElementById("formularios");
        formularios.innerHTML = ""
        var i=0;
        for(i=0;i<input;i++){
            formularios.innerHTML += `<label>Apellido</label><input type="text" id="apellido_${i}" required>`
            formularios.innerHTML += `<label>Nombre</label><input type="text" id="nombre_${i}" required>`
            formularios.innerHTML += `<label>Genero</label><input type="text" id="gen_${i}" required>`
            formularios.innerHTML += `<label>Asignatura</label><input type="text" id="asignatura_${i}" required>`
            formularios.innerHTML += `<label>Comision</label><input type="text" id="comision_${i}" required><br>`
        }
        
    }