 
import { Breadcumbs } from "@/src/components/breadcrumbs"
import { VideoResponseData } from "@/src/shared/types"
import { FileText, PlayCircle } from "lucide-react"
import Link from "next/link"
import { CoverVideoImage } from "./components/video-image"

export default async function VideoaulasPage({ params }: { params: Promise<{ subject: string }> }) {
    const { subject } = await params
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTES_LINK}/${subject}`)
    const { data: { materia, aulas } } = await request.json() as VideoResponseData

    return (
        <>
            <Breadcumbs />
            <h1 className="text-4xl mb-4 text-indigo-900 mt-2">Vídeoaulas - {materia}</h1>
            <p className="text-lg text-gray-600 mb-4">
                Aulas selecionadas para estudo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    aulas.map(aula => (
                        <div key={aula.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative aspect-video bg-gray-200">
                                <CoverVideoImage title={aula.title} youtubeId={aula.youtubeId} />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                                    <PlayCircle className="text-white" size={64} />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl mb-3 text-gray-900">{aula.title}</h3>

                                <Link
                                    href={`https://www.youtube.com/watch?v=/${aula.youtubeId}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors"
                                >
                                    <FileText size={20} />
                                    Ver aula no Youtube
                                </Link>

                                <p className="mt-5">Notas: { aula.notes } </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}