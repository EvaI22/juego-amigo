let numeroAzar = 0;
let listaDeamigos = [];

function agregarAmigo() {
    let nombre = (document.getElementById('amigo').value);
    if (nombre != "") {
        listaDeamigos.push(nombre);

        // Vaciar la caja donde se agregan los nombres
        let valorCaja = document.querySelector('#amigo');
        valorCaja.value = "";

        // Mostrar los nombres
        mostrarLista(listaDeamigos);

    } else {
        alert("Por favor, inserte un nombre válido.");
    }
}

function mostrarLista(listaDeamigos) { 
    let amigosV = document.getElementById ("listaAmigos"); // listaAmigos vinculado al index <ul>
    amigosV.innerHTML = ""; 
    // Para asegurarse de que no haya duplicados al actualizar.

    let agregado = "";
    listaDeamigos.forEach (amigo => {
        agregado += `<li> ${amigo} </li>`; // se forman los elementos <li>
    })

    amigosV.innerHTML = agregado; // Todos los elementos <li> 
}


function sortearAmigo() {
    if (listaDeamigos.length != 0) {
        let final = document.getElementById ("resultado"); // resultado vinculado al index <ul>
        let numeroAleatorio = Math.floor(Math.random() * listaDeamigos.length);

        final.innerHTML = `<li> El amigo secreto es ${listaDeamigos[numeroAleatorio]} </li>`;

    } else {
        alert("Agregue un amigo");
    }
    
}

