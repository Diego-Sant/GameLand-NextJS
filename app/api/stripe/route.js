import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Stripe from "stripe";

export async function POST(req) {
    const supabase = createServerComponentClient( { cookies })

    try {
        const {data: { user }} = await supabase.auth.getUser()

        if (!user) throw Error()

        const body = await req.json();
        const stripe = new Stripe(process.env.STRIPE_SK_KEY || "");

        const res = await stripe.paymentIntents.create({
            amount: Number(body.amount),
            currency: "BRL",
            automatic_payment_methods: {enabled: true}
        })

        return NextResponse.json(res);

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Algo errado aconteceu, tente novamente mais tarde!", {status: 400})
    }
}