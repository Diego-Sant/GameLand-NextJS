"use client"

import { AiOutlineCheckCircle } from "react-icons/ai"
import MainLayout from "../layouts/MainLayout"
import Link from "next/link"

export default function Success() {
    return (
        <div className="bg-[#121212] text-white">
            <MainLayout>
                <div className="min-h-[57.1vh] mb-10 flex justify-center items-center">
                    <div className="w-full p-6 min-h-[150px] flex items-center justify-center">
                        <div>
                            <div className="flex items-center text-xl">
                                <AiOutlineCheckCircle className="text-green-500" size={35} />
                                <span className="pl-4">Pagamento finalizado!</span>
                            </div>
                            <p className="text-sm">Obrigado por comprar com a Gameland! Recebemos o seu pagamento e o produto chegará em um prazo de 30 minutos.</p>
                            <Link href="/" className="w-full">
                                <button className="w-full text-center bg-[#7b61ff] font-semibold text-white p-[11px] mt-4 hover:bg-[#7b61ff]/80">
                                    Voltar para a loja
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}