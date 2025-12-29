// ================================================
// MODERN STORE - MAIN JAVASCRIPT
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initHeader();
    initTheme();
    initSearch();
    initMobileMenu();
    initAnimations();
    initBackToTop();
    initCategories();
    initProducts();
    initPromos();
    initWishlistCompare();
});

// ================================================
// HEADER
// ================================================

function initHeader() {
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// ================================================
// THEME TOGGLE
// ================================================

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Set initial theme
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    updateThemeIcon();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon();
        });
    }
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

// ================================================
// SEARCH
// ================================================

function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput?.focus(), 300);
        });
    }

    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchOverlay?.classList.remove('active');
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    // Search on Enter
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

// ================================================
// MOBILE MENU
// ================================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        overlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Add overlay styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: ${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--z-modal')) - 1 || 399};
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-normal);
        }
        .nav-overlay.active {
            opacity: 1;
            visibility: visible;
        }
    `;
    document.head.appendChild(style);
}

// ================================================
// ANIMATIONS (Intersection Observer)
// ================================================

function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.dataset.animate;
                const delay = entry.target.dataset.delay || 0;

                setTimeout(() => {
                    entry.target.classList.add(`animate-${animation}`);
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// ================================================
// BACK TO TOP
// ================================================

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================================================
// CATEGORIES
// ================================================

function initCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');

    if (!categoriesGrid || typeof CATEGORIES === 'undefined') return;

    categoriesGrid.innerHTML = CATEGORIES.map((category, index) => `
        <a href="products.html?category=${category.id}" 
           class="category-card ${category.id}" 
           data-animate="fadeInUp" 
           data-delay="${index * 100}">
            <div class="category-img">
                <img src="${category.image}" alt="${category.name}" loading="lazy">
            </div>
            <div class="category-content">
                <div class="category-icon">${category.icon}</div>
                <h3 class="category-name">${category.name}</h3>
                <span class="category-count">${category.count} منتج</span>
            </div>
        </a>
    `).join('');

    // Re-init animations for new elements
    initAnimations();
}

// ================================================
// PRODUCTS
// ================================================

function initProducts() {
    const featuredProducts = document.getElementById('featuredProducts');

    if (!featuredProducts || typeof PRODUCTS === 'undefined') return;

    const featured = getFeaturedProducts(8);

    featuredProducts.innerHTML = featured.map((product, index) =>
        createProductCard(product)
    ).join('');
}

// ================================================
// PROMOS / OFFERS SLIDER
// ================================================

function initPromos() {
    const promoTrack = document.getElementById('promoTrack');

    if (!promoTrack || typeof PROMOS === 'undefined') return;

    promoTrack.innerHTML = PROMOS.map(promo => createPromoCard(promo)).join('');
}

// ================================================
// UTILITIES
// ================================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format number with Arabic locale
function formatNumber(num) {
    return new Intl.NumberFormat('ar-EG').format(num);
}

// Get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;

        // Show success message
        const btn = e.target.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'تم الاشتراك ✓';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            e.target.reset();
        }, 3000);
    });
}

// Console welcome message
console.log('%c🛒 Modern Store', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cمتجر إلكتروني عربي متعدد الأقسام', 'font-size: 14px; color: #8b5cf6;');

// ================================================
// WISHLIST & COMPARE INITIALIZATION
// ================================================

function initWishlistCompare() {
    updateWishlistCount();
    updateCompareCount();
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const countEl = document.getElementById('wishlistCount');
    if (countEl) {
        countEl.textContent = wishlist.length;
        countEl.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

function updateCompareCount() {
    const compareList = JSON.parse(localStorage.getItem('compareList')) || [];
    const countEl = document.getElementById('compareCount');
    if (countEl) {
        countEl.textContent = compareList.length;
        countEl.style.display = compareList.length > 0 ? 'flex' : 'none';
    }
}

// ================================================
// WISHLIST FUNCTIONALITY
// ================================================

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const index = wishlist.indexOf(productId);
    const btn = event.target.closest('.product-action-btn');

    if (index === -1) {
        wishlist.push(productId);
        showToast(`تمت إضافة "${product.name}" للمفضلة ❤️`);
        if (btn) {
            btn.innerHTML = '<i class="fas fa-heart" style="color: #ef4444;"></i>';
        }
    } else {
        wishlist.splice(index, 1);
        showToast(`تمت إزالة "${product.name}" من المفضلة`);
        if (btn) {
            btn.innerHTML = '<i class="far fa-heart"></i>';
        }
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

// ================================================
// COMPARE FUNCTIONALITY
// ================================================

let compareList = JSON.parse(localStorage.getItem('compareList')) || [];

function addToCompare(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const index = compareList.indexOf(productId);

    if (index === -1) {
        if (compareList.length >= 4) {
            showToast('يمكنك مقارنة 4 منتجات كحد أقصى!', 'warning');
            return;
        }
        compareList.push(productId);
        showToast(`تمت إضافة "${product.name}" للمقارنة`);
    } else {
        compareList.splice(index, 1);
        showToast(`تمت إزالة "${product.name}" من المقارنة`);
    }

    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompareCount();
}

function updateCompareButton() {
    // Legacy function - now uses updateCompareCount
    updateCompareCount();
}

// ================================================
// QUICK VIEW MODAL
// ================================================

function quickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const category = getCategoryById(product.category);

    // Create modal if doesn't exist
    let modal = document.getElementById('quickViewModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quickViewModal';
        modal.className = 'quick-view-modal';
        document.body.appendChild(modal);

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .quick-view-modal {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.7);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            .quick-view-modal.active {
                opacity: 1;
                visibility: visible;
            }
            .quick-view-content {
                background: var(--bg-card);
                border-radius: 16px;
                max-width: 800px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
                padding: 24px;
                position: relative;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            .quick-view-modal.active .quick-view-content {
                transform: scale(1);
            }
            .quick-view-close {
                position: absolute;
                top: 16px;
                left: 16px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--bg-secondary);
                border: none;
                cursor: pointer;
                font-size: 1.25rem;
                color: var(--text-secondary);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .quick-view-close:hover {
                background: var(--danger);
                color: white;
            }
            .quick-view-image img {
                width: 100%;
                border-radius: 12px;
                object-fit: cover;
            }
            .quick-view-info h2 {
                font-size: 1.5rem;
                color: var(--text-primary);
                margin-bottom: 8px;
            }
            .quick-view-category {
                color: var(--primary);
                font-weight: 600;
                font-size: 0.9rem;
                margin-bottom: 16px;
            }
            .quick-view-price {
                font-size: 1.75rem;
                font-weight: 800;
                color: var(--accent);
                margin-bottom: 16px;
            }
            .quick-view-price .old {
                font-size: 1rem;
                color: var(--text-muted);
                text-decoration: line-through;
                margin-right: 12px;
            }
            .quick-view-rating {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 16px;
                color: #f59e0b;
            }
            .quick-view-desc {
                color: var(--text-secondary);
                line-height: 1.8;
                margin-bottom: 24px;
            }
            .quick-view-actions {
                display: flex;
                gap: 12px;
            }
            @media (max-width: 768px) {
                .quick-view-content {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }

    const oldPriceHTML = product.oldPrice
        ? `<span class="old">${formatPrice(product.oldPrice)}</span>`
        : '';

    modal.innerHTML = `
        <div class="quick-view-content">
            <button class="quick-view-close" onclick="closeQuickView()">
                <i class="fas fa-times"></i>
            </button>
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-info">
                <span class="quick-view-category">${category.icon} ${category.name}</span>
                <h2>${product.name}</h2>
                <div class="quick-view-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews} تقييم)</span>
                </div>
                <div class="quick-view-price">
                    ${formatPrice(product.price)}
                    ${oldPriceHTML}
                </div>
                <p class="quick-view-desc">
                    منتج عالي الجودة من أفضل العلامات التجارية. متوفر للشحن الفوري إلى جميع المحافظات.
                    نضمن لك أفضل سعر وأعلى جودة مع إمكانية الاستبدال والاسترجاع خلال 14 يوم.
                </p>
                <div class="quick-view-actions">
                    <button class="btn btn-primary btn-lg" onclick="addToCart(${product.id}); closeQuickView();">
                        <i class="fas fa-shopping-cart"></i> أضف للسلة
                    </button>
                    <a href="product.html?id=${product.id}" class="btn btn-outline btn-lg">
                        التفاصيل الكاملة
                    </a>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => modal.classList.add('active'), 10);

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) closeQuickView();
    };

    // Close on Escape
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeQuickView();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ================================================
// TOAST NOTIFICATIONS
// ================================================

