// ================================================
// MODERN STORE - PRODUCTS DATA
// ================================================

const CATEGORIES = [
    {
        id: 'food',
        name: 'المواد الغذائية',
        nameEn: 'Food & Groceries',
        icon: '🍕',
        color: '#22c55e',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
        count: 24
    },
    {
        id: 'consumer',
        name: 'المواد الاستهلاكية',
        nameEn: 'Consumer Goods',
        icon: '🧴',
        color: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800',
        count: 18
    },
    {
        id: 'clothes',
        name: 'ملابس جاهزة',
        nameEn: 'Ready-made Clothes',
        icon: '👕',
        color: '#ec4899',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        count: 32
    },
    {
        id: 'watches',
        name: 'ساعات واكسسوارات',
        nameEn: 'Watches & Accessories',
        icon: '⌚',
        color: '#f59e0b',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        count: 15
    },
    {
        id: 'appliances',
        name: 'الأجهزة الكهربائية والمنزلية',
        nameEn: 'Home Appliances',
        icon: '🔌',
        color: '#6366f1',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        count: 28
    },
    {
        id: 'mobiles',
        name: 'الموبايلات واللابات',
        nameEn: 'Mobiles & Laptops',
        icon: '📱',
        color: '#14b8a6',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
        count: 22
    }
];

const PRODUCTS = [
    // Food & Groceries
    {
        id: 1,
        name: 'زيت زيتون بكر ممتاز',
        category: 'food',
        price: 350,
        oldPrice: 450,
        discount: 22,
        rating: 4.8,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500',
        badge: 'sale',
        featured: true
    },
    {
        id: 2,
        name: 'عسل طبيعي جبلي',
        category: 'food',
        price: 280,
        oldPrice: null,
        discount: 0,
        rating: 4.9,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500',
        badge: 'new',
        featured: true
    },
    {
        id: 3,
        name: 'أرز بسمتي فاخر 5 كيلو',
        category: 'food',
        price: 180,
        oldPrice: 220,
        discount: 18,
        rating: 4.6,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500',
        badge: 'sale',
        featured: false
    },
    {
        id: 4,
        name: 'قهوة عربية فاخرة',
        category: 'food',
        price: 95,
        oldPrice: null,
        discount: 0,
        rating: 4.7,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
        badge: null,
        featured: false
    },

    // Consumer Goods
    {
        id: 5,
        name: 'مجموعة العناية بالبشرة',
        category: 'consumer',
        price: 450,
        oldPrice: 600,
        discount: 25,
        rating: 4.5,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500',
        badge: 'sale',
        featured: true
    },
    {
        id: 6,
        name: 'عطر فاخر للرجال',
        category: 'consumer',
        price: 320,
        oldPrice: null,
        discount: 0,
        rating: 4.8,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
        badge: 'new',
        featured: true
    },
    {
        id: 7,
        name: 'شامبو طبيعي بالأعشاب',
        category: 'consumer',
        price: 85,
        oldPrice: 110,
        discount: 23,
        rating: 4.4,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500',
        badge: 'sale',
        featured: false
    },

    // Clothes
    {
        id: 8,
        name: 'قميص رجالي قطن',
        category: 'clothes',
        price: 250,
        oldPrice: 350,
        discount: 29,
        rating: 4.6,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
        badge: 'sale',
        featured: true
    },
    {
        id: 9,
        name: 'فستان سهرة أنيق',
        category: 'clothes',
        price: 850,
        oldPrice: null,
        discount: 0,
        rating: 4.9,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
        badge: 'new',
        featured: true
    },
    {
        id: 10,
        name: 'جينز رجالي سليم',
        category: 'clothes',
        price: 320,
        oldPrice: 400,
        discount: 20,
        rating: 4.5,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
        badge: 'sale',
        featured: false
    },

    // Watches & Accessories
    {
        id: 11,
        name: 'ساعة كلاسيكية فاخرة',
        category: 'watches',
        price: 1200,
        oldPrice: 1500,
        discount: 20,
        rating: 4.8,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        badge: 'sale',
        featured: true
    },
    {
        id: 12,
        name: 'نظارة شمسية راي بان',
        category: 'watches',
        price: 450,
        oldPrice: null,
        discount: 0,
        rating: 4.7,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
        badge: 'new',
        featured: true
    },
    {
        id: 13,
        name: 'حقيبة يد جلد طبيعي',
        category: 'watches',
        price: 680,
        oldPrice: 850,
        discount: 20,
        rating: 4.6,
        reviews: 34,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
        badge: 'sale',
        featured: false
    },

    // Home Appliances
    {
        id: 14,
        name: 'مكنسة كهربائية ذكية',
        category: 'appliances',
        price: 2500,
        oldPrice: 3200,
        discount: 22,
        rating: 4.7,
        reviews: 178,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
        badge: 'sale',
        featured: true
    },
    {
        id: 15,
        name: 'ماكينة قهوة اسبريسو',
        category: 'appliances',
        price: 1800,
        oldPrice: null,
        discount: 0,
        rating: 4.9,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
        badge: 'new',
        featured: true
    },
    {
        id: 16,
        name: 'خلاط كهربائي متعدد السرعات',
        category: 'appliances',
        price: 450,
        oldPrice: 550,
        discount: 18,
        rating: 4.5,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500',
        badge: 'sale',
        featured: false
    },

    // Mobiles & Laptops
    {
        id: 17,
        name: 'ايفون 15 برو ماكس',
        category: 'mobiles',
        price: 52000,
        oldPrice: 58000,
        discount: 10,
        rating: 4.9,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
        badge: 'sale',
        featured: true
    },
    {
        id: 18,
        name: 'لابتوب ماك بوك برو',
        category: 'mobiles',
        price: 48000,
        oldPrice: null,
        discount: 0,
        rating: 4.8,
        reviews: 289,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
        badge: 'new',
        featured: true
    },
    {
        id: 19,
        name: 'سامسونج جالكسي S24',
        category: 'mobiles',
        price: 35000,
        oldPrice: 40000,
        discount: 12,
        rating: 4.7,
        reviews: 423,
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
        badge: 'sale',
        featured: false
    },
    {
        id: 20,
        name: 'سماعات ايربودز برو',
        category: 'mobiles',
        price: 4500,
        oldPrice: 5500,
        discount: 18,
        rating: 4.8,
        reviews: 678,
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500',
        badge: 'sale',
        featured: true
    }
];

