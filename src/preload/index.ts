import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (process.contextIsolated) {
  throw new Error('contextIsolation mus be enable in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO: Add your own API here
  })
} catch (error) {
  console.log('contextBridge.exposeInMainWorld error:', error)
}
