// js/checkout.js — Premium Indian Checkout + Payment Preparation Flow

// Indian States & Cities Data
const INDIA_STATES_CITIES = {
    'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Rajahmundry', 'Kakinada', 'Eluru'],
    'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Tawang', 'Ziro', 'Pasighat'],
    'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur'],
    'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Ara'],
    'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon'],
    'Goa': ['Panaji', 'Vasco da Gama', 'Margao', 'Mapusa', 'Ponda'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh', 'Anand'],
    'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Rohtak', 'Sonipat'],
    'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Manali', 'Mandi', 'Solan', 'Kullu'],
    'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar'],
    'Karnataka': ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belgaum', 'Davangere', 'Shimoga', 'Tumkur'],
    'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kannur'],
    'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Rewa', 'Satna'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Navi Mumbai'],
    'Manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur'],
    'Meghalaya': ['Shillong', 'Tura', 'Nongstoin', 'Jowai'],
    'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'],
    'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang'],
    'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri'],
    'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Pathankot'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bharatpur'],
    'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur'],
    'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar'],
    'Tripura': ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailashahar'],
    'Uttar Pradesh': ['Lucknow', 'Noida', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Ghaziabad', 'Greater Noida'],
    'Uttarakhand': ['Dehradun', 'Haridwar', 'Rishikesh', 'Haldwani', 'Roorkee', 'Rudrapur'],
    'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Kharagpur'],
    'Delhi': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi'],
    'Chandigarh': ['Chandigarh'],
    'Puducherry': ['Puducherry', 'Karaikal', 'Yanam'],
    'Jammu & Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur'],
    'Ladakh': ['Leh', 'Kargil']
};

let pendingCustomerInfo = null;

document.addEventListener('DOMContentLoaded', () => {
    initStateDropdown();
    initFormValidation();
});

function initStateDropdown() {
    const stateSelect = document.getElementById('custState');
    const citySelect = document.getElementById('custCity');
    if (!stateSelect) return;

    // Populate states
    const states = Object.keys(INDIA_STATES_CITIES).sort();
    states.forEach(state => {
        const opt = document.createElement('option');
        opt.value = state;
        opt.textContent = state;
        stateSelect.appendChild(opt);
    });

    // State change -> populate cities
    stateSelect.addEventListener('change', () => {
        const selectedState = stateSelect.value;
        citySelect.innerHTML = '<option value="">Select City</option>';
        if (selectedState && INDIA_STATES_CITIES[selectedState]) {
            citySelect.disabled = false;
            INDIA_STATES_CITIES[selectedState].forEach(city => {
                const opt = document.createElement('option');
                opt.value = city;
                opt.textContent = city;
                citySelect.appendChild(opt);
            });
        } else {
            citySelect.disabled = true;
        }
    });
}

function initFormValidation() {
    // Phone validation — only digits, max 10
    const phoneInput = document.getElementById('custPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }

    // Pincode validation — only digits, max 6
    const pincodeInput = document.getElementById('custPincode');
    if (pincodeInput) {
        pincodeInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
        });
    }

    // Name validation — no numbers
    const nameInput = document.getElementById('custName');
    if (nameInput) {
        nameInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s.'-]/g, '');
        });
    }
}

function openCheckout() {
    closeCartDrawer();
    renderCheckoutSummary();
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkoutItems');
    const totalEl = document.getElementById('checkoutTotal');
    if (!container) return;

    let html = '';
    cart.forEach(item => {
        const p = getProduct(item.id);
        if (!p) return;
        html += `
        <div class="checkout-item">
            <img src="${p.image}" alt="${p.name}" class="checkout-item-img">
            <div class="checkout-item-info">
                <strong>${p.name}</strong>
                <span style="color:var(--color-accent-gold); font-size: 0.85rem; display:block; margin:2px 0;">Size: <strong>${item.size}</strong> • Color: <strong>${item.color}</strong></span>
                <span>${p.type} • ${item.qty} combo(s) × ₹${p.comboPrice}</span>
            </div>
            <div class="checkout-item-total">₹${(p.comboPrice * item.qty).toLocaleString('en-IN')}</div>
        </div>`;
    });
    container.innerHTML = html;
    if (totalEl) totalEl.textContent = '₹' + getCartTotal().toLocaleString('en-IN');
}

