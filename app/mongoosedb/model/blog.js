import mongoose from 'mongoose'
const Schema = mongoose.Schema

const blogSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
export default Blog
