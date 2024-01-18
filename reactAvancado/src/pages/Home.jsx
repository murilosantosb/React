
//Hoocks
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleContext } from "../hooks/useTitleContext"

//Componentes
import ChangeCounter from '../components/ChangeCounter'



const Home = () => {
    const {count} = useCounterContext()

    const {color , dispatch} = useTitleContext()
    
    const setColor = (color) => {
      dispatch({type: color})
    }


  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p style={{color: color}}>Pontos atuais: {count}</p>
        <ChangeCounter/>

        <button onClick={() => setColor("RED")}>Vermelho</button>
        <button onClick={() => setColor("BLUE")}>Azul</button>

       
    </div>
  )
}

export default Home