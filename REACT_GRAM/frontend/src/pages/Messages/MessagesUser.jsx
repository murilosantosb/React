// CSS
import "./MessagesUser.css"

// Rotas
import { uploads } from "../../utils/config"

//icons
import { CiPhone } from "react-icons/ci";
import { IoMdVideocam } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { SiIconify } from "react-icons/si";
import { TiMicrophoneOutline } from "react-icons/ti";
import { GrGallery } from "react-icons/gr";

//Componentes
import Loading from "../../components/Loading"

// Hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

// redux
import {getUserDetails} from '../../slices/userSlice'

const MessagesUser = () => {
  const [message, setMessage] = useState("")


  const { id } = useParams()

  const dispatch = useDispatch()


  const { user, loading, error } = useSelector(state => state.user)


  if(loading){
    return <Loading/>
  }

  return (
    <div className="messages-container">
      <header>
          <span className="user-data">
          {user.profileImage && (
            <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
          )}
          <h2>{user.name}</h2>
          </span>

          <span className="message-icons">
            <CiPhone/>
            <IoMdVideocam/>
            <CiCircleInfo/>
          </span>
      </header>

      <section className="info-user">
          {user.profileImage && (
            <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
          )}
          <h2>{user.name}</h2>
          <p>ReactGram</p>
          <Link to={`/users/${id}`} className="btn unfollower">Ver perfil</Link>
      </section>

      <section className="messages-users">
        <span></span>

        <span></span>
      </section>

          <form className="form-message">
            <SiIconify/>
              <input
              type="text"
              placeholder="Mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              />
            {message.length === 0 ? (
              <>
                <TiMicrophoneOutline/>
                <GrGallery/>
              </>
            ) : (
              <input type="submit" value="Enviar" className="input-form"/>
            )}
          </form>

    </div>
  )
}

export default MessagesUser
