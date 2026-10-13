const imageBase = 'https://raw.githubusercontent.com/contactlovarne-ai/Luxorita-/main';

const products = [
    { name: 'Pure 24K Pink Gold Brooch, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0000.jpg`, description: 'A romantic pink-gold brooch inspired by classical filigree, set with colorless natural unheated diamonds for a soft, luminous effect.' },
    { name: 'Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0001.jpg`, description: 'Sculpted in pure white 24K gold, this brooch pairs architectural lines with brilliant natural stones for modern elegance.' },
    { name: 'Pure 24K Pink Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0002.jpg`, description: 'Delicate pink-gold petals surround a subtle cluster of unheated diamonds — a collector’s piece with heirloom character.' },
    { name: 'Pure 24K Black Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0009.jpg`, description: 'Bold and dramatic, the blackened 24K gold finish creates contrast that highlights each diamond’s clarity.' },
    { name: 'Pure 24K Black Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0003.jpg`, description: 'A statement cuff in black gold with pavé-set natural diamonds — sculptural, tactile, and unmistakably luxurious.' },
    { name: 'Pure 24K Yellow Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0417.jpg`, description: 'Classic yellow gold bracelet with a refined diamond motif, balancing warmth and brilliance for daytime luxury.' },
    { name: 'Pure 24K White Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0006.jpg`, description: 'A refined white-gold brooch featuring latticework and single-stone accents for discreet glamour.' },
    { name: 'Pure 24K Rose Gold Brooch, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0007.jpg`, description: 'Warm rose-gold tones meet vintage-inspired engraving — designed to sit perfectly on tailored eveningwear.' },
    { name: 'Pure 24K Pink Gold Ring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5407.jpg`, description: 'A pink-gold signet-style ring reinterpreted with delicate diamond accents for a modern yet timeless silhouette.' },
    { name: 'Pure 24K Pink Gold Earring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0010.jpg`, description: 'Light-catching pink-gold earrings that frame the face with refined diamond accents and elegant movement.' },
    { name: 'White Gold Earring, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0914.jpg`, description: 'Streamlined white-gold drop earrings emphasizing diamond clarity and graceful proportion.' },
    { name: 'White Gold Bracelet, Handcrafted framework exquisitely set with natural unheated diamonds', price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA1363.jpg`, description: 'A composed white-gold bracelet with alternating diamond motifs for versatile day-to-night wear.' },
    { name: 'Pink Gold Bracelet, ,price: 'contact for price'  image: `${imageBase}/IMG-20261001-WA1472.jpg`, description: 'A slender pink-gold bracelet with bead-like detailing and scattered natural diamonds for understated luxury.' },
    { name: 'Rose Gold Bracelet, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA1377.jpg`, description: 'Rose gold bracelet with engraved motifs and a champagne-hued diamond arrangement for warm radiance.' },
    { name: 'White Gold Bracelet, ,price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA1567.jpg`, description: 'Elegant white-gold bracelet with refined links and small, brilliant diamonds for daily refinement.' },
    { name: 'Black Gold Necklace, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2469.jpg`, description: 'A low-profile black-gold necklace that silhouettes the neck and accentuates diamond contrast.' },
    { name: 'White Gold Ring, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2564.jpg`, description: 'A white-gold band accented with micro-set diamonds — balanced proportions and superb finish.' },
    { name: 'Yellow Gold Ring, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2564.jpg`, description: 'Yellow-gold ring with warm undertones and hand-polished facets to highlight each diamond sparkle.' },
    { name: 'Yellow Gold Necklace, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2661.jpg`, description: 'A refined yellow-gold chain with a minimalist diamond pendant for effortless elegance.' },
    { name: 'Black Gold Ring, , price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2491.jpg`, description: 'Masculine black-gold ring with an industrial edge and precise diamond accents for high contrast.' },
    { name: 'Black Gold Ring (2), price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA2492.jpg`, description: 'A secondary black-gold ring design with stepped profile and carefully set white diamonds.' },
    { name: 'Pink Gold Earring, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0010.jpg`, description: 'Delicate pink-gold studs with single-diamond centers for everyday refinement.' },
    { name: 'Pink Gold Ring (2), price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5407.jpg`, description: 'A slimmer pink-gold stacking ring designed to pair with other pieces in the collection.' },
    { name: 'Black Gold Bracelet (2), price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5326.jpg`, description: 'Textured black-gold bracelet with alternating diamond stations for contemporary formalwear.' },
    { name: 'Pink Gold Ring (3), price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA5407.jpg`, description: 'A sculptural pink-gold ring with a domed profile and pavé diamonds for luminous depth.' },
    { name: 'Yellow Gold Brooch, price: 'Contact for Price', image: `${imageBase}/IMG-20261001-WA0005.jpg`, description: 'A classic yellow-gold brooch featuring hand-engraved surfaces and a central diamond cluster.' }
];

// Detect product category from the name (Brooch, Bracelet, Ring, Earring, Necklace)
function detectCategory(name) {
    const lower = (name || '').toLowerCase();
    if (lower.includes('brooch')) return 'Brooch';
    if (lower.includes('bracelet')) return 'Bracelet';
    if (lower.includes('ring')) return 'Ring';
    if (lower.includes('earring') || lower.includes('earrings')) return 'Earring';
    if (lower.includes('necklace')) return 'Necklace';
    return 'Other';
}

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

    const filterSelect = document.getElementById('category-filter');
    const filter = filterSelect ? filterSelect.value : 'All';

    const visibleProducts = products.filter(item => {
        const category = detectCategory(item.name);
        return filter === 'All' || category === filter;
    });

    grid.innerHTML = visibleProducts.map((item) => {
        const hasPrice = item.price !== 'Contact for Price';
        const buttonHTML = hasPrice
            ? `<button class="checkout-btn" onclick="openCheckout(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', '${item.price}', '${item.description.replace(/'/g, "\\'")}')">Proceed to Checkout</button>`
            : `<button class="contact-price-btn" onclick="openContactForm(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', '${item.description.replace(/'/g, "\\'")}')">Contact for Price</button>`;

        const category = detectCategory(item.name);

        // Use a short description on the card for SEO snippet and uniqueness
        const shortDesc = item.description.length > 120 ? item.description.slice(0, 117) + '...' : item.description;

        return `
            <article class="product-card" data-category="${category}" data-name="${item.name}" data-description="${item.description}">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="product-meta">
                    <span class="product-category">${category}</span>
                </div>
                <h3 class="product-title">${item.name}</h3>
                <p class="product-description">${shortDesc}</p>
                <div class="product-price-contact">${item.price}</div>
                <div class="product-action">
                    ${buttonHTML}
                </div>
            </article>
        `;
    }).join('');
}

function openContactForm(event, productName, productImage, productDescription) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-description').textContent = productDescription;
    document.getElementById('checkout-price').textContent = 'Contact for Price';

    const category = detectCategory(productName);

    window.currentOrder = {
        productName,
        productImage,
        productPrice: 'Contact for Price',
        category,
        description: productDescription,
        type: 'inquiry'
    };

    // Update page-level SEO for this product (title + meta description)
    updateSeoForProduct(window.currentOrder);

    modal.classList.add('active');
}

function openCheckout(event, productName, productImage, productPrice, productDescription) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-image').src = productImage;
    document.getElementById('checkout-title').textContent = productName;
    document.getElementById('checkout-description').textContent = productDescription;
    document.getElementById('checkout-price').textContent = productPrice;

    const category = detectCategory(productName);

    window.currentOrder = {
        productName,
        productImage,
        productPrice,
        category,
        description: productDescription,
        type: 'checkout'
    };

    // Update page-level SEO for this product (title + meta description)
    updateSeoForProduct(window.currentOrder);

    modal.classList.add('active');
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
    }

    // Restore site-wide SEO
    restoreSiteSeo();
}

function updateSeoForProduct(order) {
    try {
        const title = `Luxorita — ${order.productName}`;
        document.title = title;

        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        meta.content = order.description.slice(0, 160);

        // Inject structured data for product (JSON-LD)
        const existingLd = document.getElementById('product-jsonld');
        if (existingLd) existingLd.remove();

        const jsonld = {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": order.productName,
            "image": [order.productImage],
            "description": order.description,
            "brand": {
                "@type": "Brand",
                "name": "Luxorita"
            },
            "offers": {
                "@type": "Offer",
                "url": window.location.href,
                "price": order.productPrice === 'Contact for Price' ? undefined : order.productPrice,
                "priceCurrency": order.productPrice && order.productPrice.includes('USD') ? 'USD' : undefined,
                "availability": "https://schema.org/PreOrder"
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'product-jsonld';
        script.text = JSON.stringify(jsonld);
        document.head.appendChild(script);

    } catch (e) {
        console.error('SEO update failed', e);
    }
}

function restoreSiteSeo() {
    document.title = 'Luxorita — High Jewelry Masterworks';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = 'Luxorita High Jewelry — 24K Gold and Natural Diamonds. Exquisite, handcrafted pieces designed for collectors.';
    const existingLd = document.getElementById('product-jsonld');
    if (existingLd) existingLd.remove();
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

    const order = window.currentOrder || {};
    const productName = order.productName || 'this item';
    const productPrice = order.productPrice || 'Contact for Price';
    const orderType = order.type || 'inquiry';
    const productCategory = order.category || detectCategory(productName);
    const productImage = order.productImage || '';
    const productDescription = order.description || '';

    const bodyLines = [
        `Product: ${productName}`,
        `Category: ${productCategory}`,
        `Price: ${productPrice}`,
        `Image URL: ${productImage}`,
        `Description: ${productDescription}`,
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

    const subject = encodeURIComponent(`Luxorita ${orderType === 'checkout' ? 'Order' : 'Inquiry'}: ${productName}`);
    const body = encodeURIComponent(bodyLines.join('\n'));

    const to = 'contactluxorita@gmail.com';
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    // Primary: attempt to open the user's mail client
    window.location.href = mailto;

    // Fallback: create downloadable .eml file for manual sending
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
        const safeName = productName.replace(/[^a-z0-9]/gi, '_').toLowerCase().slice(0, 80);
        link.download = `luxorita-${safeName}.eml`;
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

// Wire up the category filter change to re-render the catalog
function initControls() {
    const filterSelect = document.getElementById('category-filter');
    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            renderCatalog();
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initControls();
    renderCatalog();
    showPage('catalog');
});
