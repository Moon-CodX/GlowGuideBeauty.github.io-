// Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('show');
        });

        // Newsletter Form
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! Check your inbox for our welcome gift.`);
            this.reset();
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
<script>
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
        const closeMobileNav = document.querySelector('.close-mobile-nav');

        mobileMenuBtn.addEventListener('click', () => {
          mobileNavOverlay.style.display = 'block';
        });

        closeMobileNav.addEventListener('click', () => {
          mobileNavOverlay.style.display = 'none';
        });

        mobileNavOverlay.addEventListener('click', (e) => {
          if (e.target === mobileNavOverlay) {
            mobileNavOverlay.style.display = 'none';
          }
        });