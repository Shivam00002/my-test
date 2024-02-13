const express = require('express')
const cors = require('cors')
require('dotenv').config();
const connectDb = require("./db/db");
const app = express()
const port = process.env.PORT || 8000
const MensRanking = require('./models/mens');

app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    res.send("Welcome to My World!")
})

//post the data
app.post('/mens', async (req, res) => {
    try {
        const addingMensdata = new MensRanking(req.body)
        const insetMens = await addingMensdata.save()
        res.status(201).send(insetMens)
    } catch (e) {
        res.status(400).send(e)
    }
})


// get all data
app.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find({})
        res.send(getMens)
    } catch (e) {
        res.status(400).send(e)
    }
})



// get data by ID
app.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findById({ _id })
        res.send(getMen)
    } catch (e) {
        res.status(500).send(e)
    }
})


// get data by name // search
app.get('/menbyname/:name', async (req, res) => {
    try {
        const name = req.params.name
        const findbyname = await MensRanking.find({ name });
        res.send(findbyname)
    } catch (e) {
        res.status(500).send(e)
    }
})


// get data by limit 
app.get('/test', async (req, res) => {
    try {
        const { limit } = req.query
        const limitnum = parseInt(limit)
        const getMenbyLimit = await MensRanking.find().limit(limitnum)
        res.send(getMenbyLimit)
    } catch (e) {
        res.status(500).send(e)
    }
})


//  for update patch
app.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(getMen)
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})


//  for delete by id
app.delete('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        await MensRanking.findByIdAndDelete(_id)
        res.json({ success: "Record deleted!" });
    } catch (e) {
        res.status(500).send(e)
    }
})


connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
})