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
    
    let persona = new Persona("Gallardo ","Cecilia", "F");
    persona.obtDetalles(persona);

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

    let estudiante = new Estudiante("Rodriguez ","Pablo", "M","3ro","A");
    estudiante.registrar(estudiante);

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

    let profesor = new Profesor("Miranda ","Marta", "F","Programacion","Informatica");
    profesor.asignar(profesor);