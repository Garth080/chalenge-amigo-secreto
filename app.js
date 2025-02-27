// agrega el array
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
    

}

function sortearAmigo() {
        if (amigos.length === 0) {
        alert ("no hay amigos para sortear")
   
    }    

    // Obtener un amigo aleatorio
    let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAmigoSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

     // Eliminar al amigo sorteado del array
     amigos.splice(indiceAmigoSorteado, 1);

     // Actualizar la lista de amigos en el HTML
     let listaAmigos = document.getElementById('listaAmigos');
     listaAmigos.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join('');
    
    listaAmigos.innerHTML = '';
}

// Agregar evento para detectar la tecla "Enter"
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { 
     // Llamar a la función para agregar el amigo   
        agregarAmigo(); 

    }
})
