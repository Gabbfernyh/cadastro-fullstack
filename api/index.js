import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err))


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

app.use(express.json())

app.post('/users', async (req, res) => {

    const userCreate = await User.create(req.body)


    res.json(userCreate)
})

// app.post('/users', async (req, res) => {
//     try {
//         const userCreate = await User.create(req.body)
//         res.status(201).json(userCreate) // aqui vem _id, createdAt, updatedAt
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })


app.get('/users', async (req, res) => {

    const usersDb = await User.find()

    res.json(usersDb)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
