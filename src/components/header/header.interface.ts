import type { IconBase } from 'react-icons'

export interface IHeaderProps {
    title: string
    links?: IHeaderLinks[]
    linkRedirect?: string
}

export interface IHeaderLinks {
    name: string
    link: string
    icon?: typeof IconBase
}