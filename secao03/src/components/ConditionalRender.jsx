import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)

    return(
        <>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true,sim</p>}
        </>
    )
}

export default ConditionalRender