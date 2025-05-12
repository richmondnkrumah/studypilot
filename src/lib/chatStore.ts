// src/stores/chat-store.ts
import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

export interface _file {
  id: number | string
  name: string
  data: Blob
}

export interface _chat_store_state {
  file_blobs: Omit<_file, "name">[]
  file_summary: Omit<_file, "data">[]
}

export interface _chat_store_actions {
  delteFile: (id: string) => void
}

export type ChatStore = _chat_store_state & _chat_store_actions

export const defaultInitState: _chat_store_state = {
  file_blobs: [],
  file_summary: [],
}

export const createChatStore = (
  initState: _chat_store_state = defaultInitState,
) => {
  return createStore<ChatStore>()(
    persist((set) => ({
      ...initState,
      delteFile: (id) =>
        set((state) => ({
          file_blobs: state.file_blobs.filter(
            (blob_data) => blob_data.id !== id
          ),
          file_summary: state.file_summary.filter(
            (blob_data) => blob_data.id !== id
          ),
        })),
    }),
    { name: "Chat-Storage" }
  ))
}
