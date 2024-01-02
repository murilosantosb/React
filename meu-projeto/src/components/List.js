import Item from './Item'

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lançamento={2008} />
            <Item marca="Nissan" ano_lançamento={2017}/>
            <Item marca={2}/>
        </ul>
        
        </>
    )

}

export default List