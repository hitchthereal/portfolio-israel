// Bilingual content for the portfolio. English is the default language.

type YearMonth = { year: number; month: number } // month: 1-12

export interface IExperienceItem {
  hash: string
  company: string
  role: string
  start: YearMonth
  end: YearMonth | null
  location: string
  mode: string
  summary: string
  highlights: string[]
  stack: string[]
}

const recommendationImages = {
  guilherme: "/guilherme.png",
  alexandre: "/ale.png",
  saul: "/saul.jpg",
  leonardo: "/leo.jpg",
  pedro: "/pedro.jpg",
  anyelton: "/anyelton.jpeg",
  maria: "/maria.jpg",
  giovanna: "/gio.jpg",
}

export const en = {
  nav: {
    links: {
      profile: "Profile",
      stack: "Stack",
      experience: "Experience",
      projects: "Projects",
      endorsements: "Endorsements",
      contact: "Contact",
    },
    menu: "Open menu",
    close: "Close menu",
    command: "Command menu",
    language: "Language",
    localTime: "Local time",
    home: "Back to top",
  },
  boot: {
    lines: [
      "initializing israel.os kernel",
      "mounting modules: react · next · typescript · node",
      "linking data layer: prisma · postgresql · mongodb",
      "establishing uplink → goiânia, br",
      "all systems nominal",
    ],
    skip: "press any key to skip",
  },
  hero: {
    status: "Available for work",
    remote: "Remote · open to US / EU teams",
    hello: "> hello_world — I'm",
    firstName: "Israel",
    lastName: "Rocha",
    role: "Full-stack Software Engineer",
    tagline:
      "I build SaaS products and white-label web platforms — from component systems and UI to APIs, data models and integrations.",
    description:
      "4+ years shipping high-performance applications with React, Next.js, TypeScript and Node.js across telecom, ERP and public-sector products.",
    ctaHire: "Hire me",
    ctaCv: "Resume",
    ctaEmail: "Copy e-mail",
    scroll: "Scroll to explore",
    stats: [
      { value: "4+", label: "Years shipping" },
      { value: "4", label: "Companies" },
      { value: "3", label: "Industries" },
      { value: "C1", label: "English" },
    ],
    photoAlt: "Portrait of Israel Rocha",
    core: "core.online",
  },
  profile: {
    kicker: "who I am",
    title: "Profile",
    statement:
      "I work across the whole product — from component systems and UI to APIs, data models and third-party integrations.",
    body: "Full-stack engineer with 4+ years building SaaS products and white-label web platforms with React, Next.js, TypeScript and Node.js, in sectors like telecom, ERP and public services. I care about Clean Code, SOLID, accessible interfaces and automated tests — and about leading delivery: scoping MVPs, reviewing pull requests and mentoring junior developers.",
    specsTitle: "system.specs",
    specs: [
      { key: "Role", value: "Full-stack Software Engineer" },
      { key: "Experience", value: "4+ years · since 2022" },
      { key: "Base", value: "Goiânia, Brazil · UTC−3" },
      { key: "Mode", value: "Remote · open to US / EU" },
      { key: "Sectors", value: "Telecom · ERP · Public sector" },
      { key: "Languages", value: "Portuguese (native) · English (C1)" },
      { key: "Education", value: "Systems Analysis & Development — UniFANAP" },
    ],
    bringTitle: "What I bring",
    bring: [
      {
        title: "Front-end architecture",
        text: "Component-driven design systems built for multi-brand customization, with Tailwind CSS, shadcn/ui, Zustand and Redux.",
      },
      {
        title: "Back end",
        text: "REST APIs and third-party integrations with Node.js (Express), Prisma, PostgreSQL and MongoDB.",
      },
      {
        title: "Enterprise ecosystems",
        text: "Hands-on with Java/Spring Boot and Angular, integrating and modernizing legacy systems.",
      },
      {
        title: "Quality",
        text: "Automated testing with Cypress, Playwright and React Testing Library, plus accessible interfaces (WCAG).",
      },
      {
        title: "Teamwork",
        text: "Agile teams (Jira/Scrum), MVP scoping, pull-request reviews and mentoring junior developers.",
      },
    ],
  },
  stack: {
    kicker: "modules loaded",
    title: "Stack",
    subtitle: "The tools I use to design, build, test and ship software.",
    itemsLabel: "items",
    categories: [
      {
        id: "core",
        title: "Core",
        caption: "The daily driver.",
        items: ["TypeScript", "React (Hooks, Context API)", "Next.js (App Router)", "Node.js (Express)"],
      },
      {
        id: "backend",
        title: "Back end & Data",
        caption: "APIs, auth and data models.",
        items: [
          "REST APIs",
          "Swagger / OpenAPI",
          "Auth.js (NextAuth)",
          "JWT",
          "PostgreSQL",
          "Prisma",
          "MongoDB",
          "C# / .NET",
          "Java / Spring Boot",
        ],
      },
      {
        id: "frontend",
        title: "Front end",
        caption: "State, forms, styling and UI.",
        items: [
          "Zustand",
          "Redux",
          "React Hook Form",
          "Zod",
          "Tailwind CSS",
          "shadcn/ui",
          "Angular",
          "Figma",
          "Accessibility (WCAG)",
        ],
      },
      {
        id: "testing",
        title: "Testing",
        caption: "Confidence before production.",
        items: ["Cypress", "Playwright", "React Testing Library", "Puppeteer"],
      },
      {
        id: "devops",
        title: "DevOps & Workflow",
        caption: "Ship, deploy and collaborate.",
        items: [
          "Docker",
          "DigitalOcean",
          "Vercel",
          "Git (GitHub, Bitbucket)",
          "Jira (Scrum)",
          "Bitbucket Pipelines",
          "GitHub Actions",
        ],
      },
      {
        id: "practices",
        title: "Practices",
        caption: "How the code gets written.",
        items: [
          "Clean Code",
          "SOLID",
          "White-label design",
          "Component-driven design",
          "Debugging (DevTools, Node.js)",
        ],
      },
    ],
  },
  experience: {
    kicker: "git log --career",
    title: "Experience",
    subtitle: "Every role is a commit. Expand one to read the diff.",
    present: "Present",
    head: "HEAD → main",
    expand: "Show details",
    collapse: "Hide details",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    duration: { year: "yr", years: "yrs", month: "mo", months: "mos" },
    items: [
      {
        hash: "f4c2a91",
        company: "Yox Mobile",
        role: "Full-stack Software Developer",
        start: { year: 2026, month: 5 },
        end: null,
        location: "Goiânia, BR",
        mode: "Remote",
        summary:
          "Development and evolution of a white-label SaaS platform for the telecommunications sector, focused on product scalability, dynamic multi-client customization and robust integrations.",
        highlights: [
          "Led front-end development with React Hooks to manage complex state and side effects, shipping high-performance interfaces with Tailwind CSS and shadcn/ui.",
          "Engineered back-end solutions with Node.js and Prisma ORM, managing database migrations and ensuring data integrity through advanced debugging and logging.",
          "Designed and implemented full-stack architectures with Next.js, TypeScript and Node.js (Express), ensuring fast response times and high availability for telecom operations.",
          "Defined roadmaps and MVPs, using React Testing Library to verify component behavior before production releases.",
          "Established a rigorous workflow with Jira (sprint planning, issue tracking) and Bitbucket (PR management, Clean Code enforcement).",
        ],
        stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Prisma", "Tailwind CSS", "shadcn/ui", "RTL", "Jira", "Bitbucket"],
      },
      {
        hash: "b81e3d7",
        company: "Public Defender's Office of Goiás (DPE-GO)",
        role: "Software Developer",
        start: { year: 2024, month: 9 },
        end: { year: 2026, month: 1 },
        location: "Goiânia, BR",
        mode: "Hybrid",
        summary:
          "Government-level web applications for legal assistance services, built for high availability and accessibility in the public sector.",
        highlights: [
          "Architected and built complex user interfaces with Next.js, React and TypeScript, using React Hooks to manage state and side effects efficiently.",
          "Engineered a scalable library of reusable UI components based on Design Systems and Atomic Design principles.",
          "Implemented a quality pipeline with automated end-to-end tests in Cypress to protect code integrity.",
          "Built accessible, semantic HTML/CSS following WCAG standards to ensure inclusivity.",
          "Diagnosed and resolved complex client-side bottlenecks and performance issues with Browser DevTools.",
          "Collaborated through Git version control and peer code reviews.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Cypress", "WCAG", "Design Systems", "Java", "Spring Boot", "Git"],
      },
      {
        hash: "7d09ce4",
        company: "Senior Sistemas",
        role: "Software Developer",
        start: { year: 2023, month: 9 },
        end: { year: 2024, month: 8 },
        location: "Aparecida de Goiânia, BR",
        mode: "Hybrid",
        summary:
          "Worked on the UAU ERP financial modules, handling critical data and back-end integrations for large-scale enterprise systems.",
        highlights: [
          "Migrated and refactored front-end data flows to Next.js, leveraging SSR/SSG rendering strategies to speed up financial dashboards.",
          "Built high-performance interfaces consuming complex REST APIs and efficiently handling large-scale JSON data structures.",
          "Developed performance automations with Puppeteer in TypeScript, simulating real user interactions to find and fix loading bottlenecks.",
          "Helped define scalable system architectures, ensuring efficient communication between the .NET ecosystem and the modern front-end stack.",
        ],
        stack: ["Next.js", "React", "TypeScript", "REST APIs", "Puppeteer", ".NET"],
      },
      {
        hash: "2a6f0b5",
        company: "Vega Incorporadora",
        role: "Developer Intern",
        start: { year: 2022, month: 9 },
        end: { year: 2023, month: 9 },
        location: "Aparecida de Goiânia, BR",
        mode: "Hybrid",
        summary:
          "Front-end development and data management, contributing to scalable interfaces and efficient database structures.",
        highlights: [
          "Developed React SPAs applying Clean Code and componentization for modular, reusable codebases.",
          "Built features with Next.js and TypeScript, ensuring type safety from data structures to the UI layer.",
          "Managed application state and integrated components with relational (MySQL) and non-relational (MongoDB) databases.",
          "Maintained back-end services and handled system support, keeping code consistent with Git.",
        ],
        stack: ["React", "Next.js", "TypeScript", "MySQL", "MongoDB", "Git"],
      },
    ] as IExperienceItem[],
    education: {
      hash: "0000001",
      tag: "tag: v1.0",
      label: "initial commit",
      title: "Systems Analysis & Development",
      school: "UniFANAP — University Center",
      period: "Jul 2022 — Dec 2024",
    },
  },
  projects: {
    kicker: "selected builds",
    title: "Projects",
    subtitle: "Some of the SaaS products I've built. Hover a window — or tap play — to watch the preview.",
    play: "Play preview",
    pause: "Pause preview",
    live: "Live",
    preview: "Preview",
    items: [
      {
        id: "gt-solucoes",
        name: "GT Soluções",
        category: "SaaS · Web + Mobile",
        description: "SaaS platform with a web dashboard and a companion mobile experience.",
        status: "Shipped",
      },
      {
        id: "sos-promotora",
        name: "SOS Promotora",
        category: "SaaS · Web",
        description: "SaaS web application developed end to end.",
        status: "Shipped",
      },
      {
        id: "finafy",
        name: "Finafy Benefícios",
        category: "SaaS · Web",
        description: "Benefits management SaaS — demo of a product in active development.",
        status: "In development",
      },
    ],
  },
  endorsements: {
    kicker: "incoming signals",
    title: "Endorsements",
    subtitle: "What engineers, leads and professors say about working with me.",
    readMore: "Read full endorsement",
    close: "Close",
    cards: [
      {
        name: "Guilherme Marcorio",
        position: "Data Engineer",
        image: recommendationImages.guilherme,
        quote:
          "Working with Israel has always been synonymous with trust and delivery. Even coming from different areas (me in data and him in front-end), he has always demonstrated a very clear product vision and a huge concern for quality, performance, and user experience. He is an extremely committed professional, learns quickly, communicates well with the team, and doesn't shy away from complex problems — on the contrary, he goes after the best possible solution. I have complete confidence in his work and recommend him without reservation for any project involving the development of systems and SaaS products.",
      },
      {
        name: "Alexandre Ferreira",
        position: "Full Stack Developer",
        image: recommendationImages.alexandre,
        quote:
          "I had the opportunity to closely follow Israel's trajectory as a developer and truly see his evolution over time. From the beginning, he always demonstrated curiosity, dedication, and a great desire to learn, and today he has become a much more technically mature professional, confident in the decisions he makes. He isn't afraid to face challenges, seeks to understand the problem before starting to code, and is always open to feedback. I am very proud of the progress he has made and have complete confidence in recommending him for any development project.",
      },
      {
        name: "Saul Matuzinhos",
        position: "Project Development Analyst",
        image: recommendationImages.saul,
        quote:
          "Demonstrates great competence with the frameworks used daily, especially React, Next.js, and the modern front-end ecosystem. Understands how the tools work, knows how to choose the most appropriate approaches for each scenario, and maintains clean, organized, and easy-to-maintain code. Furthermore, is very meticulous about quality: validates flows, covers error cases, and only considers a feature complete after it has been thoroughly tested, resulting in functional, stable, and reliable deliverables.",
      },
      {
        name: "Leonardo Souza",
        position: "QA Engineer",
        image: recommendationImages.leonardo,
        quote:
          "Israel has always impressed me with his mastery of the technology stack he works with and his attention to detail in his deliverables. He navigates React, Next.js, TypeScript, Tailwind, and the modern front-end ecosystem very well, but what stands out most is how he uses these technologies to deliver solid, well-structured solutions designed for real-world use. He is extremely meticulous about code organization, componentization, responsiveness, and UX; he reviews his work, tests it, refines it, and only considers it finished when it's truly polished. Working with someone like that provides a lot of security because you know that whatever comes out of his hands will be of high quality.",
      },
      {
        name: "Pedro Reis",
        position: "Full Stack Software Engineer",
        image: recommendationImages.pedro,
        quote:
          "Demonstrates an above-average level of professionalism and proactivity in project development. Takes responsibility for what he is doing, anticipates potential problems, seeks to understand the context well before delivering a solution, and maintains clear communication with the team. Doesn't wait for someone to dictate every detail: proposes improvements, suggests workflow adjustments, questions what doesn't make sense, and is always willing to go beyond 'just making it work' to truly add value to the product.",
      },
      {
        name: "Anyelton Dutra",
        position: "Tech Lead",
        image: recommendationImages.anyelton,
        quote:
          "I identified with Israel from the very first days he joined the team as an intern. He always sought to understand the context of the projects, study the technologies we were using, and solve problems responsibly. It was common to see him researching a solution, testing different approaches, and coming back with something functional and well-structured. Furthermore, he was always willing to help the team, listen to feedback, adjust what was necessary, and share what he had learned. Proactive, committed, and with a strong desire to grow — he's the kind of professional I would work with again without hesitation.",
      },
      {
        name: "Maria Rita",
        position: "Coordinator, Systems Analysis and Development course",
        image: recommendationImages.maria,
        quote:
          "As the coordinator of the Systems Analysis and Development course and also a professor of Databases, I had the opportunity to closely follow Israel's development throughout the course. He always demonstrated ease in logical reasoning, data modeling, and building well-structured queries, which set him apart in practical activities. Furthermore, I had the honor of being on the panel for his final project, an application for managing snack bars developed in Flutter, where his ability to combine theory and practice in a complete, functional, and well-thought-out solution became even more evident. He is a dedicated, responsible student, very interested in learning, who has evolved into a promising professional with a strong technical foundation and a mature attitude towards the challenges of the field.",
      },
      {
        name: "Giovanna Grassini",
        position: "Public Business Intelligence Management Analyst",
        image: recommendationImages.giovanna,
        quote:
          "As a professor in Software Requirements and Agile Methodologies, I witnessed how seriously Israel took the process and organization of projects. He always demonstrated care in understanding user needs before thinking about solutions, writing requirements clearly and objectively. In activities with Scrum and other agile practices, he stood out for his participation, his sense of responsibility towards the team, and the way he approached feedback and continuous improvement. He is a student who always sought to connect theory and practice, concerned not only with 'delivering functionality' but with delivering something aligned with what was agreed upon and with real value for the user.",
      },
    ],
  },
  contact: {
    kicker: "open channel",
    title: "Contact",
    headingTop: "Let's build",
    headingBottom: "what's next.",
    text: "Open to remote opportunities with US/EU teams. The fastest way to reach me is e-mail or LinkedIn.",
    channels: {
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      cv: "Resume (PDF)",
    },
    copy: "copy",
    open: "open",
    download: "download",
  },
  terminal: {
    title: "israel@os: ~",
    inputLabel: "Terminal command",
    hint: "try:",
    welcome: [
      "israel.os v26 — interactive shell",
      "type 'help' to list commands.",
    ],
    help: [
      ["help", "list available commands"],
      ["whoami", "who is behind this terminal"],
      ["about", "short profile"],
      ["stack", "technologies by module"],
      ["experience", "career log"],
      ["contact", "ways to reach me"],
      ["email", "copy my e-mail"],
      ["cv", "download my resume"],
      ["lang pt", "switch to Portuguese"],
      ["sudo hire", "you know what to do"],
      ["clear", "clear the screen"],
    ] as [string, string][],
    whoami: "Israel Almeida Rocha — Full-stack Software Engineer · Goiânia, BR (UTC−3)",
    emailCopied: "e-mail copied to clipboard ✓",
    cvDownloading: "downloading resume...",
    langUsage: "usage: lang en | lang pt",
    hire: [
      "[sudo] verifying recruiter credentials... ok",
      "permission granted. opening LinkedIn ↗",
    ],
    notFound: "command not found:",
    notFoundHint: "type 'help' to see what I understand.",
  },
  palette: {
    placeholder: "Type a command or search...",
    empty: "No results.",
    groups: { navigate: "Navigate", actions: "Actions", links: "Links" },
    copyEmail: "Copy e-mail",
    downloadCv: "Download resume",
    switchLang: "Mudar para Português",
    hint: "to navigate",
    select: "select",
    esc: "close",
  },
  footer: {
    rights: "Designed & engineered by Israel Rocha",
    built: "Built with Next.js · TypeScript · Tailwind CSS",
    top: "Back to top",
  },
  toast: {
    emailCopied: "E-mail copied to clipboard",
  },
}

