import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MILESTONES } from '../data/constants';

export const useThreeScene = (theme, scrollPercent) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef({ scene: null, camera: null, renderer: null, curve: null, milestoneObjects: [], tubeMesh: null });

  // Initialize Three.js Scene
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Clean up existing scene if it exists
    if (sceneRef.current.renderer && canvasRef.current.contains(sceneRef.current.renderer.domElement)) {
      canvasRef.current.removeChild(sceneRef.current.renderer.domElement);
      sceneRef.current.renderer.dispose();
    }
    
    const scene = new THREE.Scene();
    const bgColor = theme === 'dark' ? 0x000000 : 0xffffff;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.012);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduced for performance
    canvasRef.current.appendChild(renderer.domElement);

    const pathPoints = [
      new THREE.Vector3(0, 200, 0),
      new THREE.Vector3(30, 150, 25),
      new THREE.Vector3(-40, 100, -20),
      new THREE.Vector3(45, 50, 35),
      new THREE.Vector3(-35, 0, -25),
      new THREE.Vector3(20, -50, 15),
      new THREE.Vector3(0, -100, 0)
    ];
    const curve = new THREE.CatmullRomCurve3(pathPoints);

    const tubeGeo = new THREE.TubeGeometry(curve, 400, 0.2, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({ 
      color: 0x27bac2, 
      emissive: 0x0e99c8, 
      emissiveIntensity: 6, 
      transparent: true, 
      opacity: 0.3 
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    tubeMesh.userData.originalOpacity = 0.3; // Store original opacity
    scene.add(tubeMesh);
    sceneRef.current.tubeMesh = tubeMesh; // Store reference

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 2);
    scene.add(pointLight);

    const milestoneObjects = MILESTONES.map(m => {
      const pos = curve.getPointAt(m.t);
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x7fe7ce, emissiveIntensity: 8 })
      );
      node.position.copy(pos);
      node.userData.originalOpacity = 1.0; // Store original opacity
      scene.add(node);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(8, 0.05, 16, 100),
        new THREE.MeshBasicMaterial({ color: 0x0e99c8, transparent: true, opacity: 0.3 })
      );
      ring.position.copy(pos);
      ring.lookAt(curve.getPointAt(Math.min(m.t + 0.01, 1)));
      ring.userData.originalOpacity = 0.3; // Store original opacity
      scene.add(ring);

      return { node, ring, t: m.t };
    });

    sceneRef.current = { scene, camera, renderer, curve, milestoneObjects };

    // Initial camera position
    const initialPos = curve.getPointAt(0);
    camera.position.set(initialPos.x, initialPos.y + 4, initialPos.z + 14);
    camera.lookAt(curve.getPointAt(0.05));
    
    // Initial render
    renderer.render(scene, camera);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
      }
      if (canvasRef.current && canvasRef.current.contains(renderer.domElement)) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  // Update Three.js on Theme Change
  useEffect(() => {
    if (!sceneRef.current.scene) return;
    const { scene } = sceneRef.current;
    const bgColor = theme === 'dark' ? 0x000000 : 0xffffff;
    scene.background.set(bgColor);
    scene.fog.color.set(bgColor);
  }, [theme]);

  // Animate scene based on scroll - continuous animation loop (optimized)
  useEffect(() => {
    let animationId;
    let isRunning = true;
    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime) => {
      if (!isRunning) return;
      
      // Throttle to target FPS
      const elapsed = currentTime - lastFrameTime;
      if (elapsed < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = currentTime - (elapsed % frameInterval);
      
      const { camera, curve, renderer, scene, milestoneObjects } = sceneRef.current;
      
      if (camera && curve && renderer && scene) {
        // Hide 3D elements when in Hero section (scrollPercent < 0.05)
        const isHeroSection = scrollPercent < 0.05;
        const heroOpacity = isHeroSection ? 0 : 1;
        
        // Skip rendering if hidden (performance optimization)
        if (isHeroSection && heroOpacity === 0) {
          animationId = requestAnimationFrame(animate);
          return;
        }
        
        const clampedT = Math.max(0, Math.min(0.999, scrollPercent));
        const camPos = curve.getPointAt(clampedT);
        const lookPos = curve.getPointAt(Math.min(clampedT + 0.05, 1));
        
        camera.position.set(
          camPos.x + Math.sin(Date.now() * 0.0006) * 2, 
          camPos.y + 4, 
          camPos.z + 14
        );
        camera.lookAt(lookPos);

        // Update opacity of tube (green line) - restore original opacity first
        const { tubeMesh } = sceneRef.current;
        if (tubeMesh && tubeMesh.material && tubeMesh.userData) {
          tubeMesh.material.opacity = tubeMesh.userData.originalOpacity * heroOpacity;
        }

        if (milestoneObjects && milestoneObjects.length > 0) {
          milestoneObjects.forEach((obj) => {
            if (obj.ring && obj.node) {
              obj.ring.rotation.z += 0.005;
              obj.node.rotation.y += 0.01;
              const dist = Math.abs(scrollPercent - obj.t);
              const scale = dist < 0.08 ? 1.8 : 1.0;
              obj.ring.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
              
              // Restore original opacity and apply hero opacity
              if (obj.ring.material && obj.ring.userData) {
                obj.ring.material.opacity = obj.ring.userData.originalOpacity * heroOpacity;
              }
              if (obj.node.material && obj.node.userData) {
                obj.node.material.opacity = obj.node.userData.originalOpacity * heroOpacity;
              }
            }
          });
        }

        renderer.render(scene, camera);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation loop
    animate(performance.now());

    return () => {
      isRunning = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [scrollPercent]);

  return canvasRef;
};
