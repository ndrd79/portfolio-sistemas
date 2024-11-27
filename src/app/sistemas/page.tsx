export default function Sistemas() {
  const sistemas = [
    {
      id: 1,
      nome: "Sistema de Agendamento",
      descricao: "Gerencie compromissos, motoristas e veículos com eficiência. Controle total sobre sua frota e agenda.",
      recursos: ["Gestão de Motoristas", "Controle de Veículos", "Agendamentos", "Relatórios"],
      imagem: "/agendamento.png"
    },
    {
      id: 2,
      nome: "PDV - Ponto de Venda",
      descricao: "Sistema completo para gerenciamento de vendas, estoque e clientes. Ideal para comércios de todos os tamanhos.",
      recursos: ["Controle de Vendas", "Gestão de Estoque", "Cadastro de Clientes", "Relatórios Financeiros"],
      imagem: "/pdv.png"
    },
    {
      id: 3,
      nome: "CRM",
      descricao: "Gerencie seus clientes e vendas em uma única plataforma. Aumente suas conversões e fidelização.",
      recursos: ["Gestão de Leads", "Pipeline de Vendas", "Automação de Marketing", "Análise de Dados"],
      imagem: "/crm.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Catálogo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nossos Sistemas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Escolha a solução ideal para seu negócio
          </p>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {sistemas.map((sistema) => (
            <div
              key={sistema.id}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {sistema.nome}
                    </h3>
                    <p className="text-gray-500 text-lg mb-6">
                      {sistema.descricao}
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Principais Recursos:
                      </h4>
                      <ul className="space-y-2">
                        {sistema.recursos.map((recurso, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg
                              className="h-5 w-5 text-blue-500 mr-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            {recurso}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/contato"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Solicitar Demonstração
                      </a>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-0">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-gray-400">
                        [Imagem do Sistema]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
