import {useState} from 'react'

function Form(){

    function cadastrarUsuario(evt){
        evt.preventDefault()
        console.log('Usuário Cadastrado com Sucesso!')
        console.log(`Usuário: ${name}  Senha: ${senha}`)
       
    }

    const [name, setName] = useState()
    const [senha , setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                     type="text"
                      id="name"
                      name='name'
                       placeholder="Digite seu nome"
                       onChange={(e)=> setName(e.target.value)}
                       />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                     type="password"
                      id="senha"
                       placeholder="Digite sua senha"
                       onChange={(e)=> setPassword(e.target.value)}
                       />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form