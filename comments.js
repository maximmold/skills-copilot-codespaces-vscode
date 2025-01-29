// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Import comments data
const comments = require('./data/comments');
// Import posts data
const posts = require('./data/posts');
// Import path
const path = require('path');
// Set up the static directory
app.use(express.static(path.join(__dirname, 'public')));
// Set up the view engine
app.set('view engine', 'ejs');