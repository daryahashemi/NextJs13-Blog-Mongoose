import mongoose from 'mongoose'

const dbURI = process.env.MONGODB_URI

const connectMongo = async () => mongoose.connect(dbURI)
.then(() => {
    console.log('connected to db')
})
.catch(err => console.log(err))

export default connectMongo