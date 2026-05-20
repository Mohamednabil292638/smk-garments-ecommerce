// js/product-details.js — Product Details Page Engine
(function() {
    'use strict';

    const COLORS = [
        { name: 'Black', hex: '#1A1A1A' },
        { name: 'White', hex: '#F5F5F5' },
        { name: 'Navy Blue', hex: '#1B2A4A' },
        { name: 'Beige', hex: '#D4C5A9' },
        { name: 'Grey', hex: '#808080' }
    ];

    let currentProduct = null;
    let selectedSize = null;
    let selectedColor = null;
    let quantity = 1;

    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        if (!productId) {
            window.location.href = 'index.html';
            return;
        }
        loadProduct(productId);
    });

    async function loadProduct(productId) {
        try {
            const response = await fetch('data/products.json');
            if (!response.ok) throw new Error('Failed to load');
            const products = await response.json();

            if (typeof setProductCatalog === 'function') setProductCatalog(products);

            currentProduct = products.find(p => p.id === productId);
            if (!currentProduct) {
                window.location.href = 'index.html';
                return;
            }

            document.title = `${currentProduct.name} | S.M.K. SHRI AYYAPPA GARMENTS`;
            renderPDP(currentProduct);
            renderRelated(products, currentProduct);

            if (typeof refreshAnimationObserver === 'function') refreshAnimationObserver();
        } catch (err) {
            console.error('PDP Error:', err);
            document.getElementById('pdpContent').innerHTML = '<div class="pdp-error"><p>Unable to load product. Please try again.</p><a href="index.html" class="btn btn-primary">Back to Home</a></div>';
        }
    }

    function renderPDP(product) {
        const catLink = document.getElementById('pdp-cat-link');
        const breadcrumbName = document.getElementById('pdp-breadcrumb-name');

        if (product.category === 'mens') {
            catLink.href = 'mens-wear.html';
            catLink.textContent = "Men's Wear";
        } else {
            catLink.href = 'ladies-wear.html';
            catLink.textContent = "Ladies Wear";
        }
        breadcrumbName.textContent = product.name;

        const sizeBtns = product.sizes.map(s =>
            `<button class="pdp-size-btn" data-size="${s}" onclick="window._pdpSelectSize('${s}', this)">${s}</button>`
        ).join('');

        const colorBtns = COLORS.map(c =>
            `<button class="pdp-color-btn" data-color="${c.name}" onclick="window._pdpSelectColor('${c.name}', this)" title="${c.name}">
                <span class="color-swatch" style="background-color:${c.hex};${c.name === 'White' ? 'border:1px solid #ddd;' : ''}"></span>
                <span class="color-name">${c.name}</span>
            </button>`
        ).join('');

        document.getElementById('pdpContent').innerHTML = `
            <div class="pdp-gallery fade-in">
                <div class="pdp-main-image" id="pdpMainImage">
                    <img src="${product.image}" alt="${product.name}" id="pdpImg"
                        onerror="this.src='https://placehold.co/600x700/1A1A1A/D4AF37?text=${encodeURIComponent(product.name)}'">
                    <span class="product-badge pdp-badge">${product.badge}</span>
                    <div class="pdp-zoom-hint">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                        Hover to zoom
                    </div>
                </div>
            </div>
            <div class="pdp-info fade-in-up">
                <div class="pdp-info-inner">
                    <span class="pdp-type">${product.type}</span>
                    <h1 class="pdp-title">${product.name}</h1>
                    <div class="pdp-pricing-block">
                        <div class="pdp-price-row">
                            <span class="pdp-price-label">Per Piece</span>
                            <span class="pdp-price">₹${product.price}</span>
                        </div>
                        <div class="pdp-combo-row">
                            <span class="pdp-combo-label">Combo of ${product.minimumOrder} Pieces</span>
                            <span class="pdp-combo-price">₹${product.comboPrice}</span>
                        </div>
                        <div class="pdp-savings">You save ₹${(product.price * product.minimumOrder) - product.comboPrice} per combo!</div>
                    </div>

                    <div class="pdp-selector-group">
                        <label class="pdp-selector-label">Select Size <span class="required-star">*</span></label>
                        <div class="pdp-size-options" id="pdpSizeOptions">${sizeBtns}</div>
                        <p class="pdp-validation-msg" id="sizeValidation">Please select a size</p>
                    </div>

                    <div class="pdp-selector-group">
                        <label class="pdp-selector-label">Select Color <span class="required-star">*</span></label>
                        <div class="pdp-color-options" id="pdpColorOptions">${colorBtns}</div>
                        <p class="pdp-validation-msg" id="colorValidation">Please select a color</p>
                    </div>

                    <div class="pdp-qty-group">
                        <label class="pdp-selector-label">Quantity (Combo Packs)</label>
                        <div class="pdp-qty-controls">
                            <button class="pdp-qty-btn" onclick="window._pdpUpdateQty(-1)">−</button>
                            <span class="pdp-qty-value" id="pdpQtyValue">1</span>
                            <button class="pdp-qty-btn" onclick="window._pdpUpdateQty(1)">+</button>
                        </div>
                        <span class="pdp-qty-total" id="pdpQtyTotal">= ${product.minimumOrder} pieces total</span>
                    </div>

                    <button class="btn btn-primary btn-block pdp-add-to-cart" id="pdpAddToCart" onclick="window._pdpAddToCart()">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:8px;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        Add to Cart — ₹${product.comboPrice}
                    </button>

                    <div class="pdp-delivery-info">
                        <div class="pdp-delivery-item">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                            <span>Free Delivery — All India</span>
                        </div>
                        <div class="pdp-delivery-item">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <span>Combo Pack of ${product.minimumOrder} Pieces</span>
                        </div>
                        <div class="pdp-delivery-item">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            <span>100% Export Quality Assured</span>
                        </div>
                        <div class="pdp-delivery-item">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>WhatsApp Support: +91 99941 11762</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Image zoom on hover
        const mainImage = document.getElementById('pdpMainImage');
        const img = document.getElementById('pdpImg');
        if (mainImage && img) {
            mainImage.addEventListener('mousemove', (e) => {
                const rect = mainImage.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                img.style.transformOrigin = `${x}% ${y}%`;
                img.style.transform = 'scale(1.8)';
            });
            mainImage.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
                img.style.transformOrigin = 'center center';
            });
        }
    }

    function renderRelated(products, current) {
        const container = document.getElementById('related-products-grid');
        if (!container) return;
        const related = products.filter(p => p.category === current.category && p.id !== current.id).slice(0, 3);
        if (related.length === 0) return;

        container.innerHTML = related.map((product, index) => {
            const sizeTags = product.sizes.map(s => `<span class="size-tag">${s}</span>`).join('');
            const delay = (index * 0.1).toFixed(1);
            return `
            <div class="product-card fade-in-up" style="transition-delay:${delay}s;">
                <a href="product-details.html?id=${product.id}" class="product-card-link">
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}" loading="lazy"
                            onerror="this.src='https://placehold.co/400x500/1A1A1A/D4AF37?text=${encodeURIComponent(product.name)}'">
                        <span class="product-badge">${product.badge}</span>
                        <div class="product-shipping-tag">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                            ${product.shipping}
                        </div>
                    </div>
                    <div class="product-info">
                        <p class="product-type">${product.type}</p>
                        <h4 class="product-title">${product.name}</h4>
                        <div class="product-sizes">${sizeTags}</div>
                        <div class="product-pricing">
                            <div class="price-row">
                                <span class="price-label">Per Piece</span>
                                <span class="product-price">₹${product.price}</span>
                            </div>
                            <div class="combo-row">
                                <span class="combo-label">Combo of ${product.minimumOrder}</span>
                                <span class="product-combo">₹${product.comboPrice}</span>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="product-info" style="padding-top:0;">
                    <button class="btn btn-primary btn-block product-order-btn" onclick="event.stopPropagation(); window.location.href='product-details.html?id=${product.id}'">
                        View Details
                    </button>
                </div>
            </div>`;
        }).join('');
    }

    // Expose global functions for onclick handlers
    window._pdpSelectSize = function(size, btn) {
        selectedSize = size;
        document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('sizeValidation').classList.remove('show');
        updateAddToCartBtn();
    };

    window._pdpSelectColor = function(color, btn) {
        selectedColor = color;
        document.querySelectorAll('.pdp-color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('colorValidation').classList.remove('show');
        updateAddToCartBtn();
    };

    window._pdpUpdateQty = function(delta) {
        quantity = Math.max(1, quantity + delta);
        document.getElementById('pdpQtyValue').textContent = quantity;
        document.getElementById('pdpQtyTotal').textContent = `= ${quantity * currentProduct.minimumOrder} pieces total`;
        updateAddToCartBtn();
    };

    window._pdpAddToCart = function() {
        let valid = true;
        if (!selectedSize) {
            document.getElementById('sizeValidation').classList.add('show');
            valid = false;
        }
        if (!selectedColor) {
            document.getElementById('colorValidation').classList.add('show');
            valid = false;
        }
        if (!valid) return;

        // Add to cart with selected options directly (bypassing selection modal)
        if (typeof addToCart === 'function') {
            addToCart(currentProduct.id, selectedSize, selectedColor, quantity);
        }
    };

    function updateAddToCartBtn() {
        const btn = document.getElementById('pdpAddToCart');
        if (!btn || !currentProduct) return;
        const total = currentProduct.comboPrice * quantity;
        btn.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:8px;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Add to Cart — ₹${total.toLocaleString('en-IN')}
        `;
    }
})();
