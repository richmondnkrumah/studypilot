import ResizableWrapper from '@/components/ResizableWrapper'
import React, { ReactNode } from 'react'

const ChatLayout = ({
    chatview,
    pdfview,
    sideview
}: {
    chatview: ReactNode,
    pdfview: ReactNode,
    sideview: ReactNode
}) => {
    return (
        <main className='flex h-full '>
            {sideview}
            <ResizableWrapper chatComponet={chatview} pdfComponent={pdfview} />
        </main>
    )
}

export default ChatLayout