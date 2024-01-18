import { createContext , useReducer } from "react";

export const CounterContext = createContext()

const estadoInicial = {count:0}

function reducer(state, action){
    switch(action.type){
        case 'inclement':
             return {count: state.count + 1}

        case 'declement':
            return {count: state.count - 1}

        case 'super':
            return {count: state.count + 10}    
        default:
             console.log('Error') 
    }
    
   
}




export const CounterContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , estadoInicial)

    return(
        <CounterContext.Provider value={{...state , dispatch}}>
        {children}
        </CounterContext.Provider>
    )
}