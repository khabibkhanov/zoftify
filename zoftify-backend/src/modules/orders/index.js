const router = require('express').Router()
const { GETPOSTS, GETPOST, POSTS} = require('./controller')

router.route('/api/posts')
    .get(GETPOSTS)
    .post(POSTS)

router.route('/api/posts/:postId')
    .get(GETPOST)

// router.route('/api/posts')
//     .post(POSTS)

module.exports = router