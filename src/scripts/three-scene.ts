import * as THREE from "three";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("three-container");
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const iconPaths = [
        "/icons/ts-min.svg",
        "/icons/react-min.svg",
        "/icons/angular-min.svg",
        "/icons/nest-min.svg",
        "/icons/js-min.svg",
        "/icons/vue-min.svg",
    ];

    let cubeGroup: THREE.Group | null = null;

    function getThemeSettings() {
        const isDark = document.documentElement.classList.contains('dark');

        return {
            stickerBackground: isDark ? "#1e293b" : "#e2e8f0",  // 🎨 color sticker
            borderBackground: isDark ? "#000000" : "#ffffff",    // 🎨 borde sticker
            edgeColor: isDark ? "#60a5fa" : "#0f172a",            // 🎨 líneas del cubo
        };
    }

    function createFaceTexture(svgPath: string, backgroundColor: string, borderColor: string) {
        const size = 512;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;

        ctx.fillStyle = borderColor;
        ctx.fillRect(0, 0, size, size);

        const stickerMargin = size * 0.08;
        const stickerSize = size - stickerMargin * 2;

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(stickerMargin, stickerMargin, stickerSize, stickerSize);

        const img = new Image();
        img.src = svgPath;

        return new Promise<THREE.Texture>((resolve) => {
            img.onload = () => {
                const iconSize = stickerSize * 0.5;
                ctx.drawImage(
                    img,
                    (size - iconSize) / 2,
                    (size - iconSize) / 2,
                    iconSize,
                    iconSize
                );
                const texture = new THREE.CanvasTexture(canvas);
                texture.anisotropy = 8;
                resolve(texture);
            };
        });
    }

    async function createCube() {
        if (cubeGroup) {
            scene.remove(cubeGroup);
        }

        cubeGroup = new THREE.Group();
        scene.add(cubeGroup);

        const { stickerBackground, borderBackground, edgeColor } = getThemeSettings();

        const texturesPromises = iconPaths.map(path =>
            createFaceTexture(path, stickerBackground, borderBackground)
        );

        const textures = await Promise.all(texturesPromises);

        const materials = textures.map(texture =>
            new THREE.MeshPhongMaterial({
                map: texture,
                shininess: 80,
                specular: 0x888888,
            })
        );

        const geometry = new THREE.BoxGeometry(4, 4, 4);
        const cube = new THREE.Mesh(geometry, materials);
        cubeGroup.add(cube);

        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: edgeColor, linewidth: 2 })
        );
        cube.add(line);
    }

    async function setupScene() {
        await createCube();

        function animate() {
            requestAnimationFrame(animate);
            if (cubeGroup) {
                cubeGroup.rotation.x += 0.002 + Math.sin(Date.now() * 0.001) * 0.001;
                cubeGroup.rotation.y += 0.003 + Math.cos(Date.now() * 0.001) * 0.001;
            }
            renderer.render(scene, camera);
        }
        animate();
    }

    setupScene();

    window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // 🎯 Escuchar cambios en el tema
    window.addEventListener("storage", (event) => {
        if (event.key === "theme") {
            setTimeout(setupScene, 100); // pequeño delay para esperar el cambio de clase
        }
    });

    // También escucha el evento custom si lo usas
    window.addEventListener("theme-changed", () => {
        setTimeout(setupScene, 100);
    });
});