import { useEffect , useState } from "react";

export const useFetch = (url) => {
    const [data , setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                let res = await fetch(url)

                let json = await res.json()

                setData(json)

            }catch(error){
                console.error("Falha na requisição" , error)
            }
        }
        fetchData()
    },[url])

    return {data}
}