import { Skeleton } from "@/src/components/ui/skeleton"

const COLUMNS = 7
const ROWS = 5

export function FrequencyTableLoading() {
    return (
        <>
            <Skeleton className="h-9 w-[420px] mt-8 mb-4" />
            <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-5">
                    <thead>
                        <tr>
                            {Array.from({ length: COLUMNS }).map((_, index) => (
                                <th
                                    key={index}
                                    className="bg-indigo-900 border border-gray-300 px-4 py-3"
                                >
                                    <Skeleton className="h-5 w-full bg-indigo-700" />
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: ROWS }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: COLUMNS }).map((_, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="border border-gray-300 px-4 py-3"
                                    >
                                        <Skeleton className="h-4 w-full" />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Skeleton className="h-8 w-[260px] mt-6 mb-4" />

            <section className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-6 w-20" />
                    </div>
                ))}
            </section>
        </>
    )
}
