import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enables in the BrowserWindow')
}

try {
  contextBridge.exposeInIsolatedWorld('context', {
    //TODO
  })
} catch (error) {
  console.error(error)
}
