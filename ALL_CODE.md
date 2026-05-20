### File: about.html

`$ext

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us | S.M.K.SHRI AYYAPPA GARMENTS</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="navbar sticky">
        <div class="container nav-container">
            <a href="index.html" class="logo">S.M.K.SHRI AYYAPPA</a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div class="mobile-menu-toggle" onclick="toggleMenu()">☰</div>
        </div>
    </header>

    <section class="section-padding bg-light" style="min-height: 60vh;">
        <div class="container text-center">
            <h1 class="section-title">About Our Business</h1>
            <p style="max-width: 700px; margin: 0 auto;">
                S.M.K.SHRI AYYAPPA GARMENTS is a leading manufacturer and wholesaler of premium clothing.
                With years of experience in the textile industry, we provide exceptional quality men's and ladies' wear
                to retailers across the country. Our commitment is to deliver high-quality fashion at competitive wholesale prices.
            </p>
        </div>
    </section>

    <footer class="site-footer bg-charcoal text-white">
        <div class="container text-center">
            <p>&copy; 2026 S.M.K.SHRI AYYAPPA GARMENTS.</p>
        </div>
    </footer>
    <script src="js/script.js"></script>

</body>
</html>

``n

### File: contact.html

`$ext

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | S.M.K.SHRI AYYAPPA GARMENTS</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="navbar sticky">
        <div class="container nav-container">
            <a href="index.html" class="logo">S.M.K.SHRI AYYAPPA</a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="wholesale.html">Wholesale</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div class="mobile-menu-toggle" onclick="toggleMenu()">☰</div>
        </div>
    </header>

    <section class="section-padding" style="min-height: 60vh;">
        <div class="container">
            <h1 class="section-title">Get In Touch</h1>
            <div class="contact-grid">
                <div>
                    <h3>Our Office</h3>
                    <p>123 Garment Market<br>Textile Hub, City 400001</p>
                    <br>
                    <h3>Contact Info</h3>
                    <p>Email: sales@ayyappagarments.com</p>
                    <p>Phone: +91 9876543210</p>
                </div>
                <div>
                    <h3>Send a Message</h3>
                    <form onsubmit="event.preventDefault(); alert('Message sent!');">
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <textarea rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="site-footer bg-charcoal text-white">
        <div class="container text-center">
            <p>&copy; 2026 S.M.K.SHRI AYYAPPA GARMENTS.</p>
        </div>
    </footer>
    <script src="js/script.js"></script>

</body>
</html>

``n

### File: index.html

