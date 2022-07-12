
class Person {
    constructor(name, lastname, user) {
        this.name = name
        this.lastname = lastname
        this.user = user
    }
}

function salida() {

    // Obtenemos los datos de la persona
    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;

    // llamamos a la funcion que crea el objeto
    const person = new Person(nombre, password);

    // Convertimos person a JSON
    const personJSON = JSON.stringify(person);
    console.log(personJSON);

}
