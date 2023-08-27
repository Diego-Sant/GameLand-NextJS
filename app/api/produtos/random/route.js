import prisma from "@/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const productsCount = await prisma.products.count();
        const skip = Math.floor(Math.random() * productsCount);

        const products = await prisma.products.findMany({
            take: 5,
            skip: skip,
            orderBy: {id: "asc"}
        })

        await prisma.$disconnect();

        return NextResponse.json(products);

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Algo errado aconteceu, tente novamente mais tarde!", {status: 400})
    }
}