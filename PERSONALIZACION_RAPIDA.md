# 🎨 GUÍA DE PERSONALIZACIÓN VISUAL RÁPIDA

## ⚡ Cambios Rápidos (5 minutos)

### 1. Cambiar la Fecha de Inicio ⏰

**Archivo:** `script.js` (Líneas 9-11)

```javascript
// 🔥 PERSONALIZAR: Cambia esta fecha a tu fecha especial
// Formato: 'YYYY-MM-DDTHH:MM:SS' (ejemplo: '2024-02-14T00:00:00')
const startDate = new Date('2024-02-14T00:00:00');
```

**Ejemplos de fechas:**
```javascript
// San Valentín 2024 a medianoche:
const startDate = new Date('2024-02-14T00:00:00');

// Aniversario el 15 de junio de 2023 a las 8:30 PM:
const startDate = new Date('2023-06-15T20:30:00');

// Primer encuentro el 1 de marzo de 2022:
const startDate = new Date('2022-03-01T00:00:00');
```

---

### 2. Cambiar los Títulos Principales 📝

**Archivo:** `index.html`

**Título del Hero (Líneas 30-34):**
```html
<!-- 🔥 PERSONALIZAR: Título principal de la página -->
<h1 class="hero-title">
    <span class="title-line">Nuestra</span>
    <span class="title-line">Historia</span>
</h1>
```

**Ideas para títulos:**
```html
<!-- Romántico clásico -->
<span class="title-line">Tú</span>
<span class="title-line">y Yo</span>

<!-- Poético -->
<span class="title-line">Por Siempre</span>
<span class="title-line">Juntos</span>

<!-- Personalizado -->
<span class="title-line">María</span>
<span class="title-line">& Juan</span>

<!-- Inspirador -->
<span class="title-line">Nuestro</span>
<span class="title-line">Viaje</span>
```

**Subtítulo (Línea 36):**
```html
<!-- 🔥 PERSONALIZAR: Subtítulo -->
<p class="hero-subtitle">Un viaje a través del tiempo juntos</p>
```

**Ideas para subtítulos:**
- "Cada momento es eterno contigo"
- "365 días, infinitos recuerdos"
- "La historia de nosotros dos"
- "Desde aquel día especial..."
- "Mi persona favorita"

---

### 3. Personalizar los Bloques de Memoria 💕

**Archivo:** `index.html` (5 bloques para personalizar)

#### Bloque 1 - Ejemplo completo:

```html
<!-- Memory Block 1 -->
<!-- 🔥 PERSONALIZAR: Cambia la imagen, fecha, título y descripción -->
<div class="memory-block" data-direction="left">
    <div class="memory-image">
        <!-- Cambia la URL por tu imagen -->
        <img src="imagenes/primera-cita.jpg" alt="Nuestra primera cita">
    </div>
    <div class="memory-content">
        <!-- Cambia la fecha -->
        <div class="memory-date">14 de Febrero 2024</div>
        <!-- Cambia el título -->
        <h3 class="memory-title">El Día Que Todo Comenzó</h3>
        <!-- Cambia la descripción -->
        <p class="memory-description">
            Recuerdo exactamente el momento en que nuestras miradas se cruzaron. 
            Fue como si el tiempo se detuviera y supiera que algo especial estaba por comenzar.
        </p>
    </div>
</div>
```

#### Ideas para tus 5 bloques:

**Bloque 1: El Comienzo**
- Fecha: Cuando se conocieron
- Título: "Nuestro Primer Encuentro" / "El Día Que Te Conocí"
- Descripción: Cómo se conocieron, primera impresión

**Bloque 2: Primera Cita**
- Fecha: Su primera cita oficial
- Título: "Nuestra Primera Cita" / "El Primer Día Como Nosotros"
- Descripción: Dónde fueron, qué hicieron, cómo se sintieron

**Bloque 3: Momento Especial**
- Fecha: Un viaje, evento o momento importante
- Título: "Aventuras Inolvidables" / "Aquel Día Mágico"
- Descripción: Un recuerdo especial que compartieron

**Bloque 4: Vida Cotidiana**
- Fecha: "Cada Día" o una fecha reciente
- Título: "Nuestros Momentos Simples" / "La Belleza de lo Cotidiano"
- Descripción: Apreciación de los pequeños momentos