`$ext

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S.M.K.SHRI AYYAPPA GARMENTS | Premium Wholesale Clothing</title>
    <meta name="description" content="Premium wholesale garment supplier. Men's wear, ladies wear, and bulk orders available. MOQ 5 pieces.">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css"> 
    <link rel="stylesheet" href="css/animations.css">
</head>
<body>
    <!-- 1. Sticky Premium Navbar -->
    <header class="navbar sticky">
        <div class="container nav-container">
            <a href="index.html" class="logo">S.M.K.SHRI AYYAPPA</a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="mens-wear.html">Men's</a>
                <a href="ladies-wear.html">Ladies'</a>
                <a href="wholesale.html">Wholesale</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div class="nav-actions">
                <button class="btn btn-primary" onclick="openOrderPopup()">Order Now</button>
                <div class="mobile-menu-toggle" onclick="toggleMenu()">☰</div>
            </div>
        </div>
    </header>

    <!-- 2. Hero Banner Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Premium Quality Garments for Wholesale</h1>
            <p>Your trusted partner for high-quality men's and ladies' wear. Minimum order: 5 pieces.</p>
            <div class="hero-buttons">
                <a href="products.html" class="btn btn-primary">View Collection</a>
                <a href="#inquiry" class="btn btn-secondary">Bulk Inquiry</a>
            </div>
        </div>
    </section>

    <!-- 3. Why Choose Us Section -->
    <section class="why-choose-us section-padding" id="about">
        <div class="container">
            <h2 class="section-title">Why Partner With Us</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <h3>Premium Quality</h3>
                    <p>We use the best fabrics to ensure durability and comfort.</p>
                </div>
                <div class="feature-card">
                    <h3>Bulk Discounts</h3>
                    <p>Competitive pricing for large volume orders.</p>
                </div>
                <div class="feature-card">
                    <h3>Fast Dispatch</h3>
                    <p>Quick processing for wholesale orders to keep your business running.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. Men’s Wear Product Section -->
    <section class="products-preview section-padding bg-light" id="mens-wear">
        <div class="container">
            <h2 class="section-title">Men's Collection</h2>
            <div class="product-grid" id="mens-preview-grid">
                <!-- Products dynamically loaded here via JS -->
            </div>
            <div class="text-center mt-4">
                <a href="mens-wear.html" class="btn btn-outline">View All Men's Wear</a>
            </div>
        </div>
    </section>

    <!-- 5. Ladies Wear Product Section -->
    <section class="products-preview section-padding" id="ladies-wear">
        <div class="container">
            <h2 class="section-title">Ladies' Collection</h2>
            <div class="product-grid" id="ladies-preview-grid">
                <!-- Products dynamically loaded here via JS -->
            </div>
            <div class="text-center mt-4">
                <a href="ladies-wear.html" class="btn btn-outline">View All Ladies' Wear</a>
            </div>
        </div>
    </section>

    <!-- 6. Wholesale Orders Section -->
    <section class="wholesale-info section-padding bg-charcoal text-white" id="wholesale">
        <div class="container">
            <h2 class="section-title text-white">Wholesale Advantage</h2>
            <p class="text-center mb-4" style="text-align:center;">We cater specifically to retailers and resellers.</p>
            <div class="wholesale-steps">
                <div class="step">
                    <span class="step-num">1</span>
                    <h4>Browse</h4>
                    <p>Explore our premium collections.</p>
                </div>
                <div class="step">
                    <span class="step-num">2</span>
                    <h4>Select</h4>
                    <p>Choose minimum 5 pieces per style/order.</p>
                </div>
                <div class="step">
                    <span class="step-num">3</span>
                    <h4>Order</h4>
                    <p>Confirm via WhatsApp instantly.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. Bulk Order Inquiry Section -->
    <section class="bulk-inquiry section-padding" id="inquiry">
        <div class="container">
            <div class="inquiry-box" style="max-width: 600px; margin: 0 auto; background: var(--color-light-bg); padding: 40px; border-radius: 8px;">
                <h2 class="section-title" style="font-size: 2rem;">Request Bulk Order</h2>
                <form id="bulkInquiryForm" class="inquiry-form" onsubmit="submitBulkInquiry(event)">
                    <div class="form-group">
                        <label for="name">Business Name / Your Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">WhatsApp Number</label>
                        <input type="tel" id="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="requirements">Requirements & Quantity</label>
                        <textarea id="requirements" rows="4" placeholder="E.g., 50 Men's Shirts, 20 Ladies' Kurtis" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Send Inquiry on WhatsApp</button>
                </form>
            </div>
        </div>
    </section>

    <!-- 8. WhatsApp CTA Section -->
    <section class="whatsapp-cta section-padding" style="background: var(--color-gold); color: white;">
        <div class="container text-center" style="text-align: center;">
            <h2 style="margin-bottom: 20px;">Need Immediate Assistance?</h2>
            <p style="margin-bottom: 30px;">Our sales team is ready to help you on WhatsApp.</p>
            <a href="https://wa.me/910000000000" class="btn btn-whatsapp">Chat on WhatsApp</a>
        </div>
    </section>

    <!-- Sticky WhatsApp Button -->
    <a href="https://wa.me/910000000000" class="floating-whatsapp" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    </a>

    <!-- Order Popup Modal -->
    <div class="modal-overlay" id="orderModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeOrderPopup()">&times;</span>
            <h2>Place Wholesale Order</h2>
            <p class="moq-notice">Minimum Order Quantity: 5 pieces per item</p>
            <form id="orderForm" onsubmit="submitOrder(event)">
                <div class="form-group">
                    <label for="productSelect">Selected Product</label>
                    <input type="text" id="productSelect" readonly>
                </div>
                <div class="form-group">
                    <label for="orderQty">Quantity (Min 5)</label>
                    <input type="number" id="orderQty" min="5" value="5" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Order via WhatsApp</button>
            </form>
        </div>
    </div>

    <!-- 9. Contact Section -->
    <section class="contact-section section-padding bg-light" id="contact">
        <div class="container">
            <h2 class="section-title">Contact Us</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <h4 style="margin-bottom: 10px;">Address</h4>
                    <p style="margin-bottom: 20px; color: var(--color-gray);">123 Garment Market, Textile Hub, City</p>
                    <h4 style="margin-bottom: 10px;">Email</h4>
                    <p style="margin-bottom: 20px; color: var(--color-gray);">sales@ayyappagarments.com</p>
                    <h4 style="margin-bottom: 10px;">Phone</h4>
                    <p style="margin-bottom: 20px; color: var(--color-gray);">+91 9876543210</p>
                </div>
                <div class="contact-map">
                    <div class="map-placeholder">Map Embed Placeholder</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 10. Policy Section (Linked in footer) -->

    <!-- 11. Footer -->
    <footer class="site-footer bg-charcoal text-white">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>S.M.K.SHRI AYYAPPA</h3>
                    <p style="color: #ccc;">Premium wholesale garments for discerning retailers and bulk buyers.</p>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="products.html">All Products</a></li>
                        <li><a href="wholesale.html">Wholesale Terms</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Policies</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Return & Refund Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 S.M.K.SHRI AYYAPPA GARMENTS. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/script.js"></script>
    <script src="js/products.js"></script>
    <script src="js/order-system.js"></script>
    <script src="js/animations.js"></script>

</body>
</html>

``n

### File: ladies-wear.html

`$ext

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ladies' Wear | S.M.K.SHRI AYYAPPA GARMENTS</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/animations.css">
</head>
<body>
    <header class="navbar sticky">
        <div class="container nav-container">
            <a href="index.html" class="logo">S.M.K.SHRI AYYAPPA</a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="mens-wear.html">Men's</a>
                <a href="ladies-wear.html">Ladies'</a>
                <a href="wholesale.html">Wholesale</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div class="nav-actions">
                <button class="btn btn-primary" onclick="openOrderPopup()">Order Now</button>
                <div class="mobile-menu-toggle" onclick="toggleMenu()">☰</div>
            </div>
        </div>
    </header>

    <section class="section-padding bg-light" style="min-height: 60vh;">
        <div class="container">
            <h1 class="section-title">Ladies' Wear Collection</h1>
            <p class="text-center" style="margin-bottom:40px;">Stylish and elegant ladies' wear for your retail store.</p>
            <div class="product-grid" id="ladies-preview-grid">
                <!-- Dynamically loaded via products.js -->
            </div>
        </div>
    </section>

    <footer class="site-footer bg-charcoal text-white">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2026 S.M.K.SHRI AYYAPPA GARMENTS. All rights reserved.</p>
            </div>
        </div>
    </footer>
    <script src="js/script.js"></script>
    <script src="js/products.js"></script>

