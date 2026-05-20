// js/products.js — Premium Product Rendering Engine (Multi-page)
document.addEventListener('DOMContentLoaded', () => { initProductEngine(); });

async function initProductEngine() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) throw new Error('Failed to load product catalog');
        const products = await response.json();

        // Store globally for cart reference
        if (typeof setProductCatalog === 'function') setProductCatalog(products);

        // Full grids (category pages)
        renderProductGrid(products, 'mens', 'mens-product-grid');
        renderProductGrid(products, 'ladies', 'ladies-product-grid');

        // Preview grids (homepage — max 3 items)
        renderProductGrid(products, 'mens', 'mens-preview-grid', 3);
        renderProductGrid(products, 'ladies', 'ladies-preview-grid', 3);

        // Trigger animation observer refresh
        if (typeof refreshAnimationObserver === 'function') refreshAnimationObserver();

    } catch (error) {
        console.error('Product Engine Error:', error);
        document.querySelectorAll('.product-grid, .preview-product-grid').forEach(grid => {
            if (grid.children.length === 0) {
                grid.innerHTML = '<div class="product-grid-fallback"><p>Unable to load products. Please refresh or contact us.</p><a href="https://wa.me/919994111762" class="btn btn-whatsapp">Contact on WhatsApp</a></div>';
            }
        });
    }
}

function renderProductGrid(products, category, containerId, maxItems) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let filtered = category ? products.filter(p => p.category === category) : products;
    if (maxItems) filtered = filtered.slice(0, maxItems);

    container.innerHTML = filtered.map((product, index) => {
        const sizeTags = product.sizes.map(s => `<span class="size-tag">${s}</span>`).join('');
        const delay = (index * 0.1).toFixed(1);
        return `
        <div class="product-card fade-in-up" style="transition-delay:${delay}s;">
            <a href="product-details.html?id=${product.id}" class="product-card-link">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name} - Wholesale ${product.type}" loading="lazy"
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
            <div class="product-card-actions">
                <button class="btn btn-primary btn-block product-order-btn" onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:6px;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Add to Cart — ₹${product.comboPrice}
                </button>
            </div>
        </div>`;
    }).join('');
}