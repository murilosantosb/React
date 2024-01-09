import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
    // 6 - Controlled inputs
 //3 - gerenciamento de dados
    function submitForm(e){
        e.preventDefault()
        console.log('Nome:', name)
        console.log('Email:',email)
        console.log('Bio:', bio)

        //  Validação
        //  envio

        // 7 - Limpar Formulário
        setName("")
        setEmail("")
        setBio("")
    }

    const [name,setName]= useState(user  ? user.name  : '')
    const [email,setEmail] = useState(user ? user.email : '')
    const [bio,setBio] = useState("")

  return (
    <div>
        {/* 1 - Criando form */}
        <form className='form' onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Nome:</label> <br />
                <input
                className='input'
                type="text"
                name="name"
                id="name"
                placeholder='Digite seu nome' 
                onChange={(e)=> setName(e.target.value)}
                value={name}
                />
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                {/* 4 - Simplificação de manipulação de state */}
                <span>E-mail</span>
                <input
                type="text"
                name="email"
                id="email"
                placeholder='Digite seu Email'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />
            </label>
            {/* 8 - textArea */}
            <label>
                <span>Biografia</span>
                <textarea name="bio" onChange={(e)=> setBio(e.target.value)}></textarea> 
            </label>
            <button className='btn_enviar'>Enviar</button>
        </form>
    </div>
  )
}

export default MyForm