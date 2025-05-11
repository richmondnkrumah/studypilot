import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type Props = {
    icon: string | StaticImport,
    title: string,
    summary: string,
    image: string | StaticImport
}

const Card = ({icon,title,summary,image}: Props) => {
  return (
    <div className='outer rounded-2xl p-5 border border-gray-500'>
        <div className='inner flex flex-col gap-3'>
            <div className='icon'>
                <Image src={icon} alt='card top icon' height={30} width={30}/>
            </div>
            <div className='text-content font-bold flex flex-col gap-5'>
                <h2>{title}</h2>
                <p>{summary}</p>
            </div>
            <div className='image'>
            <Image src={image} alt='card content image' className='h-full w-full rounded-2xl border border-gray-300 shadow-lg drop-shadow-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Card