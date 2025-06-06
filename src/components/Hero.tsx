'use client'
import { ChangeEvent, DragEvent, useRef, useState } from 'react'
import PDF from '../../public/PDF.svg'
import PDFFILE from '../../public/pdfFile.svg'
import ARROWRIGHT from '../../public/arrowRight.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ResponsiveWrapper from './ResponsiveWrapper'
import { useChatStore } from '@/lib/ChatStoreProvider'
import { v4 as uuidv4 } from 'uuid';
import Loader from './Loader'
type Props = {}
const Hero = (props: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()
  const saveFile = useChatStore(state => state.saveFile) 

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

  const uploadFile = async (file: File) => {
    console.log("starts upload here")
    setIsUploading(true)
    try {
      const pdf_id = uuidv4()
      console.log("file",file)
      saveFile(pdf_id,file.name,file)
      router.push(`/chat?id=${pdf_id}`)
      setIsUploading(false)
    }
    catch (err) {
      console.error(err)
      setIsUploading(false)
    }
  }

  return (
    <ResponsiveWrapper>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-3 text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold'>Chat with any <span className='relative z-10 text-white  before:bg-amber-500 before:-z-10 before:absolute before:w-[110%] before:h-[90%] before:rotate-4 before:rounded-2xl before:-translate-x-[4%] before:-translate-y-[4%]'>PDF</span></h1>
          <div className='flex justify-center'>
            <p className='max-w-[36rem] text-md sm:text-lg font-semibold text-[#707070]'>Join millions of <span className='text-amber-500 underline'>students, researchers and professionals</span> to instantly answer questions and understand research with AI  </p>
          </div>
        </div>
        <div onClick={() => {
          fileInputRef.current?.click()
        }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
          handleDrop(e)
        }} className='rounded-4xl w-full h-[400px] mx-auto p-5 shadow-[0_0_28px_#FFF0C2]'>
          <div className='z-0 relative rounded-3xl bg-contain h-full border-2 border-amber-300 hover:bg-amber-300/10 border-dashed '>
            <input
              type="file"
              accept="application/pdf"
              ref={fileInputRef}
              onChange={handleFileSelect}

              className="hidden"
            />
            {
              isUploading ? <Loader /> :
                <div className='flex flex-col justify-center items-center h-full gap-12'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex justify-center items-center'>
                      <Image src={PDF} alt='Upload SVG' className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' />
                    </div>
                    <div className='rounded-lg bg-amber-500 py-2 text-center'>
                      <p className='text-white text-lg'>Browse File</p>
                    </div>
                    <p className='font-semibold text-sm sm:text-lg text-[#707070]'>Drag & Drop, or Choose PDF to upload</p>
                  </div>
                  <div className=''>
                    <p className='font-bold text-sm sm:text-lg text-gray-500'>Only PDF files are supported.</p>

                  </div>
                </div>
            }

          </div>
        </div>
      </div>
      <div className=''>
        <p className='text-center text-sm sm:text-lg font-bold mb-3 text-gray-500'>For a quick try, get started with our sample files here:</p>
        <div className='flex flex-col gap-1'>
          <div className='hover:bg-gray-100 rounded-2xl group'>
            <div className=' flex justify-between items-center px-6 py-2.5'>
              <div className='flex gap-5 items-center'>
                <Image src={PDFFILE} alt='pdf file icon' className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' />
                <p className='text-sm sm:text-md'>Name of the file</p>
              </div>
              <div className='group-hover:translate-x-3 transition-transform'>
                <Image src={ARROWRIGHT} alt='arrow right svg' className='w-5 sm:w-8' />
              </div>
            </div>
          </div>
          <div className='w-full h-[1px] bg-gray-200'></div>
          <div className='hover:bg-gray-100 rounded-2xl group'>
            <div className=' flex justify-between items-center px-6 py-2.5'>
              <div className='flex gap-5 items-center'>
                <Image src={PDFFILE} alt='pdf file icon' className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' />
                <p className='text-sm sm:text-md'>Name of the file</p>
              </div>
              <div className='group-hover:translate-x-3 transition-transform'>
                <Image src={ARROWRIGHT} className='text-green-500 w-5 sm:w-8' alt='arrow right svg'  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveWrapper>

  )
}

export default Hero