</body>
</html>

``n

### File: mens-wear.html

`$ext

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Men's Wear | S.M.K.SHRI AYYAPPA GARMENTS</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/animations.css">
</head>
<body>
    <header class="navbar sticky">
        <div class="container nav-container">
            <a href="index.html" class="logo">S.M.K.SHRI AYYAPPA</a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="mens-wear.html">Men's</a>
                <a href="ladies-wear.html">Ladies'</a>
                <a href="wholesale.html">Wholesale</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div class="nav-actions">
                <button class="btn btn-primary" onclick="openOrderPopup()">Order Now</button>
                <div class="mobile-menu-toggle" onclick="toggleMenu()">☰</div>
            </div>
        </div>
    </header>

    <section class="section-padding" style="min-height: 60vh;">
        <div class="container">
            <h1 class="section-title">Men's Wear Collection</h1>
            <p class="text-center" style="margin-bottom:40px;">Premium men's clothing available for bulk order.</p>
            <div class="product-grid" id="mens-preview-grid">
                <!-- Dynamically loaded via products.js -->
            </div>
        </div>
    </section>

    <footer class="site-footer bg-charcoal text-white">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2026 S.M.K.SHRI AYYAPPA GARMENTS. All rights reserved.</p>
            </div>
        </div>
    </footer>
    <script src="js/script.js"></script>
    <script src="js/products.js"></script>

</body>
</html>

``n

### File: products.html

`$ext

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Products | S.M.K.SHRI AYYAPPA GARMENTS</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/animations.css">
</head>
<body>
    <!-- 1. Sticky Premium Navbar -->
    <header class="navbar sticky">
        <div class="container nav-container">
            <a href="index.html" class="logo">S.M.K.SHRI AYYAPPA</a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="mens-wear.html">Men's</a>
                <a href="ladies-wear.html">Ladies'</a>
                <a href="wholesale.html">Wholesale</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div class="nav-actions">
                <button class="btn btn-primary" onclick="openOrderPopup()">Order Now</button>
                <div class="mobile-menu-toggle" onclick="toggleMenu()">☰</div>
            </div>
        </div>
    </header>

    <section class="section-padding bg-light" style="min-height: 60vh;">
        <div class="container">
            <h1 class="section-title">All Products</h1>
            <p class="text-center" style="margin-bottom:40px;">Explore our complete wholesale catalog.</p>
            <div class="product-grid" id="all-products-grid">
                <!-- Dynamically loaded products could go here -->
            </div>
        </div>
    </section>

    <!-- Order Popup Modal Placeholder -->
    <div class="modal-overlay" id="orderModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeOrderPopup()">&times;</span>
            <h2>Place Wholesale Order</h2>
            <form id="orderForm" onsubmit="submitOrder(event)">
                <div class="form-group">
                    <label for="productSelect">Product</label>
                    <input type="text" id="productSelect" readonly>
                </div>
                <div class="form-group">
                    <label for="orderQty">Quantity (Min 5)</label>
                    <input type="number" id="orderQty" min="5" value="5" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Order via WhatsApp</button>
            </form>
        </div>
    </div>

    <!-- 11. Footer -->
    <footer class="site-footer bg-charcoal text-white">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2026 S.M.K.SHRI AYYAPPA GARMENTS. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/script.js"></script>
    <script src="js/order-system.js"></script>

