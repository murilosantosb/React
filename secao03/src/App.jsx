import './App.css'

import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import MyComponent from './components/ButtonInclement'
import ConditionalRender from './components/ConditionalRender'

function App() {
  return(
    <div className='App'>
      <>
    <h1>Avançando em React</h1>
    {/* Imagens em public */}

    <img src="/img1.jpg" alt="Paisagem" />
    <img src={City} alt="" />
   </>

   <>
   <ManageData />
   </>

      <>
      <ListRender />
      </>

      <>
      <MyComponent />
      </>


      <>
      <ConditionalRender />
      </>
    </div>


  )

}

export default App


