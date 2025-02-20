// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = document.getElementById('amigo')
let amigos = [];


function agregarAmigo() {
    // agrega el nombre del amigo
        nombreAmigo = amigo.value;

    // Verificar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, escribe un nombre.');
        return;
    }
    //si el nombre exite mostrar mensaje
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    // Agregar el nombre al array 
    amigos.push(nombreAmigo);

    // Limpiar la caja después de agregar el nombre
    amigo.value = '';

    // Mostrar un mensaje de éxito
    console.log(`"${nombreAmigo}" ha sido agregado al array.`);
}

