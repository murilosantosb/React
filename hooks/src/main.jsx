import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Pag404 from './pages/Pag404.jsx'

// Hook
import { HookUseContext } from './components/HookUseContext.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/> ,
    errorElement: <Pag404/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookUseContext>
        <RouterProvider router={router}/>
    </HookUseContext>
  </React.StrictMode>,
)
