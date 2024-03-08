// CSS
import './App.css'
//Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//Pages
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
//Componentes
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return(
    <div className='App'>
      <BrowserRouter>
       <NavBar/>
         <div className='container'>
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
         </div>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}
  

export default App
