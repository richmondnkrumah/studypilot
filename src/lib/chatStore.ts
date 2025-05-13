// src/stores/chat-store.ts
import { createStore } from 'zustand/vanilla'
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware'
import { get, set, del } from 'idb-keyval'
export interface _file {
  id: string
  name: string
  data: Uint8Array
}

export interface _chat_store_state {
  file_blobs: Omit<_file, "name">[]
  file_summary: Omit<_file, "data">[],
  hasHydrated: boolean
}

export interface _chat_store_actions {
  deleteFile: (id: string) => void,
  saveFile: (id: string, name: string, blob: File) => Promise<void>,
  getFile: (id: string) => _file | null,
  setHasHydrated: (status: boolean) => void
}

export type ChatStore = _chat_store_state & _chat_store_actions

export const defaultInitState: _chat_store_state = {
  file_blobs: [],
  file_summary: [],
  hasHydrated: false
}

const idbStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    // console.log(name, 'has been retrieved')
    return (await get(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    // console.log(name, 'with value', value, 'has been saved')
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    // console.log(name, 'has been deleted')
    await del(name)
  },
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
        saveFile: async (id, name, blob) => {
          const arrayBuffer = await blob.arrayBuffer()
          const uint8Array = new Uint8Array(arrayBuffer)
          set((state) => ({
            file_blobs: [...state.file_blobs, {
              id: id,
              data: uint8Array
            }],
            file_summary: [...state.file_summary, {
              id: id,
              name: name
            }],
          }))
        },
        getFile: (id) => {
          const summary = get().file_summary.find(f => f.id === id)
          const data = get().file_blobs.find(f => f.id === id)?.data
          return summary && data
            ? { id, name: summary.name, data: new Uint8Array(data) }
            : null
        },
        setHasHydrated: (status) => set({ hasHydrated: status })
      }),
      {
        name: "Chat-Storage",
        storage: createJSONStorage(() => idbStorage),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true)
        },
        partialize: (state) => ({
          file_summary: state.file_summary,
          file_blobs: state.file_blobs.map(f => ({
            id: f.id,
            data: Array.from(f.data) // convert Uint8Array to plain array
          }))
        }),
        merge: (persistedState, currentState) => {
          const typedState = persistedState as any
          return {
            ...currentState,
            ...typedState,
            file_blobs: typedState.file_blobs.map((f: any) => ({
              id: f.id,
              data: new Uint8Array(f.data)
            }))
          }
        }
      }
    )
  )
}
