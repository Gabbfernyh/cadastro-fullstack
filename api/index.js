import express from 'express'
import mongoose from 'mongoose'
import dns from 'node:dns'
import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const port = process.env.PORT || 3000

// Habilitar CORS
app.use(cors())

const dnsServersEnv = process.env.DNS_SERVERS
if (dnsServersEnv) {
    const servers = dnsServersEnv
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    if (servers.length) dns.setServers(servers)
} else {
    const servers = dns.getServers()
    if (servers.length === 1 && servers[0] === '127.0.0.1') {
        dns.setServers(['1.1.1.1', '8.8.8.8'])
        console.warn(
            "Detected Node DNS server as 127.0.0.1 (often a broken local DNS proxy). Using public DNS (1.1.1.1, 8.8.8.8). You can override with DNS_SERVERS in api/.env."
        )
    }
}

const mongodbUri = process.env.MONGODB_URI
if (!mongodbUri) {
    console.error('Missing env var: MONGODB_URI (check api/.env)')
    process.exit(1)
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret._id = ret._id.toString()
            return ret
        }
    }
})

const User = mongoose.model('User', userSchema)

app.use(express.json())

app.post('/users', async (req, res) => {
    try {
        const userCreate = await User.create(req.body)
        res.status(201).json(userCreate)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


app.get('/users', async (req, res) => {
    try {
        const usersDb = await User.find()
        res.json(usersDb)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.delete('/users', async (req, res) => {
    try {
        await User.deleteMany({}) // deleta todos os usuários
        res.json({ message: 'Todos os usuários foram deletados' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ message: 'Usuário deletado com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

async function start() {
    try {
        await mongoose.connect(mongodbUri, { serverSelectionTimeoutMS: 10000 })
        console.log('Connected to MongoDB')
    } catch (err) {
        console.error('Could not connect to MongoDB', err)

        if (err?.code === 'ECONNREFUSED' && err?.syscall === 'querySrv') {
            console.error(
                "Tip: this usually means a DNS/SRV lookup problem. Try running: Resolve-DnsName -Type SRV _mongodb._tcp.<your-cluster>.mongodb.net (PowerShell) and check your DNS/VPN/firewall."
            )
        }

        process.exit(1)
    }

    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}

start()
