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

        const order = await prisma.orders.create({
            data: {
                user_id: user?.id,
                stripe_id: body.stripe_id,
                name: body.name,
                district: body.district,
                cep: body.cep,
                cpf: body.cpf,
                city: body.city,
                state: body.state,
                country: body.country,
                total: Number(body.total)
            }
        });

        body.products.forEach(async prod => {
            await prisma.orderItem.create({
                data: {
                    order_id: order.id,
                    product_id: Number(prod.id)
                }
            })
        })

        await prisma.$disconnect();

        return NextResponse.json("Pedido realizado com sucesso!", {status: 200});

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Algo errado aconteceu, tente novamente mais tarde!", {status: 400})
    }
}