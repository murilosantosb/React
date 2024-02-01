import styles from './Post.module.css'
import { Link } from 'react-router-dom'
// hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const {id} = useParams()
    const {document: post , loading} = useFetchDocument("posts", id)

  return (
    <div className={styles.post_container}>
        {loading && <p>Carregando post...</p>}
        {post && (
            <>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.body}</p>
                <h3>Este post trata sobre:</h3>
                <div className={styles.tags}>
                {post.tagsArray.map((tag) => (
                    <p key={tag} className={styles.tags}><span>#</span>{tag}</p>
                ))}
                </div>
                <Link to='/' className='btn btn-outline'>Voltar</Link>
            </>
        )

        }
    </div>
  )
}

export default Post