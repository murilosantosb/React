import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)
    let nome = 'Murilo'
    return(
        <div>
        <>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true,sim</p>}
        </>

        <>
        {/* Sempre usar essa sintaxe para Ternário : ... ? () : () */}
        <h1>O nome dele é Murilo?</h1>
        {nome == 'Murilo' ? (<p>Sim é o Murilo</p>) : (<p>Não é Ele!</p>)
        }
        </>

        </div>
        
    )
}

export default ConditionalRender