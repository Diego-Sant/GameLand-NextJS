import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })
    const {data} = await supabase.auth.getSession()

    if (data?.session && req.nextUrl.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    if (!data?.session && (
        req.nextUrl.pathname.startsWith("/checkout") ||
        req.nextUrl.pathname.startsWith("/sucesso") ||
        req.nextUrl.pathname.startsWith("/pedidos") ||
        req.nextUrl.pathname.startsWith("/endereco")
    )) {
        return NextResponse.redirect(new URL("/auth", req.url))
    }

    return res;
}