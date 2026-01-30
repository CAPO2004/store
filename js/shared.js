// ================================================
// MODERN STORE - SHARED COMPONENTS (Header & Footer)
// ================================================

// Header HTML Template
const headerHTML = `
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container top-bar-content">
            <div class="top-bar-contact">
                <a href="tel:+201234567890"><i class="fas fa-phone"></i> +20 123 456 7890</a>
                <a href="mailto:info@modernstore.com"><i class="fas fa-envelope"></i> info@modernstore.com</a>
            </div>
            <div class="top-bar-actions">
                <button id="themeToggle" aria-label="تبديل الوضع">
                    <i class="fas fa-moon"></i>
                </button>
                <span><i class="fas fa-truck"></i> شحن مجاني للطلبات فوق 500 ج.م</span>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="header" id="header">
        <div class="container header-content">
            <a href="index.html" class="logo">
                <span class="logo-icon">🛒</span>
                <span class="logo-text">المتجر</span>
            </a>

            <nav class="nav" id="nav">
                <ul class="nav-list">
                    <li><a href="index.html" class="nav-link" data-page="index">الرئيسية</a></li>
                    <li class="nav-dropdown">
                        <a href="javascript:void(0)" class="nav-link" data-page="products">
                            الأقسام <i class="fas fa-chevron-down"></i>
                        </a>
                        <div class="nav-dropdown-menu">
                            <a href="products.html?category=food" class="dropdown-item">
                                <i class="fas fa-utensils"></i> المواد الغذائية
                            </a>
                            <a href="products.html?category=consumer" class="dropdown-item">
                                <i class="fas fa-spray-can"></i> المواد الاستهلاكية
                            </a>
                            <a href="products.html?category=clothes" class="dropdown-item">
                                <i class="fas fa-tshirt"></i> ملابس جاهزة
                            </a>
                            <a href="products.html?category=watches" class="dropdown-item">
                                <i class="fas fa-clock"></i> ساعات واكسسوارات
                            </a>
                            <a href="products.html?category=appliances" class="dropdown-item">
                                <i class="fas fa-blender"></i> الأجهزة الكهربائية
                            </a>
                            <a href="products.html?category=mobiles" class="dropdown-item">
                                <i class="fas fa-mobile-alt"></i> الموبايلات واللابات
                            </a>
                        </div>
                    </li>
                    <li><a href="products.html" class="nav-link" data-page="products">جميع المنتجات</a></li>
                    <li><a href="offers.html" class="nav-link" data-page="offers">العروض</a></li>
                    <li><a href="about.html" class="nav-link" data-page="about">من نحن</a></li>
                    <li><a href="contact.html" class="nav-link" data-page="contact">اتصل بنا</a></li>
                    
                    <!-- Mobile-Only Login Button (Moved from Header) -->
                    <li class="mobile-login-item">
                        <a href="login.html" class="nav-link">
                            <i class="fas fa-sign-in-alt"></i> تسجيل الدخول
                        </a>
                    </li>

                    <!-- Mobile-Only Signup Button -->
                    <li class="mobile-signup-item">
                        <a href="login.html?action=register" class="nav-link">
                            <i class="fas fa-user-plus"></i> إنشاء حساب
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="header-actions">
                <button class="search-toggle" id="searchToggle" aria-label="بحث">
                    <i class="fas fa-search"></i>
                </button>
                
                <!-- Desktop User Dropdown -->
                <div class="user-dropdown">
                    <a href="login.html" class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem; border-radius: 8px; margin-left: 10px;">
                        <i class="fas fa-user"></i> تسجيل الدخول
                    </a>
                    <div class="user-dropdown-menu">
                        <a href="login.html?action=register" class="user-dropdown-item">
                            <i class="fas fa-user-plus"></i> إنشاء حساب
                        </a>
                    </div>
                </div>

                <a href="wishlist.html" class="cart-btn" aria-label="المفضلة" data-tooltip="المفضلة">
                    <i class="fas fa-heart"></i>
                    <span class="cart-count" id="wishlistCount">0</span>
                </a>
                <a href="compare.html" class="cart-btn" aria-label="المقارنة" data-tooltip="المقارنة">
                    <i class="fas fa-exchange-alt"></i>
                    <span class="cart-count" id="compareCount">0</span>
                </a>
                <button class="cart-btn" id="cartBtn" aria-label="سلة التسوق">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="cart-count" id="cartCount">0</span>
                </button>
                <button class="menu-toggle" id="menuToggle" aria-label="القائمة">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
`;

