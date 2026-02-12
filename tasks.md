# 📋 NextWeb — Tasks

> **Projeto:** Website de apresentação do NextApp (Plataforma de Gestão de Futebol)
> **Stack:** React 18 + Vite 6 + TypeScript + TailwindCSS v4 + Radix UI + Framer Motion
> **Deploy:** Vercel (com Analytics + Speed Insights)
> **Última análise:** 12 Fevereiro 2026

---

## ✅ Já Implementado

- [x] Estrutura React + Vite + TypeScript
- [x] TailwindCSS v4 com `@tailwindcss/vite`
- [x] Navegação com React Router (6 rotas: Home, Player, Coach, Scout, Privacy, 404)
- [x] Lazy loading das páginas com `React.lazy()` + `Suspense`
- [x] Navbar responsiva com menu mobile, active states e scroll handling
- [x] Footer com CTA, links, redes sociais e copyright
- [x] ScrollToTop button animado
- [x] SEO completo: meta tags, Open Graph, Twitter Cards, JSON-LD, favicon
- [x] Google Fonts (Inter) com preconnect
- [x] `robots.txt` e `sitemap.xml`
- [x] Página 404 (NotFound)
- [x] Página de Privacidade
- [x] ESLint + Prettier configurados
- [x] `tsconfig.json` com paths aliases (`@/`)
- [x] Vitest configurado com test de exemplo (Navbar)
- [x] `.gitignore` e `.env` / `.env.example`
- [x] Vercel Analytics + Speed Insights integrados
- [x] CSS global limpo (`global.css`) com scrollbar personalizada

---

## 🔴 Crítico — Deploy Vercel

- [ ] **Verificar que o Vercel está com Framework Preset = "Vite"** — nas Project Settings do Vercel, confirmar que o framework está definido como Vite e o Output Directory como `dist`
- [ ] **Adicionar `vercel.json`** para garantir SPA routing (rewrites para `index.html`):
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- [ ] **Remover pasta `build/` do repositório** — é um artefacto antigo (antes de mudar `outDir` para `dist`), pode causar confusão no Vercel
- [ ] **Verificar que `.env` não tem valores secretos no git** — está no `.gitignore` mas confirmar

---

## 🟡 Conteúdo & Imagens

- [ ] **Substituir imagens Unsplash por screenshots reais da app** nas páginas Player, Coach e Scout
- [ ] **Substituir mockups CSS no `AppShowcase.tsx`** por screenshots reais — o carousel tem slides placeholder ("Login", "Dashboard", "Treinos", etc.) com `Math.random()` para alturas de barras
- [ ] **Substituir mockup de telemóvel no Hero** por screenshot/render real do Figma
- [ ] **Adicionar logo real** — atualmente é a letra "N" num quadrado (Navbar + Footer)
- [ ] **Criar `og-image.png`** — referenciado no `index.html` mas não existe em `public/`
- [ ] **Criar `apple-touch-icon.png`** — referenciado no `index.html` mas não existe em `public/`
- [ ] **Atualizar URL do domínio** — `index.html` referencia `https://nextapp.pt/` nas meta tags, confirmar se é o domínio final

---

## 🟡 Design & UX

- [ ] **Adicionar animações `whileInView`** aos cards de features nas sub-páginas (Player/Coach/Scout) — atualmente só têm `whileHover`, sem animação de entrada como na Home
- [ ] **Adicionar animação de entrada** aos floating cards nas sub-páginas (rating card, plantel card, relatório card)
- [ ] **Corrigir o carousel `AppShowcase`** — usa `Math.random()` causando valores diferentes em cada render; usar valores fixos
- [ ] **Melhorar a Privacy page** — está demasiado básica, expandir secções (uso de dados, cookies, direitos do utilizador)

---

## 🟡 Navegação

- [ ] **Os links âncora da Navbar não funcionam nas sub-páginas** — ao clicar "Funcionalidades" na página `/player`, tenta fazer scroll mas o elemento `#features` não existe nessa página. Deve redirecionar para `/#features`
- [ ] **Os links âncora do Footer** têm o mesmo problema — não redirecionam para a Home
- [ ] **Botão "Começar Agora" no Footer** não tem destino — deve apontar para `/player` ou link externo
- [ ] **Botão "Ver Funcionalidades" no Hero** — verificar se faz scroll correctamente para `#features`

