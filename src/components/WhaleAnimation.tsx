import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WhaleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Soft global illumination
    const hemi = new THREE.HemisphereLight(0x9fdcff, 0x062033, 1.1);
    scene.add(hemi);

    // Key directional light
    const key = new THREE.DirectionalLight(0xbfe9ff, 2.2);
    key.position.set(4, 6, 6);
    scene.add(key);

    // Whale group
    const whaleGroup = new THREE.Group();

    // Whale body (ellipsoid)
    const bodyGeometry = new THREE.SphereGeometry(0.8, 1.2, 0.5);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.3,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    whaleGroup.add(body);

    // Whale head
    const headGeometry = new THREE.SphereGeometry(0.35, 0.8, 0.6);
    const head = new THREE.Mesh(headGeometry, bodyMaterial);
    head.position.x = 0.6;
    whaleGroup.add(head);

    // Whale tail
    const tailGeometry = new THREE.BufferGeometry();
    const tailVertices = new Float32Array([
      -0.8, 0, 0,
      -1.2, -0.3, 0,
      -1.4, 0, 0,
      -1.2, 0.3, 0,
      -0.8, 0, 0,
    ]);
    tailGeometry.setAttribute('position', new THREE.BufferAttribute(tailVertices, 3));
    const tail = new THREE.Mesh(tailGeometry, bodyMaterial);
    whaleGroup.add(tail);

    // Whale blowhole
    const blowGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const blowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
    const blowhole = new THREE.Mesh(blowGeometry, blowMaterial);
    blowhole.position.set(0.65, -0.1, 0.3);
    whaleGroup.add(blowhole);

    scene.add(whaleGroup);

    // Two whales
    const whales: { group: THREE.Group; speed: number; direction: number; waveOffset: number; startY: number }[] = [
      { group: whaleGroup, speed: 0.003, direction: 1, waveOffset: 0, startY: 1.5 },
      { group: whaleGroup.clone(), speed: 0.002, direction: -1, waveOffset: Math.PI, startY: -1.5 },
    ];
    scene.add(whales[1].group);

    // Position whales off-screen initially
    whales[0].group.position.set(-5, 1.5, 0);
    whales[1].group.position.set(5, -1.5, 0);

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

        // Reset position when off-screen
        if (whale.direction === 1 && whale.group.position.x > 5) {
          whale.group.position.x = -5;
        } else if (whale.direction === -1 && whale.group.position.x < -5) {
          whale.group.position.x = 5;
        }

        // Rotate whale slightly
        whale.group.rotation.y = whale.direction > 0 ? 0 : Math.PI;
      });

      renderer.render(scene, camera);
    };

      renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      aria-hidden="true"
    />
  );
}
