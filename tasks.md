# 📋 NextWeb — Tasks (Website de Apresentação NextApp)

> **Projeto:** Website de apresentação/landing page para o NextApp (Plataforma de Gestão de Futebol)
> **Stack:** React 18 + Vite + TypeScript + Tailwind (via tailwind-merge) + Radix UI + Framer Motion
> **Estado atual:** Estrutura base funcional, faltam polimentos, conteúdo real e preparação para produção.

---

## 1. 🔧 Configuração & Infraestrutura

- [ ] **Adicionar `tsconfig.json`** — o projeto não tem configuração TypeScript explícita
- [ ] **Adicionar TailwindCSS config** — o projeto usa classes Tailwind mas não tem `tailwind.config.js` / `postcss.config.js` (depende apenas de `index.css` com 63K linhas de CSS estático gerado pelo Figma)
- [ ] **Configurar ESLint e Prettier** — garantir consistência de código
- [ ] **Configurar variáveis de ambiente** (`.env`) — para URLs de API, analytics, etc.
- [ ] **Adicionar ficheiro `.gitignore`** adequado (verificar se existe)
- [ ] **Configurar TypeScript strict mode** para melhor segurança de tipos

---

## 2. 🔍 SEO & Meta Tags

- [ ] **Atualizar `index.html`**:
  - [ ] Adicionar `meta description`
  - [ ] Adicionar `lang="pt"` (atualmente é `lang="en"`)
  - [ ] Adicionar Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
  - [ ] Adicionar Twitter Card tags
  - [ ] Adicionar `favicon` e `apple-touch-icon`
  - [ ] Adicionar `theme-color` para o dark mode (`#0f172a`)
- [ ] **Adicionar `robots.txt`** e `sitemap.xml`
- [ ] **Garantir que cada página tem `<title>` dinâmico** (usar `react-helmet` ou equivalente)
- [ ] **Adicionar dados estruturados** (JSON-LD) para o tipo de organização/produto

---

## 3. 🖼️ Conteúdo & Imagens

- [ ] **Substituir imagens Unsplash por screenshots reais da app** — atualmente as páginas Player, Coach e Scout usam fotos genéricas do Unsplash
- [ ] **Substituir mockups CSS por screenshots reais** no `AppShowcase.tsx` — o carousel usa slides de mock com conteúdo placeholder ("Login", "Dashboard", "Treinos", etc.)
- [ ] **Substituir o mockup de telemóvel no `Hero.tsx`** por um screenshot real da app ou render do Figma
- [ ] **Adicionar logo real do NextApp** — atualmente é apenas a letra "N" num quadrado azul (Navbar + Footer)
- [ ] **Adicionar favicon** com o logo do NextApp
- [ ] **Otimizar imagens** — adicionar `loading="lazy"`, usar formatos modernos (WebP/AVIF), definir `width` e `height` para evitar layout shifts

---

## 4. 📱 Responsividade & Mobile

- [ ] **Testar completamente em mobile** — verificar todos os componentes em ecrãs pequenos (<375px)
- [ ] **Verificar o menu mobile da Navbar** — funciona visualmente mas os links `#section` podem não funcionar corretamente nas sub-páginas (Player/Coach/Scout)
- [ ] **Testar o carousel `AppShowcase`** em mobile — configuração `react-slick` já tem breakpoints mas precisa de validação visual
- [ ] **Verificar se o `UserTypes` tabs funciona bem em mobile** — os 3 botões de tab podem não caber bem em ecrãs pequenos
- [ ] **Testar os cards de Features** em todas as resoluções

---

## 5. 🧭 Navegação & Routing

- [ ] **Corrigir navegação da Navbar nas sub-páginas** — os links da Navbar apontam para âncoras (`#features`, `#users`, etc.) que só existem na Home. Nas páginas Player/Coach/Scout, estes links não funcionam
- [ ] **Adicionar navigation ativa** — indicar visualmente qual página/secção está ativa
- [ ] **Adicionar botão "Voltar ao topo"** (scroll-to-top button)
- [ ] **Os botões "Começar Agora" / "Começar Grátis" não têm destino** — decidir para onde devem apontar (link para app store, formulário de registo, etc.)
- [ ] **O botão "Ver Funcionalidades" no Hero** não faz scroll para a secção — adicionar `onClick` com scroll suave
- [ ] **Adicionar página 404** para rotas não encontradas

---

## 6. ♿ Acessibilidade (a11y)

- [ ] **Adicionar `alt` text descritivo** a todas as imagens (algumas já têm mas podem ser melhoradas)
- [ ] **Garantir contraste adequado** — verificar ratio entre texto cinzento (`#94a3b8`) e fundo escuro (`#0f172a`)
- [ ] **Adicionar `aria-labels`** aos botões sem texto (ícones de redes sociais no Footer)
- [ ] **Garantir navegação por teclado** — testar tab order em todos os componentes interativos
- [ ] **Adicionar `aria-expanded`** aos itens do FAQ accordion
- [ ] **Adicionar skip link** ("Saltar para o conteúdo") para screen readers

---

## 7. ⚡ Performance

