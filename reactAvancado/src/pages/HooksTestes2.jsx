import { useState, useMemo } from 'react';
import productList from '../components/List';
import './HooksTeste2.css';


const HooksTestes2 = () => {
  const [search, setSearch] = useState('');
  const [products] = useState(productList);
  const [teste, setTeste] = useState('')

  
  
  const filteredProducts = useMemo(() => {

    // console.log(teste)
    console.log(search)
    console.log(products)

    return products.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase())
    )
  },[products, search])


  
  
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='inputSearch'
      />
      <input type="text" onChange={(e) => setTeste(e.target.value)} value={teste}/>
      <div className='container'>
        {filteredProducts.map(product => (
          <span key={product.id} className='produtos'>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </span>
        ))}
      </div>
    </div>
  );

  
};

export default HooksTestes2;






































/*
import { useState , useEffect , useMemo } from 'react'
import productList from '../components/List'

import './HooksTeste2.css'

const HooksTestes2 = () => {
  const [search, setSearch] = useState('')
  const [products , setProducts] = useState(productList)

  const handleProduct = useMemo(() => {
    console.log(product)
  },[products])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      product.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [products, search])

  return(

    <div >
      <input
       type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='inputSearch'
        />
      <div className='container'>
      

      {products && products.map((product) => (
        <span key={product.id} className='produtos'>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </span>
      ))
        
      }
    </div>
    </div>
  )
}



export default HooksTestes2

*/