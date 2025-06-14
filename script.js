// Data for categories
const categories = [
    { name: "Web Security", icon: "fas fa-globe", count: 45, color: "linear-gradient(to right, #ef4444, #ec4899)" },
    { name: "Network Security", icon: "fas fa-wifi", count: 32, color: "linear-gradient(to right, #3b82f6, #06b6d4)" },
    { name: "Mobile Security", icon: "fas fa-mobile-alt", count: 28, color: "linear-gradient(to right, #10b981, #059669)" },
    { name: "Database Security", icon: "fas fa-database", count: 24, color: "linear-gradient(to right, #8b5cf6, #7c3aed)" },
    { name: "Malware Analysis", icon: "fas fa-bug", count: 38, color: "linear-gradient(to right, #f59e0b, #eab308)" },
    { name: "Cryptography", icon: "fas fa-lock", count: 22, color: "linear-gradient(to right, #6366f1, #3b82f6)" },
    { name: "Server Security", icon: "fas fa-server", count: 30, color: "linear-gradient(to right, #14b8a6, #06b6d4)" },
    { name: "Social Engineering", icon: "fas fa-users", count: 18, color: "linear-gradient(to right, #f43f5e, #ec4899)" }
];

// Data for articles
const articles = [
    {
        id: 1,
        title: "Advanced SQL Injection Techniques and Prevention",
        excerpt: "Explore sophisticated SQL injection attack vectors and learn comprehensive defense strategies to protect your applications.",
        category: "Web Security",
        author: "Alex Chen",
        date: "2025-01-15",
        readTime: "8 min read",
        views: "2.4k",
        likes: 156,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
        tags: ["SQL", "Web Security", "Prevention"],
        featured: true
    },
    {
        id: 2,
        title: "Zero-Day Vulnerability Analysis: Case Study",
        excerpt: "Deep dive into a recent zero-day vulnerability discovery, analysis methodology, and responsible disclosure process.",
        category: "Malware Analysis",
        author: "Sarah Johnson",
        date: "2025-01-12",
        readTime: "12 min read",
        views: "3.1k",
        likes: 203,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
        tags: ["Zero-Day", "Vulnerability", "Research"],
        featured: true
    },
    {
        id: 3,
        title: "Implementing Zero Trust Architecture",
        excerpt: "Complete guide to designing and implementing a zero trust security model for modern enterprise environments.",
        category: "Network Security",
        author: "Mike Rodriguez",
        date: "2025-01-10",
        readTime: "15 min read",
        views: "1.8k",
        likes: 124,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
        tags: ["Zero Trust", "Architecture", "Enterprise"],
        featured: true
    },
    {
        id: 4,
        title: "Mobile App Security Testing Framework",
        excerpt: "Comprehensive framework for testing mobile application security, including automated tools and manual testing procedures.",
        category: "Mobile Security",
        author: "Emma Davis",
        date: "2025-01-08",
        readTime: "10 min read",
        views: "2.2k",
        likes: 178,
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
        tags: ["Mobile", "Testing", "Framework"],
        featured: false
    },
    {
        id: 5,
        title: "Cryptographic Protocol Vulnerabilities",
        excerpt: "Analysis of common cryptographic protocol weaknesses and best practices for secure implementation.",
        category: "Cryptography",
        author: "David Kim",
        date: "2025-01-05",
        readTime: "14 min read",
        views: "1.5k",
        likes: 98,
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=250&fit=crop",
        tags: ["Cryptography", "Protocols", "Security"],
        featured: false
    },
    {
        id: 6,
        title: "Social Engineering Attack Vectors",
        excerpt: "Understanding modern social engineering techniques and building organizational awareness programs.",
        category: "Social Engineering",
        author: "Lisa Wang",
        date: "2025-01-03",
        readTime: "9 min read",
        views: "2.7k",
        likes: 145,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
        tags: ["Social Engineering", "Awareness", "Training"],
        featured: false
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    renderCategories();
    renderArticles();
    initializeNewsletter();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    console.log('Searching for:', query);
                    // Implement search functionality here
                    showToast('Search functionality coming soon!');
                }
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Render categories
function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.name}">
            <div class="category-icon" style="background: ${category.color}">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.name}</h3>
            <p>${category.count} articles</p>
        </div>
    `).join('');

    // Add click handlers for categories
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            console.log('Selected category:', category);
            // Implement category filtering here
            showToast(`Exploring ${category} articles...`);
        });
    });
}

// Render articles
function renderArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    const recentGrid = document.getElementById('recentGrid');
    
    if (!articlesGrid || !recentGrid) return;

    const featuredArticles = articles.filter(article => article.featured);
    const regularArticles = articles.filter(article => !article.featured);

    // Render featured articles
    articlesGrid.innerHTML = featuredArticles.map((article, index) => `
        <article class="article-card ${index === 0 ? 'featured-main' : ''}" data-article-id="${article.id}">
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <div class="article-badge">${article.category}</div>
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="article-meta">
                    <div class="meta-left">
                        <span class="article-author">${article.author}</span>
                        <div class="meta-item">
                            <i class="far fa-calendar"></i>
                            <span>${formatDate(article.date)}</span>
                        </div>
                    </div>
                    <div class="meta-right">
                        <div class="meta-item">
                            <i class="far fa-clock"></i>
                            <span>${article.readTime}</span>
                        </div>
                        <div class="meta-item">
                            <i class="far fa-eye"></i>
                            <span>${article.views}</span>
                        </div>
                        <div class="meta-item">
                            <i class="far fa-heart"></i>
                            <span>${article.likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    // Render recent articles
    recentGrid.innerHTML = regularArticles.map(article => `
        <article class="article-card" data-article-id="${article.id}">
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <div class="article-badge">${article.category}</div>
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="article-meta">
                    <span class="article-author">${article.author}</span>
                    <div class="meta-item">
                        <i class="far fa-clock"></i>
                        <span>${article.readTime}</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    // Add click handlers for articles
    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function() {
            const articleId = this.dataset.articleId;
            const article = articles.find(a => a.id == articleId);
            if (article) {
                console.log('Opening article:', article.title);
                // Implement article opening here
                showToast(`Opening: ${article.title}`);
            }
        });
    });
}

// Newsletter functionality
function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const submitBtn = this.querySelector('button[type="submit"]');
        const email = emailInput.value.trim();

        if (!email) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            showToast('Successfully subscribed! You\'ll receive our latest cybersecurity insights weekly.', 'success');
            emailInput.value = '';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Initialize scroll animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .category-card, .article-card, .section-header').forEach(el => {
        observer.observe(el);
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    if (!toast || !toastMessage || !toastIcon) return;

    // Set message and icon based on type
    toastMessage.textContent = message;
    
    if (type === 'success') {
        toastIcon.className = 'fas fa-check-circle toast-icon';
        toast.style.background = '#10b981';
    } else if (type === 'error') {
        toastIcon.className = 'fas fa-exclamation-circle toast-icon';
        toast.style.background = '#ef4444';
    } else {
        toastIcon.className = 'fas fa-info-circle toast-icon';
        toast.style.background = '#3b82f6';
    }

    // Show toast
    toast.classList.add('show');

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle button clicks
function handleExploreArticles() {
    const articlesSection = document.querySelector('.featured-articles');
    if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleViewTools() {
    showToast('Tools section coming soon! Stay tuned for our security toolkit.', 'info');
}

// Add click handlers for hero buttons
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.querySelector('.btn-primary');
    const toolsBtn = document.querySelector('.btn-outline');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', handleExploreArticles);
    }
    
    if (toolsBtn) {
        toolsBtn.addEventListener('click', handleViewTools);
    }
});

// Handle responsive navigation
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    
    if (navMenu && mobileBtn) {
        navMenu.classList.toggle('mobile-active');
        const icon = mobileBtn.querySelector('i');
        
        if (navMenu.classList.contains('mobile-active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    
    if (navMenu && mobileBtn && navMenu.classList.contains('mobile-active')) {
        if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
            navMenu.classList.remove('mobile-active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }
});

// Performance optimizations
// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.classList.add('loading');
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Handle window resize for responsive features
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('navMenu');
        const mobileBtn = document.getElementById('mobileMenuBtn');
        
        if (navMenu && navMenu.classList.contains('mobile-active')) {
            navMenu.classList.remove('mobile-active');
            if (mobileBtn) {
                const icon = mobileBtn.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    }
});

// Preload critical resources
function preloadCriticalResources() {
    // Preload hero background images or critical assets
    const criticalImages = [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadCriticalResources);
