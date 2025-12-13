import { Container } from "@/src/components/container/container";
import { Header } from "@/src/components/header";
import React from "react";
import { Subject } from "../types";

export interface IDefaultHomeLayoutProps {
    children?: React.ReactNode
    subject: Subject
    semester?: string
    showOnlyHeader?: boolean
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

export function DefaultHomeLayout({ children, showOnlyHeader = false, ...props }: IDefaultHomeLayoutProps) {
    return (
        <div className="min-h-screen w-full bg-gray-50">
            <Header title={props.subject.title} />

            <main className="container mx-auto px-4 py-12 text-gray-700">
                {
                    !showOnlyHeader ? (
                        <>
                            <Container title={`WebQuest - ${props.subject.title}`} description={props.subject.introduction} />
                            <Container subtitle="Autor" description={{ ...defaultHomeLayoutContent.author, "Curso": `${defaultHomeLayoutContent.author["Curso"]} ${typeof props.semester !== 'undefined' ? '- ' + props.semester : ''}` }} />
                            <Container subtitle="Objetivos" description={defaultHomeLayoutContent.objectives.map(item => item.replace('[disciplina]', props.subject.title))} />
                            <Container subtitle="Tarefa" description={props.subject.task} />
                            <Container subtitle="Introdução" description={props.subject.introduction} />
                            <Container subtitle="Conclusão" description={props.subject.conclusion} />
                            <Container subtitle="Bibliografia" description={props.subject.bibliography} />
                        </>
                    ) : (
                        <>{children}</>
                    )
                }
            </main>
        </div>
    )
}