'use client'
import { useState, useEffect } from 'react'
import LoadingPage from './loading'
import FetchBlogs from './components/FetchBlogs'
import BlogSearch from './components/BlogSearch'

const HomePage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('http://localhost:3000/api/blogs/',
        {
          next: {
            revalidate: 60,
          },
        }
      )
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const data = await res.json()
      setBlogs(data)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h2>All Blogs</h2>
      <BlogSearch getSearchResults={(results) => setBlogs(results)} />
      <FetchBlogs blogs={blogs} loading={loading}/>
    </div>
  )
}
export default HomePage
