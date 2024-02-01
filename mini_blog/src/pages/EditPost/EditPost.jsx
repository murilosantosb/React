import styles from './EditPost.module.css'

import { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'

// Context
import { useAuthValue } from '../../context/AuthContext'
// Custom Hook
import { useAuthentication } from '../../hooks/useAuthentication'

import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'


const EditPost = () => {
    const {id} = useParams()
    const {document:post} = useFetchDocument("posts", id)
    const {updateDocument, response} = useUpdateDocument("posts")

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

    useEffect(() => {
        if(post){
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)

            const textTags = post.tagsArray.join(", ")
            setTags(textTags)
        }
    }, [post])





  const {user} = useAuthValue()

  const {loading,error} = useAuthentication()

  

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    // Valindando a URL da imagem
    try{
      new URL(image)
    }catch(error){
      setFormError("A imagem precisa ser uma URL.")
    }


    //Criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())


    // checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos!")
    }

    if(formError) return;

    const data = {
        title,
        image,
        body,
        tagsArray,
        uid: user.uid,
        createdBy: user.displayName
    }

    updateDocument(id, data)

    // Redirecionar para Página Home
    navigate('/dashboard')
  }

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
            <h2>Editando post: {post.title} </h2>
      <p>Altere os dados do post como desejar</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
            <input
            type="text"
            name="title"
            placeholder='Pense em um bom título'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
        </label>

        <label>
          <span>URL da Imagem:</span>
            <input
            type="url"
            name="image"
            placeholder='Insira uma imagem que representa o seu post'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            />
        </label>

        <p className={styles.preview_title}>Preview da imagem:</p>
        <img src={post.image} alt={post.title} className={styles.image_preview} />
       
        <label>
          <span>Conteúdo:</span>
            <textarea style={{resize:'none'}}
            name="body"
            placeholder='Insira o conteúdo do post'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            ></textarea>
        </label>

        <label>
          <span>Tags:</span>
            <input
            type="text"
            name="tags"
            placeholder='Insira as tags separadas por vírgula'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            />
        </label>
          {!response.loading && <button className='btn'>Editar</button>}
          {response.loading && <button className='btn' disabled>Aguarde...</button>}
          {response.error && <p className='error'>{error}</p>}
          {formError && <p className='error'>{formError}</p>}
      </form>
        </>
      )}
    </div>
  )
}

export default EditPost