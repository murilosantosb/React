
import './App.css'
import MyForm from './components/MyForm'

function App() {
  return(
    <div className='App'>
      <h2>Forms</h2>
      <MyForm user={{name: 'Murilo',email: 'murilos@gmail.com',bio:'Eu sou um Programador Front-End',role:'admin'}}/>
    </div>
  )

 
}

export default App