</body>
</html>

``n

### File: README.md

`$ext

# S.M.K.SHRI AYYAPPA GARMENTS

Modern wholesale garment business website for retailers, resellers, and bulk buyers.

## Features

- Mobile-first, responsive design
- Premium UI with charcoal black and soft gold accents
- JavaScript integrated WhatsApp ordering system
- Dynamic product rendering via JSON
- Strict Minimum Order Quantity (MOQ) validation of 5 pieces

## Structure

- `index.html`: Main landing page
- `css/`: Stylesheets including animations and responsiveness
- `js/`: Application logic
- `data/`: Sample JSON data for products
- `images/`: Organized asset folders for the gallery and products

## Development

- Open `index.html` in your browser.
- Uses Vanilla HTML5, CSS3, JS. No build tools required for the UI setup.

``n

### File: wholesale.html

`$ext

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wholesale Information | S.M.K.SHRI AYYAPPA GARMENTS</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header class="navbar sticky">
        <div class="container nav-container">
            <a href="index.html" class="logo">S.M.K.SHRI AYYAPPA</a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="wholesale.html">Wholesale</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div class="nav-actions">
                <div class="mobile-menu-toggle" onclick="toggleMenu()">☰</div>
            </div>
        </div>
    </header>

    <section class="section-padding text-center" style="min-height: 60vh;">
        <div class="container">
            <h1 class="section-title">Wholesale Operations</h1>
            <p style="max-width: 600px; margin: 0 auto; line-height: 1.8;">
                We specialize in bulk manufacturing and supply.
                <br><br>
                <strong>Minimum Order Quantity:</strong> 5 pieces per style.
                <br>
                <strong>Shipping:</strong> Pan-India shipping available via reliable logistics partners.
                <br>
                <strong>Payment:</strong> Bank Transfer, UPI, and major cards accepted.
            </p>
            <a href="contact.html" class="btn btn-primary" style="margin-top: 30px;">Contact Sales Team</a>
        </div>
    </section>

    <footer class="site-footer bg-charcoal text-white">
        <div class="container text-center">
            <p>&copy; 2026 S.M.K.SHRI AYYAPPA GARMENTS.</p>
        </div>
    </footer>
    <script src="js/script.js"></script>

</body>
</html>

``n

### File: css\animations.css

`$ext
/_ css/animations.css _/
/_ Hover animations _/
.btn {
position: relative;
overflow: hidden;
}

.btn::after {
content: '';
position: absolute;
top: 50%;
left: 50%;
width: 0;
height: 0;
background: rgba(255,255,255,0.2);
border-radius: 50%;
transform: translate(-50%, -50%);
transition: width 0.3s, height 0.3s;
}

.btn:active::after {
width: 200px;
height: 200px;
}

/_ Scroll Fade In _/
.fade-in {
opacity: 0;
transform: translateY(30px);
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
opacity: 1;
transform: translateY(0);
}

``n

### File: css\responsive.css

`$ext
/_ css/responsive.css _/
@media (max-width: 992px) {
.hero h1 {
font-size: 3rem;
}
.contact-grid {
grid-template-columns: 1fr;
}
}

