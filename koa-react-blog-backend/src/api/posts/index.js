const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.post('/', postsCtrl.write);
posts.get('/', postsCtrl.list);
posts.get('/:id', postsCtrl.read);
// posts.delete('/:id', postsCtrl.remove);
// posts.patch('/:id', postsCtrl.update);

module.exports = posts;