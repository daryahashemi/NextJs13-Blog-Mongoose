import { NextResponse } from 'next/server'
import Blog from '@/app/mongoosedb/model/blog'

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
    return NextResponse.json(filteredBlogs) 
  }