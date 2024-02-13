import { useState  } from "react"

import { usePrevius } from "../hooks/usePrevius"

const HookCustom = () => {
    const [number, setNumber] = useState(0)
    const previousValue = usePrevius(number)

  return (
    <div>
        <p>Valor Atual: {number} </p>
        <p>Valor Anterior: {previousValue}</p>
        <button onClick={() => setNumber(Math.floor(Math.random()*100)+1)}>Alterar valor</button>
        <hr/>
    </div>
  )
}

export default HookCustom