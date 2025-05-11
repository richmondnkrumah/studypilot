import React from 'react'
import { CARD_DATA } from '@/constants/card-content'
import Card from './Card'
type Props = {}

const Features = (props: Props) => {
    return (
        <div className='xl:w-[1280px] flex flex-col gap-10'>
            <div className='min-w-[400px] max-w-[900px] w-full mx-auto flex flex-col gap-10'>
                <div className='text-content flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-4xl font-bold'>Who needs <span className='text-amber-500'>StudyPilot</span><span className='rotate-90'>?</span></h1>
                    <p className='text-lg font-semibold text-[#707070] text-center'>Your Personal Chat GPT-but for PDFs, Read and chat with PDFs at a free, secure and fast speed</p>
                </div>
                <div className='flex flex-wrap gap-10 justify-center '>
                    {
                        CARD_DATA.map((card,idx) => <Card key={idx} icon={card.icon} title={card.title} summary={card.summary} image={card.image} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Features