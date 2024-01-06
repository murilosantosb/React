import { useState } from "react"

const ListRender = () => {
    // Usando Index para colocar id nos nomes , forma não muito indicada
    const [list] = useState(['Murilo','Matheus','Maria','Ana','Joana','Pedro'])

    const [users, setUsers] = useState([
        {id:1, name: 'Murilo' , age: 17},
        {id:2, name: 'Matheus' , age: 31},
        {id:3, name: 'André' , age: 25},
      
    ])


    let DeleteUserRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)


        //Sempre usamos prev-nome-do-state : prevUsers
        setUsers((prevUsers)=>{

            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <>
    <ul>
        {list.map((el,index)=>(
            <li key={index}>{el}</li>
        ))}
    </ul>

   <ul>
    {users.map((user)=>(
        <li key={user.id}>{user.name} - {user.age}</li>
    ))}
   </ul>

        <button onClick={DeleteUserRandom}>Deletar Usuário Aleatório</button>

    </>

  )

  
}

export default ListRender