import Image from 'next/image'
import Link from 'next/link'
import AnimatedStats from '@/components/AnimatedStats'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Transforme seu Negócio com Nossas Soluções
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Sistemas personalizados que impulsionam sua produtividade e resultados
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Solicite uma Demonstração
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Números e Estatísticas */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats />
        </div>
      </section>

      {/* Sistemas em Destaque */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Sistemas em Destaque
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Conheça algumas das nossas soluções que estão transformando empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sistema 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Sistema de Gestão Empresarial
                </h3>
                <p className="text-secondary-600 mb-4">
                  Controle completo das operações da sua empresa em uma única plataforma.
                </p>
                <Link
                  href="/sistemas#gestao"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sistema 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  E-commerce Personalizado
                </h3>
                <p className="text-secondary-600 mb-4">
                  Plataforma completa de vendas online integrada com seu estoque.
                </p>
                <Link
                  href="/sistemas#ecommerce"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sistema 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Automação de Processos
                </h3>
                <p className="text-secondary-600 mb-4">
                  Automatize tarefas repetitivas e aumente a produtividade.
                </p>
                <Link
                  href="/sistemas#automacao"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Por que nos escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápida Implementação</h3>
              <p className="text-gray-600">
                Sistemas prontos para uso em poucos dias, com migração de dados incluída.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalização</h3>
              <p className="text-gray-600">
                Adaptamos nossos sistemas às necessidades específicas do seu negócio.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">
                Equipe técnica sempre disponível para ajudar quando você precisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato e descubra como nossos sistemas podem ajudar sua empresa.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contato"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Fale Conosco
            </Link>
            <Link 
              href="/sistemas"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Ver Sistemas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
