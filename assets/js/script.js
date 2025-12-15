  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
    menuBtn.classList.toggle("active");
    // Prevent body scroll when menu is open
    if (!mobileMenu.classList.contains("hidden")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  menuBtn.addEventListener("click", toggleMobileMenu);
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  // Close menu when clicking on a mobile link
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      if (!mobileMenu.classList.contains("hidden")) {
        toggleMobileMenu();
      }
    });
  });

  // Smooth scroll function
 function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Wait for next animation frame to ensure element is visible
  requestAnimationFrame(() => {
    const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth"
    });
  });

  // Close mobile menu if open
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    if (menuBtn) menuBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
}


  // Attach smooth scroll to all nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // Prevent default jump
      const href = link.getAttribute("href").substring(1);
      smoothScroll(href);
    });
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); 
      const href = link.getAttribute("href").substring(1);
      smoothScroll(href);
    });
  });


  // FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector("span.text-xl");
    answer.classList.toggle("hidden");

    // Change + to -
    if (answer.classList.contains("hidden")) {
      icon.textContent = "+";
    } else {
      icon.textContent = "-";
    }
  });
});


// Smooth scroll for "Learn More" button
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href").substring(1);
    smoothScroll(href);
  });
});









document.addEventListener("DOMContentLoaded", function () {
  const swiperEl = document.querySelector(".heroSwiper");
  const nextBtn = document.querySelector(".hero-nav-next");
  const prevBtn = document.querySelector(".hero-nav-prev");
  
  if (swiperEl && nextBtn && prevBtn) {
    var swiper = new Swiper(".heroSwiper", {
      loop: true,
      speed: 900,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      autoplay: false, // Manual sliding only
    });
    
    // Verify navigation is working
    console.log("Swiper initialized with navigation buttons");
  } else {
    console.error("Swiper elements not found", { swiperEl, nextBtn, prevBtn });
  }
});


