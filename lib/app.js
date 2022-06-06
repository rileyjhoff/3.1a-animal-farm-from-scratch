const express = require('express');
// const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './lib/views');
app.set('view engine', 'pug');

// App routes
// app.use('/zodiac', require('./controllers/zodiac'));
app.get('/', (req, res) => {
  res.render('index.pug', { title: 'Hey', message: 'Hello there!' });
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
