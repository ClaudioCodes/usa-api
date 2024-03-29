const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'usa'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/',(request, response)=>{
    response.render('index.ejs')
    .catch(error => console.error(error))
})

app.post('/searchStates',(request, response)=>{
    db.collection('states').find({}, {projection:{ _id: 0 }}).toArray()
    .then(data => {
        // delete data['_id']
        response.render('search.ejs', { info: data, info2: {stateName: request.body.stateName} })
    })
    .catch(error => console.error(error))
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})