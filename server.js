const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    console.log('Accept is: ',req.get('Accept'));
    console.log('Content-Type is: ',req.get('Content-Type'));
    res.send(req.headers);
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));
