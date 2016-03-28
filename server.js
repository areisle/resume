var express = require('express');

var app = express();

app.get('/api/albums', function(req, res, next) {
    // TODO: put me in a separate file
    var albums = [
        {
            name: 'Killer Album...?',
            numberInStock: 2
        },
        {
            name: 'Lucy In the Sky with Diamonds',
            numberInStock: 1
        }
    ];

    res.send(albums);
});

app.use(express.static('./'));

console.log('Starting the server on port 3000');
app.listen('3000');