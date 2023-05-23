async function fetchBlog(id) {
    const response = await fetch('http://localhost:3000/api/blogs/getsingle?id=' + id, 
        {
            next: {
                revalidate: 60,
            }
        }
    ) 
    const blog = await response.json()
    return blog
} 

const BlogMeta = async ({ id }) => {
    const blog = await fetchBlog(id)
    return ( 
        <div>
            <h3><b>Title:</b> {blog.title}</h3>
            <p><b>Author:</b> {blog.author}, <b>Created at:</b> {blog.createdAt}</p>
            <p><b>Abstract:</b> {blog.abstract}</p>
      </div>
     )
}
 
export default BlogMeta