const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`<h1> Server Home Page`);
})

app.listen(80, () => {
    console.log('Server is listening at 80');
})