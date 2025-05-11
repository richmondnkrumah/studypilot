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
        title: 'for students',
        summary: "Study for exams, get help with homework, and answer multiple choice questions faster than your classmates.",
        image: REASEARCHERSIMAGE
    },
    {
        icon: REASEARCHERSVG,
        title: 'for professionals',
        summary: "Navigate legal contracts, financial reports, manuals, and training material. Ask questions to any PDF to stay ahead.",
        image: REASEARCHERSIMAGE
    },
    {
        icon: REASEARCHERSVG,
        title: 'for journalists',
        summary: "Analyze interviews, government reports, and investigative documents to uncover stories and verify facts faster.",
        image: REASEARCHERSIMAGE
    }
]

