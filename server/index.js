import express from "express";
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/audio', async (req, res) => {
    const videoId = req.query.v

    try {

        return res.send('ok')
    } catch {
        console.log(error)
        return res.send(error)
    }
})

app.listen(3333, () => console.log('server up'))