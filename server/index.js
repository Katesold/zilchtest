const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;


app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.status(200).send('Server running');
});


app.post('/save', (req, res) => {
    const dataString = JSON.stringify(req.body.cardData);
    let output;
    fs.writeFile('./saveData.json', dataString, (err) => {
        if (err){
            output = err;
        }
        output = 'Data written to file';
        
        if(output === err){
            res.status(500).send(output);
        }
        res.status(200).send(output);
        
    });
})
