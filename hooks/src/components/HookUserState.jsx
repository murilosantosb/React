import React from 'react'
import { useState } from 'react'


const HookUserState = () => {
    //1 - useState
    const [name, setName] = useState("Murilo")
    const [age , setAge] = useState(17)
    let userName = "Bob"

    // 2 - useState e input

    const handleSubmit = (e) => {
        e.preventDefault()

        // envio a uma API
        console.log(age)
    }

    const changeNames = () => {

        userName = "Bob dos Santos"

        setName("Murilo dos Santos")
    }
  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar valor</button>
         {/* 2 - useState e input  */}
         <p>Digite sua idade:</p>
         <form onSubmit={handleSubmit}>
            <input
             type="number"
             value={age}
             onChange={(e) => setAge(e.target.value)}
             />
             <input type="submit" value="Adicionar" />
         </form>
         <p>Você tem {age} anos</p>
        <hr/>
    </div>
  )
}

export default HookUserState