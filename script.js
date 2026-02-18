document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-content');

    // Verifica se o arquivo de dados foi carregado
    if (typeof conteudoPagina === 'undefined' || !conteudoPagina) {
        mainContainer.innerHTML = '<p style="text-align:center; padding:20px;">⚠️ Erro: Dados não encontrados. Verifique se o arquivo .js correto está vinculado.</p>';
        return;
    }

    // Limpa o container (loading...)
    mainContainer.innerHTML = '';

    // Itera sobre cada seção de dados (pode ser 1 ou várias)
    conteudoPagina.forEach(tema => {
        
        // Cria a Seção Principal
        const section = document.createElement('section');
        section.style.borderTopColor = tema.corTema;

        // Cabeçalho da Seção (Barra Colorida)
        const header = document.createElement('div');
        header.className = 'section-header';
        header.style.backgroundColor = tema.corTema;
        header.innerHTML = `<h2>${tema.icone} ${tema.titulo}</h2>`;

        // Corpo da Seção (Grid)
        const body = document.createElement('div');
        body.className = 'section-body';

        // --- Coluna de Notícias ---
        const newsCol = document.createElement('div');
        newsCol.innerHTML = '<h3>📰 Últimas Notícias</h3>';
        
        if (tema.noticias && tema.noticias.length > 0) {
            tema.noticias.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <img src="${news.imagem}" alt="Imagem notícia" class="news-img">
                    <div class="news-content">
                        <small>📅 ${news.data}</small>
                        <h4>${news.titulo}</h4>
                        <p>${news.resumo}</p>
                    </div>
                `;
                newsCol.appendChild(newsItem);
            });
        } else {
            newsCol.innerHTML += '<p>Sem notícias recentes.</p>';
        }

        // --- Coluna de Links ---
        const linksCol = document.createElement('div');
        linksCol.innerHTML = '<h3>🔗 Links Importantes</h3>';

        if (tema.links && tema.links.length > 0) {
            tema.links.forEach(link => {
                const btn = document.createElement('a');
                btn.href = link.url;
                btn.className = 'link-btn';
                btn.target = '_blank';
                btn.textContent = link.nome;
                btn.style.backgroundColor = tema.corTema; // Botão na cor do tema
                linksCol.appendChild(btn);
            });
        } else {
            linksCol.innerHTML += '<p>Sem links cadastrados.</p>';
        }

        // Montagem final
        body.appendChild(newsCol);
        body.appendChild(linksCol);
        section.appendChild(header);
        section.appendChild(body);
        mainContainer.appendChild(section);
    });
});