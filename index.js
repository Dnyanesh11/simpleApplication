var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mongodbConnection = require('./mongoDBConnection.js');
var connectionString = require('./config/config.js');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('access-Control-Allow-Origin', '*');
    next();
});


mongodbConnection.mongoConnetion(connectionString.mongoDBConnectionString, function (err,mongoose) {
    if (err) {
        console.log(err);
    } else {
        console.log('connection Successfull');
        var Schema = mongoose.Schema;
        var personSchema = mongoose.Schema({
            name: String,
            age: Number,
            nationality: String
        });
        var person1 = mongoose.model("person1", personSchema);
        app.get('/people', function (req, res) {
           person1.find(function (err, response) {
                res.json(response);
            });
        });
        app.post('/people', function(req, res) {
         var user_id = req.body.id;
        //  var token = req.body.token;
        //  var geo = req.body.geo;

         res.send(user_id );
}); 


    }
})






// var personSchema = mongoose.Schema({
//     name: String,
//     age: Number,
//     nationality: String
// });
// var Person = mongoose.model("Person", personSchema);

// var Rahul = new Person({
//     name: "Lambodar"
// })
// Rahul.save(function (err, data) {
//     if (err) console.log(err);
//     else console.log('Saved :-----> ', data)
// })















app.listen(3000);