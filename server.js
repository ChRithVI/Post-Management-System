const express = require('express');
const app = express();
const cors = require('cors');
const port =3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://charithaccb:pmsys@cluster0.f1lr8y8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('connected to the database');
    }

    catch(error) {
        console.log('mongodb error', error);

    }
};

connect();



const server = app.listen(3001, '127.0.0.1', () => {
    console.log(`Node server is listening to ${server.address().port}` )
});

app.use('/api', router);