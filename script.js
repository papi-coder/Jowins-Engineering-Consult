(function() {
  // ===== Navbar Toggle =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // ===== Theme Toggle =====
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // ===== Scroll To Top =====
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // ===== Spark Effect + Sound =====
  const clickSound = new Audio('click.mp3');
  document.addEventListener('click', (e) => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {}); // prevent autoplay block

    const spark = document.createElement('span');
    spark.classList.add('spark');
    spark.style.left = `${e.pageX}px`;
    spark.style.top = `${e.pageY}px`;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 700);
  });

  // Inject spark CSS
  const sparkStyle = document.createElement('style');
  sparkStyle.innerHTML = `
  .spark {
    position: absolute;
    width: 8px;
    height: 8px;
    background: radial-gradient(circle, #ffb300, transparent);
    border-radius: 50%;
    pointer-events: none;
    animation: spark-anim 0.7s ease-out;
  }
  @keyframes spark-anim {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(5); opacity: 0; }
  }`;
  document.head.appendChild(sparkStyle);

  // ===== Scroll Reveal =====
  const revealElements = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', () => {
    for (let el of revealElements) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  });
})();
// ===========================
// Animated Counter
// ===========================
const counters = document.querySelectorAll('.count');
let started = false;

window.addEventListener('scroll', () => {
  const sectionTop = document.querySelector('.stats').offsetTop;
  if (window.scrollY + window.innerHeight >= sectionTop && !started) {
    started = true;
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 30;
        if (count < target) {
          counter.innerText = count + Math.ceil((target - count) / speed);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
});
// ===========================
// Testimonial Auto-Slider
// ===========================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 5000); // change every 5 seconds
// ===========================
// GALLERY FILTER & LIGHTBOX
// ===========================

// Filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');

    galleryItems.forEach(item => {
      item.style.display =
        category === 'all' || item.getAttribute('data-category') === category
          ? 'block'
          : 'none';
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.querySelector('img').src;
    lightbox.style.display = 'flex';
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
// Fade-in on scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fadeSections.forEach(section => observer.observe(section));
});
// Toggle mobile nav menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Fade-in sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

// Dark/light theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeToggle.textContent = document.body.classList.contains("light-theme") ? "🌞" : "🌙";
});
