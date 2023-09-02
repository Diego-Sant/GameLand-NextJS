import prisma from "@/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {

    try {
        const {name} = context.params;

        const items = await prisma.products.findMany({
            take: 10,
            where: {
                title: {
                    contains: name,
                    mode: 'insensitive'
                }
            }
        })

        await prisma.$disconnect();

        return NextResponse.json(items);

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Algo errado aconteceu, tente novamente mais tarde!", {status: 400})
    }
}