import { createContext , useReducer} from "react";

export const ThemeContext = createContext()


const initialState = {
    backgroundColor: "white",
    color:'black'
}

const themeReducer = (state, action) => {
    switch(action.type){
        case "LIGHT":
            return {backgroundColor: "rgb(249, 255, 255)" };
        case "DARK":
            return {backgroundColor: "rgb(20, 20, 20)" , color:'white'};
        
        default:
            return state    
    }
}






export const ThemeContextProvider = ({children}) => {
    const [theme , dispatch] = useReducer(themeReducer , initialState)

    return(
        <ThemeContext.Provider value={{...theme , dispatch}}>
        {children}
        </ThemeContext.Provider>
    )
}
