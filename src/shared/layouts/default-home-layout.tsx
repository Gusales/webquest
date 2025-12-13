import { Header } from "@/src/components/header";
import React from "react";
import { Subject } from "../types";

export interface IDefaultHomeLayoutProps {
    children: React.ReactNode
    subject: Subject
    semester?: string
}

export const defaultHomeLayoutContent = {
    author: {
        "Nome": "Gustavo Sales",
        "Instituição": {
            name: "FATEC Carapícuiba",
            url: "https://fateccarapicuiba.cps.sp.gov.br/"
        },
        "Curso": "Análise e Desenvolvimento de Sistemas",
        "E-mail": {
            name: "dev.gussales@gmail.com",
            url: "mailto:dev.gussales@gmail.com"
        },
        "LinkedIn": {
            name: "in/devgussales",
            url: "https://www.linkedin.com/in/devgusales/"
        }
    },
    objectives: [
        "Disponibilizar material de apoio aos alunos matriculados na disciplina de [disciplina];",
        "Apoiar os estudos dos alunos para que estes ampliem o conhecimento obtido em sala de aula;",
        "Permitir que o aluno estude o conteúdo em que encontrou maior dificuldade, aumentando assim a chance de seu aprendizado."
    ]
}

export type TypeDefaultHomeLayoutContent = typeof defaultHomeLayoutContent;

export function DefaultHomeLayout(props: IDefaultHomeLayoutProps) {
    return (
        <div className="min-h-screen w-full bg-gray-50">
            <Header title={props.subject.title} />

            <main className="container mx-auto px-4 py-12 text-gray-700">
                <Container title={`WebQuest - ${props.subject.title}`} description={props.subject.introduction} />
                <Container subtitle="Autor" description={{...defaultHomeLayoutContent.author, "Curso": `${defaultHomeLayoutContent.author["Curso"]} ${typeof props.semester !== 'undefined' ? '- ' + props.semester : ''}` }} />
                <Container subtitle="Objetivos" description={defaultHomeLayoutContent.objectives.map(item => item.replace('[disciplina]', props.subject.title))} />
                <Container subtitle="Tarefa" description={props.subject.task} />
                <Container subtitle="Introdução" description={props.subject.introduction} />
                <Container subtitle="Bibliografia" description={props.subject.bibliography} />
                <Container subtitle="Conclusão" description={props.subject.conclusion} />
            </main>
        </div>
    )
}

export function Container(props: { title?: string, subtitle?: string, description: string | object | string[] }) {

    return (
        <article className="bg-white rounded-lg shadow-md p-8 mb-8 max-w-4xl mx-auto">
            {
                typeof props.title !== 'undefined' && (
                    <h1 className="text-4xl mb-6 text-indigo-900">{props.title}</h1>
                )
            }
            {
                typeof props.subtitle !== 'undefined' && (
                    <h2 className="text-2xl mb-4 text-indigo-900">{props.subtitle}</h2>
                )
            }
            {
                (!Array.isArray(props.description) && typeof props.description === 'string') && (
                    <p>
                        {props.description}
                    </p>
                )
            }
            {
                (!Array.isArray(props.description) && typeof props.description === 'object') && (
                    Object.entries(props.description).map(([key, value]) => {
                        if (typeof value === "string") {
                            return (<p key={key}><span className="font-semibold">{key}</span>: {value} </p>)
                        }

                        if (typeof value === "object" && "url" in value) {
                            return (
                                <p key={key}>
                                    <span className="font-semibold">{key}</span>: {' '}
                                    <a href={value.url} target="_blank" rel="noreferrer" className="hover:underline">
                                        {value.name}
                                    </a>
                                </p>
                            )
                        }

                        return null
                    })
                )
            }
            {
                Array.isArray(props.description) && (
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        {props.description.map((item, index) => (
                            ((item as string).includes("https")) ? (<li key={index}>{
                                (item as string).slice(0, item.indexOf("https"))
                            } <a href={(item as string).slice(item.indexOf("https"))} target="_blank" rel="noreferrer" className="hover:underline">
                                {(item as string).slice(item.indexOf("https"))}
                                </a> </li>) : ( <li key={index} >{item}</li> )
                        ))}
                    </ul>
                )
            }
        </article>
    )
}