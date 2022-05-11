const express = require ('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
// const database = require('./database/index');
const dotenv = require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Endpoint is working');
})

app.use('/api', routes);
app.use(express.static(__dirname + '/client'));

app.listen(port, () => {
    console.log('server running on http://localhost', port);
})