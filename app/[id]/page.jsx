import Link from "next/link"
import { Suspense } from "react"
import BlogMeta from "../components/BlogMeta"
import BlogBody from "../components/BlogBody"
import DeleteBtn from "../components/DeleteBtn"

const BlogDetailsPage = ({ params: { id } }) => {
    return ( 
        <div className="card">
            <Link href='/' className="btn btn-back">Back to All Blogs</Link>
            <Suspense fallback={<div>Loading blog...</div>}>
                <BlogMeta id={id} />
            </Suspense>
            <Suspense fallback={<div>Loading blog body...</div>}>
                <BlogBody id={id} /> 
                <DeleteBtn  id={id} />
            </Suspense>
        </div>
    )
}
 
export default BlogDetailsPage