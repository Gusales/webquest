import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "Estatística Aplicada - %s",
        default: "Estatística Aplicada"
    }
}

export default function EstatisticaAplicadaDefaultLayout({ children }: { children: React.ReactNode }) {
    return(
        <>{children}</>
    )
}