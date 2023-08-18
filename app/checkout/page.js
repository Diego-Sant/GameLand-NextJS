"use client";

import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import CartCheckoutItem from "@/components/CartCheckoutItem";

export default function Checkout() {

    const products = [
        {
            id: 1, 
            title: "The Expanse: A Telltale Series",
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6j63.png",
            price: 100.00
        },
        {
            id: 2, 
            title: "The Legend of Zelda: Tears of the Kingdom",
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            oldPrice: 200.00,
            price: 170.00
        },
    ]

    return (
        <div className="bg-[#121212] text-white">
            <MainLayout>
                <div className="mb-10 mt-6">
                    <div className="flex items-center mt-4 mb-4 justify-center font-bold text-4xl">
                        Finalizar pedido
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="2xl:w-[45%] xl:w-[55%] lg:w-[70%] w-[98.5%] ml-1 md:ml-2">
                            <div className="bg-[#1f1f1f] rounded-lg p-4 border">
                                <div className="text-xl font-semibold mb-2">Endereço</div>
                                <div>
                                    <div className="flex flex-col gap-y-2 text-sm mt-2">
                                        <span>Nome: teste</span>
                                        <span>Bairro: teste</span>
                                        <span>Cidade: teste</span>
                                        <span>Estado: teste</span>
                                        <span>CEP: teste</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                    {products.map((products) => (
                                        <CartCheckoutItem key={products.id} products={products} />
                                    ))}
                            </div>
                        </div>
                        <div className="2xl:w-[51.9%] xl:w-[41.9%] lg:w-[30%] w-[98.5%] ml-1 md:ml-2">
                            <div className="bg-[#1f1f1f] p-4 border lg:mr-2 rounded-lg">
                                <div className="flex font-semibold items-center justify-between mt-4 text-md mb-4">
                                    <div>Jogos: (2)</div>
                                </div>
                                <hr className="mb-4" />
                                <div className="flex justify-between items-center mb-4">Total: <span className="font-bold text-2xl text-[#8900ff]">R$200,00</span></div>
                                <form>
                                    <div className="border border-gray-200 p-2 rounded-sm" />
                                    <p></p>
                                    <Link href="/checkout" className='w-full mt-4 p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer disabled:bg-[#7b61ff]/70 disabled:cursor-default hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500] mb-3'>
                                        Confirmar compra
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}