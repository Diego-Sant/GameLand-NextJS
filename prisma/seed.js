const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function destaques() {
    try {

        await prisma.products.create({
            data: {
                id: 1,
                title: "NBA 2K24: Kobe Bryant Edition",
                desc: "Reúna sua equipe e experimente o passado, presente e futuro da cultura do basquete em NBA 2K24. Desfrute de muita ação pura e autêntica, e de opções personalizadas ilimitadas para o seu MyPLAYER em MyCAREER. Colete uma impressionante variedade de lendas e monte sua equipe perfeita em MyTEAM. Sinta um gameplay mais responsivo e visuais aprimorados ao jogar com suas equipes favoritas da NBA e da WNBA em PLAY NOW.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6q5w.png",
                img2: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/ss_496d235425a35e33967abdb4faadddce7f5a64e8.1920x1080.jpg?t=1692752965",
                img3: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/ss_32b90f2ad44ae3cb8c816754b66ee1ff99595813.1920x1080.jpg?t=1692752965",
                img4: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/ss_f97fc2c5c541dad1e487e4144d2f8bce1cbc7327.1920x1080.jpg?t=1692752965",
                price: 299.90,
                genres: ["Simulador", "Esportes"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: true,
                publisher: ["2K"]
            },
        });

        await prisma.products.create({
            data: {
                id: 2,
                title: "Marvel's Spider-Man 2",
                desc: "Os Spiders Peter Parker e Miles Morales vão testar a força que têm, com e sem a máscara, enquanto lutam para salvar a cidade, um ao outro e as pessoas que amam do monstruoso Venom e de uma perigosa e nova ameaça: os simbiontes.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m8d.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scfehq.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scfehp.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scfeho.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scmwdi.jpg",
                price: 349.90,
                genres: ["Ação", "Hack & Slash/Beat 'em up", "Aventura", "Mundo aberto", "Stealth"],
                gameMode: ["Um jogador"],
                isNew: true,
                publisher: ["Sony Interactive Entertainment"]
            },
        });

        await prisma.products.create({
            data: {
                id: 3,
                title: "EA SPORTS FC™ 24",
                desc: "O EA SPORTS FC™ 24 traz o Jogo de Todo Mundo: a experiência mais realista de futebol com o HyperMotionV, PlayStyles otimizada pela Opta, e uma Frostbite™ Engine melhorada.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6qqa.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scnbfq.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scnbfr.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scnbfs.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scnbfv.jpg",
                price: 359.00,
                genres: ["Simulador", "Esportes"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: true,
                publisher: ["Electronic Arts"]
            },
        });

        await prisma.products.create({
            data: {
                id: 4,
                title: "Pikmin 4",
                desc: "Conheça Pikmin, pequenas criaturas parecidas com plantas que você pode cultivar, colher, comandar e dominar seus inimigos! Esses curiosos ajudantes vêm em diferentes tipos - o fogo não é problema para os Pikmin Vermelhos, e os novos Pikmin de Gelo podem congelar inimigos e o ambiente. Use o poder miniatura de seus Pikmin (e um pouco de estratégia) para explorar este misterioso planeta.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co657e.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scix21.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scix20.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scix22.jpg",
                price: 299.00,
                genres: ["Aventura", "Estratégia", "Ficção Científica"],
                gameMode: ["Um jogador"],
                isNew: true,
                publisher: ["Nintendo"]
            },
        });

        await prisma.products.create({
            data: {
                id: 5,
                title: "Starfield",
                desc: "Neste jogo de RPG de próxima geração, ambientado entre as estrelas, crie qualquer personagem que desejar e explore com uma liberdade incomparável, embarcando em uma jornada épica para desvendar o maior mistério da humanidade.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vv.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scmlzj.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/ygiajg3ypevvmhoo0cea.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/schdmh.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/schdmi.jpg",
                price: 299.00,
                genres: ["Ação", "RPG", "Shooter", "Shoot 'em up", "Sandbox", "Mundo aberto", "Ficção Científica"],
                gameMode: ["Um jogador"],
                isNew: true,
                publisher: ["Bethesda Softworks"]
            },
        });

        await prisma.products.create({
            data: {
                id: 6,
                title: "The Legend of Zelda: Tears of the Kingdom",
                desc: "The Legend of Zelda: Tears of the Kingdom é a sequência de The Legend of Zelda: Breath of the Wild. O cenário para a aventura de Link foi expandido para incluir os céus acima das vastas terras de Hyrule.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scaoj8.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc6lnr.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scaoj7.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scaoj6.jpg",
                price: 357.99,
                genres: ["Ação", "Aventura", "RPG", "Mundo aberto", "Ficção Científica"],
                gameMode: ["Um jogador"],
                isNew: true,
                publisher: ["Nintendo"]
            },
        });

        await prisma.products.create({
            data: {
                id: 7,
                title: "Remnant II",
                desc: "Remnant II é a continuação do grande sucesso de vendas Remnant: From the Ashes. Agora, os sobreviventes da humanidade têm que enfrentar novas e mortais criaturas, além de chefes impossíveis em mundos aterrorizantes.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6lnp.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scka8a.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scka85.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scka86.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scka81.jpg",
                price: 199.99,
                genres: ["Ação", "Aventura", "Shooter", "RPG"],
                gameMode: ["Um jogador", "Multijogador"],
                isNew: true,
                publisher: ["Gearbox Publishing"]
            },
        });

        await prisma.products.create({
            data: {
                id: 8,
                title: "Red Dead Redemption 2",
                desc: "Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/h8f9uojkzvaau8pxsyxi.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/c9xalka7stjkx4mes7kp.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/dhw6ucx9laj5esv6rngn.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/x8xczj2a0y6g9rnhboko.jpg",
                price: 299.90,
                genres: ["Ação", "Aventura", "Shooter", "Mundo aberto", "RPG"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["Rockstar Games"]
            },
        });

        await prisma.products.create({
            data: {
                id: 9,
                title: "Baldur's Gate 3",
                desc: "Reúna o seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo e traição, sacrifício e sobrevivência, e o atrativo do poder absoluto.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/sc81fe.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc81ff.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sc81fn.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/sc81fk.jpg",
                price: 199.99,
                genres: ["Ação", "Aventura", "RPG", "RPG por Turnos", "Estratégia"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: true,
                publisher: ["Larian Studios"]
            },
        });

        await prisma.products.create({
            data: {
                id: 10,
                title: "Captain Tsubasa: Rise of New Champions",
                desc: "Baseado na aclamada série de anime, Captain Tsubasa: Rise of New Champions é um jogo de ação futebolística com gráficos de última geração e superjogadas que vão agradar a todos os gostos.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co235r.png",
                img2: "https://cdn.cloudflare.steamstatic.com/steam/apps/1163550/ss_27073cf19100f880055557b424ff54ea9b7603d0.1920x1080.jpg?t=1668639646",
                img3: "https://cdn.cloudflare.steamstatic.com/steam/apps/1163550/ss_626fb9f532f2e28ceca28a3b9b2793a17a912f95.1920x1080.jpg?t=1668639646",
                img4: "https://cdn.cloudflare.steamstatic.com/steam/apps/1163550/ss_70f9279f547b4e7f46223819ce0bfbdd28239a7b.1920x1080.jpg?t=1668639646",
                img5: "https://cdn.cloudflare.steamstatic.com/steam/apps/1163550/ss_b134ef95b98f9de03bb3c52bbc33abbd2542078a.1920x1080.jpg?t=1668639646",
                price: 179.90,
                genres: ["Arcade", "RPG", "Esportes", "Ação"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["BANDAI NAMCO Entertainment"]
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

        await prisma.products.create({
            data: {
                id: 11,
                title: "Forza Horizon 5",
                desc: "Explore um mundo aberto vibrante nas terras mexicanas com corridas divertidas e sem limites enquanto pilota os melhores carros do mundo. Acelere para o Parque Hot Wheels e corra nas pistas mais radicais já criadas. Requer Forza Horizon 5, expansão vendida separadamente.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3ofx.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scahho.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/scahhp.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scahhq.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scahhs.jpg",
                oldPrice: 249.00,
                price: 124.50,
                genres: ["Corrida", "Ação", "Mundo aberto"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["Xbox Game Studios"]
            },
        });

        await prisma.products.create({
            data: {
                id: 12,
                title: "No Man's Sky",
                desc: "No Man's Sky é um jogo de ficção científica de exploração e sobrevivência num universo com geração processual infinita.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6zat.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/vg61reygvduwka9pv7by.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/byull3k2xzfndgivkdlw.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/xufkotfn5udk2aijb6f0.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/hlv3vnzamh1l3pdc2omn.jpg",
                oldPrice: 162.00,
                price: 81.00,
                genres: ["Aventura", "Indie", "Mundo aberto", "RPG", "Simulador", "Ação", "Sandbox", "Ficção Científica", "Sobrevivência"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["Hello Games"]
            },
        });

        await prisma.products.create({
            data: {
                id: 13,
                title: "No Man's Sky",
                desc: "No Man's Sky é um jogo de ficção científica de exploração e sobrevivência num universo com geração processual infinita.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6zat.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/vg61reygvduwka9pv7by.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/byull3k2xzfndgivkdlw.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/xufkotfn5udk2aijb6f0.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/hlv3vnzamh1l3pdc2omn.jpg",
                oldPrice: 162.00,
                price: 81.00,
                genres: ["Aventura", "Indie", "Mundo aberto", "RPG", "Simulador", "Ação", "Sandbox", "Ficção Científica", "Sobrevivência"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["Hello Games"]
            },
        });

        await prisma.products.create({
            data: {
                id: 14,
                title: "House Flipper",
                desc: "House Flipper é uma chance única de você se tornar uma equipe de reformas de uma pessoa só. Compre, conserte e reforme casas devastadas. Dê à elas uma segunda vida e as venda para obter lucro!",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4xdy.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/xkkvjsreeoaeyjajogmf.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/kndrjo9i9lzr4aqtrdo2.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/fago9rlfsv7c2reqvonx.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/mhl0y3nyqc04h4j2t0ws.jpg",
                oldPrice: 73.99,
                price: 22.19,
                genres: ["Indie", "Simulador", "Negócios"],
                gameMode: ["Um jogador"],
                isNew: false,
                publisher: ["Frozen District", "PlayWay S.A."]
            },
        });

        await prisma.products.create({
            data: {
                id: 15,
                title: "Cult of the Lamb",
                desc: "Crie seu próprio culto em uma terra de falsos profetas, aventurando-se por regiões misteriosas e diversas para criar uma comunidade fiel de Seguidores da floresta e para propagar sua Palavra e se tornar o único culto verdadeiro.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co55md.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/sccrh5.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sccrhg.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sccrhb.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/sccrh8.jpg",
                oldPrice: 64.95,
                price: 42.21,
                genres: ["Aventura", "Hack & Slash/Beat 'em up", "Indie", "RPG", "Simulador", "Estratégia"],
                gameMode: ["Um jogador"],
                isNew: false,
                publisher: ["Devolver Digital"]
            },
        });

        await prisma.products.create({
            data: {
                id: 16,
                title: "ICARUS",
                desc: "Um mundo alienígena pronto para ser conquistado. Explore, sobreviva e faça a sua fortuna, se tiver coragem. Icarus é um jogo de sobrevivência cooperativo multiplayer com progressão persistente no metajogo.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vsi.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/sc8bol.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc8bop.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scap2v.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scap2t.jpg",
                oldPrice: 101.99,
                price: 68.33,
                genres: ["Aventura", "Simulador", "Ação", "Mundo aberto", "Sandbox", "Sobrevivência"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: false,
                publisher: ["RocketWerkz"]
            },
        });

        await prisma.products.create({
            data: {
                id: 17,
                title: "Psychonauts 2",
                desc: "Misturando missões excêntricas e conspirações misteriosas, Psychonauts 2 é um jogo de aventura do tipo plataforma com estilo cinematográfico e uma variedade de poderes psíquicos personalizáveis.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1sod.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/sc8g29.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc8g23.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sc8g24.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/ar4lj.jpg",
                oldPrice: 249.00,
                price: 62.25,
                genres: ["Aventura", "Plataforma", "Ação", "Comédia"],
                gameMode: ["Um jogador"],
                isNew: false,
                publisher: ["Xbox Game Studios"]
            },
        });

        await prisma.products.create({
            data: {
                id: 18,
                title: "Assassin's Creed Valhalla",
                desc: "Torne-se um Viking lendário em uma busca por glória. Saqueie seus inimigos, expanda seu povoado e construa seu poder político.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ed3.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/ar6rp.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc8gfb.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/sc8gfc.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/ar746.jpg",
                oldPrice: 279.95,
                price: 69.98,
                genres: ["Aventura", "RPG", "Ação", "História", "Mundo aberto", "Stealth"],
                gameMode: ["Um jogador"],
                isNew: false,
                publisher: ["Ubisoft Entertainment"]
            },
        });

        await prisma.products.create({
            data: {
                id: 19,
                title: "Marvel's Spider-Man: Miles Morales",
                desc: "A mais recente aventura no universo do Homem-Aranha irá construir e expandir sobre 'Marvel's Spider-Man' através de uma história completamente nova. Os jogadores irão vivenciar a ascensão de Miles Morales enquanto ele domina novos poderes para se tornar o seu próprio Homem-Aranha.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dwe.png",
                img2: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/ss_4198c024c13b1477240cf043cd4f7867913f77e1.1920x1080.jpg?t=1672784176",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sc8bir.jpg",
                img4: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/ss_a240e0c6f37569493ed749d9317718d8ce9f5d18.1920x1080.jpg?t=1672784176",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/sc8bis.jpg",
                oldPrice: 249.90,
                price: 94.91,
                genres: ["Aventura", "Hack & Slash/Beat 'em up", "Ação", "Mundo aberto", "Stealth"],
                gameMode: ["Um jogador"],
                isNew: false,
                publisher: ["PlayStation PC LLC"]
            },
        });

        await prisma.products.create({
            data: {
                id: 20,
                title: "F1® 23",
                desc: "Pise fundo no acelerador com o EA SPORTS™ F1® 23, o jogo oficial do 2023 FIA Formula One World Championship™. O novo capítulo do modo de história 'Ponto de Frenagem' oferece alta velocidade e rivalidades acirradas.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6g3a.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/scmdxh.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/sclljt.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/scmdxg.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/scmdxl.jpg",
                oldPrice: 359.90,
                price: 215.40,
                genres: ["Corrida", "Simulador", "Esportes"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: true,
                publisher: ["Electronic Arts"]
            },
        });
        
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

destaques();
promocoes();