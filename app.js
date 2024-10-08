// const express = require('express');
// const path = require('path');
// const app = express();

// // Set up view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Use routes
// const indexRouter = require('./routes/index');
// app.use('/', indexRouter);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


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

