// js/cart.js — Premium Cart System
let cart = JSON.parse(localStorage.getItem('smk_cart') || '[]');
// Sanitize legacy cart items that don't have size and color properties
cart = cart.filter(item => item && item.id && item.size && item.color);

let allProducts = [];

function setProductCatalog(products) { allProducts = products; }

function getProduct(id) { return allProducts.find(p => p.id === id); }

function addToCart(productId, size, color, qty = 1) {
    const product = getProduct(productId);
    if (!product) return;
    
    const finalSize = size || (product.sizes && product.sizes[0]) || 'L';
    const finalColor = color || 'Navy Blue';
    
    const existing = cart.find(item => item.id === productId && item.size === finalSize && item.color === finalColor);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, size: finalSize, color: finalColor, qty: qty });
    }
    saveCart();
    renderCartDrawer();
    updateCartCount();
    openCartDrawer();
    // Pulse animation on badge
    const badge = document.getElementById('cartCount');
    if (badge) { badge.classList.add('pulse'); setTimeout(() => badge.classList.remove('pulse'), 600); }
}

function removeFromCart(productId, size, color) {
    cart = cart.filter(item => !(item.id === productId && item.size === size && item.color === color));
    saveCart();
    renderCartDrawer();
    updateCartCount();
}

function updateQty(productId, size, color, delta) {
    const item = cart.find(i => i.id === productId && i.size === size && i.color === color);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart();
    renderCartDrawer();
    updateCartCount();
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const p = getProduct(item.id);
        return p ? sum + (p.comboPrice * item.qty) : sum;
    }, 0);
}

function getCartItemCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function saveCart() { localStorage.setItem('smk_cart', JSON.stringify(cart)); }

function updateCartCount() {
    const count = getCartItemCount();
    const el = document.getElementById('cartCount');
    if (el) { el.textContent = count; el.style.display = count > 0 ? 'flex' : 'none'; }
}

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer) return;
    const isOpen = drawer.classList.contains('open');
    if (isOpen) { closeCartDrawer(); } else { openCartDrawer(); }
}

function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.classList.add('no-scroll');
    renderCartDrawer();
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
}

function renderCartDrawer() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    const emptyEl = document.getElementById('cartEmpty');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;

    if (cart.length === 0) {
        if (emptyEl) emptyEl.style.display = 'flex';
        if (footer) footer.style.display = 'none';
        // Remove any rendered items
        container.querySelectorAll('.cart-item').forEach(el => el.remove());
        return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (footer) footer.style.display = 'block';

    // Build items HTML
    let html = '';
    cart.forEach(item => {
        const p = getProduct(item.id);
        if (!p) return;
        html += `
        <div class="cart-item">
            <img src="${p.image}" alt="${p.name}" class="cart-item-img">
            <div class="cart-item-details">
                <p class="cart-item-name">${p.name}</p>
                <p class="cart-item-meta">${p.type} • Combo of ${p.minimumOrder}</p>
                <p class="cart-item-meta" style="margin-top:2px;color:var(--color-accent-gold);">Size: <strong>${item.size}</strong> • Color: <strong>${item.color}</strong></p>
                <p class="cart-item-price">₹${p.comboPrice} × ${item.qty}</p>
            </div>
            <div class="cart-item-actions">
                <div class="qty-controls">
                    <button onclick="updateQty('${p.id}', '${item.size}', '${item.color}', -1)" class="qty-btn">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button onclick="updateQty('${p.id}', '${item.size}', '${item.color}', 1)" class="qty-btn">+</button>
                </div>
                <button onclick="removeFromCart('${p.id}', '${item.size}', '${item.color}')" class="cart-remove-btn" title="Remove">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        </div>`;
    });
    // Keep the empty div, replace only items
    container.querySelectorAll('.cart-item').forEach(el => el.remove());
    container.insertAdjacentHTML('beforeend', html);
    if (totalEl) totalEl.textContent = '₹' + getCartTotal().toLocaleString('en-IN');
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => { updateCartCount(); });
