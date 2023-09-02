"use client"

import CartItem from "@/components/CartItem"
import isLoading from "@/hooks/loading"
import ClientOnly from "@/components/ClientOnly"

import MainLayout from "../layouts/MainLayout"

import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart"

import { useEffect } from "react"
import OtherProducts from "@/components/OtherProducts"

export default function Cart() {
    const router = useRouter();
    const cart = useCart();

    useEffect(() => {
        isLoading(true);
        cart.getCart();
        cart.cartTotal();
        isLoading(false);
    }, [cart])

    const goToCheckout = () => {
        if (!cart.cartTotal()) {
            alert("Você não tem nenhum jogo no carrinho!");
            return
        }
        router.push('/checkout')
    }

    return (
        <div className="bg-[#121212] text-white">
            <MainLayout>
                <div className="flex items-center mt-4 mb-4 justify-center font-bold text-4xl">
                    Carrinho
                </div>
                <div className="relative flex flex-col lg:flex-row justify-between gap-2">
                    <ClientOnly>
                        <div className="lg:w-[100%] w-[98.5%] ml-1 md:ml-2">
                            {cart.getCart().map((products) => (
                                <CartItem key={products.id} products={products} />
                            ))}
                        </div>
                    </ClientOnly>
                    <div className="lg:w-[50%] w-[98.5%] ml-1 md:ml-2 lg:mt-2">
                        <ClientOnly>
                            <div className="bg-[#1f1f1f] p-4 border lg:mr-3">
                                {cart.getCart().length === 0 ? 
                                    <button disabled className='w-full p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer disabled:bg-[#7b61ff]/70 disabled:cursor-default hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500] mb-3'>
                                        Finalizar compra
                                    </button> : 
                                    <button onClick={() => goToCheckout()} className='w-full p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500] mb-3'>
                                        Finalizar compra
                                    </button>
                                }
                                
                                <div className="flex font-semibold items-center justify-between mt-4 text-md mb-4">
                                    <div>Jogos: ({cart.getCart().length})</div>
                                </div>
                                <hr className="mb-4" />
                                <div className="flex justify-between items-center">Total: <span className="font-bold text-2xl 8900ff]">R${(cart.cartTotal() / 100).toFixed(2).replace('.', ',')}</span></div>
                            </div>
                        </ClientOnly>
                    </div>
                </div>
                <OtherProducts />
            </MainLayout>
        </div>
    )
  }