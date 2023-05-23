'use client'
import { useState } from 'react'

const BlogSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`/api/blogs/search?query=${query}`)
    const searchedBlogs = await res.json()
    getSearchResults(searchedBlogs)
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Search Blogs...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  )
}
export default BlogSearch
