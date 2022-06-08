import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      <button>
        <Link to="/posts/new">Create Post</Link>
      </button>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </>
  )
}

export default Posts
