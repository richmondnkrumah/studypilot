import { StaticImport } from "next/dist/shared/lib/get-img-props"
import REASEARCHERSVG from '../../public/researchers.svg'
import REASEARCHERSIMAGE from '../../public/researchers.avif'


export interface _content {
    icon: string | StaticImport,
    title: string,
    summary: string,
    image: string | StaticImport
}

export const CARD_DATA:_content[] = [
    {
        icon: REASEARCHERSVG,
        title: 'for researchers',
        summary: "Explore scientific papers, academic articles, and books to get the information you need for your research.",
        image: REASEARCHERSIMAGE
    },
    {
        icon: REASEARCHERSVG,
        title: 'for researchers',
        summary: "Explore scientific papers, academic articles, and books to get the information you need for your research.",
        image: REASEARCHERSIMAGE
    },
    {
        icon: REASEARCHERSVG,
        title: 'for researchers',
        summary: "Explore scientific papers, academic articles, and books to get the information you need for your research.",
        image: REASEARCHERSIMAGE
    },
    {
        icon: REASEARCHERSVG,
        title: 'for researchers',
        summary: "Explore scientific papers, academic articles, and books to get the information you need for your research.",
        image: REASEARCHERSIMAGE
    }
]

