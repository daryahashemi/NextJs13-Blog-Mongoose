'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const NewBlog = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [abstract, setAbstract] = useState('')
  const [body, setBody] = useState('')
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const blog = { author, title, abstract, body }
    console.log(blog)
    setIsPending(true)
    
    const res = await fetch('http://localhost:3000/api/blogs/', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: { 'Content-Type': 'application/json' }
    })
    // const data = await res.json();
        console.log('new blog added')
        setIsPending(false)
        router.push('/') 
  }

  return ( 
    <>      
    <h2>Add a New Blog</h2>
    <div className="create-form">
      <form onSubmit={handleSubmit}>
      <label>Blog author:</label>
        <input 
        type='text' 
        required 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Blog title:</label>
        <input 
        type='text' 
        required 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog abstract:</label>
        <textarea
        required
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        ></textarea>
        <label>Blog body:</label>
        <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>
    </div>
    </>
  )
}
 
export default NewBlog