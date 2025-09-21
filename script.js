document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        'el-credo': 'Credo',
        'el-padre-nuestro': 'Padre Nuestro',
        'el-ave-maria': 'Ave María',
        'el-gloria': 'Gloria',
        'el-salve': 'Salve',
        'el-magnificat': 'Magníficat',
        'coronilla-alabanzas': 'Coronilla de Alabanzas a María',
        'promesas-rosario': 'Promesas del Santo Rosario'
    };

    const nav = document.getElementById('nav');
    const headerTitle = document.getElementById('header-title');
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');
    const backButton = document.getElementById('back-button');

    // Botones del menú principal
    const btnAnunciacion = document.getElementById('btn-anunciacion');
    const btnOracionInicial = document.getElementById('btn-oracion-inicial');
    const btnMisterios = document.getElementById('btn-misterios');
    const btnOracionFinal = document.getElementById('btn-oracion-final');
    const btnOtrasOraciones = document.getElementById('btn-otras-oraciones');
    const btnPromesasRosario = document.getElementById('btn-promesas-rosario');

    // Funciones de navegación
    function showSection(sectionId, title) {
        nav.style.display = 'none';
        headerTitle.textContent = title;
        content.innerHTML = document.getElementById(sectionId).innerHTML;
        content.style.display = 'block';
        footer.style.display = 'none';
        backButton.style.display = 'block';
        window.scrollTo(0, 0); // Desplaza al inicio
    }

    function showMainButtons() {
        nav.style.display = 'block';
        headerTitle.textContent = 'El Santo Rosario';
        content.style.display = 'none';
        footer.style.display = 'block';
        backButton.style.display = 'none';
    }

    // Navegación de misterios
    function setupMysteryNavigation() {
        document.querySelectorAll('.mystery-link').forEach(link => {
            link.removeEventListener('click', handleMysteryClick); // Evita duplicar listeners
            link.addEventListener('click', handleMysteryClick);
        });
    }

    function handleMysteryClick(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        const sectionTitle = this.textContent;
        showSection(sectionId, sectionTitle);
    }

    // Manejar clics de los botones principales
    if (btnAnunciacion) {
        btnAnunciacion.addEventListener('click', () => {
            showSection('anunciacion', 'Anunciación');
        });
    }

    if (btnOracionInicial) {
        btnOracionInicial.addEventListener('click', () => {
            showSection('oracion-inicial', 'Oración Inicial');
        });
    }

    if (btnMisterios) {
        btnMisterios.addEventListener('click', () => {
            showSection('misterios', 'Misterios');
            setupMysteryNavigation();
        });
    }

    if (btnOracionFinal) {
        btnOracionFinal.addEventListener('click', () => {
            showSection('oracion-final', 'Oración Final');
        });
    }

    // Nuevas funciones para los botones de Otras Oraciones y Promesas
    if (btnOtrasOraciones) {
        btnOtrasOraciones.addEventListener('click', () => {
            showSection('otras-oraciones', 'Otras Oraciones');
            document.querySelectorAll('.sub-oracion-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = e.target.getAttribute('data-section');
                    const sectionTitle = sections[sectionId];
                    showSection(sectionId, sectionTitle);
                });
            });
        });
    }

    if (btnPromesasRosario) {
        btnPromesasRosario.addEventListener('click', () => {
            showSection('promesas-rosario', 'Promesas del Santo Rosario');
        });
    }

    // Botón de retroceso
    if (backButton) {
        backButton.addEventListener('click', showMainButtons);
    }

    // Inicializar la vista
    showMainButtons();
});