- [ ] **Remover CSS não utilizado** — o `index.css` tem 63KB de CSS estático (provavelmente gerado pelo Figma), muito do qual pode não estar a ser usado
- [ ] **Lazy load das páginas** com `React.lazy()` e `Suspense` (PlayerPage, CoachPage, ScoutPage)
- [ ] **Otimizar o bundle** — os 48 componentes UI em `src/components/ui/` podem não estar todos a ser usados; fazer tree-shaking ou remover os não utilizados
- [ ] **Mover CSS do `<style>` inline no `App.tsx`** para o ficheiro CSS — atualmente tem estilos de scrollbar e font-import inline
- [ ] **Mover o import do Google Fonts** para o `index.html` `<head>` (preconnect + preload)
- [ ] **Código da `AppShowcase`** importa CSS do CDN via `<style>` inline — mover para o ficheiro de estilos ou instalar via npm
- [ ] **Os valores aleatórios em `AppShowcase`** (`Math.random()`) causam re-renders desnecessários — memoizar ou usar valores fixos
- [ ] **Verificar se `react-slick` CSS está a ser carregado corretamente** sem FOUC

---

## 8. 🎨 Design & UX

- [ ] **Animações de entrada nas sub-páginas** — as páginas Player/Coach/Scout só animam o hero, os cards de features aparecem sem animação de entrada (só têm `whileHover`)
- [ ] **Adicionar animações `whileInView`** aos cards de features nas sub-páginas (como já existe no `Features.tsx` da Home)
- [ ] **Melhorar os cards de informação flutuantes** nas sub-páginas — atualmente são estáticos, podiam ter animação de entrada com delay
- [ ] **Garantir consistência de cores** entre os temas de cada tipo de utilizador:
  - Player → Azul (`blue-500`)
  - Coach → Verde (`emerald-500`)
  - Scout → Roxo (`purple-500`)
- [ ] **Adicionar um efeito de parallax ou gradient animado** no hero para mais dinamismo
- [ ] **Melhorar os dots de navegação do carousel** — mais visíveis e com transição mais suave
- [ ] **Considerar dark/light mode toggle** — o `next-themes` está instalado mas não é usado

---

## 9. 📝 Conteúdo & Texto

- [ ] **Rever todo o conteúdo em Português** — verificar erros ortográficos e melhorar copy
- [ ] **Adicionar secção de Pricing/Planos** (se aplicável para o PAP)
- [ ] **Adicionar secção de Testemunhos** ou feedback de utilizadores de teste
- [ ] **Adicionar secção de Timeline/Roadmap** do projeto
- [ ] **Melhorar as descrições do FAQ** — são curtas, podem ser mais detalhadas
- [ ] **Atualizar estatísticas no `Stats.tsx`** com números reais do projeto

---

## 10. 📧 Links & Contacto

- [ ] **Footer: links de redes sociais apontam para `#`** — substituir por links reais (GitHub, Instagram, etc.)
- [ ] **Footer: link "Contacto" aponta para `#`** — criar página de contacto ou adicionar email
- [ ] **Footer: link "Privacidade" aponta para `#`** — criar política de privacidade (mesmo que básica)
- [ ] **Adicionar link para download da app** quando disponível (App Store / Google Play)

---

## 11. 🧹 Limpeza de Código

- [ ] **Remover componentes UI não usados** — a pasta `src/components/ui/` tem 48 componentes (shadcn/ui), mas quase nenhum é usado nos componentes da página
- [ ] **Remover o `Guidelines.md`** — está vazio
- [ ] **Remover o `Attributions.md`** se o conteúdo não for relevante (ou atualizá-lo)
- [ ] **Verificar se `react-hook-form`, `recharts`, `react-day-picker`** e outros packages são realmente usados — limpar `package.json`
- [ ] **Mover estilos inline do `App.tsx`** para ficheiros CSS dedicados
- [ ] **Adicionar type definitions** onde faltam (`react-slick` pode precisar de `@types/react-slick`)

---

## 12. 🚀 Produção & Deploy

- [ ] **Testar build de produção** (`npm run build`) — verificar se compila sem erros
- [ ] **Configurar deploy** — escolher plataforma (Vercel, Netlify, GitHub Pages)
- [ ] **Configurar HTTPS** e domínio personalizado (se aplicável)
- [ ] **Adicionar Google Analytics** ou outro sistema de analytics
- [ ] **Testar Core Web Vitals** (LCP, FID, CLS) e otimizar
- [ ] **Adicionar error boundaries** para prevenir crashes da UI

---

## 13. 📐 Testes

- [ ] **Adicionar testes básicos** com Vitest ou Jest
- [ ] **Testar navegação entre páginas**
- [ ] **Testar componentes interativos** (FAQ accordion, UserTypes tabs, mobile menu)
- [ ] **Testar carousel** (AppShowcase) em diferentes resoluções
- [ ] **Testar cross-browser** (Chrome, Firefox, Safari, Edge)

---

## Resumo do Estado Atual

| Componente | Estado | Notas |
|---|---|---|
| **Home Page** | ✅ Funcional | 8 secções completas |
| **Player Page** | ⚠️ Parcial | Hero + Features, faltam screenshots reais |
| **Coach Page** | ⚠️ Parcial | Hero + Features, faltam screenshots reais |
| **Scout Page** | ⚠️ Parcial | Hero + Features, faltam screenshots reais |
| **Navbar** | ✅ Funcional | Navegação âncora não funciona nas sub-páginas |
| **Footer** | ⚠️ Parcial | Links sociais e contacto apontam para `#` |
| **SEO** | ❌ Mínimo | Faltam meta tags, favicon, open graph |
| **Performance** | ⚠️ Pode melhorar | CSS pesado, imports não otimizados |
| **Acessibilidade** | ⚠️ Pode melhorar | Faltam aria-labels, contraste a verificar |
| **Testes** | ❌ Inexistente | Sem testes automatizados |
| **Deploy** | ❌ Não configurado | Sem pipeline de CI/CD |
