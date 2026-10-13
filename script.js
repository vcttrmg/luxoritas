const imageBase = 'https://raw.githubusercontent.com/contactlovarne-ai/Luxorita-/main';

const products = [
    { name: 'Pure 24K Pink Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0000.jpg` },
    { name: 'Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0001.jpg` },
    { name: 'Pure 24K Pink Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0002.jpg` },
    { name: 'Pure 24K Black Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0009.jpg` },
    { name: 'Pure 24K Black Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0003.jpg` },
    { name: 'Pure 24K Yellow Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0417.jpg` },
    { name: 'Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0006.jpg` },
    { name: 'Pure 24K Rose Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0007.jpg` },
    { name: 'Pure 24K Pink Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5407.jpg` },
    { name: 'Pure 24K Pink Gold Earring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0010.jpg` },
    { name: 'White Gold Earring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0914.jpg` },
    { name: 'White Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA1363.jpg` },
    { name: 'Pink Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA1472.jpg` },
    { name: 'Rose Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA1377.jpg` },
    { name: 'White Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA1567.jpg` },
    { name: 'Black Gold Necklace, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2469.jpg` },
    { name: 'White Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2564.jpg` },
    { name: 'Yellow Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2564.jpg` },
    { name: 'Yellow Gold Necklace, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2661.jpg` },
    { name: 'Black Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2491.jpg` },
    { name: 'Black Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2491.jpg` },
    { name: 'Pink Gold Earring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0010.jpg` },
    { name: 'Pink Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5407.jpg` },
    { name: 'Black Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5326.jpg` },
    { name: 'Pink Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5407.jpg` },
    { name: 'Yellow Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0005.jpg` }
];

function showPage(pageName) {
    if (event) {
        event.preventDefault();
    }
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

function renderCatalog() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map((item) => {
        const hasPrice = item.price !== 'Contact for Price';
        const buttonHTML = hasPrice
            ? `<button class="checkout-btn" onclick="openCheckout(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', '${item.price}')">Proceed to Checkout</button>`
            : `<button class="contact-price-btn" onclick="openContactForm(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}')">Contact for Price</button>`;

        return `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <div class="product-price-contact">${item.price}</div>
                <div class="product-action">
                    ${buttonHTML}
                </div>
            </article>
        `;
    }).join('');
}

function openContactForm(event, productName, productImage) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-price').textContent = 'Contact for Price';

    window.currentOrder = {
        productName,
        productImage,
        productPrice: 'Contact for Price',
        type: 'inquiry'
    };

    modal.classList.add('active');
}

function openCheckout(event, productName, productImage, productPrice) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-price').textContent = productPrice;

    window.currentOrder = {
        productName,
        productImage,
        productPrice,
        type: 'checkout'
    };

    modal.classList.add('active');
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
    }
}

function submitOrder(event) {
    if (event) {
        event.preventDefault();
    }

    const buyerName = document.getElementById('buyer-name').value.trim();
    const buyerEmail = document.getElementById('buyer-email').value.trim();
    const buyerAddress = document.getElementById('buyer-address').value.trim();
    const buyerPhone = document.getElementById('buyer-phone').value.trim();

    if (!buyerName || !buyerEmail || !buyerAddress || !buyerPhone) {
        alert('Please fill in all required fields.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(buyerEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    const productName = window.currentOrder ? window.currentOrder.productName : 'this item';
    const productPrice = window.currentOrder ? window.currentOrder.productPrice : 'Contact for Price';
    const orderType = window.currentOrder ? window.currentOrder.type : 'inquiry';

    const subject = encodeURIComponent(`Luxorita ${orderType === 'checkout' ? 'Order' : 'Inquiry'}: ${productName}`);

    const bodyLines = [
        `Product: ${productName}`,
        `Price: ${productPrice}`,
        '',
        'Customer details:',
        `Name: ${buyerName}`,
        `Email: ${buyerEmail}`,
        `Phone: ${buyerPhone}`,
        `Address: ${buyerAddress}`,
        '',
        `Order type: ${orderType}`,
        '',
        'Sent from Luxorita website.'
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));

    const to = 'contactluxorita@gmail.com';
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    window.location.href = mailto;

    setTimeout(() => {
        const emlHeaders = [];
        emlHeaders.push(`To: ${to}`);
        emlHeaders.push(`Subject: ${decodeURIComponent(subject)}`);
        emlHeaders.push('Content-Type: text/plain; charset="utf-8"');
        emlHeaders.push('');
        const emlContent = emlHeaders.join('\n') + '\n' + decodeURIComponent(body);

        const blob = new Blob([emlContent], { type: 'message/rfc822' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `luxorita-${productName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.eml`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        alert('If your email client did not open automatically, a file has been downloaded which you can attach to an email addressed to contactluxorita@gmail.com.');

        closeCheckout();
    }, 500);
}

window.onclick = function (event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeCheckout();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    renderCatalog();
    showPage('catalog');
});
