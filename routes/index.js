const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('layout', { title: 'Home', content: 'home' });
});

// About page
router.get('/about', (req, res) => {
    res.render('layout', { title: 'About', content: 'about' });
});

// Services page
router.get('/services', (req, res) => {
    res.render('layout', { title: 'Services', content: 'services' });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('layout', { title: 'Contact', content: 'contact' });
});

// Thank you page
router.post('/contact', (req, res) => {
    res.redirect('/thank-you');
});

router.get('/thank-you', (req, res) => {
    res.render('layout', { title: 'Thank You', content: 'thank-you' });
});

module.exports = router;
