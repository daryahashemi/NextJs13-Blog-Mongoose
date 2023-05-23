import { MongoClient } from 'mongodb'

const { MONGODB_URI } = process.env
const { NODE_ENV } = process.env
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

let client = new MongoClient(MONGODB_URI, options)
let clientPromise

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}
if (NODE_ENV !== 'production') {
    if(!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    clientPromise =  client.connect()
}

export default clientPromise