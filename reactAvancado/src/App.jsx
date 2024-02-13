
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

//Componentes
import NavBar from './components/NavBar'

//pages
import Home from './pages/Home'
import About from './pages/About'
import HooksTestes from './pages/HooksTestes'
import HooksTestes2 from './pages/HooksTestes2'
import MyVideos from './pages/MyVideos'
import HookRef from './pages/HookRef'
import Memo from './pages/Memo'

function App() {
 


 return(
      <div className='App'>
          <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/testes' element={<HooksTestes/>}/>
          <Route path='/testes2' element={<HooksTestes2/>}/>
          <Route path='/videos' element={<MyVideos/>}/>
          <Route path='/testes3' element={<HookRef/>} />
          <Route path='/memo' element={<Memo/>}/>
          </Routes>
          </BrowserRouter>
      </div>
 )
  
}

export default App
