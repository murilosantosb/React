import React from 'react'

const ShowUserName = ({name,age,job,working}) => {
  return (
    <>
    <h1>Dados do Usuário:</h1>
    <p>Nome: {name}</p>
    <p>Idade: {age}</p>
    <p>Profissão: {job}</p>
    <h3>Usuário está Empregado: {working}</h3>
    </>
    
  )
}

export default ShowUserName