require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

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

app.get('/api/posts', authenticateToken, (req, res) => {
    res.json(posts);
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token =  authHeader && authHeader.split(' ')[1];

    if(token === null)return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
        if(err) return res.sendStatus(403);
        req.email = email;
        next();
    });
}

app.listen(5000, () => console.log('server is listining on port 5000...'));