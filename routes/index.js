const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('layout', {
        title: 'Home',
        body: `
            <!-- Hero Image Responsive Banner -->
            <section class="hero">
                <div class="container text-center">
                    <h1 class="display-4">Welcome to Our Luxury Villa</h1>
                    <p class="lead">Experience unparalleled luxury and comfort.</p>
                </div>
            </section>

            <!-- Text Information for the Villa -->
            <section class="py-5 w-75 mx-auto wrapper">
                <div class="container">
                    <h2 class="text-center mb-4">The Villa</h2>
                    <p class="text-center">Nestled in the heart of nature, our villa offers a perfect blend of tranquility and luxury. 
                    Enjoy the breathtaking views, premium amenities, and exquisite interiors designed for ultimate relaxation. This superb chalet is set on four levels and benefits from seven bedrooms (six en-suite), a large, open plan reception room with double height ceilings and a central open fireplace, a semi-professional kitchen, lift serving all floors and a garage with capacity for four cars. </p>
                </div>
            </section>

            <!-- Image Gallery -->
    <section class="gallery py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-4 p-0">
                            <img src="/images/pexels-castorlystock-3682238.jpg" class="img-fluid" alt="Villa Image 1">
                        </div>
                        <div class="col-md-4 mb-4 p-0">
                            <img src="/images/pexels-enginakyurt-2736388.jpg" class="img-fluid" alt="Villa Image 2">
                        </div>
                        <div class="col-md-4 mb-4 p-0">
                            <img src="/images/pexels-flodahm-1176516.jpg" class="img-fluid" alt="Villa Image 3">
                        </div>
                    </div>
                </div>
            </section>


            <!-- Icons with Three Benefits -->
            <section class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Why Choose Us</h2>
                    <div class="row text-center">
                        <div class="col-md-4 mb-4">
                            <i class="icon-benefit fas fa-swimming-pool"></i>
                            <h5 class="mt-2">Private Pool</h5>
                            <p>Enjoy a private pool with stunning views and top-notch amenities.</p>
                        </div>
                        <div class="col-md-4 mb-4">
                            <i class="icon-benefit fas fa-spa"></i>
                            <h5 class="mt-2">Luxury Spa</h5>
                            <p>Relax and rejuvenate in our in-house luxury spa.</p>
                        </div>
                        <div class="col-md-4 mb-4">
                            <i class="icon-benefit fas fa-concierge-bell"></i>
                            <h5 class="mt-2">24/7 Concierge</h5>
                            <p>Experience personalized service with our 24/7 concierge.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Button for Make a Booking Now -->
            <section class="py-5 bg-dark text-white text-center">
                <div class="container">
                    <h2>Ready for a Luxurious Stay?</h2>
                    <p>Book your stay now and experience luxury like never before.</p>
                    <a href="/contact" class="btn btn-primary btn-lg">Make a Booking Now</a>
                </div>
            </section>

            <!-- Map with Location -->
            <section class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Our Location</h2>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.21905449183!2d-74.11808413716972!3d40.70583159686633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2584e9edec8b3%3A0x251f5f24f5e0888b!2sLuxury%20Villa!5e0!3m2!1sen!2sus!4v1614036605002!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('layout', { title: 'About', body: '<div class="text-center"><h1>About Us</h1><p>This is the about page.</p></div>' });
});

// Services page
router.get('/services', (req, res) => {
    res.render('layout', { title: 'Services', body: '<div class="text-center"><h1>Our Services</h1><p>This is the services page.</p></div>' });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('layout', {
        title: 'Contact', body: `<div class="container"><h1>Contact Us</h1>
    <form action="/contact" method="POST">
        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message:</label>
            <textarea class="form-control" id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
    </div>` });
});

// Thank you page
router.post('/contact', (req, res) => {
    res.redirect('/thank-you');
});

router.get('/thank-you', (req, res) => {
    res.render('layout', { title: 'Thank You', body: '<div class="text-center"><h1>Thank You!</h1><p>Your message has been sent.</p></div>' });
});

module.exports = router;
