import { useState } from "react"

function Condicional(){

    const [email , setEmail] = useState()
    const [userEmail , setUserEmail] = useState()

    const enviarEmail = (e) => {
        e.preventDefault()
        setUserEmail(email)
        
    }

    function limparEmail(){
        setUserEmail('')

    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input
                type="email"
                name=""
                id=""
                placeholder="Digite o seu e-mail..."
                onChange={(e)=> setEmail(e.target.value)}
                />
                <button onClick={enviarEmail}>Enviar-email</button>

                {userEmail ? <div> <p>Usuário Cadastrado!</p> <button onClick={limparEmail}>Remover</button>
                
                </div> :  <div> <p>Faça Login!</p> </div>}
            </form>
        </div>
    )
}

export default Condicional