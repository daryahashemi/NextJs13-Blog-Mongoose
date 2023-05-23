import Link from 'next/link'

const FetchBlogs = async ({ blogs, loading }) => {
    return (
        <div className='card-container'>
            <ul className="card-list">
                {blogs.map( blog => (
                    <li key={blog._id}>
                        <Link href={`/${blog._id}`}>
                            <h3>{blog.title}</h3>
                            <p><b>By:</b> {blog.author}, <b>At:</b> {blog.createdAt}</p>
                            <p>{(blog.body).slice(0, 50)}...</p>
                        </Link>
                    </li>
                ))}
            </ul>  
            {!loading && (blogs.length === 0) && <div className='empty-blog'><h3>No Posts Available!</h3></div>}          
        </div>
    )
}
export default FetchBlogs
