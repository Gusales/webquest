import { Tooltip, TooltipContent, TooltipTrigger } from "@/src/components/ui/tooltip"
import { Frequency } from "@/src/entity"

const tooltipsDescription = {
    "i": 'Índice da classe',
    "classe": 'Intervalo de classe',
    "fi": 'Frequência absoluta (quantidade de valores na classe)',
    "Fi": 'Frequência acumulada',
    "xi": 'Ponto médio da classe',
    "fixi": 'Produto da frequência pelo ponto médio',
    "fixi2": 'Produto da frequência pelo quadrado do ponto médio'
}

export interface IFrequencyTableProps {
    media: number
    variance: number
    standard_deviation: number
    frequencies: Frequency[]
}
export function FrequencyTable(props: IFrequencyTableProps) {
    return (
        <>
            <h2 className="text-3xl mb-4 text-indigo-900 mt-8">Tabela de Distribuição de Frequências</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-5">
                    <thead className="">
                        <tr>
                            {
                                Object.entries(tooltipsDescription).map(([key, tooltip]) => (
                                    <th
                                        key={key}
                                        className="bg-indigo-900 border border-gray-300"
                                    >
                                        <Tooltip key={key}>
                                            <TooltipTrigger className="px-4 py-3 w-full text-center cursor-help min-w-20 text-white">
                                                {key === 'fixi2' ? (
                                                    <span>
                                                        f<sub>i</sub>x<sub>i</sub>²
                                                    </span>
                                                ) : key === 'fixi' ? (
                                                    <span>
                                                        f<sub>i</sub>x<sub>i</sub>
                                                    </span>
                                                ) : key === 'fi' ? (
                                                    <span>
                                                        f<sub>i</sub>
                                                    </span>
                                                ) : key === 'Fi' ? (
                                                    <span>
                                                        F<sub>i</sub>
                                                    </span>
                                                ) : key === 'xi' ? (
                                                    <span>
                                                        x<sub>i</sub>
                                                    </span>
                                                ) : (
                                                    key
                                                )}
                                            </TooltipTrigger>
                                            <TooltipContent>{tooltip}</TooltipContent>
                                        </Tooltip>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {
                            props.frequencies.map((row) => (
                                <tr key={String(row.i)}>
                                    <td className="border border-gray-300 px-4 py-3 text-center">{row.i}</td>
                                    <td className="border border-gray-300 px-4 py-3 text-center">{row.class}</td>
                                    <td className="border border-gray-300 px-4 py-3 text-center">{row.fi}</td>
                                    <td className="border border-gray-300 px-4 py-3 text-center">{row.Fi}</td>
                                    <td className="border border-gray-300 px-4 py-3 text-center">{row.xi}</td>
                                    <td className="border border-gray-300 px-4 py-3 text-center">{row.fixi}</td>
                                    <td className="border border-gray-300 px-4 py-3 text-center">{row.fixi2}</td>
                                </tr>
                            ))
                        }
                        <tr className="bg-indigo-100">
                            <td colSpan={2} className="border border-gray-300 px-4 py-3 text-center">
                                <strong>Total</strong>
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                                <strong>{props.frequencies.reduce((acc, curr) => acc + curr["fi"], 0)}</strong>
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                                <strong>{props.frequencies.reduce((acc, curr) => acc + curr["fixi"], 0).toFixed(2)}</strong>
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                                <strong>{props.frequencies.reduce((acc, curr) => acc + curr["fixi2"], 0).toFixed(2)}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}