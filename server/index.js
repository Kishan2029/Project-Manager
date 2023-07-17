const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 7000;

const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");


const app = express();

app.get('/', (req, res) => {
    res.send("GET Request Called")
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
// app.use("/graphql",
//     graphqlHTTP({
//         schema: schema,
//         rootValue: root,
//         graphiql: process.env.NODE_ENV === 'development',
//     })
// )

app.listen(port, (err) => {
    if (err) {
        console.log("err", err)
    }
    console.log(`Server is running on http://localhost:${port}/`
    )
});