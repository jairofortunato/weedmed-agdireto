import { useState, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { buildUrlWithUTMs } from '../utils/utm-tracker'

interface PopupContent {
  intro: string
  boldFact: string
  outro: string
  source: string
}

interface Problem {
  label: string
  image: string
  tagline: string
  popup: PopupContent
}

const problems: Problem[] = [
  {
    label: 'Dor Crônica',
    image: '/icon_pain.webp',
    tagline: 'Alívio para dores que analgésicos convencionais não controlam.',
    popup: {
      intro: 'Canabinoides como CBD e THC atuam nos receptores CB1 e CB2 do sistema endocanabinoide, modulando a transmissão da dor e reduzindo processos inflamatórios. Estudos clínicos mostram ',
      boldFact: 'redução de 30 a 50% na intensidade da dor crônica',
      outro: ' em pacientes que não responderam bem a analgésicos convencionais.',
      source: 'Aviram & Samuelly-Leichtag, 2017. Journal of Pain Research.',
    },
  },
  {
    label: 'Fibromialgia',
    image: '/icon_fibro.webp',
    tagline: 'Dor difusa, fadiga e sono prejudicado com resposta clínica comprovada.',
    popup: {
      intro: 'Pacientes com fibromialgia apresentam deficiência no sistema endocanabinoide, o que explica a eficácia dos canabinoides nesta condição. Ensaios clínicos demonstraram ',
      boldFact: 'melhora significativa na dor generalizada, qualidade do sono e bem-estar geral',
      outro: ' após tratamento com cannabis medicinal supervisionado.',
      source: 'Boehnke et al., 2019. Journal of Clinical Rheumatology.',
    },
  },
  {
    label: 'Ansiedade',
    image: '/icon_anxiety.webp',
    tagline: 'O CBD age diretamente no circuito cerebral do medo e do estresse.',
    popup: {
      intro: 'O CBD modula receptores de serotonina (5-HT1A), reduzindo a resposta ao medo e ao estresse crônico. Um estudo com 72 adultos encontrou ',
      boldFact: 'redução de ansiedade em 79% dos participantes já no primeiro mês de uso',
      outro: ', sem os efeitos colaterais dos ansiolíticos tradicionais.',
      source: 'Shannon et al., 2019. The Permanente Journal.',
    },
  },
  {
    label: 'Insônia',
    image: '/icon_sleep.webp',
    tagline: 'Adormecer mais rápido, acordar menos e dormir mais fundo.',
    popup: {
      intro: 'CBD e CBN regulam o ciclo circadiano e aumentam o tempo de sono profundo (fase NREM). Estudos mostram ',
      boldFact: 'redução no tempo para adormecer e diminuição nos despertares noturnos',
      outro: ', sem o risco de dependência dos soporíferos tradicionais.',
      source: 'Babson et al., 2017. Current Psychiatry Reports.',
    },
  },
  {
    label: 'TDAH',
    image: '/icon_tdah.webp',
    tagline: 'Foco e controle da impulsividade com cannabis medicinal supervisionada.',
    popup: {
      intro: 'A cannabis medicinal atua no sistema dopaminérgico e pode ',
      boldFact: 'melhorar a atenção, reduzir hiperatividade e impulsividade em adultos com TDAH',
      outro: '. Pacientes relatam maior concentração e qualidade de vida em comparação ao tratamento convencional isolado.',
      source: 'Cooper et al., 2017. European Addiction Research.',
    },
  },
  {
    label: 'Epilepsia',
    image: '/icon_depression.webp',
    tagline: 'O canabinoide com maior evidência clínica e aprovação regulatória.',
    popup: {
      intro: 'O CBD é o único canabinoide aprovado pela FDA para epilepsia refratária (Epidiolex). Estudos randomizados demonstraram ',
      boldFact: 'redução de até 50% na frequência de crises convulsivas',
      outro: ' em pacientes com síndrome de Dravet e Lennox-Gastaut, incluindo crianças.',
      source: 'Devinsky et al., 2017. New England Journal of Medicine.',
    },
  },
]

export default function ProblemPicker() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  }

  // Close on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const active = activeIndex !== null ? problems[activeIndex] : null

  return (
    <>
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">

          {/* Header */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
            >
              Para quem é?
            </h2>
            <p
              className="text-gray-500 text-base"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Cannabis medicinal é prescrita por médicos especializados para diversas condições.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {problems.map((problem, index) => (
              <motion.button
                key={problem.label}
                onClick={() => setActiveIndex(index)}
                className="group flex items-center md:items-start gap-2 md:gap-3 px-3 py-4 md:px-5 md:py-5 rounded-2xl border border-gray-200 bg-white hover:border-[#00B383] hover:bg-[#EDE9F8] transition-all duration-250 shadow-sm hover:shadow-md text-left w-full"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 md:mt-0.5">
                  <img
                    src={problem.image}
                    alt={problem.label}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <span
                    className="block text-xs md:text-base font-semibold text-gray-700 group-hover:text-[#2D1B69] transition-colors duration-200 leading-tight"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {problem.label}
                  </span>
                  <span
                    className="hidden md:block text-xs text-gray-400 group-hover:text-[#7c3aed]/70 transition-colors duration-200 leading-snug mt-0.5"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {problem.tagline}
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#00B383] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 md:mt-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            ))}
          </motion.div>

          {/* Nota rodapé */}
          <motion.p
            className="mt-6 text-sm text-gray-400"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Tem dúvida se é para você?{' '}
            <button
              className="open-chat underline hover:text-[#2D1B69] transition-colors font-medium"
            >
              Converse com nossa equipe →
            </button>
          </motion.p>

        </div>
      </section>

      {/* Popup modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Card */}
            <motion.div
              className="relative w-full max-w-md bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Fechar"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EDE9F8' }}>
                  <img src={active.image} alt={active.label} className="w-7 h-7 object-contain" loading="lazy" />
                </div>
                <h3
                  className="text-xl font-bold leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
                >
                  {active.label}
                </h3>
              </div>

              {/* Body */}
              <p
                className="text-sm md:text-base text-gray-600 leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {active.popup.intro}
                <strong className="text-gray-900 font-semibold">{active.popup.boldFact}</strong>
                {active.popup.outro}
              </p>

              {/* Source */}
              <p
                className="text-xs text-gray-400 italic mb-6"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Fonte: {active.popup.source}
              </p>

              {/* CTA */}
              <a
                href={buildUrlWithUTMs("https://weedmed.online/avaliacao")}
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || []
                  ;(window as any).dataLayer.push({
                    event: 'cta_click',
                    cta_location: 'problem_popup',
                    cta_label: active.label,
                  })
                }}
                className="inline-flex items-center justify-center w-full px-5 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Iniciar tratamento →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
