import prisma from "@/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {

    try {

        const products = await prisma.products.findMany()

        await prisma.$disconnect();

        return NextResponse.json(products);

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Algo errado aconteceu, tente novamente mais tarde!", {status: 400})
    }
}