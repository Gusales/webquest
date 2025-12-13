"use client"
import { formatSubject } from "@/src/utils/subject-utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { IHeaderLinks, IHeaderProps } from "./header.interface";

export const defaultLinks: IHeaderLinks[] = [
    {
        name: "Videoaulas",
        link: "/[subject]/aulas"
    },
    {
        name: "Conteúdo",
        link: "/[subject]/conteudo"
    }
]

export function Header(props: IHeaderProps) {
    const path = usePathname()

    function includesMoreLinks(): IHeaderLinks[] {
        return [...defaultLinks, ...props.links || []]
    }

    return (
        <header className="w-full bg-indigo-900 text-white shadow-lg py-3">
            <div className="container mx-auto p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link
                        href={props.linkRedirect || "/"}
                        className="hover:text-indigo-200 transition-colors"
                    >
                        <Home size={24} />
                    </Link>

                    <h1 className="text-2xl">{props.title}</h1>
                </div>

                <nav>
                    <ul className="flex gap-10 text-lg">
                        {includesMoreLinks().map(link => {
                            const includesNameOnPath = path.includes(link.link.split('/')[1] ? link.link.split('/')[1] : link.link)

                            return (
                                <li key={link.name} className="group">
                                <Link
                                    href={link.link.replace('[subject]', formatSubject(props.title).normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} className={includesNameOnPath ? "pointer-events-none text-white/80" : "group-hover:underline underline-offset-8"} aria-disabled={includesNameOnPath}
                                >
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}