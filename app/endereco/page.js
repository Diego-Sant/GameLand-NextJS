"use client";

import TextInput from "@/components/TextInput";
import MainLayout from "../layouts/MainLayout";

export default function Address() {
    return (
        <div className="bg-[#121212] text-white">
            <MainLayout>
                <div className="mt-4 mb-4 max-w-[600px] min-h-screen mx-auto px-2">
                    <div className="mx-auto bg-[#1f1f1f] rounded-lg p-3">
                        <div className="text-xl text-bold mb-2">
                            Detalhes do endereço
                        </div>
                        <form>
                            <div className="mb-4">
                                <TextInput className="w-full" string={'TESTE'} placeholder="Teste" error="Error" />
                            </div>
                            <button className="w-full text-white text-lg font-semibold p-3 rounded bg-[#7b61ff] hover:bg-[#7b61ff]/80">
                                Atualizar endereço
                            </button>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}