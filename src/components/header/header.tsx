import { formatSubject } from "@/src/utils/subject-utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { IHeaderLinks, IHeaderProps } from "./header.interface";

export const defaultLinks: IHeaderLinks[] = [
    {
        name: "Videoaulas",
        link: "/[subject]/aulas"
    },
    {
        name: "História",
        link: "/[subject]/historia"
    }
]

export function Header(props: IHeaderProps) {
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
                        {includesMoreLinks().map(link => (
                            <li key={link.name} className="group">
                                <Link
                                    href={link.link.replace('[subject]', formatSubject(props.title).normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                                >
                                    <p className="group-hover:underline underline-offset-8">{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}