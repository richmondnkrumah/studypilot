import React from 'react'
import { CARD_DATA } from '@/constants/features-card-content'
import Card from './FeaturesCard'
import ResponsiveWrapper from './ResponsiveWrapper'
type Props = {}

const Features = (props: Props) => {
    return (
        <ResponsiveWrapper>
            <div className='text-content flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-4xl font-bold'>StudyPilot in a  <span className='text-amber-500'>Nutshell</span></h1>
                <p className='text-lg font-semibold text-[#707070] text-center'>Your Personal Chat GPT-but for PDFs, Read and chat with PDFs at a free, secure and fast speed</p>
            </div>
            <div className='flex flex-wrap gap-10 justify-center '>
                {
                    CARD_DATA.map((card, idx) => <Card key={idx} semititle={card.semititle} color={card.color} title={card.title} summary={card.summary} image={card.image} />)
                }
            </div>
        </ResponsiveWrapper>
    )
}

export default Features