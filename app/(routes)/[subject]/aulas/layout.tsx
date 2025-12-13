import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VideoAulas"
}

export default function EstatisticaAplicadaVideoaulasLayout({ children }: { children: React.ReactNode }) {
    return(
        <main className="min-h-screen bg-red-500 w-full">
            { children }
        </main>
    )
}