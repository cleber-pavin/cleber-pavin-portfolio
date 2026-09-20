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
    slug: 'caixa-forte', name: 'Caixa Forte', segment: 'Gestão financeira', category: 'Sistemas', solutionType: 'Plataforma SaaS',
    description: 'Plataforma SaaS para gestão de clientes, contratos, parcelas, recebimentos e despesas, com arquitetura multiempresa e painel administrativo.',
    overview: 'Um sistema completo em produção para pequenos negócios que precisam organizar a operação financeira de forma clara e segura.',
    challenge: 'Centralizar clientes, contratos, cobranças, recebimentos e despesas em uma única plataforma com controle por empresa, sem perder precisão nos valores.',
    solution: 'Uma aplicação full-stack com autenticação, arquitetura multiempresa, dashboard, módulos financeiros, notificações via WhatsApp e PWA.',
    features: ['Gestão de clientes e contratos', 'Controle de parcelas e recebimentos', 'Despesas e relatórios financeiros', 'Painel administrativo multiempresa'],
    technologies: ['React', 'TypeScript', 'Vite', 'Appwrite', 'Cloudflare', 'PWA'],
    featured: true, cover: '/projects/caixa-forte-dashboard.webp', coverAlt: 'Dashboard administrativo real da plataforma Caixa Forte',
    gallery: [
      { src: '/projects/caixa-forte-mobile.webp', alt: 'Versão mobile do Caixa Forte', mobile: true },
      { src: '/projects/caixa-forte-parcelas.webp', alt: 'Módulo de parcelas e contas a receber' },
      { src: '/projects/caixa-forte-financeiro.webp', alt: 'Visão financeira e relatórios do sistema' },
    ],
    demoUrl: 'https://usecaixaforte.com.br',
  },
  {
    slug: 'barber-noir', name: 'Barber Noir', segment: 'Barbearias', category: 'Sistemas', solutionType: 'Sistema completo de gestão',
    description: 'Sistema full-stack para gestão de barbearias com agendamentos, autenticação, painel administrativo e operação financeira.',
    overview: 'Uma plataforma completa que conecta o site público da barbearia ao painel de gestão diária, com autenticação por perfil, regras de negócio no servidor e persistência em banco de dados.',
    challenge: 'Organizar agendamentos, profissionais, clientes e rotinas financeiras em uma única plataforma com dados persistidos e segurança por perfil.',
    solution: 'Uma aplicação full-stack com acesso público, autenticação, painel administrativo de 16 páginas, módulo financeiro e integração com Mercado Pago.',
    features: ['Agendamento e agenda operacional', 'Painel administrativo completo', 'Gestão financeira e comissões', 'Autenticação e controle por perfil'],
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Cloudflare Workers'],
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
    technologies: ['React', 'TypeScript', 'Vite', 'Vitest', 'Playwright'],
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
    slug: 'studio-lumina', name: 'Studio Lumina', segment: 'Beleza & estética', category: 'Agendamento', solutionType: 'Sistema de agendamento',
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
    description: 'Apresentação editorial de serviços de beleza com resultados filtráveis e jornada de agendamento.',
    overview: 'Uma landing page com forte direção visual, criada para valorizar serviços, resultados profissionais e conduzir ao agendamento.',
    challenge: 'Transformar um portfólio visual extenso em uma navegação clara que conduza da descoberta ao contato comercial.',
    solution: 'Uma página responsiva com serviços filtráveis, galeria de resultados, apresentação profissional e formulário de agendamento.',
    features: ['Serviços e resultados filtráveis', 'Galeria de trabalhos', 'Apresentação profissional', 'Formulário de agendamento'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: true, cover: '/projects/studiofly-face-protected.jpg', coverAlt: 'Página inicial real da landing page StudioFly',
  },
  {
    slug: 'urbano-barber', name: 'Urbano Barber', segment: 'Barbearias', category: 'Sites', solutionType: 'Landing page comercial',
    description: 'Serviços, preços e equipe apresentados com clareza e solicitação validada pelo WhatsApp.',
    overview: 'Uma landing page para barbearia que deixa oferta, valores e próximo passo visíveis desde o primeiro acesso.',
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
