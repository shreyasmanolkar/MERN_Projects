const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit')
const PORT = process.env.PORT || 5000; 
const app = express();
require('dotenv').config(); 

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 20
});

app.use(limiter);
app.set('trust proxy', 1);

app.use(express.static('public'));

app.use('/api', require('./routes/index'))

app.use(cors());

app.listen(PORT, ()=>console.log('server is listining on port ' + PORT + '...'));