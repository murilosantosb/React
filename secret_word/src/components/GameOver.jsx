import './GameOver.css'

const GameOver = ({retry,points}) => {
  return (
    <div>
        <h1>Fim do Jogo!</h1>
        <h2>Sua pontuação foi: {points}</h2>
        <button onClick={retry}>Tente Novamente</button>
    </div>
  )
}

export default GameOver