// lib/db.ts
import { openDB } from 'idb'

export const getDb = async () => {
  return await openDB('pdf-store', 1, {
    upgrade(db) {
      db.createObjectStore('pdfs')
    },
  })
}

export const savePdfBlob = async (key: string, blob: Blob) => {
  const db = await getDb()
  await db.put('pdfs', blob, key)
}

export const getPdfBlob = async (key: string) => {
  const db = await getDb()
  return await db.get('pdfs', key)
}
