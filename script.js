// Espera a que el contenido del documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los elementos HTML
    const boton = document.getElementById('cambiarColorBtn'); // El botón de "Haz Clic Aquí"
    const mensajeParrafo = document.getElementById('mensaje'); // El párrafo con id="mensaje"
    
    // Lista de frases inspiradoras o versículos
    const frasesInspiradoras = [
        "«Todo lo puedo en Cristo que me fortalece.» - Filipenses 4:13",
        "«Fíate de Jehová de todo tu corazón.» - Proverbios 3:5",
        "«El amor nunca deja de ser.» - 1 Corintios 13:8",
        "«La fe es la certeza de lo que se espera.» - Hebreos 11:1",
        "«Cree en el Señor Jesús, y serás salvo.» - Hechos 16:31",
        "«Alabad a Jehová, porque él es bueno.» - Salmos 107:1",
        "«Jehová es mi pastor; nada me faltará.» - Salmos 23:1",
        "«Encomienda a Jehová tu camino, y confía en él.» - Salmos 37:5",
        "«Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.» - Juan 3:16",
        "«Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.» - Mateo 11:28",
        "«El Señor es mi luz y mi salvación; ¿de quién temeré?» - Salmos 27:1",
        "«Mas buscad primeramente el reino de Dios y su justicia.» - Mateo 6:33",
        "«No temas, porque yo estoy contigo.» - Isaías 41:10",
        "«Jesucristo es el mismo ayer, y hoy, y por los siglos.» - Hebreos 13:8"
    ];
    
    // Función para mostrar una frase aleatoria
    function mostrarFraseInspiradora() {
        // 1. Generar un índice aleatorio basado en la longitud del array
        const indiceAleatorio = Math.floor(Math.random() * frasesInspiradoras.length);
        
        // 2. Obtener la frase usando el índice aleatorio
        const fraseSeleccionada = frasesInspiradoras[indiceAleatorio];
        
        // 3. Actualizar el contenido del párrafo con la nueva frase
        mensajeParrafo.textContent = fraseSeleccionada;
        
        // Opcional: Cambiar el texto del botón para que sea más claro
        boton.textContent = "Ver otra frase";
    }
    
    // Asignamos la función al evento 'click' del botón
    boton.addEventListener('click', mostrarFraseInspiradora);
    
    // Mostrar la primera frase al cargar la página (opcional, pero mejora la experiencia)
    mostrarFraseInspiradora();
    
    console.log("El script de Melodía Escrita se ha cargado correctamente.");
});

// Enlaces Oficiales de Melodía Escrita
const LINKS_ME = {
    tiktok: "https://www.tiktok.com/@melodia.escrita",
    instagram: "https://www.instagram.com/melodiaescrita2/",
    youtube: "https://www.youtube.com/@melodiaescrita",
    paypal: "https://www.paypal.com/paypalme/melodiaescrita"
};

// =========================================================
// SISTEMA DE ACTUALIZACIÓN DE DATOS DESDE HTML
// Ahora puedes actualizar los números directamente en el HTML
// usando los atributos data-estadistica y data-video
// =========================================================

document.addEventListener('DOMContentLoaded', function() {
    // Función para formatear números grandes
    function formatearNumero(numero) {
        const num = parseInt(numero);
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toLocaleString();
    }

    // Función para formatear números con "+" si es necesario
    function formatearEstadistica(numero, tipo) {
        const num = parseInt(numero);
        if (tipo === 'seguidores' || tipo === 'videos') {
            return num.toLocaleString() + '+';
        } else if (tipo === 'vistas') {
            if (num >= 1000) {
                return formatearNumero(num) + '+';
            }
            return num.toLocaleString() + '+';
        }
        return num.toLocaleString();
    }

    // Actualizar estadísticas principales
    const estadisticas = document.querySelectorAll('[data-estadistica]');
    let seguidoresNumero = 0;
    
    estadisticas.forEach(function(elemento) {
        const tipo = elemento.getAttribute('data-estadistica');
        let valor = elemento.getAttribute('data-valor') || elemento.textContent.trim();
        
        if (tipo === 'seguidores-texto') {
            // Obtener el número de seguidores del elemento correspondiente
            const seguidoresElement = document.querySelector('[data-estadistica="seguidores"]');
            if (seguidoresElement) {
                seguidoresNumero = parseInt(seguidoresElement.getAttribute('data-valor') || seguidoresElement.textContent.trim().replace(/[^0-9]/g, ''));
                elemento.textContent = seguidoresNumero.toLocaleString() + ' hermanos';
            } else {
                // Si no hay elemento de seguidores, usar el valor del atributo data-valor
                const num = parseInt(valor.replace(/[^0-9]/g, ''));
                if (!isNaN(num)) {
                    elemento.textContent = num.toLocaleString() + ' hermanos';
                }
            }
        } else if (tipo === 'seguidores' || tipo === 'videos' || tipo === 'vistas') {
            // Guardar el valor original en data-valor si no existe
            if (!elemento.hasAttribute('data-valor')) {
                elemento.setAttribute('data-valor', valor.replace(/[^0-9]/g, ''));
            }
            valor = elemento.getAttribute('data-valor') || valor.replace(/[^0-9]/g, '');
            const numeroFormateado = formatearEstadistica(valor, tipo);
            elemento.textContent = numeroFormateado;
        }
    });

    // Actualizar videos populares
    const videosVistas = document.querySelectorAll('[data-video-vistas]');
    videosVistas.forEach(function(elemento) {
        let vistas = elemento.getAttribute('data-valor') || elemento.textContent.trim().replace(/[^0-9]/g, '');
        vistas = parseInt(vistas);
        if (!isNaN(vistas)) {
            // Guardar el valor original si no existe
            if (!elemento.hasAttribute('data-valor')) {
                elemento.setAttribute('data-valor', vistas);
            }
            elemento.textContent = formatearNumero(vistas);
        }
    });

    // Actualizar textos de videos (títulos y links se mantienen como están en HTML)
    const videosTitulos = document.querySelectorAll('[data-video-titulo]');
    videosTitulos.forEach(function(elemento) {
        // Los títulos ya están en el HTML, solo los leemos
        const titulo = elemento.textContent.trim();
        // Puedes actualizar el título directamente en el HTML
    });
});