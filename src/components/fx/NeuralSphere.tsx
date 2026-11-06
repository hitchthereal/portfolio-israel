"use client"

import { useEffect, useRef } from "react"

interface INeuralSphereProps {
  labels: string[]
  className?: string
}

type Vec3 = { x: number; y: number; z: number }
type Projected = { sx: number; sy: number; z: number; s: number }
type Pulse = { edge: number; t: number; speed: number; reverse: boolean }

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))
const FOV = 3.4

/**
 * A rotating 3D point-cloud sphere drawn on a 2D canvas: fibonacci-distributed
 * nodes, nearest-neighbour links, travelling "signal" pulses and orbiting tech
 * labels. Reacts to the pointer, pauses off-screen and honours reduced motion.
 */
export function NeuralSphere({ labels, className }: INeuralSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const compact = window.innerWidth < 768
    const count = compact ? 170 : 300

    // Nodes on a unit sphere
    const nodes: Vec3[] = []
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = GOLDEN_ANGLE * i
      nodes.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r })
    }

    // Link every node to its 3 nearest neighbours (computed once)
    const edges: [number, number][] = []
    const edgeKeys = new Set<string>()
    const adjacency: number[][] = nodes.map(() => [])
    for (let i = 0; i < count; i++) {
      const distances: { j: number; d: number }[] = []
      for (let j = 0; j < count; j++) {
        if (i === j) continue
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dz = nodes[i].z - nodes[j].z
        distances.push({ j, d: dx * dx + dy * dy + dz * dz })
      }
      distances.sort((a, b) => a.d - b.d)
      for (let k = 0; k < 3; k++) {
        const j = distances[k].j
        const key = i < j ? `${i}-${j}` : `${j}-${i}`
        if (edgeKeys.has(key)) continue
        edgeKeys.add(key)
        edges.push([i, j])
        adjacency[i].push(edges.length - 1)
        adjacency[j].push(edges.length - 1)
      }
    }

    // Tech labels on an outer shell
    const shell = 1.28
    const orbit = labels.map((text, i) => {
      const y = 1 - ((i + 0.5) / labels.length) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = GOLDEN_ANGLE * i * 1.7
      return { text, x: Math.cos(theta) * r * shell, y: y * shell * 0.92, z: Math.sin(theta) * r * shell }
    })

    const monoFont =
      getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim() || "monospace"

    let width = 0
    let height = 0
    let radius = 0
    let rotY = 0.6
    let rotX = -0.28
    let pointerX = 0
    let pointerY = 0
    let pulses: Pulse[] = []
    let raf = 0
    let visible = true
    let last = performance.now()

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      radius = Math.min(width, height) * 0.3
      if (reduceMotion) draw(0)
    }

    const project = (p: Vec3, sinY: number, cosY: number, sinX: number, cosX: number): Projected => {
      const x1 = p.x * cosY - p.z * sinY
      const z1 = p.x * sinY + p.z * cosY
      const y2 = p.y * cosX - z1 * sinX
      const z2 = p.y * sinX + z1 * cosX
      const s = FOV / (FOV - z2)
      return { sx: width / 2 + x1 * radius * s, sy: height / 2 + y2 * radius * s, z: z2, s }
    }

    const draw = (dt: number) => {
      if (!reduceMotion) {
        rotY += (0.0022 + pointerX * 0.0035) * dt
        const targetX = -0.28 + pointerY * 0.3
        rotX += (targetX - rotX) * 0.04 * dt
      }

      const sinY = Math.sin(rotY)
      const cosY = Math.cos(rotY)
      const sinX = Math.sin(rotX)
      const cosX = Math.cos(rotX)

      ctx.clearRect(0, 0, width, height)

      // Core glow
      const glow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, radius * 1.25)
      glow.addColorStop(0, "rgba(61,242,255,0.10)")
      glow.addColorStop(0.55, "rgba(138,108,255,0.05)")
      glow.addColorStop(1, "rgba(3,5,10,0)")
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      const projected = nodes.map((n) => project(n, sinY, cosY, sinX, cosX))

      // Links
      ctx.lineWidth = 0.7
      for (const [a, b] of edges) {
        const pa = projected[a]
        const pb = projected[b]
        const depth = (pa.z + pb.z) / 2 // -1 (back) .. 1 (front)
        const alpha = 0.03 + ((depth + 1) / 2) ** 2 * 0.26
        ctx.strokeStyle = depth > 0 ? `rgba(61,242,255,${alpha})` : `rgba(138,108,255,${alpha})`
        ctx.beginPath()
        ctx.moveTo(pa.sx, pa.sy)
        ctx.lineTo(pb.sx, pb.sy)
        ctx.stroke()
      }

      // Nodes
      for (const p of projected) {
        const t = (p.z + 1) / 2
        const size = 0.5 + t * 1.5
        ctx.fillStyle = p.z > 0 ? `rgba(200,250,255,${0.25 + t * 0.75})` : `rgba(138,108,255,${0.15 + t * 0.5})`
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Signal pulses travelling along links
      if (!reduceMotion) {
        if (pulses.length < (compact ? 7 : 14) && Math.random() < 0.09 * dt) {
          pulses.push({
            edge: Math.floor(Math.random() * edges.length),
            t: 0,
            speed: 0.015 + Math.random() * 0.025,
            reverse: Math.random() > 0.5,
          })
        }
        const next: Pulse[] = []
        for (const pulse of pulses) {
          pulse.t += pulse.speed * dt
          const [a, b] = edges[pulse.edge]
          const from = projected[pulse.reverse ? b : a]
          const to = projected[pulse.reverse ? a : b]
          const x = from.sx + (to.sx - from.sx) * Math.min(pulse.t, 1)
          const y = from.sy + (to.sy - from.sy) * Math.min(pulse.t, 1)
          const depth = (from.z + to.z) / 2
          if (depth > -0.3) {
            const a1 = 0.35 + depth * 0.5
            ctx.fillStyle = `rgba(198,255,61,${a1 * 0.25})`
            ctx.beginPath()
            ctx.arc(x, y, 5, 0, Math.PI * 2)
            ctx.fill()
            ctx.fillStyle = `rgba(198,255,61,${Math.min(1, a1 + 0.3)})`
            ctx.beginPath()
            ctx.arc(x, y, 1.6, 0, Math.PI * 2)
            ctx.fill()
          }
          if (pulse.t < 1) {
            next.push(pulse)
          } else if (Math.random() < 0.65) {
            // hop to a neighbouring link to make signals "travel"
            const node = pulse.reverse ? a : b
            const options = adjacency[node].filter((e) => e !== pulse.edge)
            if (options.length) {
              const edge = options[Math.floor(Math.random() * options.length)]
              next.push({ edge, t: 0, speed: pulse.speed, reverse: edges[edge][1] === node })
            }
          }
        }
        pulses = next
      }

      // Orbiting labels, back to front
      const labelPoints = orbit
        .map((l) => ({ text: l.text, p: project(l, sinY, cosY, sinX, cosX) }))
        .sort((a, b) => a.p.z - b.p.z)

      ctx.textBaseline = "middle"
      for (const { text, p } of labelPoints) {
        const t = (p.z + shell) / (shell * 2) // 0 back .. 1 front
        if (t < 0.25) continue
        const alpha = Math.min(1, (t - 0.25) * 1.6)
        const size = compact ? 9 + t * 2 : 10 + t * 3
        ctx.font = `500 ${size}px ${monoFont}`
        const front = t > 0.62
        ctx.fillStyle = front ? `rgba(61,242,255,${alpha})` : `rgba(141,158,182,${alpha * 0.8})`
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, front ? 2 : 1.4, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = front ? `rgba(232,240,250,${alpha})` : `rgba(141,158,182,${alpha * 0.75})`
        const textWidth = ctx.measureText(text).width
        const flip = p.sx + 7 + textWidth > width - 4
        ctx.textAlign = flip ? "right" : "left"
        ctx.fillText(text, flip ? p.sx - 7 : p.sx + 7, p.sy)
      }
    }

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 16.67, 3)
      last = now
      draw(dt)
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (reduceMotion || raf || !visible || document.hidden) return
      last = performance.now()
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const onPointer = (e: PointerEvent) => {
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2
      pointerY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onVisibility = () => (document.hidden ? stop() : start())

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) {
        start()
      } else {
        stop()
      }
    })
    io.observe(canvas)

    window.addEventListener("pointermove", onPointer, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)

    resize()
    if (reduceMotion) draw(0)
    else start()

    return () => {
      stop()
      resizeObserver.disconnect()
      io.disconnect()
      window.removeEventListener("pointermove", onPointer)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [labels])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
