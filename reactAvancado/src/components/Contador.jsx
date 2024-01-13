import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [count,setCount] = useState(0)

   
  return (
    <div>
        <h1>Clique nos Botões</h1>

            <p style={{fontSize:'2em'}}>{count}</p>

        <button onClick={() => setCount(count + 1)} style={{marginRight:'10px'}}>Inclementar</button>   
        <button onClick={() => setCount(count - 1 )}>Declementar</button>
    </div>
  )
}

export default Contador