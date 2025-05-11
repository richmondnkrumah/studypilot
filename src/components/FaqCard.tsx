'use client'
import { useState } from 'react'
import CHEVRONDOWN from '../../public/chevronDown.svg'
import Image from 'next/image'
import { _faq_contents } from '@/constants/faq-card-contents'


const FaqCard = ({ title, summary }: _faq_contents) => {
    const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false)
    return (
        <div onClick={() => setIsSummaryOpen(prev => !prev)} className={`border border-gray-200 p-3 rounded-xl ${isSummaryOpen ? "bg-gray-100" : "bg-inherit"} `}>
            <div className='flex justify-between'>
                <h4 className='font-semibold xs:text-lg'>{title}</h4>
                <Image src={CHEVRONDOWN} className={` ${isSummaryOpen ? "-rotate-180" : "rotate-0"} transition-transform duration-400`} height={20} width={20} alt='faq chevron icon' />
            </div>
             <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isSummaryOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='text-[#707070] text-sm xs:text-md'>{summary}</p>
      </div>
        </div>
    )
}

export default FaqCard