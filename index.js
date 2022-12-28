const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.use(express.static('public'));

app.use('/*', (req, res) => {

    console.log(req.originalUrl);
    console.log(req.headers);
    // console.log(req);
    res.send('Hello World!');

});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});