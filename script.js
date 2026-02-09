/* ============================================
   SCRIPT.JS - LÓGICA INTERACTIVA
   Valentine's Day Love Timeline
   ============================================ */

// ============================================
// 1. TIME COUNTER LOGIC (El Contador de Amor)
// ============================================

// 🔥 PERSONALIZAR: Cambia esta fecha a tu fecha especial (Año-Mes-Día)
// Formato: 'YYYY-MM-DDTHH:MM:SS' (ejemplo: '2024-02-14T00:00:00')
const startDate = new Date('2024-02-14T00:00:00');

// Función para calcular el tiempo transcurrido
function updateCounter() {
    const now = new Date();
    const timeDiff = now - startDate;

    // Cálculos de tiempo
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Actualizar DOM con animación de números
    updateCounterElement('days', days);
    updateCounterElement('hours', hours);
    updateCounterElement('minutes', minutes);
    updateCounterElement('seconds', seconds);
}

// Función helper para actualizar elementos del contador con efecto
function updateCounterElement(id, value) {
    const element = document.getElementById(id);
    if (element && element.textContent !== String(value)) {
        element.style.transform = 'scale(1.2)';
        element.textContent = value;

        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }
}

// Iniciar el contador y actualizarlo cada segundo
updateCounter();
setInterval(updateCounter, 1000);

// ============================================
// 2. THREE.JS BACKGROUND (El Toque 3D)
// ============================================

// ============================================
// 2. THREE.JS BACKGROUND (Experiencia Inmersiva)
// ============================================

let threeScene, threeCamera, threeRenderer, particleSystem;
let particlesOriginalPositions;
let mouseX = 0, mouseY = 0;
let scrollProgress = 0;

function initThreeJS() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // Configurar escena
    threeScene = new THREE.Scene();

    // Configurar cámara con perspectiva amplia
    threeCamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
    );
    threeCamera.position.z = 50;

    // Configurar renderer con transparencia
    threeRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Crear sistema de partículas
    createParticleSystem();

    // Añadir geometría central (corazón abstracto)
    createCenterGeometry();

    // Añadir luces profundas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    threeScene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff6b9d, 2, 100);
    pointLight.position.set(10, 10, 15);
    threeScene.add(pointLight);

    // Conectar con el Scroll de la página usando GSAP
    gsap.to({}, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
            onUpdate: (self) => {
                scrollProgress = self.progress;
            }
        }
    });

    // Iniciar loop de animación
    animateThree();

    // Event listener para responsive
    window.addEventListener('resize', onWindowResize);

    // Event listener para mouse parallax
    document.addEventListener('mousemove', onMouseMove);
}

// Crear sistema de partículas flotantes con memoria de posición
function createParticleSystem() {
    const particleCount = 1500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    particlesOriginalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        // Posición original (formando una nube esférica/corazón inicial)
        const x = (Math.random() - 0.5) * 60;
        const y = (Math.random() - 0.5) * 60;
        const z = (Math.random() - 0.5) * 60;

        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;

        particlesOriginalPositions[i] = x;
        particlesOriginalPositions[i + 1] = y;
        particlesOriginalPositions[i + 2] = z;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0xff6b9d,
        size: 0.4,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(particles, particleMaterial);
    threeScene.add(particleSystem);
}

function createCenterGeometry() {
    const geometry = new THREE.IcosahedronGeometry(10, 2);
    const material = new THREE.MeshPhongMaterial({
        color: 0xff6b9d,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
        emissive: 0xc06c84,
        emissiveIntensity: 0.8
    });

    const centerMesh = new THREE.Mesh(geometry, material);
    centerMesh.name = 'centerMesh';
    threeScene.add(centerMesh);
}

