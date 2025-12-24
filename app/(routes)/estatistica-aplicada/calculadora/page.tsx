import { Breadcumbs } from "@/src/components/breadcrumbs";
import { DefaultHomeLayout } from "@/src/shared/layouts";
import { subject } from "../metadatas";
import { FrequencyCalculatorContainer } from "./components/";

export default function CalculadoraPage() {
    return (
        <DefaultHomeLayout subject={subject} semester="3º Semestre" showOnlyHeader>
            <Breadcumbs />

            <section className="container mx-auto bg-white rounded shadow p-8 mt-4">
                <h2 className="text-3xl mb-4 text-indigo-900">Calculadora de Distribuição de Frequências</h2>

                <div className="w-full bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p>
                        <strong>Nota:</strong> O número de classes é calculado automaticamente usando a <strong>Regra de Sturges:</strong> k = 1 + 3.3 x log<sub>10</sub>(n), onde n é o número de observações na amostra
                    </p>
                </div>

                <FrequencyCalculatorContainer />
            </section>
        </DefaultHomeLayout>
    )
}