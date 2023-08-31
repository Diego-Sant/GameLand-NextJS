const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function destaques() {
    try {

        await prisma.products.create({
            data: {
                id: 21,
                title: "NBA 2K24: Kobe Bryant Edition",
                desc: "Reúna sua equipe e experimente o passado, presente e futuro da cultura do basquete em NBA 2K24. Desfrute de muita ação pura e autêntica, e de opções personalizadas ilimitadas para o seu MyPLAYER em MyCAREER. Colete uma impressionante variedade de lendas e monte sua equipe perfeita em MyTEAM. Sinta um gameplay mais responsivo e visuais aprimorados ao jogar com suas equipes favoritas da NBA e da WNBA em PLAY NOW.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6q5w.png",
                img2: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/ss_496d235425a35e33967abdb4faadddce7f5a64e8.1920x1080.jpg?t=1692752965",
                img3: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/ss_32b90f2ad44ae3cb8c816754b66ee1ff99595813.1920x1080.jpg?t=1692752965",
                img4: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/ss_f97fc2c5c541dad1e487e4144d2f8bce1cbc7327.1920x1080.jpg?t=1692752965",
                price: 29990,
                genres: ["Simulador", "Esportes"],
                gameMode: ["Um jogador", "Multijogador", "Online"],
                isNew: true,
                publisher: ["2K"],
                consoles: ["Xbox", "Playstation", "Nintendo"],
                bestSell: false
            },
        });

        await prisma.products.create({
            data: {
                id: 22,
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
                publisher: ["Sony Interactive Entertainment"],
                consoles: ["Playstation"],
                bestSell: true
            },
        });
        
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