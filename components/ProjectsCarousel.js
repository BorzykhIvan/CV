import React, { useEffect, useRef, useState } from 'react'

export default function ProjectsCarousel({ projects = [] }) {
  const [active, setActive] = useState(0)
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    lastX: 0,
    hasMoved: false
  })

  useEffect(() => {
    if (projects.length <= 1) return
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % projects.length)
    }, 5500)
    return () => clearInterval(id)
  }, [projects.length])

  if (!projects.length) return null

  const goTo = index => {
    setActive((index + projects.length) % projects.length)
  }

  const handleMouseDown = e => {
    // Включаем drag ТОЛЬКО при зажатой ПКМ
    if (e.button !== 0) return
    e.preventDefault()

    dragState.current = {
      isDragging: true,
      startX: e.clientX,
      lastX: e.clientX,
      hasMoved: false
    }
  }

  const handleMouseMove = e => {
    if (!dragState.current.isDragging) return
    const dx = e.clientX - dragState.current.lastX
    if (Math.abs(e.clientX - dragState.current.startX) > 8) {
      dragState.current.hasMoved = true
    }
    if (Math.abs(dx) > 30) {
      if (dx < 0) {
        setActive(prev => (prev + 1) % projects.length)
      } else if (dx > 0) {
        setActive(prev => (prev - 1 + projects.length) % projects.length)
      }
      dragState.current.lastX = e.clientX
    }
  }

  const handleMouseUp = () => {
    dragState.current.isDragging = false
  }

  const handleWheel = e => {
    // Плавный скролл колёсиком для смены карточек
    if (Math.abs(e.deltaY) + Math.abs(e.deltaX) < 5) return
    if (e.deltaY > 0 || e.deltaX > 0) {
      setActive(prev => (prev + 1) % projects.length)
    } else if (e.deltaY < 0 || e.deltaX < 0) {
      setActive(prev => (prev - 1 + projects.length) % projects.length)
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-gray-400">
          {active + 1} / {projects.length}
        </div>
        <div className="space-x-2">
          <button
            onClick={() => goTo(active - 1)}
            className="px-3 py-1 rounded-full border border-gray-600 text-sm hover:bg-gray-700 transition"
          >
            Prev
          </button>
          <button
            onClick={() => goTo(active + 1)}
            className="px-3 py-1 rounded-full border border-gray-600 text-sm hover:bg-gray-700 transition"
          >
            Next
          </button>
        </div>
      </div>

      <div
        className="relative h-72 overflow-visible select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onContextMenu={e => e.preventDefault()}
        onWheel={handleWheel}
      >
        <div className="absolute inset-0 flex items-center justify-center perspective-1000">
          {projects.map((project, index) => {
            const offset = index - active
            const direction = offset === 0 ? 0 : offset > 0 ? 1 : -1
            const abs = Math.abs(offset)
            const scale = abs === 0 ? 1 : 0.85
            const translateX = offset * 155
            const rotateY = direction * Math.min(abs * 10, 24)
            const zIndex = projects.length - abs
            const opacity = abs > 2 ? 0 : 1

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (dragState.current.hasMoved) return
                  window.open(project.demo || project.github, '_blank')
                }}
                className="absolute w-64 h-64 rounded-xl overflow-hidden bg-gray-800/80 shadow-xl border border-gray-700/70 hover:border-indigo-400/80 transition-all duration-500"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  transformOrigin: 'center center',
                  zIndex,
                  opacity,
                  cursor: 'pointer'
                }}
              >
                <div className="h-32 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-left">
                  <div className="text-sm font-semibold text-gray-50 line-clamp-1">
                    {project.title}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {project.subtitle}
                  </div>
                  <div className="mt-3 flex gap-2 text-xs">
                    {project.demo !== '#' && (
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/40">
                        Live demo
                      </span>
                    )}
                    {project.github !== '#' && (
                      <span className="px-2 py-0.5 rounded-full bg-gray-700/60 text-gray-200 border border-gray-500/60">
                        GitHub
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all ${index === active ? 'w-6 bg-indigo-400' : 'w-2 bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  )
}

