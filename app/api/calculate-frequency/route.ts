import { IApiResponse, ICalculateResponse } from "@/src/shared/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const samples = searchParams.get("samples")

    if (samples) {
        const request = await fetch(`${process.env.AWS_API_URL}?samples=${samples}`)

        const response = (await request.json()) as IApiResponse<ICalculateResponse>

        const { data } = response

        if (!Array.isArray(data)) {
            const { amplitude, classes, media, standard_deviation, table, variance } = data
            return NextResponse.json({
                amplitude: amplitude.toFixed(4),
                classes: classes.toFixed(4),
                media: media.toFixed(4),
                variance: variance.toFixed(4),
                standard_deviation: standard_deviation.toFixed(4),
                table
            })
        } else {
            const { amplitude, classes, media, standard_deviation, table, variance } = data[0]
            return NextResponse.json({
                amplitude: amplitude.toFixed(4),
                classes: classes.toFixed(4),
                media: media.toFixed(4),
                variance: variance.toFixed(4),
                standard_deviation: standard_deviation.toFixed(4),
                table
            })
        }

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