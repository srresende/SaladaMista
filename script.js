document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Limpa o conteúdo de carregamento
    app.innerHTML = '';

    // Verifica se os dados foram carregados
    if (typeof siteData === 'undefined') {
        app.innerHTML = '<p style="text-align:center; color:red;">Erro: O arquivo dados.js não foi encontrado!</p>';
        return;
    }

    // Loop principal: Cria uma seção para cada item do array de dados
    siteData.forEach(tema => {
        
        // 1. Cria o elemento da seção
        const section = document.createElement('section');
        section.id = tema.id;
        
        // 2. Cria o cabeçalho da seção (Barra colorida)
        const headerDiv = document.createElement('div');
        headerDiv.className = 'section-header';
        headerDiv.style.backgroundColor = tema.corTema;
        headerDiv.innerHTML = `<h2>${tema.icone} ${tema.titulo}</h2>`;
        
        // 3. Cria o container de conteúdo
        const contentDiv = document.createElement('div');
        contentDiv.className = 'section-content';

        // --- SUB-SEÇÃO: NOTÍCIAS ---
        const newsDiv = document.createElement('div');
        newsDiv.className = 'news-container';
        newsDiv.innerHTML = `<h3>📰 Últimas Notícias</h3>`;

        // Gera o HTML de cada notícia
        if(tema.noticias && tema.noticias.length > 0) {
            tema.noticias.forEach(noticia => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <img src="${noticia.imagem}" alt="${noticia.titulo}" class="news-img">
                    <div class="news-text">
                        <small>${noticia.data}</small>
                        <h4>${noticia.titulo}</h4>
                        <p>${noticia.resumo}</p>
                    </div>
                `;
                newsDiv.appendChild(newsItem);
            });
        } else {
            newsDiv.innerHTML += '<p>Nenhuma notícia recente.</p>';
        }

        // --- SUB-SEÇÃO: LINKS ---
        const linksDiv = document.createElement('div');
        linksDiv.className = 'links-container';
        linksDiv.innerHTML = `<h3>🔗 Links Importantes</h3>`;
        
        const linksList = document.createElement('div');
        linksList.className = 'links-list';

        // Gera os botões de links
        if(tema.links && tema.links.length > 0) {
            tema.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.className = 'link-btn';
                a.target = '_blank'; // Abre em nova aba
                a.innerHTML = `<span>📍 ${link.nome}</span>`;
                linksList.appendChild(a);
            });
        }
        linksDiv.appendChild(linksList);

        // 4. Monta a estrutura final
        contentDiv.appendChild(newsDiv);
        contentDiv.appendChild(linksDiv);
        
        section.appendChild(headerDiv);
        section.appendChild(contentDiv);

        // Adiciona ao site principal
        app.appendChild(section);
    });
});