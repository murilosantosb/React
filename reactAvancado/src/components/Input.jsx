import React from 'react'


const Input = ({name, label, placeholder}) => {
  return (
    <div className='input-block'>
        <label htmlFor={name}>{label}</label>

        <input
       type="text"
       ref={nameInputRef}
       placeholder={placeholder}
        />

    </div>
  )
}

export default Input