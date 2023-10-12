import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProjectContextProvider from './contexts/ProjectContextProvider.tsx'
import router from './routes/Router.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ProjectContextProvider>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
      </ProjectContextProvider>
  </React.StrictMode>,
)
