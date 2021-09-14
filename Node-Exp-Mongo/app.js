//const express = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userAddUpdate = require('./Router/Users');
const businesscardlogo = require('./Router/businesscardlogo');
const host = 'localhost';
const port = '2030';
const DB_URL = 'mongodb://localhost:27017/businesscard';
require('dotenv').config();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
//app.use(express.limit(100000000));
//app.use(express.static(__dirname + '/img-uploads'));
app.use('/api/user', userAddUpdate);
app.use('/api/cardlogo', businesscardlogo);

mongoose.connect(DB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(res => {
    app.listen(port, host, () => {
        console.log(`Service started @ ${host}:${port}`);
        console.log(process.env.MONGO_DB_URL);
    });
}).catch(err => console.log('DB not Connected'));

