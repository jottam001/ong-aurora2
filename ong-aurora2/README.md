
# Aurora — Entrega Conforme Especificações (v2)

## Estrutura
```
aurora_conforme_v2/
  index.html         (home/galeria/cards)
  projetos.html      (grade de projetos)
  cadastro.html      (form + validação + máscaras)
  artigo.html        (layout específico de conteúdo)
  assets/
    css/
      tokens.css     (variáveis: cores, tipografia, espaçamento)
      base.css       (reset + tipografia base)
      layout.css     (grid 12 colunas, flex, 5 breakpoints)
      nav.css        (menu, dropdown, mobile)
      components.css (cards, botões, badges, alerts, toast, modal)
      forms.css      (inputs e validação visual)
      utilities.css  (helpers e col-*)
    js/
      main.js        (hambúrguer, dropdown com teclado, toast/modal)
      masks.js       (máscaras do usuário)
```

## Requisitos atendidos
- **Sistema de Design**: `tokens.css` (8+ cores, 5 tamanhos tipográficos, espaçamento 8–64px).
- **Layout Responsivo**: `layout.css` com **Grid 12 colunas**, **Flex** e **5 breakpoints** (1200/992/768/576/420).
- **Navegação**: `nav.css` + `main.js` com **submenu dropdown** (desktop) e **hambúrguer** (mobile), incluindo **navegação por teclado** (ArrowDown/Escape).
- **Componentes**: `components.css` com **cards, botões (hover/focus/active/disabled), alerts, toast, modal, badges/tags**.
- **Formulários**: `forms.css` com estilização e **validação visual**; `masks.js` aplica máscaras.
- **Leiautes específicos**: home (galeria), projetos (cards), cadastro (form), **artigo (texto + sidebar)**.

## Como publicar
Abra `index.html` localmente ou publique a pasta em GitHub Pages. Caminhos são relativos à raiz do site.
