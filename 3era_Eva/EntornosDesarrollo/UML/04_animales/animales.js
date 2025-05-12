/*
    3 clases: Animal(nombre, hablar()), Gato(), Perro()
*/

class Animales {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar(){
        console.log(`${this.nombre} gruñe`);
    }
}

class Gato extends Animales {
    constructor(nombre) {
        super(nombre);
    }

    hablar(){
        console.log(`${this.nombre} maúlla.`);
    }
}

class Perro extends Animales {
    constructor(nombre) {
        super(nombre);
    }

    hablar(){
        console.log(`${this.nombre} ladra.`);
    }
}

const animal = new Animales("El perro");
const gato = new Gato("Meowth");
const perro = new Perro("Max");

animal.hablar();
gato.hablar();
perro.hablar();