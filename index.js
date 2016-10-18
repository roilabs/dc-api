var express = require('express');
var cors = require('cors')

var app = express()
app.use(cors())


app.get('/locations', function (req, res) {
    console.log('reviews was requested...');
    res.sendFile(__dirname + '/data/locations.json');

});



var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
});