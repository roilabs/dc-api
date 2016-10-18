var express = require('express');

var app = express();


app.get('/locations', function (req, res) {
    console.log('reviews was requested...');
    $http.get('data/locations.txt')
    //res.json('data/locations.txt');
});



var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
});