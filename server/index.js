const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 9000;
const cors = require('cors');
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema');


const app = express();


app.get('/', (req, res) => {
    console.log("inside")
    res.send({ string: 'Hello World!' })
})

// // Schema
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

// // The root provides a resolver function for each API endpoint
// var root = {
//     hello: () => {
//         return "Hello world!"
//     },
// }


// graphql middleware
app.use("/graphql",
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})