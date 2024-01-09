import React from 'react'

const ChangeMessage = ({setMessage}) => {
    let saudacoes = ['Oi','Olá','Oi , Tudo bem?']
  return (
    <>
    <button onClick={() => setMessage(saudacoes[0])}>Mensagem 1</button>
    <button onClick={() => setMessage(saudacoes[1])}>Mensagem 2</button>
    <button onClick={() => setMessage(saudacoes[2])}>Mensagem 3</button>
    </>
  )
}

export default ChangeMessage