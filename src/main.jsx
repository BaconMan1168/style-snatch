import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ColorPage from "./ColorPage.jsx"
import FontPage from "./FontPage.jsx"
import HomePage from "./HomePage.jsx"
import { createHashRouter, RouterProvider } from 'react-router-dom'


chrome.storage.local.get(null, data => {
  const router = createHashRouter([
    {
      element: <App {...data} />,
      children: [
        { index: true, element: <HomePage /> },
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