import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function PostDetail() {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res))
  }, [id])

  return (
    <div className="post-detail">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <button>
        <Link to="/posts/edit">Edit Post</Link>
      </button>
    </div>
  )
}

export default PostDetail
