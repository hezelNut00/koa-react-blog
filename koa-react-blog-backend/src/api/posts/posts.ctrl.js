const Post = require('../../models/post');

exports.write = async ctx => {
    console.log('Received POST request to /posts');
    const { title, body, tags } = ctx.request.body;
    const post = new Post({ title, body, tags, });
    try {
        await post.save();
        ctx.body = post;
    } catch (err) {
        ctx.throw(500, err);
    }
};

exports.list = async ctx => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (err) {
        ctx.throw(500, err);
    }
};

exports.read = async ctx => {
    const {id} = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if(!post) {
            ctx.status = 404; // Not Found 뜸
            return;
        }
    } catch (err) {
        ctx.throw(500, err);
    }
};

// exports.remove = ctx => {};

// exports.update = ctx => {};