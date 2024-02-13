import React from 'react'
import { useState, useEffect } from 'react'
import PostItem from './PostItem'

const PostList = () => {
    const [data, setData] = useState([])
    const [newPost, setNewPost] = useState('')

    let url = "https://jsonplaceholder.typicode.com/posts"


    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch(url)
    
            let json = await res.json()
    
            setData(json)
        }
        fetchData()
    }, [data])

  return (
    <div>
        <input type="text" onChange={(e) => setNewPost(e.target.value)} value={newPost} />
        <ul>
            {data && data.map(post => <PostItem key={post.id} post={post}/>) }
        </ul>
    </div>
  )
}

export default PostList