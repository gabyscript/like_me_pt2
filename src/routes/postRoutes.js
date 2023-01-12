
const postController = require('../controllers/postController');

const express = require('express');
const router = express.Router();

router.get('/', postController.show)

router.post('/', postController.create)

router.put('/posts/like/:id', postController.edit)

router.delete('/posts/:id', postController.remove)

module.exports = router;