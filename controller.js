const Post = require('./model');

const getPosts = (req, res, next) => {
    Post.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

const addPost = (req, res, next) => {
    const post = new Post({
        id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,
        date: req.body.date,
        path: req.body.path,
    });
    post.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const updatePost = (req, res, next) => {
    const { id, title, desc, date, path } = req.body;
    Post.updateOne({ id: id }, { $set: { title: title, desc: desc, date: date, path: path, } })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deletePost = (req, res, next) => {
    const id = req.body.id;
    Post.deleteOne({ id: id })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}


exports.getPosts = getPosts;
exports.addPost = addPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
