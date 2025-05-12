// src/providers/chat-store-provider.tsx
'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import {
  type ChatStore,
  createChatStore,
} from './chatStore'

export type ChatStoreApi = ReturnType<typeof createChatStore>

const ChatStoreContext = createContext<ChatStoreApi | undefined>(undefined)

export interface ChatStoreProviderProps {
  children: ReactNode
}

export const ChatStoreProvider = ({ children }: ChatStoreProviderProps) => {
  const storeRef = useRef<ChatStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createChatStore()
  }

  return (
    <ChatStoreContext.Provider value={storeRef.current}>
      {children}
    </ChatStoreContext.Provider>
  )
}

export const useChatStore = <T,>(selector: (store: ChatStore) => T): T => {
  const chatStoreContext = useContext(ChatStoreContext)

  if (!chatStoreContext) {
    throw new Error(`useChatStore must be used within ChatStoreProvider`)
  }

  return useStore(chatStoreContext, selector)
}
