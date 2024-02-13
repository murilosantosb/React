
import './App.css'
import NavBar from './components/NavBar'

import { Outlet } from 'react-router-dom'
import { HookUseContext } from './components/HookUseContext'


function App() {

  return(
    <div>

         <NavBar/>

         <Outlet/>
    
    </div>
  )

}

export default App
