import React from 'react'
import ResponsiveWrapper from './ResponsiveWrapper'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <ResponsiveWrapper>
      <div className='flex flex-col gap-10   mt-20 sm:flex-row justify-between relative'>
        <div className='sm:w-[50%]'>
          <h4 className='text-4xl font-bold mb-4'>Study<span className='text-amber-500'>Pilot</span></h4>
          <p className='text-lg text-[#707070]'>StudyPilot brings ChatGPT-style intelligence and PDF AI technology together for smarter document understanding. Summarize, chat, analyze - start now</p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='font-semibold text-2xl text-[#525252]'>Legal</p>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link className="text-[#707070] hover:underline" href={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link className="text-[#707070] hover:underline" href={"#"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='w-full h-[2px] bg-gray-200'></div>
        <p className='font-semibold text-[#525252]'>Copyright ©2025. All rights reserved.</p>
      </div>
    </ResponsiveWrapper>
  )
}

export default Footer