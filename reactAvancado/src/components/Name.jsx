import { useState } from "react"

const Name = () => {

    const [nome,setNome] = useState()
    const [profissao, setProfissao] = useState()

    function enviarSaudacao(evt){
        evt.preventDefault()
        console.log(`Usuário Cadastrado!`)
        console.log(`Nome: ${nome} , Profissão: ${profissao}`)
    }


  return (
    <>
    <form onSubmit={enviarSaudacao}>
        <label htmlFor="name">Digite seu nome:</label>
            <input
            type="text"
            id="name"
            onChange={(e)=>setNome(e.target.value)}
            />
            <br />
            <label htmlFor="job">Qual é a sua Profissão:</label>
            <input
            type="text" 
            id="job"
            onChange={(e)=>setProfissao(e.target.value)}
            />
           
           <br />
        <button>Enviar</button>
    </form>
    <br />
    <button onClick={()=> alert('Deu Certo!')}>Botão</button>
    </>
  )
}

export default Name