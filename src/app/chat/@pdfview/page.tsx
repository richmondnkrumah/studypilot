'use client'
import { useState, useEffect, useMemo } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { useChatStore } from '@/lib/ChatStoreProvider';
import { useSearchParams } from 'next/navigation';
import Loader from '@/components/Loader';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
type Props = {}

const PdfView = (props: Props) => {
  const [pdfData, setPdfData] = useState<Uint8Array | null | undefined>(null)
  const memoizedFile = useMemo(() => {
  return pdfData ? { data: pdfData } : null
}, [pdfData])
  const [notFound, setNotFound] = useState<boolean>(false)
  const getFile = useChatStore(state => state.getFile)
  const gre = useChatStore(state => state.file_blobs)
  const gres = useChatStore(state => state.file_summary)
  const hasHydrated = useChatStore(state => state.hasHydrated)
  const searchParams = useSearchParams()
  const idParam = searchParams.get('id')

  useEffect(() => {
    if (!hasHydrated) return
    console.log(searchParams.get('id'))
    console.log(gre, gres)
    try {
      if (idParam) {
        const pdf_data = getFile(idParam)
        console.log(pdf_data, "sa")
        setPdfData(pdf_data?.data)
        console.log(pdf_data?.data, "saas")
      }
      else {
        setNotFound(true)
      }
    }
    catch (err) {
      console.error(err)
    }

  }, [hasHydrated, idParam])

  return (
    <div>
      {
        notFound ? <p>Error display pdf, htddsfsd no such file found</p>
          :
          memoizedFile ? (
            <Document file={memoizedFile} >
              <Page pageNumber={1} width={500} />
            </Document>
          ) : (
            <Loader />
          )

      }
    </div >
  )
}

export default PdfView