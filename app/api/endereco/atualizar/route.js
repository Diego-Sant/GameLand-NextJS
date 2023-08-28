import prisma from "@/libs/Prisma";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
    const supabase = createServerComponentClient( { cookies })

    try {
        const {data: { user }} = await supabase.auth.getUser()

        if (!user) throw Error()

        const body = await req.json()

        const res = await prisma.address.update({
            where: {id: Number(body.addressId)},
            data: {
                name: body.name,
                district: body.district,
                cep: body.cep,
                cpf: body.cpf,
                city: body.city,
                state: body.state,
                country: body.country
            }
        });

        await prisma.$disconnect();

        return NextResponse.json(res);

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Algo errado aconteceu, tente novamente mais tarde!", {status: 400})
    }
}