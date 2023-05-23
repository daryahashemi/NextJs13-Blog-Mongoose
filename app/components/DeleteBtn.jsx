'use client'
import { useRouter } from 'next/navigation'

const DeleteBtn = async ({ id }) => {
    const router = useRouter()

  const handleClickDelete = async (e, id) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/blogs/?id=' + id, {
      method: 'DELETE'
    })
    // const data = await res.json();
    console.log('blog deleted')
    router.push('/') 
  }

  return ( 
    <button className="btn" onClick={(e) => handleClickDelete(e, id)}>Delete Blog</button>
  )
}
 
export default DeleteBtn