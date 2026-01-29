import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function WrittenTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://cdn.trustindex.io/loader.js?fee1b6c6368a302f5546ce204e7'
    script.async = true
    script.defer = true
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-left text-gray-900 mb-10 max-w-3xl font-bold"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Pacientes vivendo vidas mais felizes e saudáveis
        </motion.h2>
        <div className="w-24 h-1 mb-10" style={{ backgroundColor: '#65DFA8' }} />

        {/* Trustindex Widget Container */}
        <div ref={containerRef} className="trustindex-widget-container" />
      </div>
    </section>
  )
}

export default WrittenTestimonials