// Footer HTML Template
const footerHTML = `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="logo">
                        <span class="logo-icon">🛒</span>
                        <span class="logo-text">المتجر</span>
                    </a>
                    <p>متجرك الإلكتروني الأول للتسوق بأفضل الأسعار وأعلى جودة. نوفر لك كل ما تحتاجه في مكان واحد.</p>
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>روابط سريعة</h4>
                    <ul>
                        <li><a href="index.html">الرئيسية</a></li>
                        <li><a href="products.html">جميع المنتجات</a></li>
                        <li><a href="offers.html">العروض</a></li>
                        <li><a href="about.html">من نحن</a></li>
                        <li><a href="contact.html">اتصل بنا</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>الأقسام</h4>
                    <ul>
                        <li><a href="products.html?category=food">المواد الغذائية</a></li>
                        <li><a href="products.html?category=consumer">المواد الاستهلاكية</a></li>
                        <li><a href="products.html?category=clothes">ملابس جاهزة</a></li>
                        <li><a href="products.html?category=watches">ساعات واكسسوارات</a></li>
                        <li><a href="products.html?category=appliances">الأجهزة الكهربائية</a></li>
                        <li><a href="products.html?category=mobiles">الموبايلات واللابات</a></li>
                    </ul>
                </div>
                <div class="footer-links footer-contact">
                    <h4>تواصل معنا</h4>
                    <ul>
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>مصر - القاهرة - مدينة نصر</span>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <a href="tel:+201234567890">+20 123 456 7890</a>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:info@modernstore.com">info@modernstore.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2024 المتجر الحديث. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <!-- Cart Drawer -->
    <div class="cart-drawer" id="cartDrawer">
        <div class="cart-drawer-header">
            <h3><i class="fas fa-shopping-bag"></i> سلة التسوق</h3>
            <button class="cart-close" id="cartClose"><i class="fas fa-times"></i></button>
        </div>
        <div class="cart-drawer-body" id="cartItems">
            <!-- Cart items will be loaded via JavaScript -->
        </div>
        <div class="cart-drawer-footer">
            <div class="cart-total">
                <span>الإجمالي:</span>
                <span id="cartTotal">0 ج.م</span>
            </div>
            <a href="cart.html" class="btn btn-primary btn-block">عرض السلة</a>
            <a href="checkout.html" class="btn btn-secondary btn-block" style="margin-top: 10px;">إتمام الشراء</a>
        </div>
    </div>
    <div class="cart-overlay" id="cartOverlay"></div>

    <!-- Search Overlay -->
    <div class="search-overlay" id="searchOverlay">
        <button class="search-close" id="searchClose"><i class="fas fa-times"></i></button>
        <div class="search-container">
            <form class="search-form">
                <input type="text" id="searchInput" placeholder="ابحث عن منتج...">
            </form>
        </div>
    </div>

    <!-- Back to Top -->
    <button class="back-to-top" id="backToTop" aria-label="العودة للأعلى">
        <i class="fas fa-arrow-up"></i>
    </button>
`;

// Function to load header and footer
function loadSharedComponents() {
    // Get page name from URL
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    // Insert header at the beginning of body
    const headerContainer = document.getElementById('shared-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // Insert footer at footer placeholder
    const footerContainer = document.getElementById('shared-footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }

    // Set active nav link
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        navLinks.forEach(link => {
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });
    }, 0);
}

// Auto-load on DOMContentLoaded
document.addEventListener('DOMContentLoaded', loadSharedComponents);
