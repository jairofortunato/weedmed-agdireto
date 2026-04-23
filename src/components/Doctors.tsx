import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { buildUrlWithUTMs } from '../utils/utm-tracker'

const doctors = [
  {
    id: 1,
    name: 'Dr. Luís Augusto Rocha',
    crm: 'CRM 35309-SC',
    experience: '+500 atendimentos',
    focus: 'Ansiedade e insônia',
    description: 'Atendimento humanizado e seguro para entender seu caso com calma.',
    image: '/rocha.webp',
  },
  {
    id: 2,
    name: 'Dr. Rafael Brogiollo',
    crm: 'CRM 41673-RS',
    experience: '+1.200 atendimentos',
    focus: 'Ansiedade, insônia e estresse',
    description: 'Atendimento acolhedor, objetivo e baseado em ciência.',
    image: '/doctor2.webp',
  },
  {
    id: 3,
    name: 'Dra. Giullia Guedes',
    crm: 'CRM 34723-PE',
    experience: '+800 atendimentos',
    focus: 'Saúde emocional feminina',
    description: 'Escuta ativa, acolhimento e segurança para a saúde da mulher.',
    image: '/doctor3.webp',
  },
]

const features = [
  { title: 'Profissionais certificados', description: 'Milhares de pacientes atendidos' },
  { title: 'Baseado em evidências', description: 'Protocolos atualizados pela ciência' },
  { title: 'Foco em canabinologia', description: 'Medicina canabinóide como especialidade' },
]

function DoctorCard({ doctor }: { doctor: typeof doctors[0] }) {
  return (
    <div className="w-full bg-white flex-shrink-0">
      {/* Photo */}
      <div className="w-full overflow-hidden" style={{ height: '280px' }}>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 10%' }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-gray-800 text-sm">{doctor.name}</h3>
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#2D1B69">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <p className="text-xs text-gray-500 mb-2">{doctor.crm}</p>
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#EDE9F8', color: '#2D1B69' }}>
            {doctor.experience}
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#E0F7F1', color: '#00B383' }}>
            {doctor.focus}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{doctor.description}</p>
      </div>
    </div>
  )
}

function Doctors() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % doctors.length)
    }, 3500)
  }

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    startTimer()
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const goTo = (i: number) => {
    setCurrent(i)
    resetTimer()
  }

  return (
    <section id="especialistas" className="py-16 md:py-20 overflow-x-hidden" style={{ backgroundColor: '#EDE9F8' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#00B383' }}>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-[2.6rem] mb-4 font-bold leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
            >
              Médicos especializados<br className="hidden sm:block" /> em canabinologia
            </h2>
            <div className="w-14 h-1 mb-5 rounded-full" style={{ backgroundColor: '#00B383' }} />

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Profissionais certificados com experiência real em tratamentos com cannabis. Atendimento online, seguro e personalizado.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ backgroundColor: '#2D1B69' }}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={buildUrlWithUTMs("https://weedmed.online/avaliacao")}
              onClick={() => {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({ event: 'cta_click', cta_location: 'doctors' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-white rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200"
              style={{ backgroundColor: '#00B383' }}
            >
              Iniciar tratamento
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right — Carousel */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Card + arrows wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-md w-full">
              {/* Track */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)`, width: '100%' }}
              >
                {doctors.map((doctor) => (
                  <div key={doctor.id} style={{ flex: '0 0 100%', minWidth: 0 }}>
                    <DoctorCard doctor={doctor} />
                  </div>
                ))}
              </div>

              {/* Arrows overlaid on card */}
              <button
                onClick={() => goTo((current - 1 + doctors.length) % doctors.length)}
                className="absolute left-2 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors z-10"
                aria-label="Anterior"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => goTo((current + 1) % doctors.length)}
                className="absolute right-2 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors z-10"
                aria-label="Próximo"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {doctors.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: current === i ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: current === i ? '#2D1B69' : '#D1C4E9',
                  }}
                  aria-label={`Ver médico ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Doctors
