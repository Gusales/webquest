/* eslint-disable @next/next/no-img-element */
"use client"

export const CoverVideoImage = (props: { title: string, youtubeId: string }) => {
    return (
        <img
            src={`https://img.youtube.com/vi/${props.youtubeId}/maxresdefault.jpg`}
            alt={props.title}
            className="w-full h-full object-cover"
            onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${props.youtubeId}/hqdefault.jpg`;
            }}
        />
    )
}