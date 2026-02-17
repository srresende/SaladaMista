// DADOS DO SITE - É AQUI QUE VOCÊ VAI EDITAR NO FUTURO
const dadosSaladaMista = [
    {
        id: "musica",
        titulo: "Música & Piano 🎹",
        corBorda: "#ff6b6b", // Vermelho Melancia
        noticias: [
            { data: "17/02/2026", texto: "Começando a estudar notação clássica mais a fundo." },
            { data: "10/02/2026", texto: "Playlist nova de Jazz para programar disponível." }
        ],
        links: [
            { nome: "Minha Playlist Spotify", url: "#" },
            { nome: "Aulas de Teoria Musical", url: "#" }
        ]
    },
    {
        id: "overland",
        titulo: "Overland & Aventura 🚙",
        corBorda: "#f8b24f", // Laranja
        noticias: [
            { data: "15/02/2026", texto: "Pesquisa de toldos para a L200 finalizada. O modelo asa de morcego venceu." },
            { data: "01/02/2026", texto: "Planejamento da rota Patagônia iniciado: Ushuaia na mira!" }
        ],
        links: [
            { nome: "Mapa da Carretera Austral", url: "#" },
            { nome: "Equipamentos Camping", url: "#" },
            { nome: "Canal Adventure Trip", url: "#" }
        ]
    },
    {
        id: "tecnologia",
        titulo: "Tecnologia Geral 💻",
        corBorda: "#a29bfe", // Roxo Uva
        noticias: [
            { data: "20/02/2026", texto: "Estudando novas arquiteturas de servidores." },
            { data: "05/02/2026", texto: "Novo setup de desenvolvimento configurado." }
        ],
        links: [
            { nome: "Documentação Python", url: "https://www.python.org/" },
            { nome: "GitHub Trending", url: "https://github.com/trending" }
        ]
    },
    {
        id: "tecnologia-ia",
        titulo: "Tecnologia - IA 🤖",
        corBorda: "#cbf078", // Verde Limão
        noticias: [
            { data: "16/02/2026", texto: "Testando prompts para geração de código complexo." },
            { data: "12/02/2026", texto: "Acompanhando o lançamento de novos modelos de LLM." }
        ],
        links: [
            { nome: "Notícias de IA", url: "#" },
            { nome: "Ferramentas de Generative AI", url: "#" }
        ]
    }
];

// LÓGICA DO SITE (NÃO PRECISA MEXER AQUI, SÓ SE QUISER MUDAR O COMPORTAMENTO)
const container = document.getElementById('conteudo-principal');

dadosSaladaMista.forEach(secao => {
    // Criação do HTML para cada seção
    const sectionHTML = `
        <section id="${secao.id}" style="border-top-color: ${secao.corBorda}">
            <h2>${secao.titulo}</h2>
            
            <div class="grid-conteudo">
                <div class="card">
                    <h3>📢 Últimas Notícias</h3>
                    <ul class="lista-noticias">
                        ${secao.noticias.map(noticia => `
                            <li>
                                <div class="data">${noticia.data}</div>
                                <div>${noticia.texto}</div>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="card">
                    <h3>🔗 Links Importantes</h3>
                    <div class="lista-links">
                        ${secao.links.map(link => `
                            <a href="${link.url}" class="btn-link" style="background-color: ${secao.corBorda}" target="_blank">
                                ${link.nome}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    `;

    container.innerHTML += sectionHTML;
});