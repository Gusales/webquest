import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadora de Distribuição de Frequências",
}

export default function CalculadoraLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}