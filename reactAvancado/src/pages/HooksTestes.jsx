import React from 'react'
import { useThemeContext  } from '../hooks/useThemeContext'
import { useRef } from 'react'

const HooksTestes = () => {

    const {backgroundColor, color, dispatch} = useThemeContext()

    const setTheme = (theme) =>{
        dispatch({type: theme})
    }

    const btnRef = useRef()

    const handleRef = () => {
      btnRef.current.style.backgroundColor = 'red'

    }

  return (
    <div style={{backgroundColor: backgroundColor  , color: color}}  className='App'>
        <h2>Testes</h2>
        <button onClick={() => setTheme("LIGHT")}>Modo Light</button>
        <button onClick={() => setTheme("DARK")}>Modo Noturno</button>
        <button
         className='ref'
          ref={btnRef}
          onClick={handleRef}
         >useRef</button>
    </div>
  )
}

export default HooksTestes