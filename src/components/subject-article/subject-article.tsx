import Image from "next/image";
import Link from "next/link";
import { ISubjectArticleProps } from "./subject-article.interface";

export function SubjectArticle(props: ISubjectArticleProps) {
    return (
        <Link href={props.redirectTo} className="max-w-fit max-h-fit">
            <article className="bg-white overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={props.cover.url}
                        alt={props.cover.alt || `Imagem decorativa relacionada à disciplina de ${props.title}`}
                        width={540}
                        height={240}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h2 className="text-3xl text-white">{props.title}</h2>
                    </div>
                </div>

                <div className="p-6">
                    <p className="text-gray-600">
                        Clique para acessar o material de apoio.
                    </p>
                </div>
            </article>
        </Link>
    )
}