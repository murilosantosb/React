
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

//Componentes
import NavBar from './components/NavBar'

//pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
 


 return(
      <BrowserRouter>
         <NavBar/>
       <Routes>
            <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
 )
  
}

export default App
