import { StaticImport } from "next/dist/shared/lib/get-img-props"
import REASEARCHERSVG from '../../public/researchers.svg'
import REASEARCHERSIMAGE from '../../public/researchers.avif'


export interface _content {
    title: string,
    summary: string,
    image: string | StaticImport,
    semititle: string,
    color: string
}

export const CARD_DATA:_content[] = [
    {
        title: 'Multi-File Chats',
        summary: "Bring multiple PDFs into one conversation. Keep your study materials, papers, or project files easily accessible in one chat.",
        image: REASEARCHERSIMAGE,
        semititle: "organize",
        color: "text-purple-600"
    },
    {
        title: 'Summarize PDFs',
        summary: "Summarize academic articles, research papers, or reports. Extract the key insights without reading everything.",
        image: REASEARCHERSIMAGE,
        semititle: "simplify",
        color: "text-pink-600"
    },
    {
        title: 'Translate PDFs',
        summary: "Make any PDF speak your language. Transform documents from around the world into clear, readable text you can understand instantly.",
        image: REASEARCHERSIMAGE,
        semititle: "understand",
        color: "text-amber-600"
    },
    {
        title: 'Side-by-Side View',
        summary: "Keep the chat and PDF open together. Answers are linked to the original PDF content, making it simple to verify or explore further.",
        image: REASEARCHERSIMAGE,
        semititle: "navigate",
        color: "text-green-600"
    }
]

