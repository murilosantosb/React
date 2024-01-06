import { useState } from "react"

const ManageData = () => {
    let someData = 10
    const [number , setNumber] = useState(15)


  return (
    <>
    <div>
    
        <p>Valor: {number}</p>

        <button onClick={(v)=> setNumber(25)}>Adicionar</button>
    </div>
    </>
  )
}

export default ManageData