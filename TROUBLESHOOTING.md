# 🔧 TROUBLESHOOTING - Solución de Problemas Comunes

## 🚨 Problemas Frecuentes y Soluciones

### 1. Las partículas 3D no se ven

**Síntomas:**
- El fondo del hero está negro/vacío
- No hay partículas ni geometría visible

**Causas posibles:**
- El CDN de Three.js no cargó
- Error de JavaScript bloqueando la ejecución
- Navegador no compatible con WebGL

**Soluciones:**
```javascript
// 1. Verifica la consola (F12) para errores
// 2. Confirma que el CDN de Three.js esté cargando:
console.log(typeof THREE); // Debe mostrar "object"

// 3. Verifica soporte WebGL:
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
if (!gl) {
    console.error('WebGL no está soportado en tu navegador');
}
```

**Fix rápido:**
- Usa Chrome/Edge/Firefox actualizado
- Habilita aceleración de hardware en tu navegador
- Actualiza los drivers de tu tarjeta gráfica

---

### 2. El contador no actualiza o muestra "0"

**Síntomas:**
- Los valores de días, horas, minutos, segundos permanecen en 0
- El contador no cambia cada segundo

**Causas posibles:**
- La fecha de inicio está mal formateada
- Los IDs de los elementos no coinciden
- JavaScript no está cargando

**Soluciones:**
```javascript
// 1. Verifica el formato de fecha:
const startDate = new Date('2024-02-14T00:00:00'); // ✅ Correcto
const startDate = new Date('14/02/2024'); // ❌ Incorrecto

// 2. Verifica que los IDs existan en el HTML:
console.log(document.getElementById('days')); // No debe ser null

// 3. Verifica que el script esté cargando:
console.log('✨ Love Timeline Initialized Successfully! ✨');
```

**Fix rápido:**
- Asegúrate de que la fecha esté en formato ISO: `'YYYY-MM-DDTHH:MM:SS'`
- Verifica que los IDs en HTML coincidan: `id="days"`, `id="hours"`, etc.

---

### 3. Las animaciones de scroll no funcionan

**Síntomas:**
- Los bloques de memoria no se animan al hacer scroll
- Todo aparece de golpe sin animación

**Causas posibles:**
- GSAP o ScrollTrigger no cargaron
- Conflicto de JavaScript
- Los elementos no tienen las clases correctas

**Soluciones:**
```javascript
// 1. Verifica que GSAP esté cargado:
console.log(typeof gsap); // Debe mostrar "object"
console.log(typeof ScrollTrigger); // Debe mostrar "object"

// 2. Registra el plugin explícitamente:
gsap.registerPlugin(ScrollTrigger);

// 3. Activa los markers para debugging:
scrollTrigger: {
    trigger: block,
    markers: true, // ← Descomentar esta línea
    start: 'top 80%',
    // ...
}
```

**Fix rápido:**
- Verifica que los CDN de GSAP estén antes de tu script.js
- Asegúrate de que los elementos tengan la clase `.memory-block`
- Prueba en modo incógnito para evitar extensiones que interfieran

---

### 4. Las imágenes no cargan

**Síntomas:**
- Aparece un ícono de imagen rota
- Las imágenes placeholder no se ven

**Causas posibles:**
- Ruta incorrecta a la imagen
- Archivo no existe en la ubicación especificada
- Bloqueador de contenido activo

**Soluciones:**
```html
<!-- Estructura de carpetas recomendada: -->
MyLove/
├── index.html
├── assets/
│   └── imagenes/
│       ├── foto1.jpg
│       └── foto2.jpg

<!-- En el HTML, usa rutas relativas: -->
<img src="assets/imagenes/foto1.jpg" alt="...">

<!-- O rutas absolutas si subes a servidor: -->
<img src="https://tu-servidor.com/imagenes/foto1.jpg" alt="...">
```

**Fix rápido:**
- Verifica la ruta con clic derecho > "Abrir imagen en nueva pestaña"
- Asegúrate de que el nombre del archivo coincida (case-sensitive en servidores)
- Comprueba que la imagen esté en formato JPG, PNG o WebP

---

### 5. El video no se reproduce en el modal

**Síntomas:**
- El modal se abre pero el video no carga
- Pantalla negra en el modal

**Causas posibles:**
- Formato de video no compatible
- Ruta incorrecta al archivo de video
- El atributo `data-video` está vacío

**Soluciones:**
```html
<!-- 1. Verifica el atributo data-video: -->
<div class="video-item" data-video="assets/videos/nuestro-video.mp4">

<!-- 2. Usa formatos compatibles: -->
<video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Tu navegador no soporta videos HTML5.
</video>

<!-- 3. Considera usar YouTube embed: -->
<iframe width="100%" height="500" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" allowfullscreen>
</iframe>
```

**Fix rápido:**
- Convierte tu video a MP4 (H.264) usando HandBrake
- Verifica la ruta del video en el atributo `data-video`
- Reduce el tamaño del video si es muy grande (< 50MB)

---

### 6. El efecto de lluvia de corazones no aparece

**Síntomas:**
- Al hacer clic en el botón finale, no pasa nada
- No aparecen corazones cayendo

**Causas posibles:**
- Error en la función `triggerLoveRain()`
- Canvas no se está creando
- GSAP no está disponible

**Soluciones:**
```javascript
// 1. Verifica que el botón tenga el ID correcto:
console.log(document.getElementById('finale-button')); // No debe ser null

// 2. Verifica la función en consola:
console.log(typeof triggerLoveRain); // Debe mostrar "function"

// 3. Prueba llamar la función manualmente:
triggerLoveRain(); // En la consola del navegador
```

