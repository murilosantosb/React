import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'


const Contact = () => {
  const {counter, setCounter} = useCounterContext()

  const { color , dispatch } = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  }


  return (
    <div>
      <h1 style={{color: color}}>Contatos</h1>
      <p style={{color: color}}>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Adicionar pontos</button>

      <button onClick={() => setTitleColor("RED")}>Vermelho</button>

      <button onClick={() => setTitleColor("BLUE")}>AZUl</button>
    </div>
  )
}

export default Contact