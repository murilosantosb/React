import './App.css';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase'; 
// import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';



function App(){

  return(
    <div className="App">
      <h1>Testando Eventos:</h1>
      <Evento numero={222}/>

    <Form />
    </div>
  )
   
}

function iteracao(){

}



export default App;

























{
  /*
  function App() {
  let nome = 'Murilo'
  const NOME = nome.toUpperCase()
  
  function sum(a, b){
    return a * b
  }

  const url = 'https://via.placeholder.com/150'
 
 return (
  <div className="App"> 
   <h1>Olá React!</h1>
   <p>Meu primeiro App</p>
   <p>Meu nome {NOME}</p>
   <p>Somar: {sum(10,5)}</p>
   <img src={url} alt="Minha Imagem" className="App-personalizado"></img>
    <HelloWorld />
    
  </div>
);
 */}