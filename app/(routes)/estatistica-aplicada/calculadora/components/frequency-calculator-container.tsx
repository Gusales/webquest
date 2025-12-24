"use client"
import { Frequency } from "@/src/entity"
import { useState } from "react"
import { FrequencyForm } from "./frequency-form"
import { FrequencyTable } from "./frequency-table"

export function FrequencyCalculatorContainer() {
    const [results, setResults] = useState<Frequency[]>([])
    const [showTable, setShowTable] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    async function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const encodedSamples = formData.get('samples') as string | null

        if (encodedSamples) {
            try {
                const samples: number[] = encodedSamples.split(',').map(item => parseInt(item))

                const parameters = {
                    "samples": encodeURIComponent(JSON.stringify(samples, null, 2))
                }

                const request = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTES_LINK}/calculate-frequency?samples=${parameters.samples}`)

                const response = await request.json()

                setResults(response.table || [])

                setShowTable(true)
            } catch (error) {
                console.error(error)
                setErrorMessage('Ocorreu um erro ao fazer fetch')
            }

        } else {
            return;
        }
    }

    return (
        <>
            <FrequencyForm onSubmit={onSubmitForm} />
            {
                (showTable && results.length > 0) && (
                    <FrequencyTable frequencies={results} />
                )
            }
        </>
    )
}