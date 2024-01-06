import './App.css'

import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import MyComponent from './components/ButtonInclement'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarsDetails from './components/CarsDetails'
import Container from './components/Container'


function App() {
  let person1 = {
    name: 'Murilo',
    age: 17 , 
    job: 'Programador' ,
    working: 'Não',
  }

  let person2 = {
    name: 'Maria',
    age: 22 , 
    job: 'Desenvolvedora' ,
    working: 'Sim'
  }

  let person3 = {
    name: 'João',
    age: 28 , 
    job: 'Analista' ,
    working: 'Sim'
  }

  const cars = [
    {id:1 , brand: 'Ferrari', color: 'Amarelo', newCar: 'Sim', km: 0},
    {id:2 , brand: 'Nissan', color: 'Azul marinho', newCar: 'Não', km: 100000},
    {id:3 , brand: 'Fox', color: 'Cinza', newCar: 'Semi Novo', km: 100},
  ]

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

      <>
      
      <ShowUserName name={person1.name} age={person1.age} job={person1.job} working={person1.working}/>
      <ShowUserName name={person2.name} age={person2.age} job={person2.job} working={person2.working}/>
      <ShowUserName name={person3.name} age={person3.age} job={person3.job} working={person3.working}/>
      </>


      <>
      {/* Loop em array de objetos */ }
      {cars.map((car)=>(
        <CarsDetails id={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
      ))}
      </>

      <>
      {/* Prop Children */}
      <Container myValue="testing">
        <p>Usando a Prop Children</p>
      </Container>

      <Container myValue="testing 2">
        <h3>Testando Container</h3>
      </Container>
      </>
    </div>


  )

}

export default App


