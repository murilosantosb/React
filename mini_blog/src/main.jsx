import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter , RouterProvider , Navigate} from 'react-router-dom'

// Hooks



// Custom Hook


// Context
import { useAuthValue } from './context/AuthContext.jsx'



// Pages
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Pag404 from './pages/Pag404.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import CreatePost from './pages/CreatePost/CreatePost.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'


const usuario = () => {
  const { user } = useAuthValue()
  return user
}



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Pag404/>,
    children: [
      {
        path: '/',
        element: <Home/> , 
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/login',
        element: !usuario ? <Login /> : <Navigate to="/" />
      },
      {
        path: '/register',
        element: !usuario ? <Register/> : <Navigate to='/'/>
      },
      {
        path: '/posts/create' ,
        element: !<useAuthValue/> ? <CreatePost /> : <Navigate to="/login" />
      },
      {
        path: '/dashboard',
        element: <useAuthValue/> ? <Dashboard /> : <Navigate to="/login" />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
      <RouterProvider router={router} />
  
  </React.StrictMode>,
)
