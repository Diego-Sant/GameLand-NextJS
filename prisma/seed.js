const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function destaques() {
    try {

        await prisma.products.create({
            data: {
                id: 70,
                title: "Cyberpunk 2077",
                desc: "Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto que se passa em Night City, uma megalópole perigosa onde todos são obcecados por poder, glamour e alterações corporais.",
                img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4hk8.png",
                img2: "https://images.igdb.com/igdb/image/upload/t_original/v76vzx1jwsi05aarxv5r.jpg",
                img3: "https://images.igdb.com/igdb/image/upload/t_original/c6ruovzsugjlnlcmm8b0.jpg",
                img4: "https://images.igdb.com/igdb/image/upload/t_original/ts8wtae3t6aghttvtt2s.jpg",
                img5: "https://images.igdb.com/igdb/image/upload/t_original/ar6qv.jpg",
                price: 19990,
                genres: ["Aventura", "RPG", "Shooter", "Mundo aberto", "Ação", "Sandbox", "Ficção Científica"],
                gameMode: ["Um jogador"],
                isNew: false,
                publisher: ["CD Projekt"],
                consoles: ["Playstation", "Xbox"],
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