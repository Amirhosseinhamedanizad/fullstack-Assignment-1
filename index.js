const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser')
const cors = require('cors')
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefs');


const connect = mongoose.connect('mongodb+srv://Diyako:diyako@cluster0.edpoh.mongodb.net/assignment1?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

connect.then((db) => {
    console.log('Connected successfully to the database')
}, (err) => {
    console.log(err)
})


const server = new ApolloServer({
    typeDefs,
    resolvers
})


const app = express()
app.use(bodyParser.json())
app.use('*', cors())

server.applyMiddleware({ app });


    
    app.listen({ port: 3000 }, () => {
        console.log('graphql at http://localhost:3000' + server.graphqlPath)
    
   });
