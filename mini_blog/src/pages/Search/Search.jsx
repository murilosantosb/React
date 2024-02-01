// CSS
import styles from './Search.module.css'

// Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

// Custom Hook
import { useQuery } from '../../hooks/useQuery'

// Componentes
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {document: posts} = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <>
                    <p>Não foram encontrados posts a partir da sua buscar...</p>
                    <Link to='/' className='btn btn-dark'>Voltar</Link>
                </>
            )

            }
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))

            }
        </div>
    </div>
  )
}

export default Search