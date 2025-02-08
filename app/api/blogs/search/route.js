import { NextResponse } from 'next/server'
import Blog from '@/app/mongoosedb/model/blog'

const dateFormat = (blog) => {
  const dateraw = blog.createdAt
  const date1 = dateraw.toString().slice(4,7)
  const date2 = dateraw.toString().slice(8,10)
  const date3 = dateraw.toString().slice(11,15)
  const date = `${date2} ${date1} ${date3}` 
  blog.createdAt = date
  return {...blog.toJSON(), createdAt: date}
}

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const blogs = await Blog.find().sort({ createdAt: -1 })
    const filteredBlogs = blogs.filter(
      blog => (blog.author.toLowerCase().includes(query.toLowerCase()) || 
      blog.title.toLowerCase().includes(query.toLowerCase()) || 
      blog.abstract.toLowerCase().includes(query.toLowerCase()) || 
      blog.body.toLowerCase().includes(query.toLowerCase()))
    )
    const newAllBlogs = filteredBlogs.map(dateFormat)
    return NextResponse.json(newAllBlogs)
  }