@media (max-width: 768px) {
.nav-links {
display: none;
position: absolute;
top: 80px;
left: 0;
width: 100%;
background: var(--color-white);
flex-direction: column;
padding: 20px 0;
box-shadow: var(--shadow-md);
}
.nav-links.active {
display: flex;
align-items: center;
gap: 20px;
}
.mobile-menu-toggle {
display: block;
}
.hero h1 {
font-size: 2.5rem;
}
.hero-buttons {
flex-direction: column;
}
.section-title {
font-size: 2rem;
}
}

@media (max-width: 480px) {
.hero h1 {
font-size: 2rem;
}
.modal-content {
padding: 20px;
}
}

``n

### File: css\style.css

`$ext
/_ css/style.css _/
:root {
--color-charcoal: #2A2A2A;
--color-gold: #C5A880;
--color-gold-hover: #B0926A;
--color-white: #FFFFFF;
--color-light-bg: #F8F8F8;
--color-gray: #757575;
--color-border: #E0E0E0;

    --font-primary: 'Inter', system-ui, -apple-system, sans-serif;

    --transition: all 0.3s ease;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
    --shadow-md: 0 8px 24px rgba(0,0,0,0.08);

}

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
font-family: var(--font-primary);
color: var(--color-charcoal);
background-color: var(--color-white);
line-height: 1.6;
overflow-x: hidden;
}

a {
text-decoration: none;
color: inherit;
transition: var(--transition);
}

ul {
list-style: none;
}

.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
}

.section-padding {
padding: 80px 0;
}

.bg-light {
background-color: var(--color-light-bg);
}

.bg-charcoal {
background-color: var(--color-charcoal);
}

.text-white {
color: var(--color-white);
}

.text-center {
text-align: center;
}

.section-title {
font-size: 2.5rem;
font-weight: 600;
margin-bottom: 40px;
text-align: center;
text-transform: uppercase;
letter-spacing: 2px;
}

/_ Buttons _/
.btn {
display: inline-block;
padding: 12px 28px;
font-weight: 500;
border-radius: 4px;
cursor: pointer;
text-align: center;
border: 1px solid transparent;
transition: var(--transition);
font-family: var(--font-primary);
font-size: 1rem;
}

.btn-primary {
background-color: var(--color-gold);
color: var(--color-white);
}

.btn-primary:hover {
background-color: var(--color-gold-hover);
}

.btn-secondary {
background-color: var(--color-charcoal);
color: var(--color-white);
border: 1px solid var(--color-white);
}

.btn-secondary:hover {
background-color: var(--color-white);
color: var(--color-charcoal);
}

.btn-outline {
background-color: transparent;
border-color: var(--color-charcoal);
color: var(--color-charcoal);
}

.btn-outline:hover {
background-color: var(--color-charcoal);
color: var(--color-white);
}

.btn-whatsapp {
background-color: #25D366;
color: white;
}

.btn-whatsapp:hover {
background-color: #128C7E;
}

.btn-block {
display: block;
width: 100%;
}

/_ Navbar _/
.navbar {
background-color: var(--color-white);
border-bottom: 1px solid var(--color-border);
transition: var(--transition);
z-index: 1000;
width: 100%;
}

.navbar.sticky {
position: sticky;
top: 0;
box-shadow: var(--shadow-sm);
}

.nav-container {
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
}

.logo {
font-size: 1.5rem;
font-weight: 700;
letter-spacing: 1px;
}

.nav-links {
display: flex;
gap: 30px;
}

.nav-links a {
font-weight: 500;
text-transform: uppercase;
font-size: 0.9rem;
letter-spacing: 0.5px;
}

.nav-links a:hover {
color: var(--color-gold);
}

.nav-actions {
display: flex;
align-items: center;
gap: 20px;
}

.mobile-menu-toggle {
display: none;
font-size: 1.5rem;
cursor: pointer;
}

/_ Hero _/
.hero {
background-color: var(--color-charcoal);
color: var(--color-white);
padding: 120px 20px;
text-align: center;
min-height: 80vh;
display: flex;
align-items: center;
justify-content: center;
}

.hero h1 {
font-size: 4rem;
font-weight: 700;
margin-bottom: 20px;
letter-spacing: 2px;
}

.hero p {
font-size: 1.2rem;
color: #ccc;
margin-bottom: 40px;
max-width: 600px;
margin-left: auto;
margin-right: auto;
}

.hero-buttons {
display: flex;
gap: 20px;
justify-content: center;
}

/_ Grids _/
.features-grid, .product-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 30px;
}

.feature-card {
padding: 40px;
background: var(--color-white);
border: 1px solid var(--color-border);
text-align: center;
transition: var(--transition);
}

.feature-card:hover {
box-shadow: var(--shadow-md);
border-color: var(--color-gold);
}

.feature-card h3 {
margin-bottom: 15px;
font-size: 1.2rem;
}

.feature-card p {
color: var(--color-gray);
}

/_ Product Card _/
.product-card {
background: var(--color-white);
border: 1px solid var(--color-border);
transition: var(--transition);
overflow: hidden;
display: flex;
flex-direction: column;
}

.product-card:hover {
box-shadow: var(--shadow-md);
}

.product-img {
height: 350px;
background-color: var(--color-light-bg);
position: relative;
display: flex;
align-items: center;
justify-content: center;
color: var(--color-gray);
}

.product-img img {
width: 100%;
height: 100%;
object-fit: cover;
}

.product-info {
padding: 20px;
text-align: center;
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
}

.product-title {
font-size: 1.1rem;
font-weight: 600;
margin-bottom: 5px;
}

.product-price {
color: var(--color-gold);
font-weight: 600;
margin-bottom: 15px;
}

/_ Forms _/
.form-group {
margin-bottom: 20px;
text-align: left;
}

.form-group label {
display: block;
margin-bottom: 8px;
font-weight: 500;
}

.form-group input, .form-group textarea, .form-group select {
width: 100%;
padding: 12px;
border: 1px solid var(--color-border);
border-radius: 4px;
font-family: inherit;
font-size: 1rem;
}

.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
outline: none;
border-color: var(--color-gold);
}

/_ Floating WhatsApp _/
.floating-whatsapp {
position: fixed;
bottom: 30px;
right: 30px;
background-color: #25D366;
color: white;
width: 60px;
height: 60px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
z-index: 999;
transition: transform 0.3s ease;
}

.floating-whatsapp:hover {
transform: scale(1.1);
}

/_ Modal _/
.modal-overlay {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.5);
display: none;
align-items: center;
justify-content: center;
z-index: 2000;
}

.modal-overlay.active {
display: flex;
}

.modal-content {
background: var(--color-white);
padding: 40px;
width: 100%;
max-width: 500px;
border-radius: 4px;
position: relative;
text-align: center;
}

.close-modal {
position: absolute;
top: 15px;
right: 20px;
font-size: 2rem;
cursor: pointer;
line-height: 1;
}

.moq-notice {
color: var(--color-charcoal);
background: var(--color-light-bg);
padding: 10px;
border-left: 4px solid var(--color-gold);
margin-bottom: 20px;
font-size: 0.9rem;
text-align: left;
}

/_ Footer _/
.site-footer {
padding: 60px 0 20px;
}

.footer-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 40px;
margin-bottom: 40px;
}

.footer-col h3, .footer-col h4 {
margin-bottom: 20px;
}

.footer-col ul li {
margin-bottom: 10px;
}

.footer-col ul li a {
color: #ccc;
}

.footer-col ul li a:hover {
color: var(--color-gold);
}

.footer-bottom {
border-top: 1px solid rgba(255,255,255,0.1);
padding-top: 20px;
text-align: center;
color: #999;
font-size: 0.9rem;
}

/_ Wholesale Steps _/
.wholesale-steps {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 30px;
text-align: center;
margin-top: 40px;
}

.step-num {
display: inline-block;
width: 50px;
height: 50px;
line-height: 50px;
background-color: var(--color-gold);
color: var(--color-white);
border-radius: 50%;
font-size: 1.5rem;
font-weight: bold;
margin-bottom: 20px;
}

.contact-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 40px;
}

.map-placeholder {
width: 100%;
height: 300px;
background: var(--color-gray);
color: white;
display: flex;
align-items: center;
justify-content: center;
}

.mt-4 { margin-top: 40px; }
.mb-4 { margin-bottom: 40px; }

``n

### File: data\products.json

`$ext
[
{
"id": "m1",
"name": "Premium Cotton Formal Shirt",
"category": "mens-wear",
"priceRange": "₹450 - ₹600 / piece",
"image": "images/products/men-shirt-1.jpg"
},
{
"id": "m2",
"name": "Men's Casual Denim Collection",
"category": "mens-wear",
"priceRange": "₹550 - ₹750 / piece",
"image": "images/products/men-denim-1.jpg"
},
{
"id": "m3",
"name": "Wholesale Polo T-Shirts Batch",
"category": "mens-wear",
"priceRange": "₹250 - ₹350 / piece",
"image": "images/products/men-polo-1.jpg"
},
{
"id": "l1",
"name": "Designer Kurtis Assorted Set",
"category": "ladies-wear",
"priceRange": "₹350 - ₹550 / piece",
"image": "images/products/ladies-kurti-1.jpg"
},
{
"id": "l2",
"name": "Premium Ethnic Wear Collection",
"category": "ladies-wear",
"priceRange": "₹800 - ₹1200 / piece",
"image": "images/products/ladies-ethnic-1.jpg"
},
{
"id": "l3",
"name": "Ladies Casual Tops Bundle",
"category": "ladies-wear",
"priceRange": "₹200 - ₹350 / piece",
"image": "images/products/ladies-tops-1.jpg"
}
]

