import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function WhaleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isClient) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0.5, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.fog = new THREE.FogExp2(0x04121f, 0.035);

    const hemi = new THREE.HemisphereLight(0x9fdcff, 0x062033, 1.1);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xbfe9ff, 2.2);
    key.position.set(4, 6, 6);
    scene.add(key);

    const whaleGroup = new THREE.Group();

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0x2b6f9e,
      roughness: 0.55,
      metalness: 0.15,
    });
    const bellyMat = new THREE.MeshStandardMaterial({
      color: 0xcfe6f2,
      roughness: 0.7,
      metalness: 0.05,
    });

    const profile: THREE.Vector2[] = [];
    const P: [number, number][] = [
      [0.00, -2.6], [0.34, -2.45], [0.62, -2.05], [0.86, -1.5],
      [1.00, -0.85], [1.06, -0.1], [1.02, 0.65], [0.88, 1.3],
      [0.66, 1.85], [0.40, 2.25], [0.16, 2.5], [0.00, 2.6],
    ];
    P.forEach(([r, y]) => profile.push(new THREE.Vector2(r, y)));
    const bodyGeo = new THREE.LatheGeometry(profile, 32);
    const body = new THREE.Mesh(bodyGeo, skinMat);
    body.rotation.z = Math.PI / 2;
    whaleGroup.add(body);

    const bellyGeo = new THREE.SphereGeometry(1, 32, 16);
    const belly = new THREE.Mesh(bellyGeo, bellyMat);
    belly.scale.set(2.35, 0.62, 0.78);
    belly.position.set(0.15, -0.28, 0);
    whaleGroup.add(belly);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.72, 24, 16), skinMat);
    head.scale.set(1.15, 0.95, 0.9);
    head.position.set(1.95, 0.05, 0);
    whaleGroup.add(head);

    const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 10), bellyMat);
    jaw.scale.set(1.3, 0.42, 0.72);
    jaw.position.set(2.15, -0.32, 0);
    whaleGroup.add(jaw);

    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x05080c, roughness: 0.15, metalness: 0.4 });
    [-1, 1].forEach((s) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 8), eyeMat);
      eye.position.set(2.15, 0.12, s * 0.5);
      whaleGroup.add(eye);
    });

    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.quadraticCurveTo(0.55, -0.12, 1.05, -0.5);
    finShape.quadraticCurveTo(0.7, -0.42, 0.35, -0.3);
    finShape.quadraticCurveTo(0.08, -0.18, 0, 0);
    const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.07, bevelEnabled: false });
    [-1, 1].forEach((s) => {
      const fin = new THREE.Mesh(finGeo, skinMat);
      fin.position.set(1.15, -0.45, s * 0.55);
      fin.rotation.set(s * 0.9, 0.25, -0.35);
      whaleGroup.add(fin);
    });

    const dorsalShape = new THREE.Shape();
    dorsalShape.moveTo(0, 0);
    dorsalShape.quadraticCurveTo(0.18, 0.5, 0.05, 0.85);
    dorsalShape.quadraticCurveTo(-0.12, 0.45, -0.22, 0);
    dorsalShape.lineTo(0, 0);
    const dorsal = new THREE.Mesh(
      new THREE.ExtrudeGeometry(dorsalShape, { depth: 0.06, bevelEnabled: false }),
      skinMat
    );
    dorsal.position.set(-0.35, 0.85, -0.03);
    dorsal.rotation.y = Math.PI / 2;
    whaleGroup.add(dorsal);

    const tailStock = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, 1.1, 16), skinMat);
    tailStock.rotation.z = Math.PI / 2 - 0.18;
    tailStock.position.set(-2.75, 0.12, 0);
    whaleGroup.add(tailStock);

    const flukeShape = new THREE.Shape();
    flukeShape.moveTo(0, 0);
    flukeShape.quadraticCurveTo(-0.5, 0.55, -1.15, 0.75);
    flukeShape.quadraticCurveTo(-0.85, 0.28, -0.55, 0.05);
    flukeShape.quadraticCurveTo(-0.85, -0.28, -1.15, -0.75);
    flukeShape.quadraticCurveTo(-0.5, -0.55, 0, 0);
    const flukeGeo = new THREE.ExtrudeGeometry(flukeShape, { depth: 0.08, bevelEnabled: false });
    const fluke = new THREE.Mesh(flukeGeo, skinMat);
    fluke.position.set(-3.2, 0.28, -0.04);
    fluke.rotation.y = Math.PI / 2;
    whaleGroup.add(fluke);

    whaleGroup.traverse((o) => { o.frustumCulled = false; });

    scene.add(whaleGroup);

    const whales: { group: THREE.Group; speed: number; direction: number; waveOffset: number; startY: number }[] = [
      { group: whaleGroup, speed: 0.006, direction: 1, waveOffset: 0, startY: 0.6 },
      { group: whaleGroup.clone(), speed: 0.0045, direction: -1, waveOffset: Math.PI, startY: -1.1 },
    ];
    scene.add(whales[1].group);

    whales[0].group.position.set(-9, 0.6, 0);
    whales[1].group.position.set(11, -1.1, -2);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const animate = () => {
      time += 0.016;
      whales.forEach((whale) => {
        whale.group.position.x += whale.speed * whale.direction;
        whale.waveOffset += 0.002;
        whale.group.position.y = whale.startY + Math.sin(whale.waveOffset) * 0.3;
        if (whale.direction === 1 && whale.group.position.x > 5) {
          whale.group.position.x = -5;
        } else if (whale.direction === -1 && whale.group.position.x < -5) {
          whale.group.position.x = 5;
        }
        whale.group.rotation.y = whale.direction > 0 ? 0 : Math.PI;
      });
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isClient]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      aria-hidden="true"
    />
  );
}
