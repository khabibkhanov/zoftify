const fs = require('fs')
const path = require('path')
const { postsAll, getPost, post } = require('./model.js')

const GETPOSTS = (req, res) => {
    res.json(postsAll())
}

const GETPOST = (req, res) => {
    let post = getPost(req.params)

    if (post) {
        return res.json(post)
    } else return res.status(404).json({ message: 'The post not found!' })
}

const POSTS = (req, res) => {
    const { title, time, status } = req.body

    if (title && time && status) {
        let posts = require('./../../database/posts.json')

        let postId = posts.length ? posts[posts.length - 1].post_id + 1 : 1

        newPost = {
            post_id: postId,
            title: req.body.title,
            time: req.body.time,
            status: req.body.status,
        }

        posts.push(newPost)

        fs.writeFileSync(path.join('src', 'database', 'posts.json'), JSON.stringify(posts, null, 4))
        return res.status(201).json({
            message: 'The post has been added!',
            body: {
                postId: newPost.post_id,
                title: newPost.title,
                time: newPost.time,
                status: newPost.status,
            },
        })
    } else {
        // Check if empty field
        let message = {}
        Object.entries({ title, time, status }).forEach(([key, value]) => {
            if (!!!req.body[key]) message[key] = value
        })

        const keys = Object.keys(message)
        keys.forEach(key => (message[key] = 'This field is required!!!'))

        res.status(400).json({ message })
    }
}

module.exports = {
    GETPOSTS,
    GETPOST,
    POSTS,
}
