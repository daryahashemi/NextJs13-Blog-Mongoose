import { NextResponse } from 'next/server'
import comments from './data.json'

export async function GET() {
    try {
      return NextResponse.json(comments)
    } catch (error) {
      console.log(error)
      return {
        notFound: true,
      }
    }
  }