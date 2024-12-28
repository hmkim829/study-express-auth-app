const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
