# Guía de Arquitectura, Estructura y Especificaciones Técnicas — MontyTech - CMTech Landing & Portal de Políticas

> [!IMPORTANT]
> **Propósito de este documento:** Este archivo sirve como la fuente canónica de verdad arquitectónica del repositorio **tonimontech-landing**. Toda IA asistencial, desarrollador o desarrolladora que continúe el trabajo en este proyecto DEBE seguir las reglas, estructuras y convenciones definidas aquí para mantener la coherencia y modularidad del portal.

---

## 1. Visión General del Proyecto

**MontyTech - CMTech Landing & Legal Portal** es una aplicación web responsiva construida con **HTML5, Vanilla CSS3 y JavaScript moderno (ES6+)**. Funciona como el sitio web institucional y centro oficial de **Políticas de Privacidad, Términos Legales y Descargas** para el portafolio de aplicaciones móviles publicadas por **MontyTech - CMTech (Startup & Desarrollo Independiente)**.

### Pilares del Proyecto:
1. **Diseño Premium Ultra-Moderno (Dark Glassmorphism):** Estética en tema oscuro (`.dark-theme`), tarjetas traslúcidas (`.glass-card`), efectos de desenfoque de fondo (`backdrop-filter`) y tipografía con Google Fonts (**Inter** y **Outfit**).
2. **Modularidad por Aplicación:** Cada aplicación cuenta con su propio subdirectorio aislado dentro de `politicas/<app-id>/` con su archivo de configuración (`config.js`) y plantilla de términos legales (`index.html`).
3. **Integración Directa con Google Play Console:** Proporciona URLs estables y accesibles requeridas por Google Play Console para validar las políticas de privacidad de cada app Android.
4. **Copia de Rutas al Portapapeles:** Sistema integrado de copia rápida de URLs y notificaciones flotantes (*toast*) para compartir rutas de descarga.

---

## 2. Estructura del Proyecto

```
tonimontech-landing/
├── AGENTS.md                         ← Guía arquitectónica oficial para desarrolladores e IAs
├── index.html                        ← Página principal institucional de MontyTech - CMTech
├── politicas.html                    ← Portal catalogado de Apps con descargas y enlaces a políticas
├── css/
│   └── style.css                     ← Sistema de diseño, utilidades glassmorphism y responsive layout
├── js/
│   ├── apps.js                       ← Configuración dinámica de aplicaciones (APPS_CONFIG) y toast
│   ├── main.js                       ← Lógica de interacción y animaciones de entrada
│   └── socials.js                    ← Enlaces institucionales a redes sociales
└── politicas/                        ← Módulos independientes por aplicación
    ├── mi-negocio-movil/
    │   ├── config.js                 ← Variables de configuración de Mi Negocio Móvil
    │   └── index.html                ← Políticas de privacidad de Mi Negocio Móvil
    ├── poker-local/
    │   ├── config.js                 ← Variables de configuración de Poker Local
    │   └── index.html                ← Políticas de privacidad de Poker Local
    └── zona-guerra/
        ├── config.js                 ← Variables de configuración de Zona de Guerra
        └── index.html                ← Políticas de privacidad de Zona de Guerra
```

---

## 3. Catálogo Actual de Aplicaciones

| Identificador (`id`) | Aplicación | Categoría | ID de Paquete Android (`appId`) | URL de Políticas |
|---|---|---|---|---|
| `poker-local` | **Poker Local — Texas Hold'em** | Juegos & Entretenimiento | `com.pokerlocal.app` | `politicas/poker-local/index.html` |
| `mi-negocio-movil` | **Mi Negocio Móvil** | Productividad & Gestión | `com.minegociomovil.app` | `politicas/mi-negocio-movil/index.html` |
| `zona-guerra` | **Zona de Guerra — Estrategia Táctica** | Juegos & Estrategia | `com.montytech.zonadeguerra` | `politicas/zona-guerra/index.html` |

---

## 4. Guía para Agregar una Nueva Aplicación al Portal

Para mantener la arquitectura modular al incorporar una nueva aplicación de **MontyTech - CMTech**, siga estos 5 pasos obligatorios:

### Paso 1: Crear la Carpeta del Módulo
Crear la ruta `politicas/<nuevo-app-id>/` en el directorio de políticas.

### Paso 2: Crear el Archivo `config.js`
Crear `politicas/<nuevo-app-id>/config.js` definiendo el objeto de configuración:
```javascript
const NUEVA_APP_CONFIG = {
    id: 'nueva-app',
    name: 'Nombre Oficial de la App',
    category: 'Categoría (Android)',
    badge: '<i class="fa-solid fa-star"></i> Insignia',
    badgeClass: 'badge-legal',
    version: 'Versión 1.0.0 (Build 1)',
    targetSdk: 'API Level 36 (Android 16)',
    appId: 'com.montytech.nuevaapp',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.montytech.nuevaapp',
    directApkUrl: 'https://montytech.com/downloads/nueva-app.apk',
    policyPath: 'politicas/nueva-app/index.html',
    description: 'Descripción breve y concisa de la aplicación.',
    company: 'MontyTech - CMTech (Startup & Desarrollo Independiente)',
    lastUpdated: 'Octubre 2026'
};
```

### Paso 3: Crear el Documento de Políticas `index.html`
Duplicar y ajustar la plantilla oficial desde `politicas/poker-local/index.html` o `politicas/zona-guerra/index.html`. Asegurar los siguientes bloques indispensables:
- `legal-callout success`: Resumen ejecutivo de transparencia.
- `legal-callout`: Caja con enlaces de descarga en Google Play y botón de copiado de URL.
- Secciones numeradas con íconos de **Font Awesome 6**.

### Paso 4: Registrar la App en `js/apps.js`
Agregar el objeto de la aplicación a la matriz `APPS_CONFIG` en `js/apps.js`.

### Paso 5: Añadir la Tarjeta en `politicas.html`
Incorporar el bloque HTML de la tarjeta dentro de `<div id="apps-container">` en `politicas.html`.

---

## 5. Sistema de Diseño y Convenciones CSS

- **Tema Principal:** Fondo oscuro profundo (`#0f172a` / `#1e293b`).
- **Efecto Glassmorphism:** Clase `.glass` y `.glass-card` con bordes sutiles y sombra con resplandor.
- **Colores de Acento:**
  - Púrpura primario: `var(--primary)` (`#8a2be2`)
  - Cian secundario: `var(--secondary)` (`#00e5ff`)
  - Verde de éxito: `#00e676`
  - Dorado legal: `#ffb300`
- **Iconografía:** Usar exclusivamente la CDN oficial de **Font Awesome 6** (`fa-solid`, `fa-brands`, `fa-regular`).

---

## 6. Créditos y Licencia

Desarrollado con ❤️ por **MontyTech - CMTech (Startup & Desarrollo Independiente)**. Todos los derechos reservados.
