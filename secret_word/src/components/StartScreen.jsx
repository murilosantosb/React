import "./StartScreen.css"

const StartScreen = ({start}) => {
  return (
    <div className="start">
        <h1 >Secret Word</h1>
        <p >Click no botão abaixo para começar a jogar</p>
        <button onClick={start} >Começar o jogo</button>
    </div>
  )
}

export default StartScreen