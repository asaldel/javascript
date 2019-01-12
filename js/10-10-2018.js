// Creando un objeto vacío
var object = new Object();

// Creando un objeto con propiedades
object.nombre = "Pepe";
object.apellido = "Rodríguez";
console.log(object);

object["nombre"] = "Pepe";
object["apellido"] = "Rodríguez";
console.log(object);

object = {
    nombre: "Pepe",
    apellido: "Rodríguez"
}
console.log(object);

// Mostrar un número determinado de propiedades de un objeto
var x = ["nombre", "apellido"];
for(let i of x){
    console.log(object[i]);
}

// Borrando una propiedad de un objeto
delete object.nombre;
console.log(object);
// delete object["nombre"];

// Borrando un objeto
object = null;
console.log(object);

// Creando un método en un objeto
var object = new Object();

object.nombre = "Pepe";
object.apellido = "Rodríguez";

object.nombreCompleto = function(){
    return this.nombre + " " + this.apellido;
}

// Creación de getter y setter (se tienen que crear en la declaración del objeto)
object = {
    nombre: "Pepe",
    apellido: "Rodríguez",
    get getNombre(){
        return this.nombre;
    },

    set setNombre(val){
        this.nombre = val;
    }
}
console.log(object.getNombre);
object.setNombre = "Manolo";
console.log(object.getNombre);

// Creando el constructor de un objeto
// Sintaxis antigua (ES5)
function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

// Declarando un objeto a partir de un constructor
var object = new Persona("Pepe", "Rodríguez");
console.log(object.nombreCompleto());

// Añadiendo una propiedad a un constructor
Object.prototype.altura = 180;
var object2 = new Persona("Pepe", "Rodríguez");
console.log(object2);

Object.seal(object2); // Sella. Permite cambiar los valores pero no las propiedades
Object.preventExtensions(object2); // No se pueden añadir propiedades o métodos
Object.freeze(object2); // No se puede modificar el objeto

Object.isSealed(object2);
Object.isExtensible(object2);
Object.isFrozen(object2);

// A nivel de propiedades:
//      writable
//      configurable
//      enumerable


// Sintaxis nueva (ES6)
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(val){
        this.nombre = val;
    }
}

var persona = new Persona("Manolo", "López");
console.log(persona.nombreCompleto());