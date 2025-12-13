import { DefaultHomeLayout } from "@/src/shared/layouts";
import { subject } from "./metadatas";

export default function EstatisticaAplicadaPage() {
    return (
        <DefaultHomeLayout subject={subject} semester="3º Semestre" />
    )
}