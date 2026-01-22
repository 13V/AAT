// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Pricing Calculator
const wasteType = document.getElementById('wasteType');
const trailerSize = document.getElementById('trailerSize');
const mattresses = document.getElementById('mattresses');
const tyresOff = document.getElementById('tyresOff');
const tyresOn = document.getElementById('tyresOn');
const trailerSizeGroup = document.getElementById('trailerSizeGroup');

function calculatePrice() {
    let basePrice = 0;
    const wasteTypeValue = wasteType.value;
    const trailerSizeValue = trailerSize.value;

    // Base price calculation
    if (wasteTypeValue === 'general') {
        if (trailerSizeValue === '4m3') {
            basePrice = 350;
        } else if (trailerSizeValue === '7m3') {
            basePrice = 480;
        }
        trailerSizeGroup.style.display = 'block';
    } else if (wasteTypeValue === 'green' || wasteTypeValue === 'solid') {
        basePrice = 300;
        trailerSizeGroup.style.display = 'none';
    }

    // Additional items
    const mattressCount = parseInt(mattresses.value) || 0;
    const tyresOffCount = parseInt(tyresOff.value) || 0;
    const tyresOnCount = parseInt(tyresOn.value) || 0;

    const mattressPrice = mattressCount * 160;
    const tyresOffPrice = tyresOffCount * 30;
    const tyresOnPrice = tyresOnCount * 50;

    const totalPrice = basePrice + mattressPrice + tyresOffPrice + tyresOnPrice;

    // Update display
    document.getElementById('basePrice').textContent = `$${basePrice}`;
    document.getElementById('totalPrice').textContent = `$${totalPrice}`;

    // Show/hide breakdown items
    const mattressLine = document.getElementById('mattressLine');
    const tyresOffLine = document.getElementById('tyresOffLine');
    const tyresOnLine = document.getElementById('tyresOnLine');

    if (mattressCount > 0) {
        mattressLine.style.display = 'flex';
        document.getElementById('mattressPrice').textContent = `$${mattressPrice}`;
    } else {
        mattressLine.style.display = 'none';
    }

    if (tyresOffCount > 0) {
        tyresOffLine.style.display = 'flex';
        document.getElementById('tyresOffPrice').textContent = `$${tyresOffPrice}`;
    } else {
        tyresOffLine.style.display = 'none';
    }

    if (tyresOnCount > 0) {
        tyresOnLine.style.display = 'flex';
        document.getElementById('tyresOnPrice').textContent = `$${tyresOnPrice}`;
    } else {
        tyresOnLine.style.display = 'none';
    }
}

// Add event listeners to calculator inputs
wasteType.addEventListener('change', calculatePrice);
trailerSize.addEventListener('change', calculatePrice);
mattresses.addEventListener('input', calculatePrice);
tyresOff.addEventListener('input', calculatePrice);
tyresOn.addEventListener('input', calculatePrice);

// Initialize calculator
calculatePrice();

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // In a real implementation, you would send this to a server
    console.log('Form submitted:', data);

    // Show success message
    alert('Thank you for your quote request! We will contact you shortly at ' + data.phone);

    // Reset form
    contactForm.reset();
});

// Floating phone button - show/hide on scroll
const floatingPhone = document.getElementById('floatingPhone');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 300) {
        floatingPhone.style.display = 'flex';
    } else {
        floatingPhone.style.display = 'none';
    }

    lastScroll = currentScroll;
});

// Initialize floating phone button
if (window.pageYOffset <= 300) {
    floatingPhone.style.display = 'none';
}
