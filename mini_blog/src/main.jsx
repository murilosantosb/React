import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import {createBrowserRouter , RouterProvider , Navigate , Route} from 'react-router-dom'







// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     errorElement: <Pag404/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/> , 
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/login',
//         element: usuario ? <Login />  : <Navigate to="/"/>  ,
       
//       },
//       {
//         path:'/register',
//         element: usuario ? <Register/> : <Navigate to='/'/>
//       },
//       {
//         path: '/posts/create' ,
//         element: usuario ? <CreatePost /> : <Navigate to="/login" />
//       },
//       {
//         path: '/dashboard',
//         element: usuario ? <Dashboard /> : <Navigate to="/login" />
//       }
//     ]
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
