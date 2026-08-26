export const brand = {
  name: 'Cleber Pavin',
  signature: 'Tecnologia & Desenvolvimento',
  position: 'Web • Programação • Automação • Sistemas',
  phoneDisplay: '(11) 97055-2867',
  whatsapp: '5511970552867',
}

export const whatsappUrl = (message = 'Olá, Cleber! Quero conversar sobre um projeto.') =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`

export type Project = {
  slug: string
  name: string
  segment: string
  category: string
  solutionType: string
  description: string
  overview: string
  challenge: string
  solution: string
  features: string[]
  technologies: string[]
  featured?: boolean
  cover?: string
  coverAlt?: string
  gallery?: { src: string; alt: string; mobile?: boolean }[]
  demoUrl?: string
  notice?: string
}

export const projects: Project[] = [
  {
    slug: 'barber-noir', name: 'Barber Noir', segment: 'Barbearias', category: 'Sistemas', solutionType: 'Sistema completo de gestão',
    description: 'Site, agendamento e operação da barbearia reunidos em uma experiência full-stack.',
    overview: 'Uma aplicação demonstrativa completa que conecta a experiência pública da barbearia à gestão diária da equipe.',
    challenge: 'Organizar agendamentos, profissionais, clientes e rotinas financeiras sem separar a presença digital da operação.',
    solution: 'Uma plataforma responsiva com acesso por perfil, regras de negócio no servidor e áreas adequadas para clientes, barbeiros e administração.',
    features: ['Agendamento e agenda', 'Clientes, equipe e perfis', 'Financeiro e comissões', 'Configurações operacionais'],
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Cloudflare Workers', 'Vitest', 'Playwright'],
    featured: true, cover: '/projects/barber-noir-home.jpg', coverAlt: 'Página pública real do sistema Barber Noir',
    gallery: [
      { src: '/projects/barber-noir-dashboard.jpg', alt: 'Dashboard administrativo real do Barber Noir' },
      { src: '/projects/barber-noir-agenda.jpg', alt: 'Agenda operacional real do Barber Noir' },
      { src: '/projects/barber-noir-financeiro.jpg', alt: 'Visão financeira demonstrativa do Barber Noir' },
    ],
    demoUrl: 'https://barber-noir.jimmykratos-cp.workers.dev/',
  },
  {
    slug: 'nova-imports', name: 'NOVA Imports', segment: 'Comércio', category: 'E-commerce', solutionType: 'E-commerce demonstrativo',
    description: 'Storefront responsivo com jornada de compra completa e painel administrativo local.',
    overview: 'Uma demonstração de e-commerce que combina apresentação editorial, descoberta de produtos e autonomia administrativa no navegador.',
    challenge: 'Apresentar um catálogo amplo com clareza e simular uma jornada comercial completa sem processar pagamentos ou dados pessoais reais.',
    solution: 'Uma experiência responsiva com busca, filtros, favoritos, carrinho, cupons, checkout simulado e painel administrativo persistido localmente.',
    features: ['Busca, filtros e favoritos', 'Carrinho, cupons e checkout simulado', 'Painel administrativo', 'Persistência em localStorage'],
    technologies: ['React', 'TypeScript', 'Vite', 'Vitest', 'Playwright', 'LocalStorage'],
    featured: true, cover: '/projects/nova-home-final.jpg', coverAlt: 'Página inicial real do e-commerce NOVA Imports',
    gallery: [
      { src: '/projects/nova-catalogo-final.jpg', alt: 'Catálogo real com filtros da NOVA Imports' },
      { src: '/projects/nova-produto.jpg', alt: 'Página real de produto da NOVA Imports' },
      { src: '/projects/nova-admin.jpg', alt: 'Painel administrativo demonstrativo da NOVA Imports' },
    ],
    demoUrl: 'https://cleber-pavin.github.io/nova-imports-portfolio/',
    notice: 'Projeto demonstrativo: o checkout não realiza pagamentos e nenhum dado pessoal real é armazenado em servidor.',
  },
  {
    slug: 'studio-lumina', name: 'Studio Lumina', segment: 'Beleza & estética', category: 'Agendamento', solutionType: 'Site com agendamento',
    description: 'Jornada enxuta para escolher serviço, profissional e horário, com confirmação pelo WhatsApp.',
    overview: 'Uma solução demonstrativa para estúdios de beleza que apresenta a marca e conduz o visitante até um pedido de agendamento organizado.',
    challenge: 'Reduzir o atrito de conversas soltas ao combinar serviços com profissionais, durações e horários disponíveis.',
    solution: 'Um fluxo em etapas que valida serviço, profissional, data, horário e dados antes de preparar a confirmação no WhatsApp.',
    features: ['Serviço e profissional', 'Data e horário disponíveis', 'Duração por serviço', 'Confirmação via WhatsApp'],
    technologies: ['React', 'TypeScript', 'Vite', 'Vitest', 'Playwright'],
    featured: true, cover: '/projects/studio-lumina.jpg', coverAlt: 'Página inicial real da demonstração Studio Lumina',
    demoUrl: 'https://sistema-agendamento-studio-lumina-demo.pages.dev/',
  },
  {
    slug: 'catalogo-inicial', name: 'Catálogo Inicial', segment: 'Pequenos negócios', category: 'Catálogos', solutionType: 'Catálogo comercial',
    description: 'Uma vitrine organizada para apresentar produtos e transformar interesse em pedido pelo WhatsApp.',
    overview: 'Um catálogo digital demonstrativo pensado para pequenos negócios que precisam vender com clareza sem adotar uma operação complexa.',
    challenge: 'Organizar uma seleção de produtos, destacar ofertas e facilitar o pedido individual em uma experiência leve.',
    solution: 'Uma home comercial responsiva com 15 produtos, categorias, filtro, contagem de resultados, destaques e mensagens prontas por produto.',
    features: ['15 produtos e categorias', 'Filtro e contagem de resultados', 'Destaques e promoções', 'Pedido individual via WhatsApp'],
    technologies: ['React', 'TypeScript', 'Vite', 'Lucide React'],
    featured: true, cover: '/projects/catalogo-inicial.jpg', coverAlt: 'Página inicial real do Catálogo Inicial',
    demoUrl: 'https://catalogo-inicial-300-demo.pages.dev/',
  },
  {
    slug: 'studiofly', name: 'StudioFly', segment: 'Beleza & serviços', category: 'Sites', solutionType: 'Landing page de conversão',
    description: 'Apresentação editorial de serviços de beleza com resultados e jornada de agendamento.',
    overview: 'Uma landing page demonstrativa com forte direção visual, criada para valorizar serviços, trabalho profissional e contato comercial.',
    challenge: 'Transformar um portfólio visual extenso em uma navegação clara que conduza da descoberta ao agendamento.',
    solution: 'Uma página responsiva com serviços, resultados filtráveis, apresentação profissional e formulário de agendamento.',
    features: ['Serviços e resultados', 'Filtros de portfólio', 'Apresentação profissional', 'Formulário de agendamento'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: true, cover: '/projects/studiofly-face-protected.jpg', coverAlt: 'Página inicial real da landing page StudioFly com o rosto da profissional desfocado para preservar sua privacidade',
  },
  {
    slug: 'clinica-vitta', name: 'Clínica Vitta', segment: 'Saúde & bem-estar', category: 'Agendamento', solutionType: 'Site para clínica',
    description: 'Apresentação cuidadosa de tratamentos e profissionais com agendamento guiado.',
    overview: 'Uma demonstração para clínica de estética que equilibra confiança visual, informação e acesso ao atendimento.',
    challenge: 'Apresentar diferentes tratamentos e especialidades sem sobrecarregar a navegação ou criar promessas clínicas indevidas.',
    solution: 'Uma experiência responsiva com oito tratamentos, profissionais associados às especialidades e agendamento em etapas.',
    features: ['Oito tratamentos', 'Profissionais por especialidade', 'Agendamento em etapas', 'Experiência responsiva'],
    technologies: ['React', 'TypeScript', 'Vite', 'Vitest', 'Playwright'],
    cover: '/projects/clinica-vitta.jpg', coverAlt: 'Página inicial real da demonstração Clínica Vitta',
    demoUrl: 'https://clinica-vitta-demo.pages.dev/',
  },
  {
    slug: 'urbano-barber', name: 'Urbano Barber', segment: 'Barbearias', category: 'Sites', solutionType: 'Landing page comercial',
    description: 'Serviços, preços e equipe apresentados com clareza e solicitação validada pelo WhatsApp.',
    overview: 'Uma landing page demonstrativa para barbearia que deixa oferta, valores e próximo passo visíveis desde o primeiro acesso.',
    challenge: 'Facilitar a escolha de serviço e profissional, mantendo o agendamento acessível em diferentes telas.',
    solution: 'Uma página responsiva com preços, equipe, validação de formulário, telefone e menu acessível antes do envio ao WhatsApp.',
    features: ['Serviços, preços e equipe', 'Formulário validado', 'Solicitação via WhatsApp', 'Menu e telefone acessíveis'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    cover: '/projects/urbano-barber.jpg', coverAlt: 'Página inicial real da landing page Urbano Barber',
    demoUrl: 'https://cleber-pavin.github.io/urbano-barber-demo/',
  },
]

export const entryPlans = [
  { name: 'Mini Vitrine', price: 'R$ 100', bestFor: 'Para começar', items: ['1 página', 'Até 5 produtos', 'Imagem, nome e preço', 'WhatsApp e contato'] },
  { name: 'Vitrine Básica', price: 'R$ 200', bestFor: 'Mais produtos', items: ['Até 10 produtos', 'Descrições curtas', 'Categorias simples', 'WhatsApp por produto', 'Responsivo'] },
  { name: 'Catálogo Inicial', price: 'R$ 300', bestFor: 'Mais apresentação', items: ['Até 15 produtos', 'Home mais trabalhada', 'Categorias e destaques', 'Promoções visuais'] },
  { name: 'Catálogo Econômico', price: 'R$ 400', bestFor: 'Identidade própria', items: ['Até 20 produtos', 'Identidade personalizada', 'Categorias e descrições', 'Informações completas da loja'] },
  { name: 'Catálogo Plus', price: 'R$ 500', bestFor: 'Mais organização', items: ['Até 40 produtos', 'Página de produto', 'Categorias e promoções', 'Acabamento refinado'] },
]

export const mainPlans = [
  { name: 'Essencial', price: 'R$ 600', bestFor: 'Catálogo profissional', items: ['Até 40 produtos', 'Fotos, preços e descrições', 'Categorias e WhatsApp', 'Responsivo'] },
  { name: 'Profissional', price: 'R$ 900', bestFor: 'Catálogo com busca', items: ['Tudo do Essencial', 'Busca e filtros', 'Destaques', 'Promoções'] },
  { name: 'Completo', price: 'R$ 1.400', bestFor: 'Autonomia para gerenciar', items: ['Tudo do Profissional', 'Painel administrativo', 'Gestão de produtos', 'Fotos e categorias'], highlight: true },
  { name: 'Avançado', price: 'R$ 2.000', bestFor: 'Operação e controle', items: ['Tudo do Completo', 'Estoque e pedidos', 'Clientes e cupons', 'Status e relatórios'] },
  { name: 'Premium / E-commerce', price: 'R$ 2.800', bestFor: 'Venda online completa', items: ['Tudo do Avançado', 'Carrinho e checkout', 'Pix/cartão e frete', 'Gestão completa'] },
]

export const segments = [
  { name: 'Barbearias', problem: 'Agenda manual e atendimento disperso.', solution: 'Serviços, barbeiros, horários e gestão organizados.', type: 'Site + agendamento' },
  { name: 'Salões & estética', problem: 'Muitos procedimentos e profissionais para apresentar.', solution: 'Portfólio, equipe, agenda e clientes no mesmo fluxo.', type: 'Site + sistema' },
  { name: 'Lash & manicure', problem: 'O trabalho depende de imagem e contato rápido.', solution: 'Serviços, portfólio, agenda e WhatsApp em destaque.', type: 'Site profissional' },
  { name: 'Restaurantes', problem: 'Cardápio difícil de atualizar e pedidos confusos.', solution: 'Produtos organizados e pedido direto pelo canal certo.', type: 'Cardápio digital' },
  { name: 'Lojas', problem: 'Produtos espalhados e pouca clareza para comprar.', solution: 'Catálogo com categorias, filtros e evolução para venda online.', type: 'Catálogo / e-commerce' },
  { name: 'Perfumes & cosméticos', problem: 'Variedade grande e promoções pouco visíveis.', solution: 'Vitrine por categorias, destaques e pedidos facilitados.', type: 'Catálogo digital' },
  { name: 'Oficinas', problem: 'Orçamentos e serviços difíceis de acompanhar.', solution: 'Atendimento, ordem de serviço e status mais organizados.', type: 'Site + sistema' },
  { name: 'Assistências técnicas', problem: 'Cliente pergunta várias vezes sobre o reparo.', solution: 'Orçamento, ordem de serviço e acompanhamento de status.', type: 'Sistema de atendimento' },
  { name: 'Autônomos', problem: 'Contato, agenda e propostas ficam espalhados.', solution: 'Apresentação, orçamento e rotina comercial mais claros.', type: 'Site + gestão' },
  { name: 'Clínicas', problem: 'Procedimentos e profissionais precisam gerar confiança.', solution: 'Apresentação cuidadosa e caminho direto para agendamento.', type: 'Site + agendamento' },
  { name: 'Academias & personal', problem: 'Planos e horários precisam ser fáceis de entender.', solution: 'Oferta organizada, agenda e relacionamento com clientes.', type: 'Site + agenda' },
] as const

export const serviceGroups = [
  { title: 'Sites', index: '01', text: 'Presença digital que transmite valor e conduz o visitante à ação.', items: ['Institucional', 'Landing page', 'Catálogo', 'Vitrine', 'Portfólio'] },
  { title: 'Sistemas', index: '02', text: 'Ferramentas sob medida para organizar rotinas e informações.', items: ['Agendamento', 'Gestão', 'CRM', 'Financeiro', 'Ordem de serviço', 'Área do cliente'] },
  { title: 'Automações', index: '03', text: 'Fluxos e integrações avaliados conforme a realidade de cada operação.', items: ['Fluxos', 'Integrações', 'Atendimento', 'Processos comerciais'] },
  { title: 'E-commerce', index: '04', text: 'Estruturas de venda online do catálogo à gestão completa.', items: ['Catálogo', 'Carrinho', 'Checkout', 'Pagamentos', 'Gestão'] },
]
