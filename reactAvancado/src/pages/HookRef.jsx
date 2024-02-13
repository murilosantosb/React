import React, { useCallback, useEffect, useRef } from 'react'

import Modal from '../components/Modal'

const HookRef = () => {
  const nameInputRef = useRef(null)
  const acceptTermsRef = useRef({value: false})
  const modalRef = useRef(null)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    console.log(nameInputRef.current ?.value)
    console.log(acceptTermsRef.current.value)

    nameInputRef.current ?.focus()
  }, [])
  

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value


  }, [])

  const handleOpenModal = () => {
    modalRef.current.handleOpenModal()
  }
  
  return (
    <div>
     
      <Modal ref={modalRef}/>
      <button onClick={handleOpenModal}>Abrir Modal</button>

      

    </div>
  )
}

export default HookRef