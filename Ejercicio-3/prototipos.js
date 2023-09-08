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

//  Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el
//  método registrar(), que muestra por consola a que grupo se registró.

class Estudiante extends Persona {
    constructor(apellido,nombre,genero,curso,grupo) {
        super(apellido,nombre,genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(estudiante) {
        console.log("Grupo: "+estudiante.grupo)
    }
    }

    var estudiantes = []

    function agregarEstudiante (){
        var ape = document.getElementById("apellido").value;
        var nom = document.getElementById("nombre").value;
        var gen = document.getElementById("gen").value;
        var cur = document.getElementById("curso").value;
        var grp = document.getElementById("group").value;
        
        if(ape!=""&&nom!=""&&gen!=""&&cur!=""&&grp!=""){
            let estudiante = new Estudiante(ape,nom,gen,cur,grp);
            estudiantes.push(estudiante)
            listar()
            console.log(estudiantes)
        }else{
            alert("Completar campos")
        }
    }

    function listar(){

        var i = estudiantes.length-1;
        let lista = document.getElementById("lista");
        var hilera = document.createElement("tr");
    
             var celda = document.createElement("td");
             celda.id=`apellido${i}`;
             var textoCelda = document.createTextNode(
                `${estudiantes[i].apellido}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

             var celda = document.createElement("td");
             celda.id=`nombre${i}`;
             var textoCelda = document.createTextNode(
                `${estudiantes[i].nombre}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

             var celda = document.createElement("td");
             celda.id=`genero${i}`;
             var textoCelda = document.createTextNode(
                `${estudiantes[i].genero}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

             var celda = document.createElement("td");
             celda.id=`curso${i}`;
             var textoCelda = document.createTextNode(
                `${estudiantes[i].curso}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);
             var celda = document.createElement("td");
             celda.id=`grupo${i}`;
             var textoCelda = document.createTextNode(
                `${estudiantes[i].grupo}`
              );
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);

        lista.appendChild(hilera);
    }
      
        
    
    