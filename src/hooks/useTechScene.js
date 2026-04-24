import { useEffect } from 'react'
import * as THREE from 'three'

export function useTechScene(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 100)
    camera.position.z = 4

    const shape = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.6 }),
    )
    scene.add(shape)

    const count = 240
    const positions = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 8
      positions[index * 3 + 1] = (Math.random() - 0.5) * 6
      positions[index * 3 + 2] = (Math.random() - 0.5) * 4
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0xff6b35, size: 0.035, transparent: true, opacity: 0.65 }),
    )
    scene.add(particles)

    let rafId = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(1, rect.width)
      const height = Math.max(1, rect.height)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const animate = () => {
      shape.rotation.x += 0.005
      shape.rotation.y += 0.007
      particles.rotation.y += 0.0015
      renderer.render(scene, camera)
      rafId = window.requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      shape.geometry.dispose()
      shape.material.dispose()
      particleGeometry.dispose()
      particles.material.dispose()
      renderer.dispose()
    }
  }, [canvasRef])
}
