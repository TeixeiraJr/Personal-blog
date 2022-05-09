const express = require ('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;

app.get('/', (req, res) => {
    res.send('Endpoint is working');
})

app.use('/api', routes);
app.use(express.static(__dirname + '/client'));

app.listen(port, () => {
    console.log('server running on http://localhost', port);
})