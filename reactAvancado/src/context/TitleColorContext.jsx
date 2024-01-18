import { createContext , useReducer } from "react";

export const TitleColorContext = createContext()

let estadoInicial = {color: "purple"}

function reducer(state,action){
    switch(action.type){
        case "RED":
            return {color: "red"}
        case "BLUE":
            return {color: "blue"}
        default:
            console.log("Error")        
    }
}


export const TitleColorContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , estadoInicial)

    return(
        <TitleColorContext.Provider value={{...state , dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}