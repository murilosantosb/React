import Item from './Item'

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={2008} />
            <Item marca="Nissan" ano_lancamento={2017}/>
            <Item marca="nissan GTR"  ano_lancamento={1995}/>
            <Item />
        </ul>
        
        </>
    )

}

export default List