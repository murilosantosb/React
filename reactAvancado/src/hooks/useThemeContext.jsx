import { useContext } from "react";
import { ThemeContext } from "../context/BackgroundThemeContext";


export const useThemeContext = () => {

    const context = useContext(ThemeContext)

    if(!context){
        console.log("Contexto não foi encontrado!")
    }

    return context
}