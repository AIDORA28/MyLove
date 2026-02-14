/* ============================================
   VALENTINE'S TIMELINE - INTERACTIVE 3D LOGIC (V3.1 FIXED)
   ============================================ */

let threeScene, threeCamera, threeRenderer, particleSystem;
let particlesOriginalPositions;
let scrollProgress = 0;
let mouseX = 0, mouseY = 0;

// ============================================
// 1. THREE.JS ENGINE (Fondo Inmersivo 3D)
// ============================================

function initThreeJS() {
    console.log('🚀 Initializing Creative 3D Layer...');
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // Escena y Cámara
    threeScene = new THREE.Scene();
    threeCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    threeCamera.position.z = 60;

    // Renderer con Alpha para transparencia
    threeRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Crear Elementos
    createAdvancedParticles();
    createGlowMesh();
    createOrbitingHearts();

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    threeScene.add(ambientLight);

    const mainLight = new THREE.PointLight(0xff6b9d, 2, 200);
    mainLight.position.set(20, 20, 40);
    threeScene.add(mainLight);

    // Conexión con Scroll GSAP
    gsap.registerPlugin(ScrollTrigger);

    gsap.to({}, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            onUpdate: (self) => {
                scrollProgress = self.progress;
            }
        }
    });

    animate();

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
}

