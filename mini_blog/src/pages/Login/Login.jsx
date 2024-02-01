import styles from './Login.module.css'

import { useState , useEffect } from 'react'

import { useAuthentication } from '../../hooks/useAuthentication'


const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(res)
    
    
  }

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  },[authError])


  return (
    <div className={styles.login}>
         <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
        <h2>Faça o login para poder utilizar o sistema</h2>
        <form onSubmit={handleSubmit}>
          
          <label>
            <span>E-Mail:</span>
            <input
             type="email"
              name="displayName"
              placeholder='E-mail do usuário'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              />
          </label>

          <label>
            <span>Senha:</span>
            <input
             type="password"
              name="password"
              placeholder='Insira sua senha'
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
              />
          </label>

          {!loading && <button className='btn'>Entrar</button>}
          {loading && <button className='btn' disabled>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login