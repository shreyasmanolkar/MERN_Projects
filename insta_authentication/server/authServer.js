require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

const users = [];

app.get('/api/users', (req, res)=>{
    res.json(users);
});

app.post('/api/register', async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashedPassword);
        const user = { email: req.body.email, fullName: req.body.fullName, userName: req.body.userName, password: hashedPassword };
        users.push(user);
        console.log(users);
        res.status(200).json({status: 'ok'});
    }catch(err){
        res.status(500).send(console.log('err'));
        console.log(err);
    }
});

app.post('/api/login', async (req, res)=>{
    const user = users.find(user => user.email === req.body.email);
    if(user === null){
        return res.status(400).send('Cannot find user');
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            const email = req.body.email;
            const tokenEmail = { email: email };
            
            const accessToken = generateAccessToken(tokenEmail);
            console.log(accessToken);

            res.status(200).json({ status: 'ok', saveToken: accessToken});
        } else {
            res.send('Not Allowed');
        }
    } catch(err){
        res.status(401).send('err');
    }
});

function generateAccessToken(email){
    return jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
}

app.listen(4000, () => console.log('authentication server is running on port 4000...'));