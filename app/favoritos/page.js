"use client"

import FavoriteItem from "@/components/FavoriteItem"
import isLoading from "@/hooks/loading"

import MainLayout from "../layouts/MainLayout"

import { useWishList } from "@/context/wishlist"

import { useEffect } from "react"
import ClientOnly from "@/components/ClientOnly"
import OtherProducts from "@/components/OtherProducts"

export default function Favorites() {
    const wishlist = useWishList();

    useEffect(() => {
        isLoading(true);
        wishlist.getWishList();
        wishlist.wishListTotal();
        isLoading(false);
    }, [wishlist]);

    const products = [
        {
            id: 1, 
            title: "The Expanse: A Telltale Series",
            desc: "In the near future on the outskirts of the asteroid belt, a bloody mutiny breaks loose on the Artemis. You take the role of XO Camina Drummer, where your choices determine the fate of the ship. What will you do with the truth, Bosmang?",
            isNew: true,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6j63.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_original/scf13g.jpg",
            price: 100.00
        },
        {
            id: 2, 
            title: "The Legend of Zelda: Tears of the Kingdom",
            desc: "The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild. The setting for Link’s adventure has been expanded to include the skies above the vast lands of Hyrule.",
            isNew: false,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_original/scaoj8.jpg",
            oldPrice: 200.00,
            price: 170.00
        },
    ]

  return (
    <div className="bg-[#121212] text-white">
        <MainLayout>
            <div className="flex items-center mt-4 mb-4 justify-center font-bold text-4xl">
                Lista de desejos
            </div>
            {wishlist.wishListTotal() === 0 ?
                <div className="relative flex items-center justify-center mt-10 mb-5 text-lg gap-2">
                    <p>Não há nenhum jogo na lista de desejos!</p>
                </div> :  
            <div className="relative flex items-baseline justify-between gap-2">
                <ClientOnly>
                    <div className="w-[96.9%]">
                        {wishlist.getWishList().map((products) => (
                            <FavoriteItem key={products.id} products={products} />
                        ))}
                    </div>
                </ClientOnly>
            </div>
            }
            <OtherProducts />
        </MainLayout>
    </div>
  )
}