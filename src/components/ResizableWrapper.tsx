'use client'
import React, { ReactNode } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'


const ResizableWrapper = ({
    chatComponet,
    pdfComponent,
}:
    {
        chatComponet: ReactNode,
        pdfComponent: ReactNode
    }) => {
    return (
        <PanelGroup className='h-full' direction="horizontal">
            <Panel defaultSize={30} minSize={20}>
                {chatComponet}
            </Panel>
            <PanelResizeHandle className="w-1 bg-gray-200" />
            <Panel defaultSize={30} minSize={20}>
                {pdfComponent}
            </Panel>
        </PanelGroup>
    )
}

export default ResizableWrapper