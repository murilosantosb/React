import { useState, useCallback, forwardRef, useImperativeHandle } from "react"

const Modal = forwardRef((props , ref) => {
  const [visible, setVisible] = useState(false)

    const handleCloseModal = useCallback(() => {
        setVisible(false)
    }, [])

    useImperativeHandle(ref, () => ({
        handleOpenModal: () => {
            setVisible(true)
        }
    }))

  if(!visible){
    return null
  }

  return(
    <div style={{color:'white',padding:'5px'}}>
        Modal aberto

        <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  )
})

export default Modal