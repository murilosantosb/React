
import './App.css'
import { Outlet } from 'react-router-dom'

// Context
import { AuthProvider } from './context/AuthContext.jsx'

// Custom hook
// import { useAuthState } from './hooks/useAuthState.jsx'

// Componentes
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { useEffect, useState } from 'react'
import { useAuthentication } from './hooks/useAuthentication.jsx'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
 
  const [user , setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined
  

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return(
    <AuthProvider value={{user}}>
    <body>
      <div className='container'>
   
    <NavBar/>

    
      <Outlet/>
   
    
   </div>
    <Footer/>
   
   </body>
   </AuthProvider>
  )
}

export default App
