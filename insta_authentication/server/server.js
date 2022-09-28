const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) =>{
    console.log(req.body);
    res.json({status: "ok"});
});

app.post('/api/login', (req, res)=>{
    console.log(req.body);
    res.json({status: "ok"});
});

app.listen(5000, () => console.log('server is listining on port 5000...'));