"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [offset, setOffset] = useState(12) // default for 24px

  useEffect(() => {
    const cursor = cursorRef.current
    if (cursor) {
      const size = cursor.offsetWidth
      setOffset(size / 2) // center based on actual size
    }

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05 // smoother transition
      currentY += (mouseY - currentY) * 0.05
      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX - offset
      mouseY = e.clientY - offset
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [offset])

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-[9999] will-change-transform"
      />
    </>
  )
}
