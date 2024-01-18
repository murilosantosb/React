import {useCounterContext} from '../hooks/useCounterContext'
import ChangeCounter from '../components/ChangeCounter'

const About = () => {
  const {count} = useCounterContext()

  return (
    <div>
      <h1>Sobre</h1>
      <p>Pontos atuais: {count} </p>
      <ChangeCounter/>
    </div>
  )
}

export default About