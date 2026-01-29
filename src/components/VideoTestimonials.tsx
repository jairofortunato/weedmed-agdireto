
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const videos = [
    { id: 'Xyc06qDqZMc', thumbnail: '/testimonial5.webp', specialist: 'Márcia superou enxaquecas severas e recuperou sua alegria e rotina profissional com o CBD.' },

  { id: 'aTpYN2_N4-E', thumbnail: '/testimonial8.webp', specialist: 'Sandro zerou as crises de convulsão e melhorou a qualidade do sono com o tratamento.' },
  { id: 'ey90bGRljDw', thumbnail: '/testimonial9.webp', specialist: 'Paciente supera depressão e síndrome do pânico com suporte total na importação do tratamento.' },
  { id: 'w7_VFg6unaA', thumbnail: '/testimonial6.webp', specialist: 'Paciente detalha o suporte humanizado e os primeiros resultados de sua jornada com a cannabis.' },
  { id: 'pU1x4a4r6KY', thumbnail: '/testimonial7.webp', specialist: 'Mãe conta como o CBD trouxe tranquilidade e bons resultados para o TDH e TOD da filha.' },
    { id: 'A1WLqWf4I0o', thumbnail: '/testimonial3.webp', specialist: 'Airo: jornada com cannabis e a importância do suporte humanizado.' },
          { id: 'J1b9w2OkTpM', thumbnail: '/testimonial1.webp', specialist: 'Jorge, 66 anos: sono restaurado e mais energia com cannabis medicinal.' },

    { id: 'tyZ3dicgDa4', thumbnail: '/testimonial4.webp', specialist: 'Paciente eliminou dores articulares e encontrou equilíbrio na perimenopausa.' },
      { id: 'qF07_9FWHjY', thumbnail: '/testimonial13.webp', specialist: 'Filha relata como o CBD devolveu mobilidade e calma para a mãe com Parkinson e demência.' },

  { id: 'PtcEGQ0DYXk', thumbnail: '/testimonial10.webp', specialist: 'Mãe destaca rapidez e facilidade no processo para tratar a fibromialgia da filha.' },
  { id: 'sbHSluY05vA', thumbnail: '/testimonial11.webp', specialist: 'De bengala à redução de 80% das dores: o impacto do CBD na fibromialgia e problemas de coluna.' },
  { id: 'sbHSluY05vA', thumbnail: '/testimonial12.webp', specialist: 'Experiência positiva em família: Joana relata segurança e agilidade na entrega do medicamento.' },
]

function VideoCard({ videoId, thumbnail, specialist }: { videoId: string; thumbnail: string; specialist: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <iframe
        className="w-full h-full rounded-3xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  }

  return (
    <div
      className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full h-full object-cover object-[center_20%] scale-110"
      />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      {/* Specialist Name Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12">
        <p className="text-white text-lg font-semibold leading-snug">{specialist}</p>
      </div>
    </div>
  )
}

function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640
    }
    return false
  })

  // Triple the videos for infinite scroll effect
  const tripleVideos = [...videos, ...videos, ...videos]

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Start with "Paciente eliminou" and "Filha relata" centered (index 2 and 3)
    const cardWidth = 240 + 20 // w-60 (240px) + gap-5 (20px)
    const singleSetWidth = cardWidth * videos.length
    const containerCenter = container.clientWidth / 2
    // Center point between cards at index 2 and 3: card2_start + card_width + gap/2
    const centerBetweenCards = singleSetWidth + (cardWidth * 2) + 240 + 10
    container.scrollLeft = centerBetweenCards - containerCenter

    const handleScroll = () => {
      if (isScrolling) return

      const scrollLeft = container.scrollLeft
      const setWidth = cardWidth * videos.length

      // If we've scrolled past the second set, jump back to the first set
      if (scrollLeft >= setWidth * 2) {
        setIsScrolling(true)
        container.scrollLeft = scrollLeft - setWidth
        setTimeout(() => setIsScrolling(false), 50)
      }
      // If we've scrolled before the first set, jump to the second set
      else if (scrollLeft <= 0) {
        setIsScrolling(true)
        container.scrollLeft = scrollLeft + setWidth
        setTimeout(() => setIsScrolling(false), 50)
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [isScrolling])

  return (
    <section className="bg-white overflow-hidden relative">
      {/* Spacer */}
      <div className="pt-16 md:pt-20" />

      {/* Carousel - infinite scroll */}
      <motion.div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-6 sm:px-8 lg:px-12 pb-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {tripleVideos.map((video, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-60 h-[400px] rounded-3xl overflow-hidden relative"
            initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{
              duration: isMobile ? 0 : 0.5,
              delay: isMobile ? 0 : (index % videos.length) * 0.05,
              scale: { duration: 0.25, ease: "easeOut" }
            }}
          >
            <VideoCard videoId={video.id} thumbnail={video.thumbnail} specialist={video.specialist} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default VideoTestimonials

