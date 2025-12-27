"use client"
import { ErrorContainer } from "@/src/components/error"
import { Frequency } from "@/src/entity"
import { ICalculateResponse, IErrorMessage } from "@/src/shared/interfaces"
import { useState } from "react"
import { FrequencyForm } from "./frequency-form"
import { FrequencyTable } from "./frequency-table"
import { FrequencyTableLoading } from "./frequency-table-loading"

interface RequestCalculateResponse {
    "classes": number,
    "amplitude": number,
    "media": number,
    "variance": number,
    "standard_deviation": number,
    "table": Frequency[]
}


export function FrequencyCalculatorContainer() {
    const [results, setResults] = useState<RequestCalculateResponse>({} as RequestCalculateResponse)
    const [showTable, setShowTable] = useState(false)
    const [error, setError] = useState<IErrorMessage | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmitForm(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        setError(undefined)
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)

        const encodedSamples = formData.get('samples') as string | null

        if (encodedSamples) {
            try {
                const samples: number[] = encodedSamples.replace(/,\s*$/, "").split(',').map(item => parseInt(item))

                const request = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTES_LINK}/calculate-frequency?samples=${encodeURIComponent(JSON.stringify(samples))}`)

                if (!request.ok) {
                    const requestErrorBody = await request.json()

                    console.log(requestErrorBody)
                }

                //TODO: Acrescentar um DTO para garantir que vá retornar o ICalculateResponse de forma correta
                const response = (await request.json()) as ICalculateResponse

                if (response.table.length <= 0) {
                    throw new Error('Não foi possível realizar os cálculos de frequência.')
                }

                await Promise.all([setResults(response), setShowTable(true)])
            } catch (error) {
                console.error(`[FrequencyCalculatorContainer.onSubmitForm - ERROR]`)
                console.error(error)

                setError({
                    title: "Erro ao fazer cálculo de frequência",
                    description: (error as Error)?.message
                })

            } finally {
                setIsLoading(false)
            }
        } else {
            return;
        }
    }

    return (
        <>
            <FrequencyForm onSubmit={onSubmitForm} />
            {
                isLoading && (
                    <FrequencyTableLoading />
                )
            }
            {
                typeof error !== 'undefined' && (
                    <section className="mb-4 mt-6">
                        <ErrorContainer error={error} />
                    </section>
                )
            }
            {
                (showTable && results.table.length > 0 && !isLoading) && (
                    <FrequencyTable
                        frequencies={results.table}
                        media={results.media}
                        standard_deviation={results.standard_deviation}
                        variance={results.variance}
                    />
                )
            }
            {
                (showTable && !isLoading) && (
                    <>
                        <h3 className="text-2xl mb-4 mt-6 text-indigo-900">Estatísticas Calculadas</h3>
                        <section className="grid grid-cols-3">
                            <div>
                                <p className="text-gray-600">Média (x̄)</p>
                                <p className="text-xl">{results.media}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Variância (s²)</p>
                                <p className="text-xl">
                                    {results.variance}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600">Desvio Padrão (s)</p>
                                <p className="text-xl">
                                    {results.standard_deviation}
                                </p>
                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}