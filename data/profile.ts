export const profile = {
  name: 'Miguel Cruz',
  role: 'Estudante de Ciências da Computação',
  github: 'https://github.com/MiguelPacoCruz',
  summary:
    'Estudante de Ciências da Computação na Universidade do Minho, focado em desenvolvimento full-stack, bases de dados e coordenação técnica de projetos.',
  education: {
    title: 'Licenciatura em Ciências da Computação',
    school: 'Universidade do Minho',
    place: 'Braga',
    period: '09/09/2024 - Atual',
    eqf: 'Nível no EQF: 6',
  },
  experience: [
    {
      title: 'Co-diretor do Departamento de Desenvolvimento',
      organization: 'Monitor de Voluntários',
      place: 'Póvoa de Varzim, Portugal',
      period: '17/09/2025 - Atual',
      bullets: [
        'Co-direção do departamento de desenvolvimento do NECC.',
        'Coordenação da equipa técnica e organização de projetos internos.',
        'Apoio na definição de arquitetura e decisões técnicas.',
        'Planeamento e acompanhamento do desenvolvimento dos projetos.',
      ],
    },
    {
      title: 'Monitor de Voluntários',
      organization: 'Monitor de Voluntários',
      place: 'Póvoa de Varzim, Portugal',
      bullets: [
        'Coordenação de equipas de voluntários num projeto de inclusão social.',
        'Supervisão de operações diárias de apoio a pessoas com mobilidade reduzida.',
        'Garantia de segurança e execução adequada dos procedimentos no acesso ao mar.',
        'Comunicação com equipa e utentes, assegurando uma experiência inclusiva e segura.',
      ],
    },
  ],
  project: {
    title: 'SNecc Bar',
    subtitle: 'Plataforma de Gestão de Compras e Stock',
    bullets: [
      'Desenvolvimento de plataforma full-stack para gestão de snack bar estudantil.',
      'Sistema de vendas com gestão de utilizadores, stock e histórico de transações.',
      'Backend com Supabase, PostgreSQL, autenticação e RLS.',
      'Dashboard administrativo com gestão de produtos, finanças e inventário.',
      'Interface web responsiva em Next.js, TypeScript e Tailwind CSS.',
    ],
  },
  skills: {
    languages: ['Java', 'C', 'Python', 'Haskell', 'HTML', 'CSS'],
    tools: ['Linux', 'Git', 'GitHub'],
    databases: ['SQL', 'MySQL', 'SQL Server'],
    languagesSpoken: ['Português nativo', 'Inglês C2'],
  },
};

export const techIcons = [
  { name: 'Java', label: 'Java' },
  { name: 'C', label: 'C', asset: '/skills/C.svg' },
  { name: 'Python', label: 'Python', asset: '/skills/Python-Dark.svg' },
  { name: 'Haskell', label: 'Haskell', asset: '/skills/Haskell-Dark.svg' },
  { name: 'HTML', label: 'HTML', asset: '/skills/HTML.svg' },
  { name: 'CSS', label: 'CSS', asset: '/skills/CSS.svg' },
  { name: 'Linux', label: 'Linux', asset: '/skills/Linux-Dark.svg' },
  { name: 'Git', label: 'Git', asset: '/skills/Git.svg' },
  { name: 'GitHub', label: 'GitHub', asset: '/skills/Github-Dark.svg' },
];
