"use client"

import { FormHTMLAttributes, useState } from "react"

export type IFormProps = FormHTMLAttributes<HTMLFormElement>


export function FrequencyForm(props: IFormProps) {
    const [sample, setSample] = useState<string>('')

    function generateRandomSample(): void {
        const sampleSize = Math.floor(Math.random() * 100)

        const sampleResult = []
        for (let i = 1; i <= sampleSize; i++) {
            sampleResult.push(Math.floor(Math.random() * 100))
        }

        setSample(sampleResult.join(', '))
    }

    function trim(text: string) {
        const trimedText = text.
            replace(/(^\s*)|(\s*$)/gi, "").
            replace(/[ ]{2,}/gi, " ").
            replace(/\n +/, "\n");
        return trimedText
    }

    return (
        <form {...props} className="mt-1">
            <div className="flex flex-col gap-2">
                <label htmlFor="samples">
                    <p><strong>Valores da amostra</strong> (separados por vírgula)</p>
                </label>

                <textarea
                    name="samples"
                    id="samples"
                    placeholder="Ex: 12, 15, 18, 20, 22, 25, 28, 30, 32, 35"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-2 focus:outline-indigo-500 focus:border-transparent"
                    rows={4}
                    value={sample}
                    onChange={(e) => setSample(`${e.target.value.replace(/[^0-9, ]/gi, "")}`)}
                    inputMode="numeric"
                ></textarea>
            </div>

            <div className="flex gap-2 mt-4">
                <button
                    type="button"
                    className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    onClick={generateRandomSample}
                >Gerar números aleatórios</button>
                <button
                    type="submit"
                    className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50"
                    disabled={trim(sample).length <= 0}
                >Calcular Tabela de Frequências</button>
            </div>
        </form>
    )
}
