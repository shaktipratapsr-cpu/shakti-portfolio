import { useEffect } from 'react'
import * as THREE from 'three'

export function useHeroScene(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const particleCount = 1800
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 30
      positions[index * 3 + 1] = (Math.random() - 0.5) * 20
      positions[index * 3 + 2] = (Math.random() - 0.5) * 15

      const tone = Math.random()
      if (tone < 0.6) {
        colors[index * 3] = 0
        colors[index * 3 + 1] = 0.96
        colors[index * 3 + 2] = 1
      } else if (tone < 0.85) {
        colors[index * 3] = 1
        colors[index * 3 + 1] = 0.42
        colors[index * 3 + 2] = 0.2
      } else {
        colors[index * 3] = 0.6
        colors[index * 3 + 1] = 0.8
        colors[index * 3 + 2] = 0.95
      }
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const shapes = []
    const shapeData = [
      { geo: new THREE.IcosahedronGeometry(0.4, 0), x: 3, y: 1.5, z: -1, color: 0x00f5ff, speed: 0.008 },
      { geo: new THREE.OctahedronGeometry(0.3, 0), x: -3.5, y: -1, z: -2, color: 0xff6b35, speed: 0.012 },
      { geo: new THREE.TetrahedronGeometry(0.35, 0), x: 4.5, y: -2, z: -3, color: 0x00f5ff, speed: 0.006 },
      { geo: new THREE.IcosahedronGeometry(0.2, 0), x: -2, y: 2, z: -1.5, color: 0x00b8cc, speed: 0.015 },
      { geo: new THREE.OctahedronGeometry(0.25, 0), x: 2.5, y: -3, z: -2, color: 0xff6b35, speed: 0.009 },
    ]

    shapeData.forEach((item) => {
      const material = new THREE.MeshBasicMaterial({
        color: item.color,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      })

      const mesh = new THREE.Mesh(item.geo, material)
      mesh.position.set(item.x, item.y, item.z)
      mesh.userData = {
        speed: item.speed,
        baseY: item.y,
        floatPhase: Math.random() * Math.PI * 2,
      }

      scene.add(mesh)
      shapes.push(mesh)
    })

    const gridGeometry = new THREE.PlaneGeometry(40, 40, 20, 20)
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
    })
    const grid = new THREE.Mesh(gridGeometry, gridMaterial)
    grid.rotation.x = -Math.PI / 2.5
    grid.position.y = -4
    scene.add(grid)

    let mouseX = 0
    let mouseY = 0
    let tick = 0
    let rafId = 0

    const onMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    const animate = () => {
      tick += 0.005

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.04
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.04
      camera.lookAt(scene.position)

      particles.rotation.y = tick * 0.04
      particles.rotation.x = tick * 0.02

      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.speed
        shape.rotation.y += shape.userData.speed * 0.7
        shape.position.y = shape.userData.baseY + Math.sin(tick * 0.8 + shape.userData.floatPhase) * 0.3
      })

      grid.position.z = ((tick * 0.3) % 2) - 1

      renderer.render(scene, camera)
      rafId = window.requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)
    rafId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)

      particleGeometry.dispose()
      particleMaterial.dispose()
      gridGeometry.dispose()
      gridMaterial.dispose()
      shapes.forEach((shape) => {
        shape.geometry.dispose()
        shape.material.dispose()
      })
      renderer.dispose()
    }
  }, [canvasRef])
}
