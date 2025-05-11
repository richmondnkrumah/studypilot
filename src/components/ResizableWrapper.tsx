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
        <PanelGroup direction="horizontal">
            <Panel defaultSize={30} minSize={20}>
                {chatComponet}
            </Panel>
            <PanelResizeHandle className="w-2 bg-blue-800" />
            <Panel defaultSize={30} minSize={20}>
                {pdfComponent}
            </Panel>
        </PanelGroup>
    )
}

export default ResizableWrapper