**Fix rápido:**
- Abre la consola y busca errores de JavaScript
- Verifica que el botón tenga `id="finale-button"`
- Asegúrate de que GSAP esté cargado antes de script.js

---

### 7. El sitio se ve roto en móvil

**Síntomas:**
- Elementos desalineados en pantallas pequeñas
- Texto cortado o ilegible
- Scroll horizontal no deseado

**Causas posibles:**
- Falta la meta tag de viewport
- CSS no está cargando
- Breakpoints no están funcionando

**Soluciones:**
```html
<!-- 1. Asegúrate de tener esta meta tag en el <head>: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 2. Verifica que style.css esté vinculado: -->
<link rel="stylesheet" href="style.css">
```

```css
/* 3. Verifica los breakpoints: */
@media (max-width: 480px) {
    /* Estilos para móvil */
}
```

**Fix rápido:**
- Usa las DevTools de Chrome (F12) para simular dispositivos móviles
- Activa el modo responsive design (Ctrl+Shift+M)
- Prueba en un dispositivo real

---

### 8. Error "Blocked by CORS policy"

**Síntomas:**
- Consola muestra: "has been blocked by CORS policy"
- Recursos externos no cargan

**Causas posibles:**
- Estás abriendo el archivo directamente (file://)
- Servidor local no configurado correctamente

**Soluciones:**

**Opción 1: Servidor local simple con Python**
```bash
# Python 3:
python -m http.server 8000

# Luego abre: http://localhost:8000
```

**Opción 2: Servidor local con Node.js**
```bash
# Instalar http-server globalmente:
npm install -g http-server

# Ejecutar en la carpeta del proyecto:
http-server

# Luego abre: http://localhost:8080
```

**Opción 3: VS Code Live Server**
1. Instala la extensión "Live Server"
2. Clic derecho en index.html > "Open with Live Server"

**Fix rápido:**
- Sube el sitio a GitHub Pages, Netlify o Vercel (gratis)
- Usa un servidor local en lugar de abrir el archivo directamente

---

### 9. Rendimiento lento / FPS bajos

**Síntomas:**
- Animaciones entrecortadas
- Scroll lento
- El sitio se siente pesado

**Causas posibles:**
- Demasiadas partículas en Three.js
- Imágenes sin optimizar
- Dispositivo de bajos recursos

**Soluciones:**
```javascript
// 1. Reduce el número de partículas (script.js, línea ~106):
const particleCount = 500; // ← Cambia de 1000 a 500

// 2. Reduce los corazones en la lluvia (script.js, línea ~444):
const heartCount = 25; // ← Cambia de 50 a 25

// 3. Desactiva el parallax en dispositivos móviles:
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', onMouseMove);
}
```

**Optimización de imágenes:**
```bash
# Usa TinyPNG o ImageOptim para reducir peso
# Convierte JPG a WebP (formato más eficiente)
```

**Fix rápido:**
- Reduce el número de partículas y corazones
- Optimiza todas las imágenes (< 200KB cada una)
- Desactiva efectos en móviles de gama baja

---

### 10. La paleta de colores no cambia

**Síntomas:**
- Modificas las variables CSS pero no se reflejan los cambios
- Los colores siguen siendo los originales

**Causas posibles:**
- Cache del navegador
- Especificidad CSS incorrecta
- Archivo CSS no guardado

**Soluciones:**
```css
/* 1. Verifica que las variables estén en :root */
:root {
    --color-primary: #TU_COLOR; /* ← Cambia aquí */
}

/* 2. Usa !important si es necesario (temporal): */
.hero-title {
    color: var(--color-primary) !important;
}
```

**Fix rápido:**
- Limpia la cache del navegador (Ctrl+Shift+Delete)
- Recarga forzada (Ctrl+F5)
- Verifica que guardaste el archivo CSS

---

## 🛠️ Herramientas de Debugging

### Chrome DevTools (F12)
```
Console: Ver errores de JavaScript
Elements: Inspeccionar HTML/CSS en tiempo real
Network: Verificar que recursos carguen
Performance: Analizar rendimiento
Device Mode: Simular dispositivos móviles
```

### Logs útiles en Consola
```javascript
// Añade estos logs temporalmente para debugging:
console.log('Fecha de inicio:', startDate);
console.log('Three.js cargado:', typeof THREE);
console.log('GSAP cargado:', typeof gsap);
console.log('ScrollTrigger cargado:', typeof ScrollTrigger);
```

---

## 📞 Soporte Adicional

Si ninguna de estas soluciones funciona:

1. **Revisa los archivos de referencia:**
   - `README.md` - Guía de uso
   - `CODIGO_COMPLETO.md` - Código y especificaciones

2. **Verifica la integridad de los archivos:**
   - `index.html` - Debe tener 200+ líneas
   - `style.css` - Debe tener 500+ líneas
   - `script.js` - Debe tener 570+ líneas

3. **Compara con el código original:**
   - Asegúrate de no haber borrado accidentalmente secciones importantes

4. **Prueba en otro navegador:**
   - Confirma que no es un problema específico del navegador

---

## ✅ Checklist de Verificación

Antes de pedir ayuda, verifica:

- [ ] Todos los archivos están en la misma carpeta
- [ ] Los CDN de Three.js y GSAP están cargando (chequear Network en DevTools)
- [ ] No hay errores en la consola (F12)
- [ ] El navegador está actualizado
- [ ] Has limpiado la cache del navegador
- [ ] Las rutas de archivos son correctas
- [ ] Los IDs y clases coinciden entre HTML y JavaScript

---

**¿Aún tienes problemas?** Revisa el código original y compara línea por línea con tus archivos personalizados.

**¡Buena suerte!** 💪✨
