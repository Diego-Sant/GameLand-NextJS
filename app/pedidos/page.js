"use client"

import Link from "next/link"
import MainLayout from "../layouts/MainLayout"
import { AiOutlineHistory } from "react-icons/ai"

export default function Orders() {
    const orders = [
        {
            id: 1,
            stripe_id: "1234",
            name: "Teste",
            total: 1299.00,
            orderItem: [
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
                    price: 170.00
                },
            ]
        }
    ]

    return (
        <div className="bg-[#121212] text-white">
            <MainLayout>
                <div className="mt-4 min-h-[57.1vh]">
                    <div className="bg-[#1f1f1f] w-full p-6 mb-4 min-h-[100px] flex items-center">
                        <AiOutlineHistory className="text-green-500" size={35} />
                        <span className="pl-4">Pedidos</span>
                    </div>
                    {orders.length < 1 ?
                        <div className="flex items-center justify-center">
                            Você ainda não fez um pedido!
                        </div>
                        :
                        null 
                    }

                    {orders.map((order) => (
                        <div key={order?.id} className="text-sm pl-[50px]">
                            <div className="border-b py-1">
                                <div className="pt-2">
                                    <span className="font-bold mr-2">Id do pedido: </span>
                                    {order?.stripe_id}
                                </div>
                                <div className="pt-2">
                                    <span className="font-bold mr-2">Nome do destinatário: </span>
                                    {order?.name}
                                </div>
                                <div className="pt-2">
                                    <span className="font-bold mr-2">Total: </span>
                                    R${order?.total?.toFixed(2).replace('.', ',')}
                                </div>
                                <div className="mt-2 flex items-center gap-4">
                                    {order?.orderItem.map((item) => (
                                        <div key={item.id} className="flex items-center">
                                            <Link href="/" className="flex flex-col py-1 hover:brightness-95">
                                                <img className="rounded" width="120" src={item?.img} />
                                                <div className="text-[#8900ff] mt-2 mb-4 font-semibold max-w-[100px] line-clamp-2">
                                                    {item.title}
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MainLayout>
        </div>
    )
}