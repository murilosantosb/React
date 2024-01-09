import React from 'react'

const UserDetails = ({Users}) => {
  return (
    Users.map((p)=>(
        <>
        <h2>Nome: {p.nome}</h2>
        <h3>Idade: {p.idade}</h3>
        <h4>Profissao: {p.profissao}</h4>
        
        {p.idade >= 18 ? (
            <h5>Permissão para Dirigir : Permitida</h5>
        ) : (
            <h5>Permissão para Dirigir : Negada! </h5>
        )}
        </>
    ))
  )
}

export default UserDetails