# NextApp - Plataforma de Gestão de Futebol

Website de apresentação moderno e responsivo para a NextApp, uma plataforma de gestão de futebol destinada a jogadores, treinadores e olheiros.

## Visão Geral

O site funciona como uma página única centrada em `/`, com secções de apresentação, funcionalidades, perfis de utilizador, tecnologias, idiomas, estatísticas e FAQ.

### Público-Alvo

- **Jogadores**: gestão de carreira, estatísticas pessoais e comunicação.
- **Treinadores**: planeamento de treinos, análise tática e gestão de plantel.
- **Olheiros**: descoberta de talentos e relatórios profissionais.

## Stack Tecnológica

| Tecnologia | Versão | Utilização |
| --- | --- | --- |
| **React** | 18.3.1 | Biblioteca de UI |
| **TypeScript** | 5.9.3 | Tipagem estática |
| **Vite** | 6.4.2 | Build tool + dev server |
| **TailwindCSS** | 4.1.18 | Estilos utility-first |
| **Motion** | latest | Animações |
| **Lucide React** | 0.487.0 | Ícones SVG |
| **Vercel Analytics** | 1.6.1 | Monitorização |
| **Vercel Speed Insights** | 1.3.1 | Métricas de velocidade |
| **react-countup** | latest | Contadores animados |
| **react-intersection-observer** | latest | Deteção de visibilidade |

### Dev Dependencies

| Tecnologia | Versão | Utilização |
| --- | --- | --- |
| **Vitest** | 4.0.18 | Testes unitários |
| **Testing Library** | latest | Testes de componentes |
| **ESLint** | 9 | Linting |
| **Prettier** | 3.8 | Formatação de código |

## Estrutura do Projeto

```text
NextWeb/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── img/
├── src/
│   ├── App.tsx                  # Layout principal da single-page app
│   ├── main.tsx                 # Entry point
│   ├── components/
│   │   ├── Hero.tsx             # Secção hero com mockup de telemóvel
│   │   ├── Features.tsx         # Grid de funcionalidades
│   │   ├── UserTypes.tsx        # Tabs: Jogadores/Treinadores/Olheiros
│   │   ├── Technologies.tsx     # Tecnologias usadas
│   │   ├── Languages.tsx        # Idiomas suportados
│   │   ├── Stats.tsx            # Estatísticas com contadores
│   │   ├── FAQ.tsx              # Perguntas frequentes
│   │   ├── Navbar.tsx           # Navbar responsiva fixa
│   │   ├── Footer.tsx           # Footer com CTA e links
│   │   └── ScrollToTop.tsx      # Botão scroll-to-top
│   ├── pages/
│   │   └── Home.tsx             # Página principal
│   └── styles/
│       ├── global.css           # CSS global + tema TailwindCSS v4
│       └── globals.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── vitest.config.ts
├── vercel.json
└── eslint.config.js
```

## Rota

| Rota | Componente | Descrição |
| --- | --- | --- |
| `/` | Home | Página principal com todas as secções do site |

## Design System

- **Tema**: dark mode.
- **Fundo**: `#0f172a` para `#1e293b`.
- **Texto**: `#f1f5f9`.
- **Cores por tipo de utilizador**:
  - Jogadores: azul `#3B82F6`.
  - Treinadores: verde `#10B981`.
  - Olheiros: púrpura `#8B5CF6`.
- **Fonte**: Inter, via Google Fonts.
- **Layout**: max-width `1200px`, padding `24px`.
- **Animações**: Motion com `whileInView` e `whileHover`.

## Como Correr Localmente

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev
npm run build
npm test
```

## Deploy

O projeto está configurado para deploy na Vercel com:

- **Framework Preset**: Vite
- **Output Directory**: `dist`
- **Analytics**: Vercel Analytics + Speed Insights

**Projeto PAP - Prova de Aptidão Profissional**  
**Autor**: Tomás  
**Ano letivo**: 2025/2026
