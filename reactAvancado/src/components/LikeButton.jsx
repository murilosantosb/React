import React, { useState , useMemo, useCallback } from 'react'
import { FaRegHeart } from "react-icons/fa";
import'./LikeButton.css'

const LikeButton = () => {
    const [active, setActive] = useState(false)
    const [like, setLike] = useState(0)

    const handleLike = useCallback(() => {
        console.log(like)
    },[like])

  return (
    <div className={`heart-container ${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
     <FaRegHeart   className="heart" size={30} onClick={() => setLike(like + 1)}/>

        <p>Curtidas: {like}</p>
    </div>

   
  )
}

export default LikeButton