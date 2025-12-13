export type VideoData = {
    id: number
    title: string
    youtubeId: string
    notes: string
}

export interface VideoResponseData {
    data: {
        materia: string
        aulas: VideoData[]
    }
}
