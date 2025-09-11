import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

chrome.storage.local.get(null, data => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App {...data} />
    </StrictMode>
  )
})