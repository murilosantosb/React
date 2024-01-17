import './App.css'

// 1 - config react router
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'

//  Importando as Páginas de Rotas
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import Search from './pages/Search'
import Page404 from './pages/Page404'


//  Importando Componentes
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'


function App() {
  return(
    <div>
      <h1>React Router</h1>
      
     

      <BrowserRouter>
        <NavBar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
       
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
            {/* 4 - Rota dinamica */}
          <Route path='/product/:id' element={<Product/>} />
          {/* 6 - nested router */}
          <Route path='/product/:id/info' element={<Info/>} />
          {/* 9 - search */}
          <Route path='/search' element={<Search/>} />
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to="/about"/>} />
          {/* 7 - Página 404 */}
          <Route path='/*' element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )


}

export default App