---

## 🟢 Limpeza de Código

- [ ] **Remover 48 componentes UI não usados** — toda a pasta `src/components/ui/` (shadcn/ui) está importada mas **nenhum** componente é usado em lado nenhum do projeto
- [ ] **Remover dependências não usadas do `package.json`**:
  - `@radix-ui/*` (26 packages) — nenhum é importado directamente
  - `cmdk`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `vaul`, `next-themes`, `sonner` — não usados
  - `class-variance-authority`, `clsx`, `tailwind-merge` — usados apenas pelos componentes UI não utilizados
- [ ] **Remover `Guidelines.md`** — ficheiro vazio
- [ ] **Remover `Attributions.md`** — ou atualizar com conteúdo relevante
- [ ] **Remover `src/components/figma/`** — contém `ImageWithFallback.tsx` que pode não ser usado
- [ ] **Remover pasta `build/` da raiz** — artefacto antigo (output agora vai para `dist/`)
- [ ] **Remover `postcss.config.js`** — TailwindCSS v4 com `@tailwindcss/vite` não precisa de PostCSS
- [ ] **Remover `index.css` da raiz do `src/`** se ainda existir — foi substituído por `styles/global.css`

---

## 🟢 Performance

- [ ] **Verificar se o `index.css` (63KB)** ainda está a ser carregado — se `global.css` já o substituiu, garantir que o antigo foi removido
- [ ] **Adicionar `loading="lazy"` às imagens** das sub-páginas
- [ ] **Definir `width` e `height` nas imagens** para evitar CLS (Cumulative Layout Shift)
- [ ] **Otimizar imagens** — usar WebP/AVIF em vez de JPG do Unsplash

---

## 🟢 Testes

- [ ] **Expandir testes** — só existe `Navbar.test.tsx` básico
- [ ] **Testar navegação entre páginas**
- [ ] **Testar componentes interativos** (FAQ accordion, UserTypes tabs, mobile menu)
- [ ] **Testar cross-browser** (Chrome, Firefox, Safari, Edge)
- [ ] **Testar responsividade** em várias resoluções (<375px, 768px, 1024px, 1440px)

---

## 🟢 Extras (Nice to Have)

- [ ] **Adicionar secção de Testemunhos** na Home
- [ ] **Adicionar secção de Timeline/Roadmap** do projeto
- [ ] **Atualizar links de redes sociais** no Footer com URLs reais
- [ ] **Atualizar email de contacto** — actualmente `nextapp@email.com`
- [ ] **Adicionar Error Boundaries** para prevenir crashes da UI
- [ ] **Configurar CI/CD** com GitHub Actions para lint + build + test

---

## Resumo por Componente

| Componente | Estado | Notas |
|---|---|---|
| **Home** | ✅ Completa | 8 secções, todas funcionais |
| **PlayerPage** | ⚠️ Parcial | Faltam screenshots reais, animações de entrada |
| **CoachPage** | ⚠️ Parcial | Faltam screenshots reais, animações de entrada |
| **ScoutPage** | ⚠️ Parcial | Faltam screenshots reais, animações de entrada |
| **Privacy** | ⚠️ Básica | Conteúdo mínimo, precisa expansão |
| **NotFound** | ✅ Completa | Animada, com link para Home |
| **Navbar** | ✅ Completa | Responsiva, active states, scroll handling |
| **Footer** | ✅ Completa | CTA, links, redes sociais, copyright |
| **SEO** | ✅ Completo | Meta, OG, Twitter, JSON-LD, favicon |
| **Deploy Vercel** | ❌ A falhar | Precisa de `vercel.json` e confirmar settings |
| **Testes** | ⚠️ Mínimo | Apenas 1 test file |
| **Código limpo** | ⚠️ Pendente | ~48 componentes UI + ~30 dependências não usadas |