``n

### File: js\animations.js

`$ext
// js/animations.js
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .feature-card, .step').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

});

``n

### File: js\order-system.js

`$ext
// js/order-system.js
const PHONE_NUMBER = "+91 9030625320"; // Replace with actual WhatsApp Number

function openOrderPopup(productName = '') {
const modal = document.getElementById('orderModal');
const productInput = document.getElementById('productSelect');
if (productInput) {
productInput.value = productName || 'General Inquiry / Multiple Products';
}
if (modal) modal.classList.add('active');
}

function closeOrderPopup() {
const modal = document.getElementById('orderModal');
if (modal) modal.classList.remove('active');
}

function submitOrder(event) {
event.preventDefault();
const product = document.getElementById('productSelect').value;
const qty = document.getElementById('orderQty').value;

    if (qty < 5) {
        alert("Minimum Order Quantity is 5 pieces per item.");
        return;
    }

    const message = `Hello S.M.K.SHRI AYYAPPA GARMENTS,%0A%0AI would like to place an order:%0A*Product:* ${product}%0A*Quantity:* ${qty} pieces%0A%0APlease let me know the total price and payment details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
    closeOrderPopup();

}

function submitBulkInquiry(event) {
event.preventDefault();
const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const reqs = document.getElementById('requirements').value;

    const message = `Hello,%0A%0AI have a bulk order inquiry.%0A*Name/Business:* ${name}%0A*WhatsApp:* ${phone}%0A*Requirements:* ${reqs}%0A%0APlease contact me.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');

}

