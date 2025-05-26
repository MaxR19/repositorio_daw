/* 1.- Dado el siguiente código, realiza ingeniería inversa y dibuja el diagrama de clases:

	class Producto {

	  constructor(nombre, precio) {

		this.nombre = nombre;

		this.precio = precio;

	  }

	}

	class Carrito {

	  constructor() {

		this.productos = [];

	  }

	  agregar(producto) {

		this.productos.push(producto);

	  }

	}



2.- Dado el diagrama "clases.draw.io" (adjunto a la tarea), plasma las clases en código javascript y crea una nueva instancia de la clase estudiante dándole valores a sus atributos.

https://drive.google.com/file/d/1-IBZEWdu1q0p1gBgYebUECAZUlLInFSy/view?usp=sharing


*/

// 1. Ejercicio
class Producto {
    constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

class Carrito {
    constructor() {
      this.productos = [];
    }

    agregar(producto) {
      this.productos.push(producto);
    }
}


// 2. Ejercicio
class Persona {
    constructor(nombre, dni, edad, colorCabello) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.colorCabello = colorCabello;
    }

    camina(distancia) {
        console.log(`${this.nombre} camina ${this.distancia} kilómetros todos los días.`);
    }

    come(comida) {
        console.log(`A ${this.nombre} le encanta comer ${this.comida}.`);
    }

    habla(idioma) {
        console.log(`${this.nombre} también sabe hablar en ${this.idioma}.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, dni, edad, colorCabello) {
        super(nombre, dni, edad, colorCabello);
    }

    estudia(materia) {
        console.log(`${this.nombre} estudia ${this.materia}, entre otras materias.`);
    }
}

class Profesor extends Persona {
    constructor(nombre, dni, edad, colorCabello) {
        super(nombre, dni, edad, colorCabello);
    }

    enseña(materia) {
        console.log(`${this.nombre} enseña ${this.materia} en la universidad.`);
    }
}