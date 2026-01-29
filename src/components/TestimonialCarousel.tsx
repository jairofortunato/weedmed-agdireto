import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TestimonialVideo {
  id: string
  name: string
  thumbnail: string
}

// Fullscreen Video Modal Component
function VideoModal({ 
  videoId, 
  onClose 
}: { 
  videoId: string
  onClose: () => void 
}) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button - Very Visible */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          aria-label="Close video"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Video Container */}
        <motion.div 
          className="relative w-full max-w-5xl mx-4 aspect-video"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full rounded-lg"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const column1Videos: TestimonialVideo[] = [
  { id: 'J1b9w2OkTpM', thumbnail: '/testimonial1.webp', name: 'Paciente' },
  { id: 'ysYHqOkcwCE', thumbnail: '/testimonial2.webp', name: 'Paciente' },
  { id: 'A1WLqWf4I0o', thumbnail: '/testimonial3.webp', name: 'Paciente' },
  { id: 'tyZ3dicgDa4', thumbnail: '/testimonial4.webp', name: 'Paciente' },
  { id: 'qF07_9FWHjY', thumbnail: '/testimonial13.webp', name: 'Paciente' },
]

const column2Videos: TestimonialVideo[] = [
  { id: 'Xyc06qDqZMc', thumbnail: '/testimonial5.webp', name: 'Paciente' },
  { id: 'w7_VFg6unaA', thumbnail: '/testimonial6.webp', name: 'Paciente' },
  { id: 'pU1x4a4r6KY', thumbnail: '/testimonial7.webp', name: 'Paciente' },
  { id: 'aTpYN2_N4-E', thumbnail: '/testimonial8.webp', name: 'Paciente' },
]

const column3Videos: TestimonialVideo[] = [
  { id: 'ey90bGRljDw', thumbnail: '/testimonial9.webp', name: 'Paciente' },
  { id: 'PtcEGQ0DYXk', thumbnail: '/testimonial10.webp', name: 'Paciente' },
  { id: 'sbHSluY05vA', thumbnail: '/testimonial11.webp', name: 'Paciente' },
  { id: 'sbHSluY05vA', thumbnail: '/testimonial12.webp', name: 'Paciente' },
]

function VideoCard({ 
  video, 
  onPlay 
}: { 
  video: TestimonialVideo
  onPlay: (videoId: string) => void
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4 group">
      <img
        src={video.thumbnail}
        alt={video.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Play Button Overlay */}
      <div 
        className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center cursor-pointer"
        onClick={() => onPlay(video.id)}
      >
        <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Name badge */}
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 z-10">
        <span className="text-sm font-medium text-gray-900">{video.name}</span>
        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}

function AnimatedColumn({
  videos,
  direction,
  isPaused,
  onPlay
}: {
  videos: TestimonialVideo[]
  direction: 'up' | 'down'
  isPaused: boolean
  onPlay: (videoId: string) => void
}) {
  const columnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const column = columnRef.current
    if (!column || isPaused) return

    let animationId: number
    let position = direction === 'down' ? 0 : -column.scrollHeight / 2

    const animate = () => {
      if (direction === 'down') {
        position += 0.5
        if (position >= column.scrollHeight / 2) {
          position = 0
        }
      } else {
        position -= 0.5
        if (position <= -column.scrollHeight / 2) {
          position = 0
        }
      }
      column.style.transform = `translateY(${direction === 'down' ? -position : position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [direction, isPaused])

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...videos, ...videos]

  return (
    <div className="overflow-hidden h-[500px] md:h-[600px]">
      <div ref={columnRef} className="flex flex-col">
        {duplicatedVideos.map((video, index) => (
          <VideoCard key={`${video.id}-${index}`} video={video} onPlay={onPlay} />
        ))}
      </div>
    </div>
  )
}

function TestimonialCarousel() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null)

  const handleVideoPlay = (videoId: string) => {
    setSelectedVideoId(videoId)
  }

  const handleCloseModal = () => {
    setSelectedVideoId(null)
  }

  return (
    <>
      {/* Fullscreen Video Modal */}
      {selectedVideoId && (
        <VideoModal videoId={selectedVideoId} onClose={handleCloseModal} />
      )}

      <section id="depoimentos" className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Stats - Mobile Only (above videos) */}
            <motion.div
              className="lg:hidden text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">+85% relatam melhorias significativas nas primeiras semenas</span>
              </div>
              <h2
                className="text-6xl md:text-7xl mb-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#523AC5' }}
              >
                +3.000
              </h2>
              <p className="text-xl md:text-2xl" style={{ color: '#523AC5' }}>pacientes e contando</p>
            </motion.div>

            {/* Left - Video Columns */}
            <motion.div
              className="relative flex gap-4 flex-1 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Column 1 - Animates Down */}
              <div className="flex-1">
                <AnimatedColumn videos={column1Videos} direction="down" isPaused={false} onPlay={handleVideoPlay} />
              </div>
              {/* Column 2 - Animates Up */}
              <div className="flex-1">
                <AnimatedColumn videos={column2Videos} direction="up" isPaused={false} onPlay={handleVideoPlay} />
              </div>
              {/* Column 3 - Animates Down */}
              <div className="flex-1 hidden md:block">
                <AnimatedColumn videos={column3Videos} direction="down" isPaused={false} onPlay={handleVideoPlay} />
              </div>
            </motion.div>

            {/* Testimonial Quote - Mobile Only (below videos) */}
            <motion.div
              className="lg:hidden text-left border-t border-gray-200 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-gray-500 mb-3">Ouça nossos pacientes:</p>
              <blockquote className="text-lg text-gray-800 leading-relaxed mb-4">
                Superei enxaquecas fortes e recuperei minha alegria com o CBD."
              </blockquote>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">Márcia</span>
                <span className="text-gray-500">Paciente</span>
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>

            {/* Right - Stats and Quote (Desktop Only) */}
            <motion.div
              className="hidden lg:flex lg:w-[400px] flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Stats */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">87% relatam melhora nas dores</span>
                </div>
                <motion.h2
                  className="text-6xl md:text-7xl lg:text-8xl mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#523AC5' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  +3.000
                </motion.h2>
                <p className="text-xl md:text-2xl" style={{ color: '#523AC5' }}>pacientes e contando</p>
              </motion.div>

              {/* Testimonial Quote */}
              <motion.div
                className="border-t border-gray-300 pt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-sm text-gray-500 mb-3">Ouça nossos pacientes:</p>
                <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                  "Márcia superou enxaquecas severas e recuperou sua alegria e rotina profissional com o CBD."
                </blockquote>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Márcia</span>
                  <span className="text-gray-500">Paciente</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialCarousel

