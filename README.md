# AeroNata — Beta 0.2

Portal responsivo para explorar estéticas visuais, com quatro modos de interface.

## O que funciona
- Catálogo com 13 estéticas.
- Busca por nome, descrição, categoria e contexto.
- Filtros por Digital, Nostalgia, Natureza e Sombria.
- Detalhes de cada estética com origem, características, influência cultural, evolução e curiosidade.
- Dois portais especiais: Frutiger Aero e Internet Retrô.
- Quatro modos visuais: Neon futurista, Frutiger Aero, Convencional e Internet Retrô.
- Alternância de tema claro/escuro.
- Layout adaptável a celular e computador.
- Sem dependências de build ou servidor: HTML, CSS e JavaScript simples.

## Como executar
Extraia o ZIP e abra `index.html` no navegador. Para desenvolvimento local, também pode usar a extensão Live Server do VS Code.

As fontes Manrope e DM Mono são carregadas do Google Fonts; sem internet, o site usa fontes de sistema como alternativa.

## Como publicar gratuitamente — GitHub Pages
1. Crie um repositório público no GitHub, por exemplo `aeronata`.
2. Envie `index.html`, `styles.css`, `script.js` e `README.md` para a raiz.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e `/ (root)`, e salve.
5. Aguarde a publicação; o GitHub mostrará o endereço do site na mesma tela.

## Como adicionar uma estética
No `script.js`, adicione um objeto ao array `aesthetics`. Cada item usa `id`, `name`, `category`, `tags`, `period`, `colors`, `bg`, `summary`, `origin`, `features`, `culture`, `evolution` e `curiosity`.

## Limites
O conteúdo é uma introdução editorial e deve ser ampliado/verificado antes de ser tratado como enciclopédia. As artes dos cartões são composições CSS, não imagens históricas reais. A busca e o catálogo funcionam no navegador, sem banco de dados.

0.4.1.6: Frutiger Metro 1 e 2 agora usam interface totalmente escura. Metro 1 mantém acentos coloridos; Metro 2 mantém acentos azul/ciano. Banners e músicas continuam alternando normalmente.
