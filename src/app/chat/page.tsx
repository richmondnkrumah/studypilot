'use client'
import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { getPdfBlob } from '@/lib/db'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
type Props = {}

const page = (props: Props) => {
     const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  useEffect(() => {
    const loadPdf = async () => {
      const blob = await getPdfBlob('uploaded-pdf')
      if (blob) {
        const url = URL.createObjectURL(blob)
        setPdfUrl(url)
      } else {
        alert('No PDF found. Please upload again.')
      }
    }

    loadPdf()

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl)
    }
  }, [])


    return (
        <div>

           {pdfUrl ? (
          <Document file={pdfUrl}>
            <Page pageNumber={1} width={500} />
          </Document>
        ) : (
          <p>Loading PDF…</p>
        )}
        </div>
    )
}

export default page