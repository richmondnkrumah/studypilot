// src/stores/chat-store.ts
import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

export interface _file {
  id: string
  name: string
  data: File
}

export interface _chat_store_state {
  file_blobs: Omit<_file, "name">[]
  file_summary: Omit<_file, "data">[]
}

export interface _chat_store_actions {
  deleteFile: (id: string) => void,
  saveFile: (id: string, name: string, blob: File) => void,
  getFile: (id: string) => _file | null
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
    persist(
      (set, get) => ({
        ...initState,
        deleteFile: (id) =>
          set((state) => ({
            file_blobs: state.file_blobs.filter(
              (blob_data) => blob_data.id !== id
            ),
            file_summary: state.file_summary.filter(
              (blob_data) => blob_data.id !== id
            ),
          })),
        saveFile: (id, name, blob) => set((state) => ({
          file_blobsn: [...state.file_blobs, {
            id: id,
            data: blob
          }],
          file_summary: [...state.file_summary, {
            id: id,
            name: name
          }],
        })),
        getFile: (id) => {
          const name = get().file_summary.find(file => file.id === id)?.name
          if (name) {
            const data = get().file_blobs.find(file => file.id === id)?.data
            return {
              id: id,
              name: name,
              data: data!
            }
          }
          return null

        }
      }),
      { name: "Chat-Storage" }
    )
  )
}
