async function fetchBlog(id) {
    const response = await fetch('http://localhost:3000/api/blogs/getsingle?id=' + id, 
        {
            next: {
                revalidate: 60,
            },
        }
    ) 
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const blog = await response.json()
    return blog
} 

const BlogBody = async ({ id }) => {
    const blog = await fetchBlog(id)
    return ( 
        <div>
            <p><b>Body:</b> {blog.body}</p>
        </div>
    )
}
 
export default BlogBody