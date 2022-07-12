
class Person {
    constructor(name, lastname, user) {
        this.name = name
        this.lastname = lastname
        this.user = user
    }
}

function salida() {

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const usuario = document.getElementById("usuario").value;

    const person = new Person(nombre, apellido, usuario);

    console.log(person);
    console.log(JSON.stringify(person))

}
