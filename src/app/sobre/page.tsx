export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Sobre Nós</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nossa História
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Desenvolvendo soluções tecnológicas que transformam negócios
          </p>
        </div>

        {/* Content */}
        <div className="mt-12">
          <div className="space-y-12">
            {/* Mission Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                  <p className="text-gray-600 text-lg">
                    Desenvolver soluções tecnológicas inovadoras que simplifiquem e otimizem os processos de nossos clientes, 
                    contribuindo para o crescimento e sucesso de seus negócios.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400">[Imagem Missão]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">Qualidade</h4>
                  <p className="mt-2 text-gray-600">
                    Comprometimento com a excelência em todos os nossos produtos e serviços.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">Inovação</h4>
                  <p className="mt-2 text-gray-600">
                    Busca constante por soluções criativas e tecnologias avançadas.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">Cliente no Centro</h4>
                  <p className="mt-2 text-gray-600">
                    Foco total na satisfação e sucesso de nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossa Equipe</h3>
              <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
                Contamos com uma equipe altamente qualificada de desenvolvedores, designers e especialistas em negócios, 
                comprometidos em criar as melhores soluções para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
