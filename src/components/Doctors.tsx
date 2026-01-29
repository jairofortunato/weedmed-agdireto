const doctors = [
  {
    id: 1,
    name: 'Dr. Luís Augusto Rocha',
    role: 'Especialista em tratamentos com cannabis medicinal',
    crm: 'CRM 35309-SC',
    experience: '+500 atendimentos online',
    focus: 'Experiência em ansiedade e insônia',
    price: 'R$ 100',
    description: 'Atendimento humanizado e seguro para entender seu caso com calma.',
    image: '/rocha.webp',
  },
  {
    id: 2,
    name: 'Dr. Rafael Brogiollo',
    role: 'Especialista em tratamentos com cannabis medicinal',
    crm: 'CRM 41673-RS',
    experience: '+1.200 atendimentos online',
    focus: 'Foco em ansiedade, insônia e estresse',
    price: 'R$ 150',
    description: 'Atendimento acolhedor, objetivo e baseado em ciência.',
    image: '/doctor2.webp',
  },
  {
    id: 3,
    name: 'Dra. Giullia Guedes',
    role: 'Especialista em tratamentos com cannabis medicinal',
    crm: 'CRM 34723-PE',
    experience: '+800 atendimentos online',
    focus: 'Foco em saúde emocional feminina',
    price: 'R$ 220',
    description: 'Perfeita para quem busca acolhimento feminino, escuta ativa e segurança.',
    image: '/doctor3.webp',
  },
]

const features = [
  {
    title: 'Profissionais com experiência',
    description: 'Milhares de pacientes atendidos',
  },
  {
    title: 'Baseado em ciência',
    description: 'Tratamentos comprovados e atualizados',
  },
  {
    title: 'Especialistas em cannabis',
    description: 'Foco total em medicina canabinóide',
  },
]

function Doctors() {
  return (
    <section id="especialistas" className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: '#65DFA8' }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            {/* Title */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Experiência em tratamentos com cannabis medicinal
            </h2>
            <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#65DFA8' }} />

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Profissionais certificados e experientes em tratamentos com cannabis. Atendimento online, seguro e personalizado para o seu caso.
            </p>

            {/* Features List */}
            <div className="space-y-5 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ backgroundColor: '#523AC5' }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="open-chat inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
              style={{
                background: 'linear-gradient(135deg, #523AC5 0%, #7c5ce7 100%)',
                boxShadow: '0 10px 30px rgba(82, 58, 197, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3d2a8f 0%, #523AC5 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #523AC5 0%, #7c5ce7 100%)';
              }}
            >
              Comece agora
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Content - Doctor Cards */}
          <div className="w-screen lg:w-auto -ml-6 sm:-ml-8 lg:ml-0 overflow-x-auto">
            <div className="flex gap-6 pb-4 pl-6 sm:pl-8 lg:pl-0 pr-6 sm:pr-8 lg:pr-0">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="w-72 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Doctor Photo */}
                  <div className="w-full h-56 bg-gray-100 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-800">{doctor.name}</h3>
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="#523AC5"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{doctor.role}</p>
                    <p className="text-xs text-gray-500 mb-3">{doctor.crm}</p>

                    <div className="text-xs text-gray-600 mb-3">
                      <span className="font-medium">{doctor.experience}</span>
                      <span className="mx-1">•</span>
                      <span>{doctor.focus}</span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {doctor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctors
