const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function destaques() {
    try {

        await prisma.products.create({
            data: {
                id: 41,
                title: "Super Mario Odyssey",
                desc: "Explore lugares incríveis distantes do Reino dos Cogumelos enquanto você se junta a Mario e seu novo aliado Cappy em uma grande aventura 3D pelo mundo. Utilize novas habilidades incríveis, como o poder de capturar e controlar objetos, animais e inimigos, para coletar Power Moons e assim fortalecer o dirigível Odyssey e salvar a Princesa Peach dos planos de casamento do Bowser!",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/hj3spi7odlvp4pfvnwtv.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/tznt5qzxdqdzqxsy1crl.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/qgcn3akcfv4rvojqdbvb.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/tcgnbkmz7f0tgglfol9m.jpg",
                price: 29900,
                genres: ["Aventura", "Plataforma", "Sandbox", "Ação", "Mundo aberto"],
                gameMode: ["Um jogador", "Multijogador"],
                isNew: false,
                publisher: ["Nintendo"],
                consoles: ["Nintendo"],
                bestSell: true
            },
        });

        await prisma.products.create({
            data: {
                id: 42,
                title: "Super Mario Bros.™ Wonder",
                desc: "Quando você toca em uma Wonder Flower no jogo, as maravilhas do mundo se desbloqueiam - tubos podem ganhar vida, hordas de inimigos podem aparecer, personagens podem mudar sua aparência, por exemplo - transformando a jogabilidade de maneiras imprevisíveis. Em cada fase, há empolgação e surpresas diferentes esperando por você. Super Mario Bros. Wonder apresenta a Princesa Peach, a Princesa Daisy e o Yoshi como personagens jogáveis, além de personagens familiares como Mario, Luigi e Toad.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6nnl.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scn3et.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scn3es.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scn3ev.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scn3ew.jpg",
                price: 29900,
                genres: ["Plataforma", "Ação"],
                gameMode: ["Um jogador", "Multijogador"],
                isNew: true,
                publisher: ["Nintendo"],
                consoles: ["Nintendo"],
                bestSell: false
            },
        });

        await prisma.products.create({
            data: {
                id: 43,
                title: "Animal Crossing™: New Horizons",
                desc: "Escape para uma ilha deserta e crie seu próprio paraíso enquanto você explora, cria e personaliza em Animal Crossing: New Horizons. Sua escapada na ilha possui uma abundância de recursos naturais que podem ser usados para criar desde ferramentas até confortos para as criaturas. Você pode caçar insetos de madrugada, decorar seu paraíso durante o dia ou desfrutar do pôr do sol na praia enquanto pesca no oceano. O tempo do dia e a estação correspondem à vida real, então cada dia em sua ilha é uma oportunidade para verificar e encontrar novas surpresas durante todo o ano.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wls.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/sc836w.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc836y.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sc6lt7.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/sc6lt8.jpg",
                price: 29900,
                genres: ["Simulador", "Sandbox"],
                gameMode: ["Um jogador", "Multijogador"],
                isNew: false,
                publisher: ["Nintendo"],
                consoles: ["Nintendo"],
                bestSell: false
            },
        });

        await prisma.products.create({
            data: {
                id: 44,
                title: "Resident Evil 4",
                desc: "Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scixzd.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scixzc.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sch7rm.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/sch7rl.jpg",
                price: 24900,
                genres: ["Aventura", "Puzzle", "Shooter", "Ação", "Terror", "Mistério"],
                gameMode: ["Um jogador"],
                isNew: true,
                publisher: ["Capcom"],
                consoles: ["Playstation", "Xbox"],
                bestSell: true
            },
        });

        await prisma.products.create({
            data: {
                id: 45,
                title: "Xenoblade Chronicles 3",
                desc: "Um vasto mundo aguarda em Xenoblade Chronicles 3, o próximo jogo na aclamada série de RPG do desenvolvedor Monolithsoft. Os jogadores assumirão os papéis dos protagonistas Noah e Mio em meio à turbulência entre as nações hostis de Keves e Agnus. Seis personagens provenientes dessas nações participarão de uma grande história com a 'vida' como seu tema central. Explore um novo mundo que conectará os futuros de Xenoblade Chronicles e Xenoblade Chronicles 2.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ocq.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scftr4.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/schng7.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scftr5.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scgp5x.jpg",
                price: 29900,
                genres: ["Aventura", "RPG", "Ação", "Mundo aberto", "Ficção Científica"],
                gameMode: ["Um jogador"],
                isNew: false,
                publisher: ["Nintendo"],
                consoles: ["Nintendo"],
                bestSell: false
            },
        });

        await prisma.products.create({
            data: {
                id: 46,
                title: "Minecraft",
                desc: "Minecraft se concentra em permitir que o jogador explore, interaja e modifique um mapa gerado dinamicamente feito de blocos de um metro cúbico de tamanho. Além dos blocos, o ambiente apresenta plantas, mobs (criaturas) e itens. Algumas atividades no jogo incluem a mineração de minérios, a luta contra mobs hostis e a criação de novos blocos e ferramentas reunindo vários recursos encontrados no jogo.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/sc8d2x.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc8d32.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sc8d30.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/sc8d2z.jpg",
                price: 16020,
                genres: ["Aventura", "Simulador", "Sandbox", "Mundo aberto", "Sobrevivência"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["Mojang Studios"],
                consoles: ["Playstation", "Xbox", "Nintendo"],
                bestSell: true
            },
        });

        await prisma.products.create({
            data: {
                id: 47,
                title: "Terraria",
                desc: "Cave, lute, explore, construa! Nada é impossível neste jogo de aventura repleto de ação. Pacote com quatro também disponível!",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rbo.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scljru.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scljrg.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scljrv.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scljrp.jpg",
                price: 1999,
                genres: ["Aventura", "Indie", "Plataforma", "RPG", "Simulador", "Estratégia", "Ação", "Terror", "Mundo aberto", "Sandbox", "Ficção Científica", "Sobrevivência"],
                gameMode: ["Um jogador", "Multijogador"],
                isNew: false,
                publisher: ["Headup Games", "Re-Logic", "505 Games"],
                consoles: ["Playstation", "Xbox", "Nintendo"],
                bestSell: true
            },
        });

        await prisma.products.create({
            data: {
                id: 48,
                title: "Sid Meier's Civilization VI",
                desc: "Civilization VI é o mais novo episódio da Franquia Civilization, vencedora de diversos prêmios. Expanda seu império, avance sua cultura e vá de encontro aos maiores líderes da história. Será que sua civilização sobreviverá ao teste do tempo?",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5r54.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/s0agy6hyvqmugylrdnga.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/lhakpuiqvolnsgmh7d9q.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/nlfkfcgepdawnh3tzmhh.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/lkrnven77aiaaoqfz2ym.jpg",
                oldPrice: 12900,
                price: 1290,
                genres: ["Simulador", "Estratégia", "RPG por Turnos", "Cidade/Colonização"],
                gameMode: ["Um jogador", "Multijogador"],
                isNew: false,
                publisher: ["Aspyr Media", "2K Games"],
                consoles: ["Playstation", "Xbox", "Nintendo"],
                bestSell: false
            },
        });

        await prisma.products.create({
            data: {
                id: 49,
                title: "Tom Clancy's Rainbow Six Siege",
                desc: "Tom Clancy's Rainbow Six® Siege é um jogo de tiro tático em equipes, realista e de elite, no qual planejamento e execução superiores triunfam.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5cxf.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/uedjgwztllty0irrn5ql.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/fzp2sq9uolajhwfdutku.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/kpzd8v9dxqot9vubcas9.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/botbw3mw1ikiqixqszte.jpg",
                oldPrice: 5999,
                price: 2399,
                genres: ["Shooter", "Estratégia", "Ação", "Guerra"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["Ubisoft Entertainment"],
                consoles: ["Playstation", "Xbox"],
                bestSell: true
            },
        });

        await prisma.products.create({
            data: {
                id: 50,
                title: "XCOM 2",
                desc: "XCOM 2 é a continuação do premiado jogo de estratégia XCOM: Enemy Unknown. Vinte anos se passaram desde que a humanidade perdeu a guerra contra os invasores alienígenas e uma nova ordem mundial agora existe na Terra.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1mvj.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/sc99v8.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc828t.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sc99v9.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/sc99vb.jpg",
                oldPrice: 9990,
                price: 999,
                genres: ["RPG", "Simulador", "Estratégia", "RPG por Turnos", "Ficção Científica"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["2K Games", "Feral Interactive"],
                consoles: ["Playstation", "Xbox", "Nintendo"],
                bestSell: false
            },
        });
        
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

async function promocoes() {
    try {
        
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

async function updates() {
    try {
        
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

destaques();
promocoes();
updates();