function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;

    const icon = type === 'success' ? 'fa-check-circle'
        : type === 'warning' ? 'fa-exclamation-triangle'
            : 'fa-info-circle';

    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;

    // Add styles if not exists
    if (!document.getElementById('toastStyles')) {
        const style = document.createElement('style');
        style.id = 'toastStyles';
        style.textContent = `
            .toast-notification {
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                padding: 16px 24px;
                background: #1e293b;
                color: white;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                z-index: 99999;
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 1rem;
                animation: toastIn 0.4s ease forwards, toastOut 0.4s ease 2.5s forwards;
            }
            .toast-success { border-right: 4px solid #22c55e; }
            .toast-warning { border-right: 4px solid #f59e0b; }
            .toast-error { border-right: 4px solid #ef4444; }
            .toast-success i { color: #22c55e; }
            .toast-warning i { color: #f59e0b; }
            .toast-error i { color: #ef4444; }
            @keyframes toastIn {
                to { transform: translateX(-50%) translateY(0); }
            }
            @keyframes toastOut {
                to { transform: translateX(-50%) translateY(100px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Remove after animation
    setTimeout(() => toast.remove(), 3000);
}

// Add to cart function (wrapper for cart.js)
function addToCart(productId) {
    if (typeof cart !== 'undefined') {
        cart.addItem(productId);
        const product = getProductById(productId);
        if (product) {
            showToast(`تمت إضافة "${product.name}" للسلة 🛒`);
        }
    }
}

// Page entrance animations are now handled purely by CSS
// No JavaScript needed for page transitions

// ================================================
// FLOATING BACKGROUND ICONS
// ================================================

function initFloatingBackground() {
    // Create container
    const container = document.createElement('div');
    container.className = 'floating-bg';
    document.body.appendChild(container);

    // Shopping-related icons
    const icons = [
        'fa-shopping-bag',
        'fa-shopping-cart',
        'fa-heart',
        'fa-star',
        'fa-box',
        'fa-gift',
        'fa-tag',
        'fa-percent',
        'fa-truck',
        'fa-credit-card',
        'fa-store',
        'fa-gem'
    ];

    const sizes = ['small', 'medium', 'large'];

    // Create floating icons
    function createFloatingIcon() {
        const icon = document.createElement('i');
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

        icon.className = `fas ${randomIcon} floating-icon ${randomSize}`;
        icon.style.left = Math.random() * 100 + '%';
        icon.style.animationDuration = (15 + Math.random() * 20) + 's';
        icon.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(icon);

        // Remove icon after animation completes
        setTimeout(() => {
            icon.remove();
        }, 40000);
    }

    // Initial icons
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createFloatingIcon(), i * 500);
    }

    // Continuously create new icons
    setInterval(createFloatingIcon, 2000);
}

// Initialize floating background
document.addEventListener('DOMContentLoaded', initFloatingBackground);

// ================================================
// PRELOADER - Animated Shopping Cart (Homepage Only)
// ================================================

function initPreloader() {
    // Only show preloader on homepage (index.html)
    const isHomepage = window.location.pathname.endsWith('index.html') ||
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('/');

    if (!isHomepage) return;

    // Create preloader HTML
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <svg class="preloader-svg" viewBox="0 0 100 100">
            <!-- Cart body -->
            <path d="M25 30 L30 70 L80 70 L85 35 L35 35" />
            <!-- Cart handle -->
            <path d="M25 30 L15 20 L10 20" />
            <!-- Left wheel -->
            <circle cx="40" cy="80" r="7" />
            <!-- Right wheel -->
            <circle cx="70" cy="80" r="7" />
            <!-- Items in cart -->
            <polyline points="40,45 50,55 60,40 70,50" />
        </svg>
        <div class="preloader-text">المتجر الحديث</div>
        <div class="preloader-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    // Insert at beginning of body
    document.body.insertBefore(preloader, document.body.firstChild);

    // Hide preloader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1500); // Show for at least 1.5 seconds
    });
}

// Initialize preloader immediately
initPreloader();
