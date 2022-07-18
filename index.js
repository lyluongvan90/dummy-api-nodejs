var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/secret/database', async function (req, res) {
    try {
        const data = fs.readFileSync('./data/azure-database.json', 'utf8');
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
})

app.get('/secret/recaptcha', async function (req, res) {
    try {
        const data = fs.readFileSync('./data/azure-recaptcha.json', 'utf8');
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
})

app.get('/secret/redis', async function (req, res) {
    try {
        const data = fs.readFileSync('./data/azure-redis.json', 'utf8');
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
})

app.get('/secret/mailers', async function (req, res) {
    try {
        const data = fs.readFileSync('./data/azure-mailers.json', 'utf8');
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
   
    console.log("Example app listening at http://%s:%s", host, port)
})