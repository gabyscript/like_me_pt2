
const postRoutes = require('./postRoutes');
const indexController = require('../controllers/indexController');


const express = require('express');
const app = express();

app.get('/', indexController.show);
app.use('/posts', postRoutes);
app.put('/posts/like/:id', postRoutes);
app.delete('/posts/:id' , postRoutes);


module.exports = app;