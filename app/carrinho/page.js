"use client"

import SimilarProducts from "@/components/SimilarProducts"
import MainLayout from "../layouts/MainLayout"
import CartItem from "@/components/CartItem"
import Link from "next/link"

export default function Favorite() {

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
                    Carrinho
                </div>
                <div className="relative flex flex-col lg:flex-row justify-between gap-2">
                    <div className="2xl:w-[45%] xl:w-[55%] lg:w-[70%] w-[98.5%] ml-1 md:ml-2">
                        {products.map((products) => (
                            <CartItem key={products.id} products={products} />
                        ))}
                    </div>
                    <div className="2xl:w-[51.9%] xl:w-[41.9%] lg:w-[30%] w-[98.5%] ml-1 md:ml-2 lg:mt-2">
                        <div className="bg-[#1f1f1f] p-4 border lg:mr-3">
                            <Link href="/checkout" className='w-full p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer disabled:bg-[#7b61ff]/70 disabled:cursor-default hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500] mb-3'>
                                Finalizar compra
                            </Link>
                            <div className="flex font-semibold items-center justify-between mt-4 text-md mb-4">
                                <div>Jogos: (2)</div>
                            </div>
                            <hr className="mb-4" />
                            <div className="flex justify-between items-center">Total: <span className="font-bold text-2xl text-[#8900ff]">R$200,00</span></div>
                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </div>
    )
  }