``n

### File: js\products.js

`$ext
// js/products.js
document.addEventListener('DOMContentLoaded', async () => {
try {
const response = await fetch('data/products.json');
if (!response.ok) throw new Error("Failed to load products");
const products = await response.json();

        renderProducts(products, 'mens-wear', 'mens-preview-grid', 3);
        renderProducts(products, 'ladies-wear', 'ladies-preview-grid', 3);
    } catch (error) {
        console.error("Error loading products:", error);
    }

});

function renderProducts(allProducts, category, containerId, limit = null) {
const container = document.getElementById(containerId);
if (!container) return;

    let filtered = allProducts.filter(p => p.category === category);
    if (limit) {
        filtered = filtered.slice(0, limit);
    }

    container.innerHTML = filtered.map(product => `
        <div class="product-card fade-in">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/400x500?text=${encodeURIComponent(product.name)}'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.priceRange}</p>
                <button class="btn btn-outline btn-block" onclick="openOrderPopup('${product.name}')">Order (Min 5)</button>
            </div>
        </div>
    `).join('');

}

``n

### File: js\script.js

`$ext
// js/script.js
document.addEventListener('DOMContentLoaded', () => {
// Sticky Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('sticky');
} else {
navbar.classList.remove('sticky');
}
});
});

function toggleMenu() {
const navLinks = document.querySelector('.nav-links');
navLinks.classList.toggle('active');
}

``n