**Bloque 5: El Futuro**
- Fecha: "Por Venir..." o una fecha futura
- Título: "Lo Que Nos Espera" / "Nuestros Sueños"
- Descripción: Planes, sueños, promesas

---

### 4. Cambiar el Mensaje Final 💌

**Archivo:** `index.html` (Líneas 165-178)

```html
<div class="finale-content">
    <!-- 🔥 PERSONALIZAR: Mensaje final -->
    <h2 class="finale-title">
        Te Amo
        <span class="heart-icon">❤️</span>
    </h2>
    <!-- 🔥 PERSONALIZAR: Texto del mensaje de cierre -->
    <p class="finale-message">
        Gracias por cada momento, cada sonrisa y cada recuerdo. 
        Eres mi persona favorita y mi lugar favorito para estar.
    </p>
    <!-- 🔥 Al hacer clic, se dispara el efecto de lluvia de corazones -->
    <button class="cta-button" id="finale-button">
        Para Ti, Con Todo Mi Amor
    </button>
</div>
```

**Ideas para el título:**
```html
<h2 class="finale-title">Te Amo ❤️</h2>
<h2 class="finale-title">Por Siempre 💕</h2>
<h2 class="finale-title">Mi Amor Eterno 💖</h2>
<h2 class="finale-title">Gracias por Existir 🌹</h2>
```

**Ideas para el mensaje:**
```html
<!-- Opción 1: Agradecimiento -->
<p class="finale-message">
    Gracias por cada aventura, cada risa, cada abrazo. 
    Eres el regalo más hermoso que la vida me ha dado.
</p>

<!-- Opción 2: Promesa -->
<p class="finale-message">
    Prometo estar a tu lado en cada paso del camino.
    Juntos escribiremos el resto de nuestra historia.
</p>

<!-- Opción 3: Declaración -->
<p class="finale-message">
    Eres mi hogar, mi paz, mi alegría. 
    No hay lugar en el que prefiera estar que contigo.
</p>
```

**Ideas para el botón:**
```html
<button class="cta-button" id="finale-button">
    Para Ti, Con Todo Mi Amor
</button>

<button class="cta-button" id="finale-button">
    Feliz San Valentín, Mi Amor
</button>

<button class="cta-button" id="finale-button">
    Haz Clic Para Una Sorpresa
</button>

<button class="cta-button" id="finale-button">
    Te Amo Infinitamente
</button>
```

---

## 🎨 Cambios de Color (10 minutos)

### Paletas de Color Sugeridas

**Archivo:** `style.css` (Líneas 9-20)

#### Opción 1: Rosa Romántico (Actual)
```css
:root {
    --color-primary: #FF6B9D;
    --color-primary-light: #FFB3D9;
    --color-primary-dark: #D65D7A;
    --color-secondary: #C06C84;
    --color-accent: #F67280;
}
```

#### Opción 2: Rojo Pasión
```css
:root {
    --color-primary: #E63946;
    --color-primary-light: #F18F9A;
    --color-primary-dark: #A31621;
    --color-secondary: #C1121F;
    --color-accent: #FF6978;
}
```

#### Opción 3: Púrpura Místico
```css
:root {
    --color-primary: #9D4EDD;
    --color-primary-light: #C77DFF;
    --color-primary-dark: #7209B7;
    --color-secondary: #B185DB;
    --color-accent: #E0AAFF;
}
```

#### Opción 4: Coral Suave
```css
:root {
    --color-primary: #FF7B9C;
    --color-primary-light: #FFB4D1;
    --color-primary-dark: #E85A7D;
    --color-secondary: #FF9AA2;
    --color-accent: #FFC2D1;
}
```

#### Opción 5: Azul Serenidad
```css
:root {
    --color-primary: #4895EF;
    --color-primary-light: #A8DADC;
    --color-primary-dark: #277DA1;
    --color-secondary: #56CBF9;
    --color-accent: #72EFDD;
}
```

#### Opción 6: Verde Esperanza
```css
:root {
    --color-primary: #06D6A0;
    --color-primary-light: #71F79F;
    --color-primary-dark: #048A81;
    --color-secondary: #06FFA5;
    --color-accent: #8EFFA0;
}
```

