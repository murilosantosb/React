import Frase from "./Frase";

const style = {
    color: 'blue',
    fontSize: '32px',
  };

function HelloWorld(){
    
    return (
        <div>
            <Frase />
            <h1 style={style}>Meu primeiro componente</h1>
            <Frase />
        </div>
    )

}

export default HelloWorld