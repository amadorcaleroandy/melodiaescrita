// =========================================================
// 1. DEFINICIÓN DE LOS DATOS DE LA VIDEOTECA
//    Cada objeto en este array debe tener 4 propiedades:
//    cancion, interprete, link y plataforma.
// =========================================================
const datosVideos = [
    // --- VIDEOS DE TIKTOK ---
    { 
        cancion: "Tú dices", 
        interprete: "Twice", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Siempre estas ahí", 
        interprete: "Oasis Ministry", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Siempre estas ahí 2", 
        interprete: "Oasis Ministry", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Volar libre", 
        interprete: "Annette Moreno", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Al final", 
        interprete: "Lilly Goodman", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Este es el tiempo", 
        interprete: "Nancy Amancio", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Espera el tiempo de Dios", 
        interprete: "Isaac Valdez & Gadiel Espinoza", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Ángel guardian", 
        interprete: "Annette Moreno", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Si tu presencia conmigo no va", 
        interprete: "Oasis Ministry", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Si tu presencia conmigo no va 2", 
        interprete: "Oasis Ministry", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Soy esa generación", 
        interprete: "Oasis Ministry", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Soy esa generación 2", 
        interprete: "Oasis Ministry", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Amor sin condición", 
        interprete: "Twice", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Yo sé quien soy", 
        interprete: "Emir Sencini", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    { 
        cancion: "Yo soy tu Dios", 
        interprete: "Jessica", 
        link: "https://www.tiktok.com/@melodia.escrita", 
        plataforma: "tiktok" 
    },
    
    // --- VIDEOS DE YOUTUBE ---
    { 
        cancion: "El Gran Yo Soy", 
        interprete: "Jesús Adrián Romero", 
        link: "https://www.youtube.com/@melodiaescrita", 
        plataforma: "youtube" 
    },
    { 
        cancion: "Abre Mis Ojos", 
        interprete: "Ingrid Rosario", 
        link: "https://www.youtube.com/@melodiaescrita", 
        plataforma: "youtube" 
    },
    
    // --- VIDEOS DE INSTAGRAM ---
    { 
        cancion: "Eres Fiel", 
        interprete: "Miel San Marcos", 
        link: "https://www.instagram.com/melodiaescrita2/", 
        plataforma: "instagram" 
    },
    
    // --- VIDEOS DE FACEBOOK ---
    { 
        cancion: "Cuan Grande es Él", 
        interprete: "Marco Barrientos", 
        link: "https://www.facebook.com/melodiaescrita.2", 
        plataforma: "facebook" 
    },
];

// =========================================================
// 2. LÓGICA DE FILTRADO Y BÚSQUEDA (MANTENER ESTE CÓDIGO)
// =========================================================

document.addEventListener('DOMContentLoaded', function() {
    const filtroPlataforma = document.getElementById('filtroPlataforma');
    const barraBusqueda = document.getElementById('barraBusqueda');
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    const tituloTabla = document.getElementById('tituloTabla');
    const sinResultados = document.getElementById('sinResultados');

    function renderizarTabla() {
        const filtro = filtroPlataforma.value;
        const busqueda = barraBusqueda.value.toLowerCase();
        let resultados = datosVideos;

        // 1. Filtrar por Plataforma
        if (filtro !== 'todos') {
            resultados = resultados.filter(video => video.plataforma === filtro);
        }

        // 2. Filtrar por Búsqueda (Canción o Intérprete)
        if (busqueda.length > 0) {
            resultados = resultados.filter(video => 
                video.cancion.toLowerCase().includes(busqueda) ||
                video.interprete.toLowerCase().includes(busqueda) // Búsqueda también por Intérprete
            );
        }

        // 3. Actualizar el Título del Encabezado
        const nombrePlataforma = filtro.charAt(0).toUpperCase() + filtro.slice(1);
        tituloTabla.textContent = `Vídeos de Melodía Escrita en ${filtro === 'todos' ? 'Todas las Plataformas' : nombrePlataforma}`;

        // 4. Construir y Mostrar la Tabla
        cuerpoTabla.innerHTML = ''; // Limpiar la tabla
        
        if (resultados.length === 0) {
            sinResultados.style.display = 'block';
        } else {
            sinResultados.style.display = 'none';
            
            // Recorrer los resultados y crear las filas de la tabla
            resultados.forEach(video => {
                const fila = cuerpoTabla.insertRow();
                
                // CELDA 1: Nombre de la Canción
                fila.insertCell().textContent = video.cancion;
                
                // CELDA 2: Intérprete (¡Nuevo!)
                fila.insertCell().textContent = video.interprete;
                
                // CELDA 3: Link
                const celdaLink = fila.insertCell();
                const linkElemento = document.createElement('a');
                linkElemento.href = video.link;
                linkElemento.target = "_blank";
                linkElemento.rel = "noopener noreferrer";
                linkElemento.textContent = "Ver Vídeo";
                linkElemento.setAttribute('aria-label', `Ver vídeo de ${video.cancion} en ${video.plataforma}`);
                celdaLink.appendChild(linkElemento);
            });
        }
    }

    // Escuchadores de Eventos (activan la función de renderizado)
    filtroPlataforma.addEventListener('change', renderizarTabla);
    barraBusqueda.addEventListener('keyup', renderizarTabla);

    // Renderizar la tabla inicial
    renderizarTabla();
});