
# ong-aurora2 — Publicação no GitHub Pages

## Como publicar (sem terminal)
1. Crie um repositório chamado **ong-aurora2** no GitHub.
2. Faça **Upload** de todos os arquivos desta pasta (incluindo `.nojekyll`).  
3. Vá em **Settings → Pages**:
   - Em *Source*, selecione **Deploy from a branch**.
   - Escolha **Branch: main** e **/ (root)**. Salve.
4. Seu site ficará disponível em:
   `https://<seu-usuario>.github.io/ong-aurora2/`

## Como publicar (com git)
```bash
git init
git branch -M main
git add .
git commit -m "Publicação ong-aurora2 — design system, grid 12, componentes"
git remote add origin https://github.com/<seu-usuario>/ong-aurora2.git
git push -u origin main
# Ative o Pages em Settings → Pages → Deploy from a branch → main / root
```

## Estrutura
```
ong-aurora2/
  index.html
  projetos.html
  cadastro.html
  artigo.html
  assets/
    css/ (tokens, base, layout, nav, components, forms, utilities)
    js/  (main.js, masks.js)
  .nojekyll
```
