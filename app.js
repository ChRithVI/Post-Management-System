
const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/posts', (req, res) => {
     controller.getPosts((req, res, next) => {
        res.send();
     });
});

app.post('/createpost', (req, res) => {
    controller.addPost(req.body, res, (callback) => {
        res.send();
    });
});


app.post('/updatepost', (req, res) => {
    controller.updatePost(req.body, res, (callback) => {
        res.send(callback);
    });
});

app.post('/deletepost', (req, res) => {
    controller.deletePost(req.body, res, (callback) => {
        res.send(callback);
    });
});

module.exports = app;