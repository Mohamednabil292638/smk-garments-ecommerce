// js/product-select-modal.js — Global Product Selection Modal
// Opens whenever "Add to Cart" is clicked from ANY page
// Requires size + color + quantity selection before adding to cart

(function() {
    'use strict';

    const COLORS = [
        { name: 'Black', hex: '#1A1A1A' },
        { name: 'White', hex: '#F5F5F5' },
        { name: 'Navy Blue', hex: '#1B2A4A' },
        { name: 'Beige', hex: '#D4C5A9' },
        { name: 'Grey', hex: '#808080' }
    ];

    let modalProduct = null;
    let modalSize = null;
    let modalColor = null;
    let modalQty = 1;

    // Inject modal HTML on DOM ready
    document.addEventListener('DOMContentLoaded', injectModal);

    function injectModal() {
        if (document.getElementById('productSelectModal')) return;

        const modal = document.createElement('div');
        modal.id = 'productSelectModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
        <div class="psm-content">
            <button class="close-modal psm-close" onclick="window._psmClose()">&times;</button>
            <div class="psm-grid">
                <div class="psm-image-area">
                    <img id="psmImg" src="" alt="" class="psm-product-img">
                    <span class="product-badge psm-badge" id="psmBadge"></span>
                </div>
                <div class="psm-details-area">
                    <p class="psm-type" id="psmType"></p>
                    <h3 class="psm-title" id="psmTitle"></h3>
                    <div class="psm-pricing">
                        <div class="psm-price-per"><span>Per Piece</span><strong id="psmPricePer">₹0</strong></div>
                        <div class="psm-price-combo"><span id="psmComboLabel">Combo of 5</span><strong id="psmPriceCombo">₹0</strong></div>
                    </div>

                    <div class="psm-selector">
                        <label>Select Size <span class="required-star">*</span></label>
                        <div class="psm-size-options" id="psmSizes"></div>
                        <p class="psm-validation" id="psmSizeError">Please select a size</p>
                    </div>

                    <div class="psm-selector">
                        <label>Select Color <span class="required-star">*</span></label>
                        <div class="psm-color-options" id="psmColors"></div>
                        <p class="psm-validation" id="psmColorError">Please select a color</p>
                    </div>

                    <div class="psm-qty-row">
                        <label>Quantity (Combo Packs)</label>
                        <div class="psm-qty-controls">
                            <button class="psm-qty-btn" onclick="window._psmQty(-1)">−</button>
                            <span class="psm-qty-val" id="psmQtyVal">1</span>
                            <button class="psm-qty-btn" onclick="window._psmQty(1)">+</button>
                        </div>
                        <span class="psm-qty-total" id="psmQtyTotal">= 5 pieces total</span>
                    </div>

                    <button class="btn btn-primary btn-block psm-add-btn" id="psmAddBtn" onclick="window._psmConfirm()">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:6px;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        Add to Cart — ₹0
                    </button>
                </div>
            </div>
        </div>`;
        document.body.appendChild(modal);
    }

    // Override the global addToCart to open modal instead
    window._originalAddToCart = window.addToCart;
    window.addToCart = function(productId, size, color, qty = 1) {
        if (size && color) {
            // Bypass modal and add to cart directly!
            if (typeof window._originalAddToCart === 'function') {
                window._originalAddToCart(productId, size, color, qty);
            }
        } else {
            openProductSelectModal(productId);
        }
    };

    function openProductSelectModal(productId) {
        const product = typeof getProduct === 'function' ? getProduct(productId) : null;
        if (!product) {
            // Fallback: use original if product not found
            if (typeof window._originalAddToCart === 'function') window._originalAddToCart(productId);
            return;
        }

        modalProduct = product;
        modalSize = null;
        modalColor = null;
        modalQty = 1;

        // Populate modal content
        document.getElementById('psmImg').src = product.image;
        document.getElementById('psmImg').alt = product.name;
        document.getElementById('psmBadge').textContent = product.badge;
        document.getElementById('psmType').textContent = product.type;
        document.getElementById('psmTitle').textContent = product.name;
        document.getElementById('psmPricePer').textContent = '₹' + product.price;
        document.getElementById('psmPriceCombo').textContent = '₹' + product.comboPrice;
        document.getElementById('psmComboLabel').textContent = 'Combo of ' + product.minimumOrder;
        document.getElementById('psmQtyVal').textContent = '1';
        document.getElementById('psmQtyTotal').textContent = '= ' + product.minimumOrder + ' pieces total';

        // Render sizes
        document.getElementById('psmSizes').innerHTML = product.sizes.map(s =>
            `<button class="psm-size-btn" onclick="window._psmSize('${s}', this)">${s}</button>`
        ).join('');

        // Render colors
        document.getElementById('psmColors').innerHTML = COLORS.map(c =>
            `<button class="psm-color-btn" onclick="window._psmColor('${c.name}', this)" title="${c.name}">
                <span class="color-swatch" style="background:${c.hex};${c.name === 'White' ? 'border:1px solid #ddd;' : ''}"></span>
                <span class="color-name">${c.name}</span>
            </button>`
        ).join('');

        // Reset validation
        document.getElementById('psmSizeError').classList.remove('show');
        document.getElementById('psmColorError').classList.remove('show');

        // Update button
        updatePsmButton();

        // Show modal
        const modal = document.getElementById('productSelectModal');
        if (modal) modal.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    window._psmClose = function() {
        const modal = document.getElementById('productSelectModal');
        if (modal) modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
        modalProduct = null;
    };

    window._psmSize = function(size, btn) {
        modalSize = size;
        document.querySelectorAll('#psmSizes .psm-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('psmSizeError').classList.remove('show');
    };

    window._psmColor = function(color, btn) {
        modalColor = color;
        document.querySelectorAll('#psmColors .psm-color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('psmColorError').classList.remove('show');
    };

    window._psmQty = function(delta) {
        modalQty = Math.max(1, modalQty + delta);
        document.getElementById('psmQtyVal').textContent = modalQty;
        document.getElementById('psmQtyTotal').textContent = '= ' + (modalQty * modalProduct.minimumOrder) + ' pieces total';
        updatePsmButton();
    };

    window._psmConfirm = function() {
        let valid = true;
        if (!modalSize) {
            document.getElementById('psmSizeError').classList.add('show');
            valid = false;
        }
        if (!modalColor) {
            document.getElementById('psmColorError').classList.add('show');
            valid = false;
        }
        if (!valid) return;

        // Close modal
        window._psmClose();

        // Add to cart using original function with the chosen selections
        if (typeof window._originalAddToCart === 'function') {
            window._originalAddToCart(modalProduct.id, modalSize, modalColor, modalQty);
        }
    };

    function updatePsmButton() {
        const btn = document.getElementById('psmAddBtn');
        if (!btn || !modalProduct) return;
        const total = modalProduct.comboPrice * modalQty;
        btn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:6px;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Add to Cart — ₹${total.toLocaleString('en-IN')}
        `;
    }
})();
