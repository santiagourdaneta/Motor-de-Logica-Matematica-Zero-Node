// Algoritmo de Hash (Criptografía) - Función matemática pura
const MathEngine = {
    // Simula un hash SHA de forma ultra ligera
    generarHash: (texto) => {
        let hash = 0;
        for (let i = 0; i < texto.length; i++) {
            const char = texto.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Fuerza a entero de 32 bits
        }
        return Math.abs(hash).toString(16);
    },

    // Una neurona simple (IA): Función de activación Perceptrón
    neurona: (entrada, peso, sesgo) => {
        const sumaLineal = (entrada * peso) + sesgo;
        return sumaLineal > 0 ? "ALTO" : "BAJO";
    },

    // Algoritmo de ordenamiento simple (Burbuja) para Big Data
        ordenarDatos: (arreglo) => {
            let n = arreglo.length;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arreglo[j] > arreglo[j + 1]) {
                        // Intercambio matemático
                        let temp = arreglo[j];
                        arreglo[j] = arreglo[j + 1];
                        arreglo[j + 1] = temp;
                    }
                }
            }
            return arreglo;
        },

        // Simulación de detección de seguridad
    registrarEvento: (mensaje) => {
        const fecha = new Date().toLocaleTimeString();
        const logEntry = `[${fecha}] ${mensaje}`;
        
        // Guardar en la "memoria" del navegador (Ciberseguridad básica)
        let logs = JSON.parse(localStorage.getItem('logs') || '[]');
        logs.push(logEntry);
        if (logs.length > 10) logs.shift(); // Solo guardamos los últimos 10 para no saturar
        localStorage.setItem('logs', JSON.stringify(logs));
        
        return logs;
    }
};