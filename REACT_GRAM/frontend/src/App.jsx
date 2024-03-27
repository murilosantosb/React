// CSS
import './App.css'
//Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//Pages
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import EditProfile from './pages/EditProfile/EditProfile'
import Profile from './pages/Profile/Profile'
import Photo from './pages/Photo/Photo'
//Componentes
import NavBar from './components/NavBar'
import Footer from './components/Footer'

//hooks
import { useAuth } from './hooks/useAuth'


function App() {
  const {auth, loading} = useAuth()

  if(loading){
    return <p>Carregando...</p>
  }


  return(
    <div className='App'>
      <BrowserRouter>
       <NavBar/>
         <div className='container'>
          <Routes>
            <Route
              path='/'
              element={auth ? <Home/> : <Navigate to="/login" />}
              />
            <Route
               path='/register'
               element={!auth ? <Register/> : <Navigate to="/" />}
            />
            <Route
              path="/users/:id"
              element={auth ? <Profile/> : <Navigate to="/login"/>}
            />
             <Route
              path="/profile"
              element={auth ? <EditProfile/> : <Navigate to="/login" />}
            />
            <Route
             path='/login'
             element={!auth ? <Login/> : <Navigate to="/" />}
             />
            <Route path="/photos/:id" element={<Photo/>}/>
          </Routes>
         </div>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}
  

export default App
