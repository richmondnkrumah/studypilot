import React from 'react'
import PDF from '../../public/PDF.svg'
import Image from 'next/image'
type Props = {}
// breakpoints 0-809, 810-1280-1280----

const Hero = (props: Props) => {
  return (
    <div className='bg-red-300 sm:bg-green-500 xl:w-[1280px] flex flex-col gap-5'>
      <div>

        <div className='flex flex-col gap-5 text-center'>
          <h1 className='text-6xl font-bold'>Chat with any <span className='relative z-10 text-white  before:bg-amber-500 before:-z-10 before:absolute before:w-[110%] before:h-[90%] before:rotate-4 before:rounded-md before:-translate-x-[4%] before:-translate-y-[4%]'>PDF</span></h1>
          <div className='flex justify-center'>
            <p className='max-w-[33rem] text-lg'>Join millions of <span className='text-amber-500 underline'>students,researchers and professionals</span> to instantly answer questions and understand research with AI  </p>
          </div>
        </div>

        <div className='rounded-xl min-w-[440px] max-w-[980px] h-[380px] mx-auto m-2'>
          <div className=' relative rounded-xl bg-[url(../../public/dots.jpg)] bg-contain h-full '>
            <div className='flex flex-col justify-center items-center h-full gap-12'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-center items-center'>
                  <Image src={PDF} alt='Upload SVG' width={70} height={60} />
                </div>
                <div className='rounded-lg bg-amber-500 py-2 text-center'>
                  <p className='text-white text-lg'>Browse File</p>
                </div>
                <p>Drag & Drop, or Choose PDF to upload</p>
              </div>
              <div className=''>
                <p>Only PDF files are supported.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <p className='text-center'>For a quick try, get started with our sample files here:</p>
        <div className='flex flex-col gap-5'>
          <div className='rounded-md'>
            <div className='border border-gray-400 rounded-xl flex justify-between items-center px-6 py-2.5'>
              <div className='flex gap-5 items-center'>
                <Image src={PDF} alt='pdf file icon' height={30} width={30} />
                <p>Name of the file</p>
              </div>
              <div>
                arrow
              </div>
            </div>
          </div>
          <div className='rounded-md'>
            <div>
              <Image src={PDF} alt='pdf file icon' height={30} width={30} />
            </div>
            <p>Name of the file 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero