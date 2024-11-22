const express = require('express');
const path = require('path');

const app = express();
const indexRouter = require('./routes/index');

// Set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use router
app.use('/', indexRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

