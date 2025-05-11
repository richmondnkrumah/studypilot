import React from 'react'
import ResponsiveWrapper from './ResponsiveWrapper'
import { CARD_DATA } from '@/constants/faq-card-contents'
import FaqCard from './FaqCard'

type Props = {}

const Faq = (props: Props) => {
  return (
   <ResponsiveWrapper>
    <h2 className='capitalize text-3xl xs:text-4xl sm:text-5xl text-center font-bold'>frequently asked questions</h2>
    <div className='flex flex-col gap-2'>
      {
        CARD_DATA.map((card,idx) => <FaqCard key={idx} title={card.title} summary={card.summary}/>)
      }
    </div>
   </ResponsiveWrapper>
  )
}

export default Faq