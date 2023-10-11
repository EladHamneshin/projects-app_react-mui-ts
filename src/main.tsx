import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProjectContextProvider from './contexts/ProjectContextProvider.tsx'
import router from './routes/Router.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ProjectContextProvider>
        <RouterProvider router={router}/>
      </ProjectContextProvider>
  </React.StrictMode>,
)
