//CSS
import './App.css'

//Hoocks
import { useState, useEffect } from 'react'





// 4 - Custom hook
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([])

  //4 - custom hook
  const {data: items , httpConfig , loading, error} = useFetch(url)

  const [name,setName] = useState("")
  const [price,setPrice] = useState("")



  
  // 1 - resgatando dados
//  useEffect(()=> {
//   const fetchData = async () =>{
//     try{
//       const res = await fetch(url)
//       const data = await res.json()
//       setProducts(data)
//     }catch(error){
//       console.error('Erro ao buscar dados:', error)
//     }
//   }
//   fetchData()
//  },[])

 //2 - Add de produtos método POST

  const handleSubmit = async (e) => {
      e.preventDefault()

      const product = {
        name,
        price,
      }

  //     const res = await fetch(url,{
  //       method:"POST",
  //       headers:{
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(product)

  //     })

  //     // 3 - Carregamento dinâmico

  //     const addedProduct = await res.json()

  //       //Pega os produtos antigos e adicionar os novos 
  //       //Com isso temos um carregamento dinâmico sem ter que aperta f5 etc...
  //      setProducts((prevProducts) => [...prevProducts, addedProduct ])


  //      //Limpeza dos inputs

     // 5 - Refatorando post 
     httpConfig(product, "POST")

       setName("")
       setPrice("")
  }

  
  // 9 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }
  

 
  return(
    <div className='App'>
      <h1>Lista de Produtos</h1>

      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && (<h2>{error}</h2>)}
      {!error && (
        <div className='card'>
          {items && items.map((p)=>(
         
          <span key={p.id} className='spanCard'>
            <p>{p.name}</p>
            <p>{p.price}</p>
            <button onClick={() => handleRemove(p.id)}>Remover Produto</button>
          </span>
    
          
          ))}
        </div>
        
        
      )}

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
            type="text"
            name="name"
              value={name}
              onChange={(e)=> setName(e.target.value)} 
              />

            <input
            type="number"
            name="price"
            value={price}
            onChange={(e)=> setPrice(e.target.value)} 
              />
              {/* 7 - state de loading no post */}
              {loading && <button disabled>Aguarde...</button>}
              {!loading && <button>Adicionar</button>}
          </label>
        </form>
      </div>
    </div>
  )
      }
  




export default App
