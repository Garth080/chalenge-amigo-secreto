// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo')
    let listaAmigos = document.getElementById('listaAmigos');
    // agrega el nombre del amigo
    let  nombreAmigo = amigo.value;

    // Verificar que el nombre no esté vacío
    if (nombreAmigo === "") {
        alert('Por favor, escribe un nombre.');
        return;
    }

    //si el nombre ya existe mostrar alerta
    if (amigos.includes(nombreAmigo)) {
        alert('¡Este nombre ya está en la lista!');
        return;
    }

    // Agregar el nombre al array 
    amigos.push(nombreAmigo);    

     //mostrar lista de amigos
    listaAmigos.innerHTML += `<li>${amigo.value}</li>`

     // Limpiar la caja después de agregar el nombre
     amigo.value = "";
     //console.log (amigos)

}

function sortearAmigo() {
        if (amigos.length === 0) {
        alert ("no hay amigos para sortear")
   
    }    

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

}

    