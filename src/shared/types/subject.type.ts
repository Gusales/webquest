import { IHeaderLinks } from "@/src/components/header/header.interface"

export type Subject = {
    title: string
    description: string
    task: string
    introduction: string
    bibliography: string[]
    conclusion: string,
    moreRedirectLinks?: IHeaderLinks[]
}

export type SubjectsData = 'calculo' | 'estatistica-aplicada' | 'programacao-linear'

export enum SubjectsNameEnum {
    'calculo' = 'Cálculo',
    'estatistica-aplicada' = 'Estatística Aplicada',
    'programacao-linear' = 'Progração Linear'
}