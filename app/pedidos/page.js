"use client"

import Link from "next/link"

import MainLayout from "../layouts/MainLayout"

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { AiOutlineHistory } from "react-icons/ai"

import { useUser } from "@/context/user";
import isLoading from "@/hooks/loading";

import moment from "moment/moment";

export default function Orders() {
    const {user} = useUser();
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        try {
            if (!user && !user?.id) return
            const res = await fetch("/api/pedidos");
            const result = await res.json();

            setOrders(result);
            isLoading(false)
        } catch (error) {
            toast.error("Algo de errado aconteceu! Tente novamente mais tarde.", {autoClose: 3000});
            isLoading(false)
        }
    }

    useEffect(() => {
        isLoading(true);
        getOrders()
    }, [user])


    return (
        <div className="bg-[#121212] text-white">
            <MainLayout>
                <div className="mt-4 min-h-screen">
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
                                    <span className="font-bold mr-2">Id do pedido:</span>
                                    {order?.stripe_id}
                                </div>
                                <div className="pt-2">
                                    <span className="font-bold mr-2">Nome do destinatário:</span>
                                    {order?.name}
                                </div>
                                <div className="pt-2">
                                    <span className="font-bold mr-2">Total:</span>
                                    R${order?.total?.toFixed(2).replace('.', ',')}
                                </div>
                                <div className="pt-2">
                                    <span className="font-bold mr-2">Data do pedido:</span>
                                    {moment(order?.created_at).calendar()}
                                </div>
                                <div className="mt-2 flex items-center gap-4">
                                    {order?.orderItem.map((item) => (
                                        <div key={item.id} className="flex items-center">
                                            <Link href={`/produto/${item.product_id}`} className="flex flex-col py-1 hover:brightness-95">
                                                <img className="rounded" width="120" src={item?.product.img} />
                                                <div className="text-[#8900ff] mt-2 mb-4 font-semibold max-w-[100px] line-clamp-2">
                                                    {item.product.title}
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