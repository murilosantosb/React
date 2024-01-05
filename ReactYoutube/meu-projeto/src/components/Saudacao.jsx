function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        if(!algumNome){
            return `Digite seu nome`
        }else{
            return `Olá , ${algumNome}, tudo bem?`
        }
    }


    return (
    <>
    <p>{gerarSaudacao(nome)}</p>
    </>)

}

export default Saudacao