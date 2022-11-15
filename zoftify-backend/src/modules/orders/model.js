const fs = require('fs')
const path = require('path')

const postsAll = () => {
    let posts = require('../../database/posts.json')
    return posts
}

const getPost = ({postId}) => {
    let posts = require('../../database/posts.json')

	let post = posts.find(post => post.post_id == postId)
	if(post) {
		return post
	}
}

const post = ( req, res ) => {

}

module.exports = {
    postsAll,
    getPost,
    post
}