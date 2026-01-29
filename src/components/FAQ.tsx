import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Cannabis medicinal é legal no Brasil?',
    answer:
      'Sim. O uso medicinal é permitido com prescrição médica e autorização da Anvisa.',
  },
  {
    question: 'A consulta é realmente online?',
    answer:
      'Sim. Você conversa com o médico por vídeo, com segurança e privacidade.',
  },
  {
    question: 'Preciso já ter receita?',
    answer:
      'Não. O médico avalia seu caso e orienta se o tratamento é indicado.',
  },
  {
    question: 'E se eu não me adaptar ao tratamento?',
    answer:
      'Você conta com acompanhamento farmacêutico e suporte humano para ajustes.',
  },
  {
    question: 'Em quanto tempo sinto melhora?',
    answer:
      'Muitos pacientes relatam melhora gradual do sono, da ansiedade e do bem-estar nas primeiras semanas. Cada organismo responde de um jeito, mas nosso acompanhamento ajuda no processo.',
  },
  {
    question: 'Terei suporte depois da consulta?',
    answer:
      'Sim. Você conta com suporte humano da WeedMed para tirar dúvidas sobre o tratamento, uso correto e próximos passos. Aqui você não é só atendido, você é acompanhado.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-left mb-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Perguntas frequentes
          </h2>
          <div className="w-24 h-1 mt-3" style={{ backgroundColor: '#65DFA8' }} />
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left group cursor-pointer"
              >
                <span
                  className="text-lg md:text-xl font-medium text-gray-800 pr-8"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {openIndex === index ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    )}
                  </svg>
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openIndex === index
                    ? 'grid-rows-[1fr] opacity-100 pb-6'
                    : 'grid-rows-[0fr] opacity-0 pb-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
