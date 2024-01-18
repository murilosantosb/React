// 3 - alterando o contexto
// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext"


const ChangeCounter = () => {
    // const {counter, setCounter} = useContext(CounterContext)

    const {counter, setCounter} = useCounterContext()

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Adicionar Pontos</button>
    </div>
  )
}

export default ChangeCounter