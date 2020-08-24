const {Router} = require('express');
const FeedModel = require('../models/feed');
const router = Router();

router.get('/', async (req, res) => {
    const posts = await FeedModel.find();

    res.send({
        data: posts
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);

    if (req.body.comment) {
        const newPost = new FeedModel({
            author: 'Current User',
            comment: req.body.comment,
            created: new Date(),
            likes: 0
        })

        try {
            await newPost.save();
            res.send({
                data: newPost
            })
        } catch (e) {
            console.log(e)
        }
    } else {
        res.send({
            error: true,
            message: 'Comment is required'
        });
    }
})

module.exports = router
