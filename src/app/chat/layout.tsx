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
            {pdfview}
            {chatview}
        </main>
    )
}

export default ChatLayout