export type Translations = typeof en

export const pt: Translations = {
  nav: {
    links: {
      profile: "Perfil",
      stack: "Stack",
      experience: "Experiência",
      projects: "Projetos",
      endorsements: "Recomendações",
      contact: "Contato",
    },
    menu: "Abrir menu",
    close: "Fechar menu",
    command: "Menu de comandos",
    language: "Idioma",
    localTime: "Horário local",
    home: "Voltar ao topo",
  },
  boot: {
    lines: [
      "inicializando kernel israel.os",
      "montando módulos: react · next · typescript · node",
      "conectando camada de dados: prisma · postgresql · mongodb",
      "estabelecendo conexão → goiânia, br",
      "todos os sistemas operacionais",
    ],
    skip: "pressione qualquer tecla para pular",
  },
  hero: {
    status: "Disponível para trabalho",
    remote: "Remoto · aberto a times dos EUA / Europa",
    hello: "> hello_world — eu sou",
    firstName: "Israel",
    lastName: "Rocha",
    role: "Engenheiro de Software Full-stack",
    tagline:
      "Construo produtos SaaS e plataformas web white-label — de design systems e UI a APIs, modelos de dados e integrações.",
    description:
      "4+ anos entregando aplicações de alta performance com React, Next.js, TypeScript e Node.js em produtos de telecom, ERP e setor público.",
    ctaHire: "Contrate-me",
    ctaCv: "Currículo",
    ctaEmail: "Copiar e-mail",
    scroll: "Role para explorar",
    stats: [
      { value: "4+", label: "Anos entregando" },
      { value: "4", label: "Empresas" },
      { value: "3", label: "Setores" },
      { value: "C1", label: "Inglês" },
    ],
    photoAlt: "Foto de Israel Rocha",
    core: "core.online",
  },
  profile: {
    kicker: "quem sou eu",
    title: "Perfil",
    statement:
      "Atuo no produto inteiro — de design systems e UI a APIs, modelos de dados e integrações com terceiros.",
    body: "Engenheiro full-stack com 4+ anos construindo produtos SaaS e plataformas web white-label com React, Next.js, TypeScript e Node.js, em setores como telecom, ERP e serviços públicos. Me importo com Clean Code, SOLID, interfaces acessíveis e testes automatizados — e com liderar entregas: definir MVPs, revisar pull requests e mentorar desenvolvedores júnior.",
    specsTitle: "system.specs",
    specs: [
      { key: "Cargo", value: "Engenheiro de Software Full-stack" },
      { key: "Experiência", value: "4+ anos · desde 2022" },
      { key: "Base", value: "Goiânia, Brasil · UTC−3" },
      { key: "Modelo", value: "Remoto · aberto a EUA / Europa" },
      { key: "Setores", value: "Telecom · ERP · Setor público" },
      { key: "Idiomas", value: "Português (nativo) · Inglês (C1)" },
      { key: "Formação", value: "Análise e Desenvolvimento de Sistemas — UniFANAP" },
    ],
    bringTitle: "O que eu entrego",
    bring: [
      {
        title: "Arquitetura front-end",
        text: "Design systems orientados a componentes, feitos para customização multimarca, com Tailwind CSS, shadcn/ui, Zustand e Redux.",
      },
      {
        title: "Back-end",
        text: "APIs REST e integrações com terceiros usando Node.js (Express), Prisma, PostgreSQL e MongoDB.",
      },
      {
        title: "Ecossistemas corporativos",
        text: "Experiência prática com Java/Spring Boot e Angular, integrando e modernizando sistemas legados.",
      },
      {
        title: "Qualidade",
        text: "Testes automatizados com Cypress, Playwright e React Testing Library, além de interfaces acessíveis (WCAG).",
      },
      {
        title: "Trabalho em equipe",
        text: "Times ágeis (Jira/Scrum), definição de MVPs, revisão de pull requests e mentoria de desenvolvedores júnior.",
      },
    ],
  },
  stack: {
    kicker: "módulos carregados",
    title: "Stack",
    subtitle: "As ferramentas que uso para projetar, construir, testar e entregar software.",
    itemsLabel: "itens",
    categories: [
      {
        id: "core",
        title: "Core",
        caption: "O dia a dia.",
        items: ["TypeScript", "React (Hooks, Context API)", "Next.js (App Router)", "Node.js (Express)"],
      },
      {
        id: "backend",
        title: "Back-end & Dados",
        caption: "APIs, autenticação e modelos de dados.",
        items: [
          "APIs REST",
          "Swagger / OpenAPI",
          "Auth.js (NextAuth)",
          "JWT",
          "PostgreSQL",
          "Prisma",
          "MongoDB",
          "C# / .NET",
          "Java / Spring Boot",
        ],
      },
      {
        id: "frontend",
        title: "Front-end",
        caption: "Estado, formulários, estilo e UI.",
        items: [
          "Zustand",
          "Redux",
          "React Hook Form",
          "Zod",
          "Tailwind CSS",
          "shadcn/ui",
          "Angular",
          "Figma",
          "Acessibilidade (WCAG)",
        ],
      },
      {
        id: "testing",
        title: "Testes",
        caption: "Confiança antes da produção.",
        items: ["Cypress", "Playwright", "React Testing Library", "Puppeteer"],
      },
      {
        id: "devops",
        title: "DevOps & Fluxo",
        caption: "Entregar, publicar e colaborar.",
        items: [
          "Docker",
          "DigitalOcean",
          "Vercel",
          "Git (GitHub, Bitbucket)",
          "Jira (Scrum)",
          "Bitbucket Pipelines",
          "GitHub Actions",
        ],
      },
      {
        id: "practices",
        title: "Práticas",
        caption: "Como o código é escrito.",
        items: [
          "Clean Code",
          "SOLID",
          "Design white-label",
          "Design orientado a componentes",
          "Debugging (DevTools, Node.js)",
        ],
      },
    ],
  },
  experience: {
    kicker: "git log --carreira",
    title: "Experiência",
    subtitle: "Cada cargo é um commit. Expanda um para ler o diff.",
    present: "Atual",
    head: "HEAD → main",
    expand: "Ver detalhes",
    collapse: "Ocultar detalhes",
    months: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    duration: { year: "ano", years: "anos", month: "mês", months: "meses" },
    items: [
      {
        hash: "f4c2a91",
        company: "Yox Mobile",
        role: "Desenvolvedor de Software Full-stack",
        start: { year: 2026, month: 5 },
        end: null,
        location: "Goiânia, BR",
        mode: "Remoto",
        summary:
          "Desenvolvimento e evolução de uma plataforma SaaS white-label para o setor de telecomunicações, com foco em escalabilidade do produto, customização dinâmica para múltiplos clientes e integrações robustas.",
        highlights: [
          "Liderei o desenvolvimento front-end com React Hooks para gerenciar estados complexos e efeitos colaterais, entregando interfaces de alta performance com Tailwind CSS e shadcn/ui.",
          "Desenvolvi soluções back-end com Node.js e Prisma ORM, gerenciando migrations e garantindo a integridade dos dados com debugging e logging avançados.",
          "Projetei e implementei arquiteturas full-stack com Next.js, TypeScript e Node.js (Express), garantindo tempos de resposta rápidos e alta disponibilidade para operações de telecom.",
          "Defini roadmaps e MVPs, usando React Testing Library para validar o comportamento dos componentes antes das releases em produção.",
          "Estabeleci um fluxo de trabalho rigoroso com Jira (planejamento de sprints, gestão de issues) e Bitbucket (gestão de PRs e padrões de Clean Code).",
        ],
        stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Prisma", "Tailwind CSS", "shadcn/ui", "RTL", "Jira", "Bitbucket"],
      },
      {
        hash: "b81e3d7",
        company: "Defensoria Pública do Estado de Goiás",
        role: "Desenvolvedor de Software",
        start: { year: 2024, month: 9 },
        end: { year: 2026, month: 1 },
        location: "Goiânia, BR",
        mode: "Híbrido",
        summary:
          "Aplicações web de nível governamental para serviços de assistência jurídica, com foco em alta disponibilidade e acessibilidade no setor público.",
        highlights: [
          "Arquitetei e desenvolvi interfaces complexas com Next.js, React e TypeScript, usando React Hooks para gerenciar estado e efeitos colaterais com eficiência.",
          "Construí uma biblioteca escalável de componentes de UI reutilizáveis baseada em Design Systems e nos princípios de Atomic Design.",
          "Implementei um pipeline de qualidade com testes E2E automatizados em Cypress para garantir a integridade do código.",
          "Desenvolvi estruturas HTML/CSS semânticas e acessíveis seguindo os padrões WCAG, garantindo inclusão.",
          "Diagnostiquei e resolvi gargalos e problemas complexos de performance no client-side com as DevTools do navegador.",
          "Colaborei em equipe com versionamento Git e code reviews entre pares.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Cypress", "WCAG", "Design Systems", "Java", "Spring Boot", "Git"],
      },
      {
        hash: "7d09ce4",
        company: "Senior Sistemas",
        role: "Desenvolvedor de Software",
        start: { year: 2023, month: 9 },
        end: { year: 2024, month: 8 },
        location: "Aparecida de Goiânia, BR",
        mode: "Híbrido",
        summary:
          "Atuei nos módulos financeiros do ERP UAU, lidando com dados críticos e integrações back-end em sistemas corporativos de grande escala.",
        highlights: [
          "Migrei e refatorei fluxos de dados do front-end para Next.js, aproveitando estratégias de renderização SSR/SSG para acelerar dashboards financeiros.",
          "Construí interfaces de alta performance consumindo APIs REST complexas e manipulando com eficiência grandes estruturas de dados JSON.",
          "Desenvolvi automações de performance com Puppeteer em TypeScript, simulando interações reais de usuários para identificar e corrigir gargalos de carregamento.",
          "Colaborei na definição de arquiteturas escaláveis, garantindo comunicação eficiente entre o ecossistema .NET e a stack moderna de front-end.",
        ],
        stack: ["Next.js", "React", "TypeScript", "APIs REST", "Puppeteer", ".NET"],
      },
      {
        hash: "2a6f0b5",
        company: "Vega Incorporadora",
        role: "Estagiário de Desenvolvimento",
        start: { year: 2022, month: 9 },
        end: { year: 2023, month: 9 },
        location: "Aparecida de Goiânia, BR",
        mode: "Híbrido",
        summary:
          "Desenvolvimento front-end e gestão de dados, contribuindo para interfaces escaláveis e estruturas de banco de dados eficientes.",
        highlights: [
          "Desenvolvi SPAs em React aplicando Clean Code e componentização para bases de código modulares e reutilizáveis.",
          "Construí funcionalidades com Next.js e TypeScript, garantindo tipagem segura das estruturas de dados até a camada de UI.",
          "Gerenciei o estado da aplicação e integrei componentes a bancos relacionais (MySQL) e não relacionais (MongoDB).",
          "Mantive serviços back-end e atuei no suporte aos sistemas, garantindo consistência do código com Git.",
        ],
        stack: ["React", "Next.js", "TypeScript", "MySQL", "MongoDB", "Git"],
      },
    ],
    education: {
      hash: "0000001",
      tag: "tag: v1.0",
      label: "commit inicial",
      title: "Análise e Desenvolvimento de Sistemas",
      school: "UniFANAP — Centro Universitário",
      period: "Jul 2022 — Dez 2024",
    },
  },
  projects: {
    kicker: "builds selecionados",
    title: "Projetos",
    subtitle: "Alguns dos produtos SaaS que desenvolvi. Passe o mouse sobre uma janela — ou toque em play — para ver o preview.",
    play: "Reproduzir preview",
    pause: "Pausar preview",
    live: "Ao vivo",
    preview: "Preview",
    items: [
      {
        id: "gt-solucoes",
        name: "GT Soluções",
        category: "SaaS · Web + Mobile",
        description: "Plataforma SaaS com painel web e uma experiência mobile complementar.",
        status: "Entregue",
      },
      {
        id: "sos-promotora",
        name: "SOS Promotora",
        category: "SaaS · Web",
        description: "Aplicação web SaaS desenvolvida de ponta a ponta.",
        status: "Entregue",
      },
      {
        id: "finafy",
        name: "Finafy Benefícios",
        category: "SaaS · Web",
        description: "SaaS de gestão de benefícios — demo de um produto em desenvolvimento ativo.",
        status: "Em desenvolvimento",
      },
    ],
  },
  endorsements: {
    kicker: "sinais recebidos",
    title: "Recomendações",
    subtitle: "O que engenheiros, líderes e professores dizem sobre trabalhar comigo.",
    readMore: "Ler recomendação completa",
    close: "Fechar",
    cards: [
      {
        name: "Guilherme Marcorio",
        position: "Data Engineer",
        image: recommendationImages.guilherme,
        quote:
          "Trabalhar com o Israel sempre foi sinônimo de confiança e entrega. Mesmo vindo de áreas diferentes (eu em dados e ele em Front-end), ele sempre demonstrou uma visão muito clara de produto e uma preocupação enorme com qualidade, performance e experiência do usuário. É um profissional extremamente comprometido, aprende rápido, se comunica bem com o time e não foge de problemas complexos — pelo contrário, vai atrás da melhor solução possível. Tenho total confiança no trabalho dele e o recomendo sem ressalvas para qualquer projeto que envolva desenvolvimento de sistemas e produtos SaaS.",
      },
      {
        name: "Alexandre Ferreira",
        position: "Full Stack Developer",
        image: recommendationImages.alexandre,
        quote:
          "Tive a oportunidade de acompanhar de perto a trajetória do Israel como desenvolvedor e ver de verdade a sua evolução ao longo do tempo. Desde o início ele sempre demonstrou curiosidade, dedicação e muita vontade de aprender, e hoje se tornou um profissional muito mais maduro tecnicamente e seguro nas decisões que toma. É alguém que não tem medo de encarar desafios, busca entender o problema antes de sair codando e está sempre aberto a feedback. Tenho muito orgulho do progresso que ele teve e confiança total em indicá-lo para qualquer projeto de desenvolvimento.",
      },
      {
        name: "Saul Matuzinhos",
        position: "Project Development Analyst",
        image: recommendationImages.saul,
        quote:
          "Demonstra muita competência com os frameworks que utiliza no dia a dia, em especial React, Next.js e o ecossistema moderno de front-end. Entende bem o funcionamento das ferramentas, sabe escolher as abordagens mais adequadas para cada cenário e mantém um código limpo, organizado e fácil de manter. Além disso, é bastante cuidadoso com a qualidade: valida fluxos, cobre casos de erro e só considera uma funcionalidade pronta depois de bem testada, o que resulta em entregas funcionais, estáveis e confiáveis.",
      },
      {
        name: "Leonardo Souza",
        position: "QA Engineer",
        image: recommendationImages.leonardo,
        quote:
          "O Israel sempre me chamou atenção pelo domínio da stack que trabalha e pelo cuidado com cada detalhe das entregas. Ele navega muito bem entre React, Next.js, TypeScript, Tailwind e o ecossistema moderno de front-end, mas o que mais se destaca é como ele usa essas tecnologias para entregar soluções sólidas, bem estruturadas e pensadas para o uso real. É extremamente criterioso com organização de código, componentização, responsividade e UX, revisa o que faz, testa, refina e só considera pronto quando realmente está redondo. Trabalhar com alguém assim passa muita segurança, porque você sabe que o que sair da mão dele vai chegar com qualidade.",
      },
      {
        name: "Pedro Reis",
        position: "Full Stack Software Engineer",
        image: recommendationImages.pedro,
        quote:
          "Mostra um nível de profissionalismo e proatividade acima da média no desenvolvimento dos projetos. Assume responsabilidade pelo que está fazendo, se antecipa a possíveis problemas, busca entender bem o contexto antes de entregar uma solução e mantém uma comunicação clara com o time. Não espera alguém mandar em cada detalhe: propõe melhorias, sugere ajustes de fluxo, questiona o que não faz sentido e está sempre disposto a ir além do ‘só fazer funcionar’ para realmente agregar valor ao produto.",
      },
      {
        name: "Anyelton Dutra",
        position: "Tech Lead",
        image: recommendationImages.anyelton,
        quote:
          "Me identifiquei com o Israel desde os primeiros dias em que entrou como estagiário no time. Sempre correu atrás para entender o contexto dos projetos, estudar as tecnologias que estávamos usando e resolver os problemas com responsabilidade. Era comum vê-lo pesquisando uma solução, testando diferentes abordagens e voltando com algo funcional e bem estruturado. Além disso, estava sempre disposto a ajudar o time, ouvir feedback, ajustar o que fosse necessário e compartilhar o que tinha aprendido. Pró-ativo, comprometido e com muita vontade de evoluir — é o tipo de profissional com quem eu trabalharia de novo sem pensar duas vezes.",
      },
      {
        name: "Maria Rita",
        position: "Coordenadora do curso de Análise e Desenvolvimento de Sistemas",
        image: recommendationImages.maria,
        quote:
          "Como coordenadora do curso de Análise e Desenvolvimento de Sistemas e também professora de Banco de Dados, tive a oportunidade de acompanhar de perto o desenvolvimento do Israel ao longo do curso. Sempre demonstrou facilidade em raciocínio lógico, modelagem de dados e construção de consultas bem estruturadas, o que o destacava nas atividades práticas. Além disso, tive a honra de compor a banca do seu TCC, um aplicativo para gestão de lanchonetes desenvolvido em Flutter, onde ficou ainda mais evidente sua capacidade de unir teoria e prática em uma solução completa, funcional e bem pensada. É um aluno dedicado, responsável e muito interessado em aprender, que evoluiu para um profissional promissor, com boa base técnica e atitude madura diante dos desafios da área.",
      },
      {
        name: "Giovanna Grassini",
        position: "Analista de Gestão de Business Intelligence Pública",
        image: recommendationImages.giovanna,
        quote:
          "Como professora nas disciplinas de Requisitos de Software e Metodologias Ágeis, pude ver o quanto o Israel levava a sério a parte de processo e organização de projetos. Sempre demonstrou cuidado em entender bem as necessidades do usuário antes de pensar em solução, escrevendo requisitos de forma clara e objetiva. Nas atividades com Scrum e outras práticas ágeis, se destacou pela participação, pelo senso de responsabilidade com o time e pela forma como encarava feedback e melhoria contínua. É um aluno que sempre buscou conectar teoria e prática, preocupado não só em ‘entregar a funcionalidade’, mas em entregar algo alinhado ao que foi combinado e com valor real para o usuário.",
      },
    ],
  },
  contact: {
    kicker: "canal aberto",
    title: "Contato",
    headingTop: "Vamos construir",
    headingBottom: "o que vem a seguir.",
    text: "Aberto a oportunidades remotas, inclusive com times dos EUA e da Europa. O jeito mais rápido de falar comigo é por e-mail ou LinkedIn.",
    channels: {
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      cv: "Currículo (PDF)",
    },
    copy: "copiar",
    open: "abrir",
    download: "baixar",
  },
  terminal: {
    title: "israel@os: ~",
    inputLabel: "Comando do terminal",
    hint: "experimente:",
    welcome: [
      "israel.os v26 — shell interativo",
      "digite 'help' para listar os comandos.",
    ],
    help: [
      ["help", "lista os comandos disponíveis"],
      ["whoami", "quem está por trás deste terminal"],
      ["about", "perfil resumido"],
      ["stack", "tecnologias por módulo"],
      ["experience", "histórico de carreira"],
      ["contact", "formas de falar comigo"],
      ["email", "copia meu e-mail"],
      ["cv", "baixa meu currículo"],
      ["lang en", "muda para inglês"],
      ["sudo hire", "você sabe o que fazer"],
      ["clear", "limpa a tela"],
    ],
    whoami: "Israel Almeida Rocha — Engenheiro de Software Full-stack · Goiânia, BR (UTC−3)",
    emailCopied: "e-mail copiado para a área de transferência ✓",
    cvDownloading: "baixando currículo...",
    langUsage: "uso: lang en | lang pt",
    hire: [
      "[sudo] verificando credenciais de recrutador... ok",
      "permissão concedida. abrindo o LinkedIn ↗",
    ],
    notFound: "comando não encontrado:",
    notFoundHint: "digite 'help' para ver o que eu entendo.",
  },
  palette: {
    placeholder: "Digite um comando ou busque...",
    empty: "Nenhum resultado.",
    groups: { navigate: "Navegar", actions: "Ações", links: "Links" },
    copyEmail: "Copiar e-mail",
    downloadCv: "Baixar currículo",
    switchLang: "Switch to English",
    hint: "para navegar",
    select: "selecionar",
    esc: "fechar",
  },
  footer: {
    rights: "Projetado e desenvolvido por Israel Rocha",
    built: "Feito com Next.js · TypeScript · Tailwind CSS",
    top: "Voltar ao topo",
  },
  toast: {
    emailCopied: "E-mail copiado para a área de transferência",
  },
}
