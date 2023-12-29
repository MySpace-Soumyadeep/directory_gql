 
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require("mongoose")

const url = "mongodb://localhost:27017/myDB"

const app = express()

mongoose.connect(url,{}).then(()=> {
    console.log("connected to local db");
})

app.use('/graphql', graphqlHTTP({
schema,
graphiql:true
}))

app.listen(4000, ()=> {
    console.log("now listening for requests on port 4000");
})
 