import { NextResponse } from "next/server"

export const GET = () => {
    console.log(`[NEXT API URL] ${process.env.NEXT_PUBLIC_API_ROUTES_LINK}`)

    return NextResponse.json({ message: process.env.NEXT_PUBLIC_API_ROUTES_LINK })
}