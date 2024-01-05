import {v4 as uuidv4} from 'uuid'

function RendeListas({ itens }){
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
            itens.map((item,index)=>(
               <p key={uuidv4()}>{item}</p>) 
            )) : (
                <p>Não há itens na lista!</p>
            )}

        </>
    )
}

{
/*
// Lista que foi manipulada no App.js
  const meusItens = ['React', 'Vue', 'Angular' ]
*/
}

export default RendeListas