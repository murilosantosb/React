import React from 'react'

const Condicional = ({isLoggedIn}) => {

    let content;

    if (isLoggedIn) {
    content = <p>Usuário está logado.</p>;
    } else {
    content = <p>Usuário não está logado.</p>;
    }

    return <div>{content}</div>;


      };


export default Condicional