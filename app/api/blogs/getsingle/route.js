import { NextResponse } from 'next/server'
import Blog from '@/app/mongoosedb/model/blog'
import connectMongo from '@/app/mongoosedb/connection/app'

let db
async function init () {
  if(db) return
  try {
    console.log('CONNECTING TO MONGO')
    db = await connectMongo()
    console.log('CONNECTED TO MONGO')
  } catch (e) {
    console.error(e)
    throw new Error(e).message
  }
}

(async () => {
  await init()
})()

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
    const id = searchParams.get('id')
    console.log(id)
  
    try {
      if(!db) await init()
      const blogs = await Blog.findById(id)
      const newAllBlogs = dateFormat(blogs)
      return NextResponse.json(newAllBlogs)
    } catch (error) {
      console.log(error)
    }
  }