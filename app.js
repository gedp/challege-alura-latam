const MAX_AMIGOS = 7; // Límite máximo establecido [[8]]
const amigos = [];
const resultadoElement = document.getElementById('resultado'); // Cache del elemento

/**
 * Agrega un nuevo amigo al array con validaciones
 */
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validación de campo vacío
    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre válido");
        return;
    }

    // Validación de límite máximo
    if (amigos.length >= MAX_AMIGOS) {
        alert(`Máximo ${MAX_AMIGOS} amigos permitidos`);
        inputAmigo.value = "";
        return;
    }

    amigos.push(nombreAmigo);
    actualizarVista();
    console.log(`Amigo agregado: ${nombreAmigo}`); // Registro mejorado
}

/**
 * Actualiza la lista visible de amigos con forEach [[7]]
 */
function actualizarVista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista [[3]]

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });

    // Limpiar campos después de agregar
    document.getElementById("amigo").value = "";
    resultadoElement.textContent = ""; // Limpiar resultado previo
}

/**
 * Realiza el sorteo con seguridad
 */
function sortearAmigo() {
    if (amigos.length === 0) {
        resultadoElement.textContent = "No hay amigos para sortear";
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];
    
    resultadoElement.textContent = `¡${ganador} ha sido sorteado!`; // Uso seguro de textContent [[6]]
    console.log(`Sorteo realizado: ${ganador}`);
}
