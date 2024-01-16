import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import { Link } from "react-router-dom"

const Product = () => {
    // 4 - rota dinamica
    const { id } = useParams()

    // 5 - Carregamento do dado individual
    const url = 'http://localhost:3000/products/' + id

    const {data: product , loading , error} = useFetch(url)
    console.log(product)

  return (
    <>
        <p>ID do Produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <h3> R$ {product.price}</h3>
                {/* 6 - nested routes */}
                <Link to={`/product/:${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product