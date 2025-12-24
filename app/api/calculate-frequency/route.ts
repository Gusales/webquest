import { Frequency } from "@/src/entity";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const samples = searchParams.get("samples")

    if (samples) {
        const request = await fetch(`${process.env.AWS_API_URL}?samples=${samples}`)

        const response = (await request.json()) as { data: { "classes": number, "amplitude": number, "table": Frequency[] } }

        const { data: { amplitude, classes, table } } = response

        return NextResponse.json({
            amplitude,
            classes,
            table  
        })
    } else {
        return NextResponse.json(
            {
                data: {
                    message: "Nenhuma amostra foi encontrada"
                }
            },
            {
                status: 400,
            }
        )
    }
}