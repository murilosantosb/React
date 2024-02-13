import { useReducer, useState } from "react"



const HookUserReducer = () => {
    // 1 - começando com o useReducer
    const [number, dispatch] = useReducer((state,action) => {
        return Math.floor(Math.random(state)*100)
    })


    const initialTaks = [
        {id:1 , text: "Fazer alguma coisa"},
        {id:2, text: "Fazer outra coisa"}
    ]
    
    const taskReducer = (state,action) => {
        switch(action.type){
            case "ADD":
                const newTask = {
                    id: Math.floor(Math.random()*100)+1,
                    text: taskText
                }
                setTaskText("")

                return [...state, newTask];

            case "DELETE" :
                return state.filter((task) => task.id !== action.id)
        }
    }

    // 2 - Avançando no useReducer
    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer , initialTaks)
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({type: 'ADD'})
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE" , id})
    }
  return (
    <div>
        <h2>userReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Adicionar</button>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             onChange={(e) => setTaskText(e.target.value)}
             value={taskText}
             />
             <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        ))

        }
        <hr/>
    </div>
  )
}

export default HookUserReducer