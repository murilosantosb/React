// CSS
import './App.css'

//Bíblioteca de estilos
import Swal from 'sweetalert2'

//React hocks
import { useCallback , useEffect , useState } from 'react'

// data
import { wordsList } from './data/words'


//Componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'


const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3 , name: "end"},
]

let guessedsQry = 3


function concluirWord(){
  Swal.fire({
    title: "Meus parabéns , você acertou!",
    text: "Você ganhou 100 pontos!",
    icon: "success"
  });
}

function resetWord(){
  Swal.fire({
    icon: "error",
    title: "Não foi dessa vez!",
    text: "Mas, tente novamente!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // escolha uma categoria aleátoria
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    

   // escolha uma palavra aleátoria
   const word = words[category][Math.floor(Math.random() * words[category].length)]

   

   return {word, category}
  },[words])


  //Função para começar o Game
  const startGame = useCallback(() => {
    // Clear all letters
    clearLetterStates()

    // escolha a palavra e escolha a categoria
    const {word , category} = pickWordAndCategory()

    // create an array of letters
    let wordLetters = word.split("")

    //Retornando todas letras em minúsculo
    wordLetters = wordLetters.map((letra)=> letra.toLowerCase())

    

    // Preencher estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  },[pickWordAndCategory])

  // processando a digitação no input
  const verifyLetter = (letter) => {
    
    const normalizedLetrer = letter.toLowerCase()

    //Validação para ver ser a letra já foi utilizada
    if(guessedLetters.includes(normalizedLetrer) || wrongLetters.includes(normalizedLetrer)){
      return ;
    }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetrer)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetrer
      ])
    }else{
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters,
        normalizedLetrer
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses <= 0){

      //Mudar para tela de GameOver
      setGameStage(stages[2].name)

      //Colocar o alerta de Erro
      resetWord()
      //Da um Reset no game
      setGuesses(3)
      
    }
  },[guesses])

  // Check win condition
  useEffect(()=> {
    const uniqueLetters = [... new Set(letters)]
    

    //win condition
    if(guessedLetters.length === uniqueLetters.length){
      // Adicionar pontuação : 
      setScore((actualScore)=> actualScore += 100)
      concluirWord()
      // Restat no game:
      startGame()
    }

  }, [guessedLetters, letters , startGame])

  // Recomeçar o Game
  const retry = () => {
    setScore(0)
    setGuesses(guessedsQry)
    setGameStage(stages[0].name)
  }

 return(
  <div className='App'>
    {gameStage === 'start' && <StartScreen start={startGame}/>}

    {gameStage === 'game' && <Game
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}

    {gameStage === 'end' && <GameOver retry={retry} points={score}/>}
  </div>
 )

}

export default App
