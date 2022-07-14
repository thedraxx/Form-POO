

class Person {
    constructor(password, usuario) {
        this.password = password;
        this.usuario = usuario;
    }

    greet() {
        return `Hola, ${this.usuario}`;
    }
}



function salida() {

    // Obtenemos los datos de la persona
    const password = document.getElementById("password").value;
    const usuario = document.getElementById("usuario").value;

    // llamamos a la funcion que crea el objeto
    const persona = new Person(password, usuario);

    // mostramos los datos de la persona
    console.log(persona.greet());








    // // Convertimos person a JSON
    // const personJSON = JSON.stringify(persona);
    // console.log(personJSON);
}
