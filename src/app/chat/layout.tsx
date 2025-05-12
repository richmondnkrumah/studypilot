import ResizableWrapper from '@/components/ResizableWrapper'
import { ChatStoreProvider } from '@/lib/ChatStoreProvider'
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
        <main className='flex h-[100vh] '>
            <ChatStoreProvider>
                {sideview}
                <ResizableWrapper chatComponet={chatview} pdfComponent={pdfview} />
            </ChatStoreProvider>
        </main>
    )
}

export default ChatLayout