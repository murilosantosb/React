import { useRef, useEffect , useDebugValue} from "react";

export const usePrevius = (value) => {
    const numberRef = useRef()

    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---")
    useDebugValue("O número anterior é : " + value)

     useEffect(() => {
        numberRef.current = value
     })

    return numberRef.current
}