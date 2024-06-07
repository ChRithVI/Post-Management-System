const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/posts', controller.getPosts);
router.post('/createpost', controller.addPost);
router.post('/updatepost', controller.updatePost);
router.post('/deletepost', controller.deletePost);

module.exports = router;