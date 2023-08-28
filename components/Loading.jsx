"use client"

import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loading() {
    return (
        <>
            <div className="fixed bg-black bg-opacity-70 inset-0 w-full z-40 flex items-center justify-center min-h-screen overflow-hidden">
                <div className="p-3 rounded-md flex flex-col items-center justify-center">
                    <AiOutlineLoading3Quarters size={100} className="text-[#7b61ff] animate-spin" />
                    <div className="text-center pt-5 text-xl font-bold text-white">Carregando...</div>
                </div>
            </div>
        </>
    )
}