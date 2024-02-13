
import LikeButton from '../components/LikeButton'
import styles from './MyVideos.module.css'

import { CiPlay1 } from "react-icons/ci";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyVideos = () => {
    const [text, setText] = useState('')

    console.log(text)

  return (

    <div className={styles.MyVideos}>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <div className={styles.MyVideo}>
            <span className={styles.video}>
            <span className={styles.icon}> <CiPlay1 size={28}/> </span>

            </span>

            <a>
            <h3>Meu vídeo</h3>
            <p>Descrição do video</p>
            </a>
            <LikeButton/>
            
        </div>

        <div className={styles.MyVideo}>
            <span className={styles.videoTwo}>

            <span className={styles.icon}> <CiPlay1 size={28}/> </span>

            </span>

            <a>
            <h3>Meu vídeo</h3>
            <p>Descrição do video</p>
            </a>
            <LikeButton/>
            
        </div>
    </div>
  )
}

export default MyVideos