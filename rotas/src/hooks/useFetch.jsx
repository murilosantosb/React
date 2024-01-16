import { useState , useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - Refatorando o post
    const [config,setConfig] = useState(null)
    const [method,setMethod] = useState(null)
    const [callFetch,setCallFetch] = useState(false)

    // 6 - Loading -
    // Carregamento -> para que o user saiba que aquilo está carregando

    const [loading, setLoading] = useState(false)

    // 8 - Tratando erros
    const [error,setError] = useState(null)

    // 9 - Usando Delete
    const [itemId,setItemId] = useState(null)
    
    

    const httpConfig = (data, method)=>{
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers:{
                    "Content-Type": "application/json"
                }
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() =>{
        const fetchData = async () => {

            // 6 - loading
            setLoading(true)

            try{
                const res = await fetch(url)
                const json = await res.json()

                setData(json)

                setLoading(false)
            }catch(erro){
                console.log(erro)
                setError('Erro no Servidor!')
            }
        }
        fetchData()
    },[url , callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST"){

                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()

                setCallFetch(json)
               
            }else if(method === "DELETE"){

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                const json = await res.json()

                setCallFetch(json)
            }
            
        }
        httpRequest()
    }, [config,method,url])

    return {data , httpConfig , loading, error }
}