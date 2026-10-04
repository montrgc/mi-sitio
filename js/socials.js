/**
 * Configuración dinámica de Redes Sociales de MontyTech - CMTech
 * Usa Font Awesome 6 para renderizado vectorial estándar de alta calidad.
 */
const SOCIAL_NETWORKS = [
    {
        id: 'facebook',
        name: 'Facebook',
        handle: 'MontyTech Oficial',
        url: 'https://www.facebook.com/profile.php?id=61590884992555',
        iconClass: 'fa-brands fa-facebook-f',
        badge: 'Comunidad Oficial',
        description: 'Sigue nuestras noticias, actualizaciones y lanzamientos oficiales.'
    },
    {
        id: 'tiktok',
        name: 'TikTok',
        handle: '@tonimontech',
        url: 'https://www.tiktok.com/@tonimontech?lang=es',
        iconClass: 'fa-brands fa-tiktok',
        badge: 'Videos & Tech',
        description: 'Contenido dinámico sobre tecnología, demos y desarrollo de software.'
    },
    {
        id: 'youtube',
        name: 'YouTube',
        handle: '@ToniMonTech',
        url: 'https://www.youtube.com/@ToniMonTech',
        iconClass: 'fa-brands fa-youtube',
        badge: 'Canal de Video',
        description: 'Tutoriales, demos de aplicaciones Android y presentaciones de proyectos.'
    },
    {
        id: 'instagram',
        name: 'Instagram',
        handle: '@tonimontech',
        url: 'https://www.instagram.com/tonimontech/',
        iconClass: 'fa-brands fa-instagram',
        badge: 'Nuestra Marca',
        description: 'Detrás de escenas, eventos y comunidad de desarrollo.'
    }
];

// Función helper para exportar o renderizar redes en contenedores
function renderSocialNetworks(containerSelector = '#social-container') {
    const containers = document.querySelectorAll(containerSelector);
    if (!containers || containers.length === 0) return;

    const htmlContent = SOCIAL_NETWORKS.map(social => `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-card glass-card slide-up visible">
            <div class="social-card-header">
                <span class="social-icon"><i class="${social.iconClass}"></i></span>
                <span class="social-badge">${social.badge}</span>
            </div>
            <div class="social-card-body">
                <h3>${social.name}</h3>
                <span class="social-handle">${social.handle}</span>
                <p class="social-desc">${social.description}</p>
            </div>
            <div class="social-card-footer">
                <span>Seguir canal</span>
                <span class="arrow"><i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </a>
    `).join('');

    containers.forEach(container => {
        container.innerHTML = htmlContent;
    });
}
