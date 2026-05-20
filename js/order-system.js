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
