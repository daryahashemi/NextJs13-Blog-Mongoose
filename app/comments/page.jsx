'use client'
import { useState, useEffect } from 'react'
import LoadingPage from '../loading'

const HomePage = () => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/commentsapi',
        {
          next: {
              revalidate: 60,
          },
        }
      )
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const data = await res.json()
      setComments(data)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h2>Comments</h2>
      <ol>
        {comments.map((comment) => (
          <div className='card' key={comment.id}>
          <li>
            <p><b>Name:</b> {comment.name}</p>
            <p><b>Email:</b> {comment.email}</p>
            <p><b>Body:</b> {comment.body}</p>
          </li>
          </div>
        ))}
      </ol>
    </div>
  )
}
export default HomePage
