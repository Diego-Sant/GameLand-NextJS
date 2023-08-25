"use client";

import { IMAGES_PATH } from "@/utils/constants";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Link from "next/link";

export default function AuthPage() {
    const supabase = createClientComponentClient();

    return (
        <div className="bg-[#121212] text-white">
            <div className="w-full min-h-screen bg-[#1f1f1f]">
                <div className="w-full flex items-center justify-center p-5">
                    <Link href="/"><img className='w-20 h-20 sm:w-36 sm:h-36 hover:brightness-90' src={`${IMAGES_PATH}/logo.png`} alt="Gameland" /></Link>
                </div>
                <div className="w-full flex items-center justify-center p-5">
                    Entrar / Cadastrar
                </div>
                <div className="max-w-[400px] mx-auto px-2">
                    {typeof window !== 'undefined' && (
                        <Auth
                            onlyThirdPartyProviders
                            redirectTo={`${window.location.origin}/auth/callback`}
                            providers={['google']}
                            appearance={{ theme: ThemeSupa }}
                            theme="dark"
                            supabaseClient={supabase}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}