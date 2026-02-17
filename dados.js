// ARQUIVO DE DADOS - EDITE AQUI
// Dica: Para adicionar uma nova notícia, copie o bloco entre { } e cole antes do anterior.

const siteData = [
    {
        id: "musica",
        titulo: "Música & Piano",
        icone: "🎹",
        corTema: "#a29bfe", // Roxo Uva
        noticias: [
            {
                data: "20 Fev 2026",
                titulo: "Estudando Chopin",
                resumo: "Iniciei os estudos do Noturno Op. 9 No. 2. A mão esquerda é um desafio!",
                imagem: "https://placehold.co/150x150/a29bfe/ffffff?text=Piano" 
            },
            {
                data: "15 Fev 2026",
                titulo: "Novo setup de gravação",
                resumo: "Instalei uma interface de áudio para gravar o piano digital com mais qualidade.",
                imagem: "https://placehold.co/150x150/6c5ce7/ffffff?text=Audio"
            }
        ],
        links: [
            { nome: "Minha Playlist Favorita", url: "#" },
            { nome: "Partituras Gratuitas", url: "#" },
            { nome: "Canal de Teoria Musical", url: "#" }
        ]
    },
    {
        id: "overland",
        titulo: "Overland - Aventura",
        icone: "🚙",
        corTema: "#f8b24f", // Laranja
        noticias: [
            {
                data: "18 Fev 2026",
                titulo: "Adventure Trip",
                resumo: "O rack de teto e o novo toldo chegaram. Instalação marcada para sábado.",
                imagem: "L200_Snow.png"
            },{
                data: "18 Fev 2026",
                titulo: "Upgrade na L200",
                resumo: "O rack de teto e o novo toldo chegaram. Instalação marcada para sábado.",
                imagem: "https://placehold.co/150x150/f8b24f/ffffff?text=L200"
            },
            {
                data: "10 Fev 2026",
                titulo: "Rota Patagônia definida",
                resumo: "Finalizei o traçado pelo Google Earth passando por Ushuaia e Torres del Paine.",
                imagem: "https://placehold.co/150x150/e17055/ffffff?text=Mapa"
            }
        ],
        links: [
            { nome: "WikiOverland", url: "#" },
            { nome: "Previsão do Tempo (Windy)", url: "https://www.windy.com" },
            { nome: "Checklist de Viagem", url: "#" }
        ]
    },
    {
        id: "tecnologia",
        titulo: "Tecnologia Geral",
        icone: "💻",
        corTema: "#00cec9", // Azul Turquesa
        noticias: [
            {
                data: "22 Fev 2026",
                titulo: "Migrando para Linux",
                resumo: "Testando novas distribuições para o ambiente de desenvolvimento.",
                imagem: "https://placehold.co/150x150/00cec9/ffffff?text=Linux"
            }
        ],
        links: [
            { nome: "Stack Overflow", url: "https://stackoverflow.com" },
            { nome: "GitHub Trending", url: "https://github.com/trending" }
        ]
    },
    {
        id: "tecnologia-ia",
        titulo: "Inteligência Artificial",
        icone: "🤖",
        corTema: "#ff7675", // Vermelho Suave
        noticias: [
            {
                data: "25 Fev 2026",
                titulo: "LLMs no Código",
                resumo: "Experimentando como usar IA para refatorar código legado de forma segura.",
                imagem: "https://placehold.co/150x150/ff7675/ffffff?text=AI+Code"
            },
            {
                data: "20 Fev 2026",
                titulo: "Geração de Imagens",
                resumo: "Comparativo entre MidJourney e DALL-E 3 para criar assets de jogos.",
                imagem: "https://placehold.co/150x150/d63031/ffffff?text=GenAI"
            }
        ],
        links: [
            { nome: "Hugging Face", url: "https://huggingface.co" },
            { nome: "Papers with Code", url: "https://paperswithcode.com" },
            { nome: "OpenAI Blog", url: "https://openai.com/blog" }
        ]
    }
];