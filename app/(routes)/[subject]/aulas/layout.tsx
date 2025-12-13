import { Header } from "@/src/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VideoAulas"
}

export default async function EstatisticaAplicadaVideoaulasLayout({ children, params }: { children: React.ReactNode, params: Promise<{ subject: string }> }) {
    const { subject } = await params
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTES_LINK}/${subject}`)
    const { data: { materia } } = await request.json()

    return (
        <div className="bg-gray-50 min-h-screen w-full">
            <Header title={materia} />

            <main className="container mx-auto px-4 py-12">
                {children}
            </main>
        </div>
    )
}