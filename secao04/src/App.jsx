
import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react'
import Title from './components/Title'
import Challengecss from './components/Challengecss'

//Imagens dos carros
import Skyline from './assets/nissangtr.jpg'
import Ferrari from './assets/ferrari.jpg'
import Camaro from './assets/camaro.jpg'

function App() {
  let n = 15

  let [name] = useState("Murilo")
  let redTitle = true

  let carros = [
    {nome:'Skyline' , ano: 2000, img:Skyline},
    {nome:'Ferrari' , ano: 2015,img:Ferrari},
    {nome:'Camaro' , ano: 2008,img:Camaro}
  ]


  return(
  <>
    {/* CSS global */}
    <h1 className='h1'>React Com CSS</h1>
    {/* CSS de componente */ }
    <MyComponent />
    <button>Normal</button>

    {/* Inline CSS */}
    <p style={{color: "blue", padding: '25px', borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

    {/* CSS dinâmico */}
    <h2 style={n > 15 ? ({color:'green'}) : ({color:'red'})}>
      CSS Dinâmico</h2>

      <h2 style={name === 'Murilo'? ({color:'green',backgroundColor:"greenYellow"}) : ({color:'white',backgroundColor:"red"})}>
      CSS Dinâmico</h2>

    {/* Classe dinâmica */} 
    <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinâmica</h2> 
      
    {/* CSS Modules */}  
    <Title />

    {/* Desafio da Seção 4 */}
    <>
    <Challengecss carros={carros}/>
    </>
  </>
  
  )
}

export default App
