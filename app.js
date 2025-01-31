import express from "express"
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    const now = new Date().toISOString()
    res.status(200).json({
        email: "semiloreomotade@gmail.com",
        date: now,
        github: "https://github.com/shemigam1/hng_be_stage0"
    })
})
app.use("**", (req, res) => {
    res.status(404).json({
        message: "Not Found!"
    })
})

app.listen(port, async () => {
    console.log(`listening on http://localhost:${port}`)
})