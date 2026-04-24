import { useEffect } from 'react'
import * as THREE from 'three'

export function useSkillsScene(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const parent = canvas.parentElement
    if (!parent) return undefined

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(parent.offsetWidth, parent.offsetHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, parent.offsetWidth / parent.offsetHeight, 0.1, 100)
    camera.position.z = 8

    const nodes = []
    const labels = ['React', 'Node', 'JS', 'MongoDB', 'Express', 'AI API', 'MCP', 'Git', 'Python', 'CSS3']
    const orbits = [3.5, 5.5]

    labels.forEach((_, index) => {
      const geometry = new THREE.SphereGeometry(0.12, 8, 8)
      const color = index < 5 ? 0x00f5ff : index < 8 ? 0xff6b35 : 0x8ba3b4
      const material = new THREE.MeshBasicMaterial({ color })
      const mesh = new THREE.Mesh(geometry, material)

      const orbit = orbits[Math.floor(index / 5)]
      const angle = (index / (labels.length / 2 || 1)) * Math.PI * 2
      mesh.userData = {
        orbit,
        angle: angle + Math.floor(index / 5) * 0.5,
        speed: 0.005 + index * 0.0003,
        plane: index % 3,
      }

      nodes.push(mesh)
      scene.add(mesh)
    })

    const coreSphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 1),
      new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.4 }),
    )
    scene.add(coreSphere)

    let rafId = 0

    const animate = () => {
      coreSphere.rotation.y += 0.006
      coreSphere.rotation.x += 0.003

      nodes.forEach((node) => {
        node.userData.angle += node.userData.speed
        const angle = node.userData.angle
        const radius = node.userData.orbit

        if (node.userData.plane === 0) {
          node.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius * 0.5)
        } else if (node.userData.plane === 1) {
          node.position.set(Math.cos(angle) * radius * 0.6, Math.sin(angle) * radius, Math.sin(angle) * 0.3)
        } else {
          node.position.set(Math.sin(angle) * radius * 0.8, Math.cos(angle) * 0.4, Math.cos(angle) * radius)
        }
      })

      renderer.render(scene, camera)
      rafId = window.requestAnimationFrame(animate)
    }

    const onResize = () => {
      const width = parent.offsetWidth
      const height = parent.offsetHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', onResize)
    rafId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)

      nodes.forEach((node) => {
        node.geometry.dispose()
        node.material.dispose()
      })

      coreSphere.geometry.dispose()
      coreSphere.material.dispose()
      renderer.dispose()
    }
  }, [canvasRef])
}