---

## 🖼️ Reemplazar Imágenes (15 minutos)

### Estructura de Carpetas Recomendada

```
MyLove/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── imagenes/
│   │   ├── bloque1.jpg
│   │   ├── bloque2.jpg
│   │   ├── bloque3.jpg
│   │   ├── bloque4.jpg
│   │   └── bloque5.jpg
│   └── videos/
│       └── nuestro-video.mp4
```

### Pasos para Reemplazar Imágenes:

1. **Crea la carpeta assets/imagenes/**
   ```
   Clic derecho en la carpeta MyLove > Nueva carpeta > "assets"
   Dentro de assets > Nueva carpeta > "imagenes"
   ```

2. **Copia tus fotos a la carpeta imagenes/**
   - Formatos: JPG, PNG, WebP
   - Tamaño recomendado: 800x1200px (vertical)
   - Peso: < 500KB (usa TinyPNG para optimizar)

3. **Actualiza las rutas en index.html:**
   ```html
   <!-- ANTES: -->
   <img src="https://via.placeholder.com/400x600" alt="...">
   
   <!-- DESPUÉS: -->
   <img src="assets/imagenes/bloque1.jpg" alt="Nuestra primera cita">
   ```

### Nombres Sugeridos para tus Imágenes:
- `primer-encuentro.jpg`
- `primera-cita.jpg`
- `aventura-especial.jpg`
- `momentos-cotidianos.jpg`
- `nuestro-futuro.jpg`

---

## 🎥 Añadir Video (10 minutos)

### Opción 1: Video Local

1. **Guarda tu video en la carpeta assets/videos/**
2. **Actualiza el atributo data-video:**
   ```html
   <!-- 🔥 PERSONALIZAR: Cambia el atributo data-video -->
   <div class="video-item" data-video="assets/videos/nuestro-video.mp4">
   ```

### Opción 2: Video de YouTube

Reemplaza el contenido del modal:

```html
<!-- En lugar del <video>, usa un iframe de YouTube: -->
<div id="video-modal" class="modal">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <iframe width="100%" height="500" 
            src="https://www.youtube.com/embed/TU_VIDEO_ID" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
</div>
```

---

## ✅ Checklist de Personalización

Marca cada elemento que hayas personalizado:

### Contenido:
- [ ] Fecha de inicio del contador
- [ ] Título principal (Hero)
- [ ] Subtítulo (Hero)
- [ ] Título del contador ("Juntos desde...")
- [ ] Bloque 1: Fecha, título, descripción, imagen
- [ ] Bloque 2: Fecha, título, descripción, imagen
- [ ] Bloque 3: Fecha, título, descripción, imagen
- [ ] Bloque 4: Fecha, título, descripción, imagen
- [ ] Bloque 5: Fecha, título, descripción, imagen
- [ ] Título de la galería de videos
- [ ] Video o enlace al video
- [ ] Mensaje final (título y texto)
- [ ] Texto del botón finale

### Estilo (Opcional):
- [ ] Paleta de colores
- [ ] Fuentes tipográficas
- [ ] Número de partículas (rendimiento)

---

## 🚀 Testeo Final

Antes de compartir:

1. **Abre index.html en tu navegador**
2. **Verifica cada sección:**
   - ✅ Hero con partículas 3D funcionando
   - ✅ Contador actualizándose cada segundo
   - ✅ Timeline con 5 bloques completos
   - ✅ Todas las imágenes cargando correctamente
   - ✅ Video reproduciéndose en el modal
   - ✅ Mensaje final correcto
   - ✅ Efecto de lluvia de corazones al hacer clic
3. **Prueba en móvil** (o simula con F12 > Device Mode)
4. **Revisa que no haya errores en la consola** (F12)

---

## 💝 ¡Listo Para Compartir!

Tu Love Timeline está personalizada y lista para impresionar. 

**Opciones para compartir:**
- 📧 Enviar por email (comprime la carpeta MyLove como ZIP)
- 🌐 Publicar online (GitHub Pages, Netlify, Vercel)
- 📱 Abrir directamente en su dispositivo
- 💾 Grabar en USB como regalo físico

**¡Disfruta viendo su reacción!** 😍✨
