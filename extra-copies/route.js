import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import courses from './data.json'

export async function GET(request) {
  return NextResponse.json(courses)
}

export async function POST(request) {
  const { title, description, level, link } = await request.json()

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse)
  return NextResponse.json(courses)
}


export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  // console.log(id)

  const index = courses.findIndex(course => course.id === parseInt(id))
  // console.log(index)
  if (index !== -1) {
    courses.splice(index, 1)[0]
  }
  return NextResponse.json(courses)
}

export async function PATCH(request) {
  const Doc = await request.json()
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const index = courses.findIndex(course => course.id === parseInt(id))
  // console.log(index)
  if (index !== -1) {
    courses[index] = Doc
  }
  return NextResponse.json(courses[index])
}