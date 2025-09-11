import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ColorPage from "./ColorPage.jsx"
import FontPage from "./FontPage.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router'


chrome.storage.local.get(null, data => {
  const router = createBrowserRouter([
    {
      element: <App {...data} />,
      children: [
        { path: "/colors", element: <ColorPage /> },
        { path: "/fonts", element: <FontPage /> }
      ]
    }
  ])

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
})