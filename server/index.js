const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 6000;


const app = express();



app.listen(port, (err) => {
    if (err) {
        console.log("err", err)
    }
    console.log(`Server is running on ${port}`
    )
});