// Promotional Offers
const PROMOS = [
    {
        id: 1,
        category: 'food',
        discount: '30%',
        title: 'خصم على المواد الغذائية',
        description: 'عروض نهاية العام على جميع المنتجات الغذائية'
    },
    {
        id: 2,
        category: 'clothes',
        discount: '50%',
        title: 'تخفيضات الملابس',
        description: 'أحدث صيحات الموضة بنصف السعر'
    },
    {
        id: 3,
        category: 'mobiles',
        discount: '25%',
        title: 'عروض الإلكترونيات',
        description: 'أحدث الهواتف واللابتوبات بأسعار مميزة'
    }
];

// Helper Functions
function getProductsByCategory(categoryId) {
    return PRODUCTS.filter(product => product.category === categoryId);
}

function getFeaturedProducts(limit = 8) {
    return PRODUCTS.filter(product => product.featured).slice(0, limit);
}

function getProductById(id) {
    return PRODUCTS.find(product => product.id === parseInt(id));
}

function getCategoryById(id) {
    return CATEGORIES.find(category => category.id === id);
}

function formatPrice(price) {
    return price.toLocaleString('ar-EG') + ' ج.م';
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalf ? 1 : 0); i < 5; i++) {
        stars += '<i class="far fa-star empty"></i>';
    }

    return stars;
}

// Product Card Template
function createProductCard(product) {
    const category = getCategoryById(product.category);
    const badgeHTML = product.badge === 'sale'
        ? `<span class="badge badge-sale">خصم ${product.discount}%</span>`
        : product.badge === 'new'
            ? `<span class="badge badge-new">جديد</span>`
            : '';

    const oldPriceHTML = product.oldPrice
        ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>`
        : '';

    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">
                    ${badgeHTML}
                </div>
                <div class="product-actions">
                    <button class="product-action-btn" data-tooltip="عرض سريع" onclick="quickView(${product.id})">
                        <i class="far fa-eye"></i>
                    </button>
                    <button class="product-action-btn" data-tooltip="مقارنة" onclick="addToCompare(${product.id})">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                    <button class="product-action-btn" data-tooltip="أضف للمفضلة" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${category.name}</span>
                <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
                <div class="product-rating">
                    <div class="rating">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price price">
                        <span class="price-current">${formatPrice(product.price)}</span>
                        ${oldPriceHTML}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-tooltip="أضف للسلة">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Category Card Template
function createCategoryCard(category) {
    return `
        <a href="products.html?category=${category.id}" class="category-card ${category.id}">
            <div class="category-img">
                <img src="${category.image}" alt="${category.name}" loading="lazy">
            </div>
            <div class="category-content">
                <div class="category-icon">${category.icon}</div>
                <h3 class="category-name">${category.name}</h3>
                <span class="category-count">${category.count} منتج</span>
            </div>
        </a>
    `;
}

// Promo Card Template
function createPromoCard(promo) {
    return `
        <div class="promo-card ${promo.category}">
            <div class="promo-card-discount">${promo.discount}</div>
            <h4 class="promo-card-title">${promo.title}</h4>
            <p class="promo-card-desc">${promo.description}</p>
        </div>
    `;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CATEGORIES, PRODUCTS, PROMOS };
}
