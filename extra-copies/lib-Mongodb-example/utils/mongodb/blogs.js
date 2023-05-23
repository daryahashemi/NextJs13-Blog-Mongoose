import clientPromise from "."

let db
let client
let blogs
async function init () {
  if(db) return
  try {
    client = await clientPromise
    db = await client.db()
    blogs = await db.collection("blogs")
  } catch (e) {
    console.error(e)
    throw new Error(e).message
  }
}

(async () => {
  await init()
})()

export async function getBlogPosts() {
  try {
    if(!blogs) await init()
    const response = await blogs
    .find({})
    .limit(20)
    .map(user => ({ ...user, _id: user._id.toString() }))
    .toArray()
    return { blogs: response }
  } catch (erorr) {
    return { erorr: 'Failed to fetch Blog Posts.' }
  }
} 

export async function newBlogPost(req, res) {
  try {
    if(!blogs) await init()
    doc = req.body
    console.log(req.body)
    // const response = await blogs
    // .insertOne(doc)
    // return res.status(200).json(response) 
  } catch (erorr) {
    return { erorr: 'Failed to fetch Blog Posts.' }
  }
} 