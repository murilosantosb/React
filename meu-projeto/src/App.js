import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'; 
import List from './components/List';


function App(){
  const nome = 'Maria'

  return(
    <div className="App">
      <SayMyName nome='Murilo' />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Rodrigo"
      idade="28"
      profissao="Programador"
      foto='https://via.placeholder.com/222' />
      <Frase />
      <List />
      
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