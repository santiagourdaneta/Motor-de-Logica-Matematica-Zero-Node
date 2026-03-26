const inputData = document.getElementById('inputData');
const hashOutput = document.getElementById('hashOutput');

// Escucha cada tecla para actualizar el Hash (Interactividad)
inputData.addEventListener('input', () => {
    const texto = inputData.value;
    hashOutput.innerText = MathEngine.generarHash(texto);
});

// Lógica de la IA
function ejecutarIA() {
    const val = parseFloat(document.getElementById('inputIA').value);
    const iaOutput = document.getElementById('iaOutput');
    
    // Peso: 1, Sesgo: -50 (Si val > 50, es positivo/ALTO)
    const prediccion = MathEngine.neurona(val, 1, -50);
    iaOutput.innerText = prediccion;
}

function generarYOrdenar() {
    const contenedor = document.getElementById('bar-container');
    contenedor.innerHTML = ''; // Limpiar
    
    // 1. Generamos "Big Data" (20 números aleatorios)
    let datos = Array.from({length: 20}, () => Math.floor(Math.random() * 90) + 10);
    
    // 2. Creamos las barras visuales
    datos.forEach(valor => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${valor}%`;
        contenedor.appendChild(bar);
    });

    // 3. Aplicamos la matemática de ordenamiento tras un breve delay
    setTimeout(() => {
        const datosOrdenados = MathEngine.ordenarDatos(datos);
        const barras = document.querySelectorAll('.bar');
        datosOrdenados.forEach((valor, index) => {
            barras[index].style.height = `${valor}%`;
            barras[index].style.background = '#ff0077'; // Cambia color al ordenar
        });
    }, 800);
}


    const logPantalla = document.getElementById('security-log');

    function actualizarPantallaLogs() {
        const logs = JSON.parse(localStorage.getItem('logs') || '[]');
        logPantalla.innerHTML = logs.map(linea => `> ${linea}`).join('<br>');
        logPantalla.scrollTop = logPantalla.scrollHeight; // Auto-scroll al final
    }

    // Vigilamos la IA
    const botonIA = document.querySelector('button[onclick="ejecutarIA()"]');
    botonIA.addEventListener('click', () => {
        MathEngine.registrarEvento("Ejecución de algoritmo de IA detectada.");
        actualizarPantallaLogs();
    });

    // Vigilamos el Hash (si el mensaje es muy largo, alertamos)
    inputData.addEventListener('blur', () => {
        if (inputData.value.length > 0) {
            MathEngine.registrarEvento(`Hash generado para mensaje de ${inputData.value.length} chars.`);
            actualizarPantallaLogs();
        }
    });

    function limpiarLogs() {
        localStorage.removeItem('logs');
        logPantalla.innerHTML = "> Memoria limpiada por el administrador.";
    }

    // Cargar logs al encender la app
    actualizarPantallaLogs();
 