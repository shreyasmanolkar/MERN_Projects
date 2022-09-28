const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

app.use(express.json());

const users = [];

app.post('/api/register', async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashedPassword);
        const user = { email: req.body.email, fullName: req.body.fullName, userName: req.body.userName, password: hashedPassword };
        users.push(user);
        console.log(users);
        res.status(201).send();
    }catch(err){
        res.status(500).send(console.log('err'));
        console.log(err);
    }
});


app.post('/api/login', (req, res)=>{
    console.log(req.body);
    res.json({status: "ok"});
});

app.listen(4000, () => console.log('authentication server is running on port 4000...'));