# SEO do projeto Telmig

Domínio configurado: `https://www.telmiginternet.com.br`.

## Arquivos

- `index.html`: metadados iniciais da Home, idioma pt-BR, favicon, canonical, Open Graph, Twitter Cards e JSON-LD.
- `src/seo/site.js`: domínio, descrições, metadados por rota e dados estruturados.
- `src/components/SeoMetadata.jsx`: atualiza o head quando a rota muda, inclusive ao voltar e avançar no navegador.
- `public/robots.txt`: permite rastreamento e informa o sitemap.
- `public/sitemap.xml`: Home, páginas legais e os três artigos atuais.
- `public/favicon.svg`: letra T fornecida no projeto, com a cor da marca para legibilidade.
- `public/logo.webp`: cópia da logo fornecida, com URL pública estável para compartilhamento e dados estruturados.

## Manutenção

Ao adicionar um post em `src/data/blogPosts.js`, o título, descrição, banner, canonical e JSON-LD desse artigo serão definidos pelos seus dados. Adicione também a URL em `public/sitemap.xml`.

A página Empresas está em preparação e recebeu `noindex, follow`; não foi incluída no sitemap. Quando o conteúdo estiver pronto, ajuste essa regra em `src/seo/site.js` e inclua a rota no sitemap. Artigos inexistentes também recebem `noindex` após a execução do JavaScript.

Não foram incluídos preços, avaliações ilustrativas ou dados comerciais não confirmados nos dados estruturados. Datas e autores dos posts não foram inventados.

Se mudar o domínio, atualize `src/seo/site.js`, as URLs absolutas do `index.html`, `robots.txt` e `sitemap.xml`.

## Limites e publicação

O projeto continua sendo uma SPA Vite. A Home tem os metadados no HTML inicial. Nas outras rotas, os metadados são atualizados após a execução do JavaScript. Robôs de compartilhamento que não executam JavaScript poderão mostrar os metadados da Home ao compartilhar um artigo. Prévias específicas nesses robôs exigem HTML por rota, por pré-renderização ou renderização no servidor, não implementadas nesta tarefa.

O fallback da hospedagem deve permitir abrir e atualizar as rotas diretamente. Respostas 404 reais para URLs inexistentes dependem da hospedagem; o `noindex` de uma rota inexistente não altera o status HTTP.

Os arquivos públicos serão copiados pelo Vite para a entrega quando um build for autorizado. Nenhum build foi executado nesta tarefa. Após publicar, conferir URLs públicas, favicons e dados estruturados, e enviar o sitemap no Google Search Console. A configuração não garante indexação ou posição nos resultados.

Referências:

- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/organization
