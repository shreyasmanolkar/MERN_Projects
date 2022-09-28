const express = require('express');
const app = express();
const cors = require('cors');
// const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

const posts = [
    {
        username: 'shreyas',
        title: 'Post 1'
    },
    {
        username: 'jim',
        title: 'Post 2'
    },
    {
        username: 'rim',
        title: 'Post 3'
    } 
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.post('/api/register', async (req, res) =>{
    console.log(req.body);
    res.json({status: "ok"});
});


app.post('/api/login', (req, res)=>{
    console.log(req.body);
    res.json({status: "ok"});
});

app.listen(5000, () => console.log('server is listining on port 5000...'));