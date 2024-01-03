import Button from "./evento/Button"

function Evento({numero}){

    function meuEvento(){
        alert(`Opa , fui ativado! ${numero}`)
    }

    function segundoEvento(){
        alert('Segundo evento!')
    }
    return(
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro Evento" />
        <button event={segundoEvento} onClick={segundoEvento}>Ativar!</button>
        </>
    )
}

export default Evento