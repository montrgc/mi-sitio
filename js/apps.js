/**
 * Configuración dinámica de Aplicaciones Android, Enlaces de Descarga y Copia de Rutas
 * 
 * Puedes agregar o modificar fácilmente las aplicaciones editando este array.
 */
const APPS_CONFIG = [
    {
        id: 'poker-local',
        title: 'Poker Local — Texas Hold\'em',
        category: 'Juegos & Entretenimiento (Android)',
        badge: '♠️ Juego & Criptografía',
        badgeClass: 'badge-legal',
        version: 'Versión 1.0.2 (Build 3)',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pokerlocal.app',
        directApkUrl: 'https://montytech.com/downloads/poker-local.apk',
        policyUrl: 'politicas/poker-local.html',
        description: 'Juego de póquer Texas Hold\'em para Android con modo Historia vs IA y multijugador LAN sin servidores externos.'
    },
    {
        id: 'mi-negocio-movil',
        title: 'Mi Negocio Móvil',
        category: 'Productividad & Gestión (Android)',
        badge: '📱 Productividad & P2P',
        badgeClass: 'badge-android',
        version: 'Versión 1.0.0 (Build 1)',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.minegociomovil.app',
        directApkUrl: 'https://montytech.com/downloads/mi-negocio-movil.apk',
        policyUrl: 'politicas/mi-negocio-movil.html',
        description: 'Suite de gestión comercial y ventas offline-first con sincronización P2P en red local.'
    }
];

/**
 * Copia cualquier texto al portapapeles y muestra una notificación flotante
 */
function copyToClipboard(text, customMessage) {
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast(customMessage || 'Ruta copiada al portapapeles');
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(customMessage || 'Ruta copiada al portapapeles');
    });
}

/**
 * Notificación Toast flotante
 */
function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    
    toast.innerHTML = `✨ ${message}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Renderiza tarjetas de aplicaciones con opciones de descarga y copia de ruta
 */
function renderAppCards(containerSelector = '#apps-container') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const htmlContent = APPS_CONFIG.map(app => `
        <div class="policy-card glass-card slide-up">
            <div class="app-card-header">
                <span class="policy-badge ${app.badgeClass}">${app.badge}</span>
                <span class="app-version-tag">${app.version}</span>
            </div>
            
            <h2>${app.title}</h2>
            <div class="policy-meta">${app.category}</div>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.2rem;">${app.description}</p>
            
            <!-- Botones de Acción: Descarga y Copiar Ruta -->
            <div class="app-actions-group">
                <a href="${app.playStoreUrl}" target="_blank" rel="noopener" class="btn-primary-sm btn-download">
                    <span>📲 Google Play Store</span>
                </a>
                
                <button type="button" class="btn-secondary-sm btn-copy" onclick="copyToClipboard('${app.playStoreUrl}', 'Ruta de Google Play copiada')">
                    <span>📋 Copiar Ruta App</span>
                </button>

                <a href="${app.policyUrl}" class="btn-link-sm">
                    <span>📜 Ver Políticas →</span>
                </a>
            </div>

            <!-- Caja con la variable de ruta visible para copiar manualmente si se prefiere -->
            <div class="copy-path-box">
                <span class="copy-label">Ruta / ID de App:</span>
                <input type="text" readonly value="${app.playStoreUrl}" class="copy-input" id="path-input-${app.id}">
                <button type="button" class="btn-copy-icon" onclick="copyToClipboard('${app.playStoreUrl}', 'Ruta copiada')" title="Copiar ruta">
                    📋
                </button>
            </div>
        </div>
    `).join('');

    container.innerHTML = htmlContent;
}
