import "./Messages.css"

import { uploads } from "../../utils/config"

// Components
import Loading from "../../components/Loading"

// icons 
import { SlArrowDown } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";

// Hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

// redux
import {getUserDetails} from "../../slices/userSlice"
import {getAllContacts} from "../../slices/messageSlice"

const Messages = () => {
  const dispatch = useDispatch()

  const { id } = useParams()


  const { user, loading, error } = useSelector((state) => state.user)
  const {contacts, loading: loadingContact, error: errorContact} = useSelector((state) => state.message) 

  useEffect(() => {
    dispatch(getUserDetails(id))
    dispatch(getAllContacts(id))
  }, [dispatch, id])

  if(loadingContact){
    return <Loading/>
  }

  
  return (
    <div className="contacts-container">
        <header className="header-contacts">
          <span>
            <h2>{user.name}</h2>
            <SlArrowDown/>
          </span>
          <FaRegEdit size={24}/>
        </header>

        <section>
          <h1>Mensagens</h1>

          {Array.isArray(contacts) && contacts.map((contact) => (
            <span key={contact._id}>
              {contact.profileImage && (
                <img src={`${uploads}/users/${contact.profileImage}`} alt={contact.name} />
              )}
              <p>{contact.name}</p>
            </span>
          ))
          }
        </section>
    </div>
  )
}

export default Messages