function processPayment(event) {
    event.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const city = document.getElementById('custCity').value;
    const state = document.getElementById('custState').value;
    const pincode = document.getElementById('custPincode').value.trim();

    // Validate phone
    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        document.getElementById('custPhone').focus();
        return;
    }

    // Validate pincode
    if (!/^[0-9]{6}$/.test(pincode)) {
        alert('Please enter a valid 6-digit pincode.');
        document.getElementById('custPincode').focus();
        return;
    }

    // Validate name
    if (name.length < 2) {
        alert('Please enter your full name.');
        document.getElementById('custName').focus();
        return;
    }

    // Store customer info for payment prep flow
    pendingCustomerInfo = { name, phone, address, city, state, pincode };

    // Close checkout, open payment preparation modal
    closeCheckout();
    openPaymentPrep();
}

function openPaymentPrep() {
    const modal = document.getElementById('paymentPrepModal');
    const totalEl = document.getElementById('paymentPrepTotal');
    if (totalEl) totalEl.textContent = '₹' + getCartTotal().toLocaleString('en-IN');
    if (modal) modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closePaymentPrep() {
    const modal = document.getElementById('paymentPrepModal');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
    pendingCustomerInfo = null;
}

function completeOrder() {
    if (!pendingCustomerInfo) return;
    closePaymentPrep();

    const orderId = 'SMK' + Date.now().toString().slice(-8);
    const total = getCartTotal();

    // Build success modal content
    const orderIdEl = document.getElementById('orderIdDisplay');
    if (orderIdEl) orderIdEl.textContent = 'Order ID: ' + orderId;

    // Build order summary for success modal
    const summaryEl = document.getElementById('successOrderSummary');
    if (summaryEl) {
        let summaryHtml = '<h4>Items Ordered</h4>';
        cart.forEach(item => {
            const p = getProduct(item.id);
            if (!p) return;
            summaryHtml += `<div class="success-item" style="flex-direction:column; align-items:flex-start; gap:2px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <div style="width:100%; display:flex; justify-content:space-between;">
                    <strong>${p.name} × ${item.qty}</strong>
                    <span>₹${(p.comboPrice * item.qty).toLocaleString('en-IN')}</span>
                </div>
                <div style="font-size:0.85rem; color:var(--color-accent-gold); margin-top:2px;">Size: <strong>${item.size}</strong> • Color: <strong>${item.color}</strong></div>
            </div>`;
        });
        summaryHtml += `<div class="success-item success-total-row" style="margin-top:10px; display:flex; justify-content:space-between; width:100%;"><strong>Total</strong><strong>₹${total.toLocaleString('en-IN')}</strong></div>`;
        summaryEl.innerHTML = summaryHtml;
    }

    // Build delivery info for success modal
    const deliveryEl = document.getElementById('successDeliveryInfo');
    if (deliveryEl) {
        deliveryEl.innerHTML = `
            <h4>Delivery Details</h4>
            <p><strong>${pendingCustomerInfo.name}</strong></p>
            <p>${pendingCustomerInfo.address}</p>
            <p>${pendingCustomerInfo.city}, ${pendingCustomerInfo.state} - ${pendingCustomerInfo.pincode}</p>
            <p>Phone: ${pendingCustomerInfo.phone}</p>
        `;
    }

    // Build WhatsApp message
    let orderDetails = cart.map(item => {
        const p = getProduct(item.id);
        return p ? `• ${p.name} (${p.type}) [Size: ${item.size}, Color: ${item.color}] x ${item.qty} combo = ₹${p.comboPrice * item.qty}` : '';
    }).filter(Boolean).join('%0A');

    const waLink = document.querySelector('#successModal .btn-whatsapp') || document.getElementById('successWhatsappLink');
    if (waLink) {
        const msg = `Hello S.M.K. SHRI AYYAPPA GARMENTS,%0A%0AMy order details:%0A*Order ID:* ${orderId}%0A%0A*Items:*%0A${orderDetails}%0A%0A*Total:* ₹${total}%0A*Name:* ${pendingCustomerInfo.name}%0A*Phone:* ${pendingCustomerInfo.phone}%0A*Address:* ${pendingCustomerInfo.address}, ${pendingCustomerInfo.city}, ${pendingCustomerInfo.state} - ${pendingCustomerInfo.pincode}%0A%0APlease confirm my order.`;
        waLink.href = `https://wa.me/919994111762?text=${msg}`;
    }

    // Show success modal
    const successModal = document.getElementById('successModal');
    if (successModal) successModal.classList.add('active');
    document.body.classList.add('no-scroll');

    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    renderCartDrawer();
    pendingCustomerInfo = null;

    // Reset checkout form
    const form = document.getElementById('checkoutForm');
    if (form) form.reset();
    const citySelect = document.getElementById('custCity');
    if (citySelect) {
        citySelect.innerHTML = '<option value="">Select State first</option>';
        citySelect.disabled = true;
    }
}

function closeSuccess() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}