// Loop de animación optimizado
function animateThree() {
    requestAnimationFrame(animateThree);

    // Actualizar partículas según el scroll (Efecto Dispersión)
    if (particleSystem) {
        const positions = particleSystem.geometry.attributes.position.array;

        // El factor de dispersión aumenta con el scroll
        const scatterFactor = scrollProgress * 150;

        for (let i = 0; i < positions.length; i += 3) {
            // Movimiento suave de flotación
            const time = Date.now() * 0.001;
            const noiseX = Math.sin(time + i) * 0.1;
            const noiseY = Math.cos(time + i * 1.1) * 0.1;

            // Dispersión radial desde el centro
            const originX = particlesOriginalPositions[i];
            const originY = particlesOriginalPositions[i + 1];
            const originZ = particlesOriginalPositions[i + 2];

            const dist = Math.sqrt(originX * originX + originY * originY + originZ * originZ);
            const dirX = originX / dist;
            const dirY = originY / dist;
            const dirZ = originZ / dist;

            positions[i] = originX + (dirX * scatterFactor) + noiseX;
            positions[i + 1] = originY + (dirY * scatterFactor) + noiseY;
            positions[i + 2] = originZ + (dirZ * scatterFactor);
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;

        particleSystem.rotation.y += 0.001 + (scrollProgress * 0.01);
    }

    // Actualizar geometría central
    const centerMesh = threeScene.getObjectByName('centerMesh');
    if (centerMesh) {
        centerMesh.rotation.x += 0.002 + (scrollProgress * 0.02);
        centerMesh.rotation.y += 0.003 + (scrollProgress * 0.01);

        // Desvanecimiento según el scroll
        centerMesh.material.opacity = 0.2 * (1 - scrollProgress);

        const pulse = 1 + Math.sin(Date.now() * 0.0015) * 0.1;
        const scrollScale = 1 + scrollProgress * 2;
        centerMesh.scale.set(pulse * scrollScale, pulse * scrollScale, pulse * scrollScale);
    }

    // Movimiento de cámara cinemático según el scroll
    threeCamera.position.z = 50 + (scrollProgress * 100);
    threeCamera.rotation.z = scrollProgress * 0.5;

    // Parallax suave con el mouse
    threeCamera.position.x += (mouseX * 20 - threeCamera.position.x) * 0.05;
    threeCamera.position.y += (mouseY * 20 - threeCamera.position.y) * 0.05;
    threeCamera.lookAt(threeScene.position);

    threeRenderer.render(threeScene, threeCamera);
}

// Manejar resize de ventana
function onWindowResize() {
    if (threeCamera && threeRenderer) {
        threeCamera.aspect = window.innerWidth / window.innerHeight;
        threeCamera.updateProjectionMatrix();
        threeRenderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Manejar movimiento del mouse para parallax
function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Inicializar todo
initThreeJS();

// ============================================
// 3. GSAP SCROLL ANIMATIONS (Configuración UI)
// ============================================

function initGSAPAnimations() {
    const memoryBlocks = document.querySelectorAll('.memory-block');

    memoryBlocks.forEach((block, index) => {
        gsap.set(block, { opacity: 0, scale: 0.8 });

        gsap.to(block, {
            scrollTrigger: {
                trigger: block,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Animar sección del contador
    gsap.from('.counter-item', {
        scrollTrigger: {
            trigger: '#counter',
            start: 'top 85%',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6
    });

    // Sistema de seguridad: forzar visibilidad tras cargado
    setTimeout(() => {
        document.querySelectorAll('.memory-block, .cta-button').forEach(el => {
            const opacity = window.getComputedStyle(el).opacity;
            if (opacity === "0" || opacity === "0.0") {
                gsap.to(el, { opacity: 1, y: 0, duration: 0.5 });
            }
        });
    }, 2500);
}

// Inicializar animaciones GSAP cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGSAPAnimations);
} else {
    initGSAPAnimations();
}

// ============================================
// 4. MODAL DE VIDEO (Bonus)
// ============================================

// Funcionalidad del modal de video
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const modalClose = document.querySelector('.modal-close');
const videoItems = document.querySelectorAll('.video-item');

// Abrir modal al hacer click en un video
videoItems.forEach(item => {
    item.addEventListener('click', function () {
        const videoSrc = this.getAttribute('data-video');
        if (videoSrc) {
            modalVideo.querySelector('source').src = videoSrc;
            modalVideo.load();
            modal.style.display = 'block';

            // Animación de entrada del modal
            gsap.from(modal, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
});

// Cerrar modal
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Cerrar modal al hacer click fuera del video
if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    });
}

// ============================================
// 5. INTERACCIONES ADICIONALES
// ============================================

// Smooth scroll para navegación interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: 'power3.inOut'
            });
        }
    });
});

// ============================================
// 6. LOVE RAIN FINALE (El Gran Final)
// ============================================

const finaleButton = document.getElementById('finale-button');
if (finaleButton) {
    finaleButton.addEventListener('click', function () {
        // Animación del botón
        gsap.to(this, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });

        // Disparar el efecto de lluvia de corazones
        triggerLoveRain();
    });
}

// Función principal para crear la lluvia de corazones
function triggerLoveRain() {
    // Crear canvas overlay
    const canvas = document.createElement('canvas');
    canvas.id = 'love-rain-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const hearts = [];
    const heartCount = 50; // Número de corazones
    const duration = 5000; // Duración del efecto en ms
    const startTime = Date.now();

    // Crear objetos de corazones con propiedades aleatorias
    for (let i = 0; i < heartCount; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height, // Empezar arriba de la pantalla
            size: Math.random() * 30 + 20, // Tamaño entre 20-50px
            speedY: Math.random() * 3 + 2, // Velocidad de caída
            speedX: (Math.random() - 0.5) * 2, // Movimiento horizontal
            rotation: Math.random() * 360, // Rotación inicial
            rotationSpeed: (Math.random() - 0.5) * 5, // Velocidad de rotación
            opacity: Math.random() * 0.5 + 0.5 // Opacidad entre 0.5-1
        });
    }

    // Función para dibujar un corazón
    function drawHeart(x, y, size, rotation, opacity) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.globalAlpha = opacity;

        // Crear gradiente para el corazón
        const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2);
        gradient.addColorStop(0, '#FF6B9D');
        gradient.addColorStop(0.5, '#F67280');
        gradient.addColorStop(1, '#C06C84');

        ctx.fillStyle = gradient;
        ctx.beginPath();

        // Dibujar forma de corazón
        const topCurveHeight = size * 0.3;
        ctx.moveTo(0, topCurveHeight);

        // Curva superior izquierda
        ctx.bezierCurveTo(
            0, 0,
            -size / 2, 0,
            -size / 2, topCurveHeight
        );

        // Curva izquierda
        ctx.bezierCurveTo(
            -size / 2, (size + topCurveHeight) / 2,
            0, (size + topCurveHeight) / 1.2,
            0, size
        );

        // Curva derecha
        ctx.bezierCurveTo(
            0, (size + topCurveHeight) / 1.2,
            size / 2, (size + topCurveHeight) / 2,
            size / 2, topCurveHeight
        );

        // Curva superior derecha
        ctx.bezierCurveTo(
            size / 2, 0,
            0, 0,
            0, topCurveHeight
        );

        ctx.fill();
        ctx.restore();
    }

    // Loop de animación
    function animateLoveRain() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Actualizar y dibujar cada corazón
        hearts.forEach(heart => {
            // Actualizar posición
            heart.y += heart.speedY;
            heart.x += heart.speedX;
            heart.rotation += heart.rotationSpeed;

            // Rebotar en los bordes horizontales
            if (heart.x < 0 || heart.x > canvas.width) {
                heart.speedX *= -1;
            }

            // Dibujar corazón
            drawHeart(heart.x, heart.y, heart.size, heart.rotation, heart.opacity);

            // Resetear corazón si sale de la pantalla (para efecto continuo)
            if (heart.y > canvas.height + 50) {
                heart.y = -50;
                heart.x = Math.random() * canvas.width;
            }
        });

        // Continuar animación o detener después de la duración
        if (elapsed < duration) {
            requestAnimationFrame(animateLoveRain);
        } else {
            // Fade out del canvas
            gsap.to(canvas, {
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                    canvas.remove();
                }
            });
        }
    }

    // Iniciar animación
    animateLoveRain();

    // Fade in del canvas
    gsap.from(canvas, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
}

// Log de confirmación
console.log('✨ Love Timeline Initialized Successfully! ✨');
console.log('📅 Start Date:', startDate.toLocaleDateString());
console.log('🎨 Three.js Scene Ready');
console.log('🎬 GSAP Animations Loaded');
