import prisma from "@/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const productsCount = await prisma.products.count();
        let skip;
        do {
            skip = Math.floor(Math.random() * (productsCount - 6));
        } while (productsCount - skip < 6);

        const products = await prisma.products.findMany({
            take: 6,
            skip: skip
        })

        await prisma.$disconnect();

        return NextResponse.json(products);

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Algo errado aconteceu, tente novamente mais tarde!", {status: 400})
    }
}