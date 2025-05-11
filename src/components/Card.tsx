import React from 'react'
import Image from 'next/image'
import { _content } from '@/constants/card-content'

const Card = ({icon,title,summary,image}: _content) => {
  return (
    <div className='outer rounded-2xl w-[420px] p-5 border border-gray-200'>
        <div className='inner flex flex-col gap-4'>
            <div className='icon'>
                <Image src={icon} alt='card top icon' height={30} width={30}/>
            </div>
            <div className='text-content  flex flex-col gap-3'>
                <h2 className='capitalize text-xl font-bold text-[#525252] '>{title}</h2>
                <p className='text-md font-semibold text-[#707070]'>{summary}</p>
            </div>
            <div className='image'>
            <Image src={image} alt='card content image' width={400} className=' rounded-2xl border border-gray-100 shadow-sm '/>
            </div>
        </div>
    </div>
  )
}

export default Card