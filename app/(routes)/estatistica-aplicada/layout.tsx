import { DefaultHomeLayout } from "@/src/shared/layouts";
import { Metadata } from "next";
import { subject } from "./metadatas";

export const metadata: Metadata = {
    title: {
        template: "Estatística Aplicada - %s",
        default: "Estatística Aplicada"
    }
}

export default function EstatisticaAplicadaDefaultLayout() {
    return(
        <DefaultHomeLayout subject={subject} semester="3º Semestre" />
    )
}