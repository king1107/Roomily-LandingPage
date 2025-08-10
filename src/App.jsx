import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.png';
import heroImage from './assets/images/home1.png';
import transportIcon from './assets/images/transport.png';
import findFriendIcon from './assets/images/findFriend.png';
import convenientIcon from './assets/images/convenient.png';
import room1 from './assets/images/image1.png';
import room2 from './assets/images/image2.png';
import room3 from './assets/images/image3.png';
import room4 from './assets/images/image4.png';
import room5 from './assets/images/image5.png';
import room6 from './assets/images/image6.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app">
      {/* Floating Background Elements */}
      <div className="floating-bg">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-header">
            <div className="mobile-logo">
              <img src={logo} alt="Roomily" />
              <span>Roomily</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="close-btn">
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className="mobile-nav">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#rooms" onClick={() => setIsMobileMenuOpen(false)}>Rooms</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <button className="cta-btn mobile-cta">Get Started</button>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Roomily" />
              <span className="logo-text">Roomily</span>
            </div>
            <nav className="nav">
              <a href="#home" className="nav-link">Home</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#rooms" className="nav-link">Rooms</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="cta-btn">Get Started</button>
            </nav>
            <button onClick={toggleMobileMenu} className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className={`hero-text ${isVisible.home ? 'animate-in' : ''}`}>
              <div className="hero-badge">
                <span className="badge-icon">✨</span>
                <span>Revolutionizing Room Rentals</span>
              </div>
              <h1 className="hero-title">
                Find Your 
                <span className="gradient-text"> Dream Room</span>
                <br />In Minutes
              </h1>
              <p className="hero-description">
                Discover perfect living spaces tailored to your lifestyle, budget, and preferences. 
                Experience the future of room hunting with AI-powered matching.
              </p>
              <div className="hero-actions">
                <button className="primary-btn">
                  <span>Start Exploring</span>
                  <div className="btn-icon">→</div>
                </button>
                <button className="secondary-btn">
                  <div className="play-icon">▶</div>
                  <span>Watch Demo</span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Happy Renters</div>
                </div>
                <div className="stat">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Quality Rooms</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className={`hero-visual ${isVisible.home ? 'animate-in' : ''}`}>
              <div className="hero-image-container">
                <img src={heroImage} alt="Dream Room" className="hero-image" />
                <div className="floating-card card-1">
                  <div className="card-icon">🏠</div>
                  <div className="card-content">
                    <div className="card-title">Modern Studio</div>
                    <div className="card-price">$850/mo</div>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">⭐</div>
                  <div className="card-content">
                    <div className="card-title">4.9 Rating</div>
                    <div className="card-subtitle">Top Rated</div>
                  </div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">📍</div>
                  <div className="card-content">
                    <div className="card-title">City Center</div>
                    <div className="card-subtitle">Prime Location</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className={`section-header ${isVisible.services ? 'animate-in' : ''}`}>
            <div className="section-badge">Our Services</div>
            <h2 className="section-title">Everything You Need for Perfect Living</h2>
            <p className="section-description">
              From finding your ideal room to moving in seamlessly, we've got you covered
            </p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: transportIcon,
                title: "Smart Moving",
                description: "Professional moving services with real-time tracking and insurance coverage",
                color: "blue"
              },
              {
                icon: findFriendIcon,
                title: "Roommate Matching",
                description: "AI-powered compatibility matching to find your perfect living companion",
                color: "purple"
              },
              {
                icon: convenientIcon,
                title: "Lifestyle Assistant",
                description: "Discover nearby amenities, services, and community connections",
                color: "green"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${service.color} ${isVisible.services ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-btn">
                  <span>Learn More</span>
                  <div className="btn-arrow">→</div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="rooms">
        <div className="container">
          <div className={`section-header ${isVisible.rooms ? 'animate-in' : ''}`}>
            <div className="section-badge">Featured Rooms</div>
            <h2 className="section-title">Handpicked Premium Spaces</h2>
            <p className="section-description">
              Curated collection of the most sought-after rooms in prime locations
            </p>
          </div>
          <div className="rooms-grid">
            {[
              { image: room1, title: "Modern Downtown Loft", price: "2.5M VND", location: "District 1, HCMC", rating: "4.9", reviews: "124" },
              { image: room2, title: "Cozy Studio Apartment", price: "1.8M VND", location: "Cau Giay, Hanoi", rating: "4.8", reviews: "89" },
              { image: room3, title: "Luxury Penthouse", price: "4.2M VND", location: "Ba Dinh, Hanoi", rating: "5.0", reviews: "56" },
              { image: room4, title: "Minimalist Haven", price: "2.1M VND", location: "District 3, HCMC", rating: "4.7", reviews: "203" },
              { image: room5, title: "Artistic Space", price: "1.9M VND", location: "Tay Ho, Hanoi", rating: "4.9", reviews: "167" },
              { image: room6, title: "Urban Sanctuary", price: "2.8M VND", location: "District 2, HCMC", rating: "4.8", reviews: "142" }
            ].map((room, index) => (
              <div 
                key={index} 
                className={`room-card ${isVisible.rooms ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="room-image">
                  <img src={room.image} alt={room.title} />
                  <div className="room-overlay">
                    <button className="quick-view">Quick View</button>
                    <button className="favorite">♡</button>
                  </div>
                </div>
                <div className="room-info">
                  <div className="room-header">
                    <h3 className="room-title">{room.title}</h3>
                    <div className="room-price">{room.price}</div>
                  </div>
                  <div className="room-location">📍 {room.location}</div>
                  <div className="room-footer">
                    <div className="room-rating">
                      <span className="star">⭐</span>
                      <span>{room.rating}</span>
                      <span className="reviews">({room.reviews})</span>
                    </div>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className={`cta-content ${isVisible.rooms ? 'animate-in' : ''}`}>
            <h2 className="cta-title">Ready to Find Your Perfect Room?</h2>
            <p className="cta-description">
              Join thousands of happy renters who found their dream homes with Roomily
            </p>
            <div className="cta-actions">
              <button className="primary-btn large">
                <span>Start Your Journey</span>
                <div className="btn-icon">✨</div>
              </button>
              <div className="cta-features">
                <div className="feature">✓ Instant Matching</div>
                <div className="feature">✓ Zero Commission</div>
                <div className="feature">✓ 24/7 Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Roomily" />
                <span>Roomily</span>
              </div>
              <p className="footer-description">
                Transforming the way people find and rent their perfect living spaces.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Platform</h4>
                <a href="#">How it Works</a>
                <a href="#">Pricing</a>
                <a href="#">Features</a>
                <a href="#">Success Stories</a>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">Safety Guide</a>
                <a href="#">Community</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Legal</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Roomily. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fab">
        <span className="fab-icon">💬</span>
        <span className="fab-text">Help</span>
      </button>
    </div>
  );
}

export default App;

