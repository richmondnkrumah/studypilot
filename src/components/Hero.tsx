import React from 'react'
import UPLOAD from '../../public/upload.svg'
import Image from 'next/image'
type Props = {}
// breakpoints 0-809, 810-1280-1280----

const Hero = (props: Props) => {
  return (
    <div className=' sm:bg-green-500 '>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl'>Chat with any <span className='relative z-10 text-white  before:bg-amber-500 before:-z-10 before:absolute before:w-[115%] before:h-[115%] before:rotate-4 before:rounded-md before:-translate-[5%]'>PDF</span></h1>
        <p>Join millions of <span className='text-amber-500 underline'>students,researchers and professionals</span> to instantly answer questions and understand research with AI  </p>
      </div>

      <div>
        <div>
          <div>
            <div className='flex flex-col gap-4'>
              <div>
                <Image src={UPLOAD} alt='Upload SVG' width={30} height={30} />
              </div>
              <div className='rounded-lg bg-amber-500 text-center'>
                <p className='text-white'>Browse File</p>
              </div>
              <p>Drag & Drop, or Choose PDF to upload</p>
            </div>
            <p>Only PDF files are supported.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero