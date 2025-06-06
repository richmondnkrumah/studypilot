'use client'
import { useState } from 'react'
import Image from 'next/image'
import PLUSCIRCLE from '../../../../public/plusCircle.svg'
import PDFFILE from '../../../../public/pdfFile.svg'
import SEARCH from '../../../../public/search.svg'
import SIDEBAR from '../../../../public/sidebar.svg'
import { useChatStore } from '@/lib/ChatStoreProvider'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
type Props = {}

const SideView = (props: Props) => {
  const pdfFiles = useChatStore(state => state.file_summary)
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const router = useRouter()

  return (
    <div className={` flex flex-col ${isOpened ? "w-14" : "w-[400px]"} transition-all duration-400 ease-in-out  h-full px-3 pt-3 pb-6 border-r border-r-gray-200`}>
      <div className='flex justify-between items-center mb-6 relative'>
        <h1 className={`text-3xl font-bold transition-opacity duration-200 ${!isOpened ? 'opacity-100 delay-200' : 'opacity-0 delay-0'}`}>Study<span className='text-amber-500'>Pilot</span></h1>
        <div onClick={() => setIsOpened(prev => !prev)} className='cursor-pointer absolute right-0 top-0 w-7 h-7'>
          <Image className={`${isOpened ? "rotate-180" : "rotate-0"} transition-all duration-400`} src={SIDEBAR} alt='chevron right icon' height={28} width={28} />
        </div>
      </div>
      <div className={`h-full flex flex-col gap-5 transition-opacity duration-200 ${!isOpened ? 'opacity-100 delay-200 pointer-events-auto' : 'opacity-0 delay-0 pointer-events-none'}`}>
        <div className='bg-gray-100 flex gap-2 py-2 px-3 rounded-xl'>
          <Image src={SEARCH} alt='add icon' height={20} width={20} className='' />
          <input className='outline-none' type="search" name="" placeholder='Search' id="" />
        </div>
        <div className='grow border-t border-t-gray-300 pt-5 flex flex-col gap-2'>
          {pdfFiles.length < 1 &&
            <div className='w-full flex justify-center'>

              <Loader />
            </div>
          }
          {
            pdfFiles ?
              pdfFiles.map(file =>
                <div onClick={() => router.push(`/chat?id=${file.id}`)} key={file.id} className='cursor-pointer flex items-center gap-5 p-3 rounded-xl bg-gray-100'>
                  <Image src={PDFFILE} height={25} width={25} alt='pdf file icon' />
                  <p className='text-sm truncate max-w-[214px]'>{file.name.split('.')[0]}</p>
                </div>
              )
              :
              <div><p>No files</p></div>
          }
        </div>
        <div className='flex gap-2 items-center justify-center bg-amber-500 p-2 rounded-xl'>
          <Image src={PLUSCIRCLE} alt='add icon' height={20} width={20} className='' />
          <p className='text-white text-md font-semibold'>New File</p>
        </div>
      </div>

    </div>
  )
}

export default SideView