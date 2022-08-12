const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.resolve(__dirname, './')));

app.post('/send', async (req, res) => {
    const { name, email, review } = req.body;
    let content = ' '+ req.body.name+':'+' '+ req.body.email +' '+ req.body.review+'\r\n';
    console.log(name);
    fs.appendFile('text.txt', content, function(err){
        if(err) throw err;
        console.log('saved!');
    });
});
app.listen(port, () => console.log(`Listening to requests on http://localhost:${port}`));
