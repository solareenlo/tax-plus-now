const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('*', (req, res, next) => {
// app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post success'
  });
});

app.get('*', (req, res, next) => {
// app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '123',
      title: 'First title',
      content: 'First content'
    },
    {
      id: '124',
      title: 'Second title',
      content: 'Second content'
    }
  ];
  res.status(200).json({
    message: 'fetch success',
    posts: posts
  });
});

// app.listen();
module.exports = app;
