var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()



app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


const url = "http://index.hu"

app.get("/url", function(req, res) {
    res.send(url);
});

// POST an animal
let data = []

// app.post('/addData', function(req, res){
//     let newData = req.body;
//     console.log(newData);
//     let newEntry = {
//         animal: newData.animal,
//         score: newData.score
//     }
//     data.push(newEntry);
// });
