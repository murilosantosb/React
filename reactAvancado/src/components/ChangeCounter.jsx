import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {
    const {dispatch} = useCounterContext()
    
    const setCount = (count) => {
      dispatch({type: count})
    }


  return (
    <div>
        <button onClick={() => setCount("inclement")}>Inclementar</button>
        <button onClick={() => setCount("declement")}>Declementar</button>
        <button onClick={() => setCount("super")}>Mais 10</button>
    </div>
  )
}

export default ChangeCounter