function createAdvancedParticles() {
    const count = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    particlesOriginalPositions = new Float32Array(count * 3);

    const color1 = new THREE.Color("#FF0040"); // Rojo pasión
    const color2 = new THREE.Color("#FFABC7"); // Rosa suave

    for (let i = 0; i < count * 3; i += 3) {
        // Fórmula del Corazón 3D (Ecuaciones Paramétricas)
        const t = Math.random() * Math.PI * 2; // Ángulo
        const phi = Math.random() * Math.PI;   // Dispersión para el volumen

        // Magia matemática para la forma de corazón:
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        let z = 10 * Math.cos(phi) * Math.sin(t); // Profundidad (volumen)

        // Ajustamos escala y posición (multiplicador para tamaño visual)
        const scale = 1.2;
        x = x * scale;
        y = y * scale;
        z = z * scale;

        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;

        // Guardamos las posiciones originales para la animación del scroll
        particlesOriginalPositions[i] = x;
        particlesOriginalPositions[i + 1] = y;
        particlesOriginalPositions[i + 2] = z;

        // Mezcla de colores (Rojos y Rosas intensos)
        const mixedColor = color1.clone().lerp(color2, Math.random());
        colors[i] = mixedColor.r;
        colors[i + 1] = mixedColor.g;
        colors[i + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    particleSystem = new THREE.Points(geometry, material);
    threeScene.add(particleSystem);
}

// Función para crear mini-corazones orbitando
let orbitingHearts = [];
function createOrbitingHearts() {
    const heartCount = 6;
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, 0);
    heartShape.bezierCurveTo(0, -3, -5, -3, -5, 0);
    heartShape.bezierCurveTo(-5, 5, 0, 8, 0, 12);
    heartShape.bezierCurveTo(0, 8, 5, 5, 5, 0);
    heartShape.bezierCurveTo(5, -3, 0, -3, 0, 0);

    const geometry = new THREE.ShapeGeometry(heartShape);
    const material = new THREE.MeshPhongMaterial({
        color: 0xFF0040,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
        emissive: 0xFF0040,
        emissiveIntensity: 0.5
    });

    for (let i = 0; i < heartCount; i++) {
        const heart = new THREE.Mesh(geometry, material);
        heart.scale.set(0.2, 0.2, 0.2);
        heart.rotation.x = Math.PI; // Invertir para que apunte bien

        // Datos de órbita personalizados
        heart.userData = {
            distance: 30 + Math.random() * 20,
            speed: 0.01 + Math.random() * 0.02,
            angle: (i / heartCount) * Math.PI * 2,
            offsetY: (Math.random() - 0.5) * 40,
            rotationSpeed: (Math.random() - 0.5) * 0.05
        };

        orbitingHearts.push(heart);
        threeScene.add(heart);
    }
}

function createGlowMesh() {
    const geometry = new THREE.IcosahedronGeometry(25, 2);
    const material = new THREE.MeshPhongMaterial({
        color: 0xff6b9d,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
        emissive: 0xff6b9d,
        emissiveIntensity: 0.4
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = "glowCore";
    threeScene.add(mesh);
}

function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    if (particleSystem) {
        particleSystem.rotation.y += 0.001 + (scrollProgress * 0.005);

        const pos = particleSystem.geometry.attributes.position.array;
        for (let i = 0; i < pos.length; i += 3) {
            const ix = i, iy = i + 1, iz = i + 2;

            const originX = particlesOriginalPositions[ix];
            const originY = particlesOriginalPositions[iy];
            const originZ = particlesOriginalPositions[iz];

            const factor = 1 + (scrollProgress * 2.5);
            pos[ix] = originX * factor + Math.sin(time + originY) * 0.5;
            pos[iy] = originY * factor + Math.cos(time + originX) * 0.5;
            pos[iz] = originZ * factor;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
    }

    // Animar mini-corazones orbitando
    orbitingHearts.forEach(heart => {
        heart.userData.angle += heart.userData.speed;
        heart.position.x = Math.cos(heart.userData.angle) * heart.userData.distance;
        heart.position.z = Math.sin(heart.userData.angle) * heart.userData.distance;
        heart.position.y = heart.userData.offsetY;

        heart.rotation.z += heart.userData.rotationSpeed;
        heart.rotation.y += heart.userData.rotationSpeed;

        // Los mini-corazones también se alejan suavemente con el scroll
        const orbitFactor = 1 + scrollProgress;
        heart.position.multiplyScalar(orbitFactor);
    });

    threeCamera.position.z = 60 + (scrollProgress * 150);
    threeCamera.position.x += (mouseX * 20 - threeCamera.position.x) * 0.05;
    threeCamera.position.y += (mouseY * 20 - threeCamera.position.y) * 0.05;
    threeCamera.lookAt(0, 0, 0);

    const core = threeScene.getObjectByName("glowCore");
    if (core) {
        core.rotation.y += 0.005;
        core.scale.setScalar(1 + scrollProgress * 1.5);
        core.material.opacity = 0.1 * (1 - scrollProgress);
    }

    threeRenderer.render(threeScene, threeCamera);
}

function onWindowResize() {
    threeCamera.aspect = window.innerWidth / window.innerHeight;
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================
// 2. COUNTER LOGIC (El Contador)
// ============================================

const startDate = new Date('2022-10-31T00:00:00');
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    if (document.getElementById('days')) document.getElementById('days').innerText = d;
    if (document.getElementById('hours')) document.getElementById('hours').innerText = h;
    if (document.getElementById('minutes')) document.getElementById('minutes').innerText = m;
    if (document.getElementById('seconds')) document.getElementById('seconds').innerText = s;
}

// ============================================
// 3. UI ANIMATIONS & VIDEO MODAL
// ============================================

function initUI() {
    // Animación de bloques de memoria
    document.querySelectorAll('.memory-block').forEach((block) => {
        gsap.from(block, {
            scrollTrigger: {
                trigger: block,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Modal de Video
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalClose = document.querySelector('.modal-close');

    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', function () {
            const src = this.getAttribute('data-video');
            if (src && modal && modalVideo) {
                // Seteamos el src directamente al video para mayor compatibilidad
                modalVideo.src = src;
                modalVideo.load();
                modal.style.display = 'block';
                gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.3 });

                // Intentar reproducir automáticamente al abrir
                modalVideo.play().catch(error => {
                    console.log("Auto-play prevented, user interaction required:", error);
                });
            }
        });
    });

    const closeModal = () => {
        if (modal) {
            gsap.to(modal, {
                opacity: 0, duration: 0.3, onComplete: () => {
                    modal.style.display = 'none';
                    if (modalVideo) modalVideo.pause();
                }
            });
        }
    };

    if (modalClose) modalClose.onclick = closeModal;
    if (modal) modal.onclick = (e) => { if (e.target === modal) closeModal(); };

    // Botón Finale
    const finaleBtn = document.getElementById('finale-button');
    const surpriseModal = document.getElementById('surprise-modal');
    const closeSurprise = document.getElementById('close-surprise');

    if (finaleBtn && surpriseModal) {
        finaleBtn.addEventListener('click', () => {
            gsap.to(finaleBtn, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
            triggerLoveRain();

            // Mostrar modal sorpresa
            surpriseModal.style.display = 'block';
            gsap.fromTo(surpriseModal, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" });
        });
    }

    if (closeSurprise) {
        closeSurprise.onclick = () => {
            gsap.to(surpriseModal, {
                opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => {
                    surpriseModal.style.display = 'none';
                }
            });
        };
    }

    if (surpriseModal) {
        surpriseModal.onclick = (e) => { if (e.target === surpriseModal) closeSurprise.onclick(); };
    }
}

// ============================================
// 4. LOVE RAIN (Efecto Especial)
// ============================================

function triggerLoveRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '10000';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: -50,
        size: Math.random() * 20 + 20,
        speed: Math.random() * 3 + 2,
        drift: Math.random() * 2 - 1,
        rot: Math.random() * 360
    }));

    function drawHeart(x, y, size, rot) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot * Math.PI / 180);
        ctx.fillStyle = '#FF6B9D';
        ctx.beginPath();
        ctx.moveTo(0, size * 0.3);
        ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, size * 0.3);
        ctx.bezierCurveTo(-size / 2, size * 0.7, 0, size, 0, size);
        ctx.bezierCurveTo(0, size, size / 2, size * 0.7, size / 2, size * 0.3);
        ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, size * 0.3);
        ctx.fill();
        ctx.restore();
    }

    const start = Date.now();
    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach(h => {
            h.y += h.speed;
            h.x += h.drift;
            h.rot += 1;
            drawHeart(h.x, h.y, h.size, h.rot);
        });
        if (Date.now() - start < 5000) requestAnimationFrame(loop);
        else gsap.to(canvas, { opacity: 0, duration: 1, onComplete: () => canvas.remove() });
    }
    loop();
}

// ============================================
// START ALL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initUI();
    setInterval(updateCounter, 1000);
});
