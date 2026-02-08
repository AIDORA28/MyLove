# 💕 Love Timeline - Valentine's Day Special

Una aplicación web interactiva y romántica creada con HTML5, CSS3, JavaScript vanilla, Three.js y GSAP.

## ✨ Características

- 🎨 **Diseño Premium**: Paleta de colores romántica con efectos glassmorphism
- 🌌 **Fondo 3D Interactivo**: Sistema de partículas con Three.js y efecto parallax
- ⏰ **Contador de Amor**: Tiempo real desde tu fecha especial
- 📜 **Timeline Animado**: Bloques de memoria con animaciones al scroll usando GSAP
- 🎬 **Galería de Videos**: Modal elegante para reproducir videos especiales
- ❤️ **Lluvia de Corazones**: Efecto especial al hacer clic en el botón final
- 📱 **100% Responsivo**: Diseño mobile-first que se ve perfecto en todos los dispositivos

## 🚀 Guía de Personalización Rápida

### 1️⃣ Cambiar la Fecha de Inicio del Contador

Abre `script.js` y busca la línea marcada con `🔥 PERSONALIZAR`:

```javascript
// 🔥 PERSONALIZAR: Cambia esta fecha a tu fecha especial
const startDate = new Date('2024-02-14T00:00:00');
```

Cambia la fecha al formato `'YYYY-MM-DDTHH:MM:SS'` (ejemplo: `'2023-06-15T20:30:00'`)

### 2️⃣ Personalizar Textos

En `index.html`, busca todos los comentarios marcados con `<!-- 🔥 PERSONALIZAR -->` y cambia:

- **Título principal** (Hero Section):
  ```html
  <!-- 🔥 PERSONALIZAR: Título principal de la página -->
  <h1 class="hero-title">
      <span class="title-line">Nuestra</span>
      <span class="title-line">Historia</span>
  </h1>
  ```

- **Subtítulo**:
  ```html
  <!-- 🔥 PERSONALIZAR: Subtítulo -->
  <p class="hero-subtitle">Un viaje a través del tiempo juntos</p>
  ```

- **Bloques de Memoria** (5 bloques en total):
  Cambia la fecha, título y descripción en cada bloque:
  ```html
  <div class="memory-date">Enero 2023</div>
  <h3 class="memory-title">El Día Que Todo Comenzó</h3>
  <p class="memory-description">
      Recuerdo exactamente el momento...
  </p>
  ```

- **Mensaje Final**:
  ```html
  <!-- 🔥 PERSONALIZAR: Mensaje final -->
  <h2 class="finale-title">Te Amo</h2>
  <p class="finale-message">
      Gracias por cada momento...
  </p>
  ```

### 3️⃣ Cambiar Imágenes

Reemplaza los placeholders en cada bloque de memoria:

```html
<!-- 🔥 PERSONALIZAR: Cambia la imagen -->
<img src="https://via.placeholder.com/400x600" alt="...">
```

Por tus propias imágenes:

```html
<img src="imagenes/nuestro-primer-encuentro.jpg" alt="Nuestro primer encuentro">
```

**Recomendaciones de imágenes:**
- Formato: JPG o PNG
- Tamaño recomendado: 400x600px (vertical) o 600x400px (horizontal)
- Peso optimizado: < 500KB por imagen

### 4️⃣ Añadir Videos

En la sección de video gallery, cambia el atributo `data-video`:

```html
<!-- 🔥 PERSONALIZAR: Cambia el atributo data-video -->
<div class="video-item" data-video="videos/nuestro-video.mp4">
```

**Recomendaciones de videos:**
- Formato: MP4 (H.264)
- Resolución: 1920x1080 (Full HD) o 1280x720 (HD)
- Duración recomendada: < 2 minutos
- Peso: < 50MB

### 5️⃣ Personalizar Colores

En `style.css`, puedes cambiar la paleta de colores en las variables CSS:

```css
:root {
    /* Cambia estos valores para tu paleta personalizada */
    --color-primary: #FF6B9D;        /* Rosa principal */
    --color-primary-light: #FFB3D9;  /* Rosa claro */
    --color-primary-dark: #D65D7A;   /* Rosa oscuro */
    --color-secondary: #C06C84;      /* Color secundario */
    --color-accent: #F67280;         /* Color de acento */
}
```

## 📂 Estructura de Archivos

```
MyLove/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño responsivo
├── script.js           # Lógica JavaScript (Three.js + GSAP)
├── README.md          # Este archivo
└── assets/            # Crea esta carpeta para tus recursos
    ├── imagenes/      # Tus fotos personales
    └── videos/        # Tus videos personales
```

## 🎯 Cómo Usar

1. **Descarga/Clona** los archivos a tu computadora
2. **Personaliza** el contenido siguiendo la guía anterior
3. **Abre** `index.html` en tu navegador favorito
4. **Comparte** el amor compartiendo el enlace si lo subes a un servidor

## 🌐 Publicar en Línea (Opcional)

Puedes hospedar tu timeline gratis en:

- **GitHub Pages**: 
  1. Sube los archivos a un repositorio de GitHub
  2. Activa GitHub Pages en Settings
  3. Tu sitio estará en `https://tu-usuario.github.io/nombre-repo`

- **Netlify**:
  1. Arrastra la carpeta completa a netlify.com/drop
  2. Tu sitio estará listo en segundos

- **Vercel**:
  1. Importa tu repositorio de GitHub
  2. Deploy automático

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico**
- **CSS3** (Custom Properties, Grid, Flexbox, Animations)
- **JavaScript ES6+**
- **Three.js r128** - Gráficos 3D y sistema de partículas
- **GSAP 3.12.5** (+ ScrollTrigger) - Animaciones premium
- **Google Fonts** (Cormorant Garamond, Montserrat)

## 💡 Tips y Trucos

### Para mejorar el rendimiento:
- Optimiza las imágenes antes de subirlas (usa [TinyPNG](https://tinypng.com/))
- Comprime los videos (usa [HandBrake](https://handbrake.fr/))
- Usa formatos modernos: WebP para imágenes, WebM para videos

### Para debugging:
- Abre la consola del navegador (F12) para ver logs
- Descomentar `// markers: true` en GSAP para ver los triggers de scroll
- Verifica que todos los archivos estén en las rutas correctas

### Para personalización avanzada:
- Modifica el número de partículas en Three.js (línea 106 en script.js)
- Ajusta la duración de animaciones en las configuraciones de GSAP
- Cambia el número de corazones en la lluvia (línea 444 en script.js)

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo para tu regalo especial. ❤️

## 🎁 Hecho con Amor

Creado especialmente para celebrar momentos especiales y el amor verdadero.

---

**¿Necesitas ayuda?** Revisa los comentarios `🔥 PERSONALIZAR` en el código para ubicar fácilmente las secciones a modificar.

**¡Disfruta creando tu timeline de amor!** 💕
