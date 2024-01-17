// 1 - criar context
import { createContext , useState} from "react";

export const  CounterContext = createContext()

// 2 - Criando o Provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(7)

    return (
        <CounterContext.Provider value={{counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    )

}