'use client'
import { ChangeEvent, DragEvent, useRef, useState } from 'react'
import PDF from '../../public/PDF.svg'
import ARROWRIGHT from '../../public/arrowRight.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { savePdfBlob } from '@/lib/db'

type Props = {}
// breakpoints 0-809, 810-1280-1280----

const Hero = (props: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("first")
    const file = e.target.files?.[0]
    console.log("second")
    
    if (file && file.type == "application/pdf") {
      uploadFile(file)
      console.log("done")

    }

  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer?.files[0]
    if (file && file.type == "application/pdf") {
      uploadFile(file)
    }
  }

  const uploadFile = async (file: Blob) => {
    console.log("starts upload here")
    setIsUploading(true)
    

    try {
      await savePdfBlob('uploaded-pdf', file)
      router.push('/chat')
      setIsUploading(false)

    }
    catch (err) {
      console.error(err)
      setIsUploading(false)
    }

  }

  return (
    <div className=' xl:w-[1280px] flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5 text-center'>
          <h1 className='text-6xl font-bold'>Chat with any <span className='relative z-10 text-white  before:bg-amber-500 before:-z-10 before:absolute before:w-[110%] before:h-[90%] before:rotate-4 before:rounded-2xl before:-translate-x-[4%] before:-translate-y-[4%]'>PDF</span></h1>
          <div className='flex justify-center'>
            <p className='max-w-[33rem] text-lg'>Join millions of <span className='text-amber-500 underline'>students, researchers and professionals</span> to instantly answer questions and understand research with AI  </p>
          </div>
        </div>
        <div onClick={() => {
          fileInputRef.current?.click()
        }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
          handleDrop(e)
        }} className='rounded-4xl w-full min-w-[440px] max-w-[980px] h-[380px] mx-auto p-5 shadow-[0_0_28px_#FFF0C2]'>
          <div className='z-0 relative rounded-3xl bg-contain h-full border-2 border-amber-300 hover:bg-amber-300/10 border-dashed '>
            <input
              type="file"
              accept="application/pdf"
              ref={fileInputRef}
              onChange={handleFileSelect}

              className="hidden"
            />
            {
              isUploading ? <p>Its uploading</p> :
                <div className='flex flex-col justify-center items-center h-full gap-12'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex justify-center items-center'>
                      <Image src={PDF} alt='Upload SVG' width={70} height={60} />
                    </div>
                    <div className='rounded-lg bg-amber-500 py-2 text-center'>
                      <p className='text-white text-lg'>Browse File</p>
                    </div>
                    <p className='font-bold'>Drag & Drop, or Choose PDF to upload</p>
                  </div>
                  <div className=''>
                    <p className='font-bold text-gray-500'>Only PDF files are supported.</p>

                  </div>
                </div>
            }

          </div>
        </div>
      </div>
      <div className=''>
        <p className='text-center font-bold'>For a quick try, get started with our sample files here:</p>
        <div className='flex flex-col gap-1'>
          <div className='hover:bg-gray-100 rounded-2xl group'>
            <div className=' flex justify-between items-center px-6 py-2.5'>
              <div className='flex gap-5 items-center'>
                <Image src={PDF} alt='pdf file icon' height={30} width={30} />
                <p>Name of the file</p>
              </div>
              <div className='group-hover:translate-x-3 transition-transform'>
                <Image src={ARROWRIGHT} alt='arrow right svg' height={30} />
              </div>
            </div>
          </div>
          <div className='w-full h-[1px] bg-gray-300'></div>
          <div className='hover:bg-gray-100 rounded-2xl group'>
            <div className=' flex justify-between items-center px-6 py-2.5'>
              <div className='flex gap-5 items-center'>
                <Image src={PDF} alt='pdf file icon' height={30} width={30} />
                <p>Name of the file</p>
              </div>
              <div className='group-hover:translate-x-3 transition-transform'>
                <Image src={ARROWRIGHT} alt='arrow right svg' height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero