document.addEventListener("DOMContentLoaded", () => {
  /*** ACCORDION (services.html) ***/
  document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      
      document.querySelectorAll(".accordion-panel")
        .forEach(p => p.style.display = "none");
      
      const panel = btn.nextElementSibling;
      if (panel.style.display !== "block") {
        panel.style.display = "block";
      }
    });
  });

  
  const slides = [
    "images_project/image1.JPG",
    "images_project/image2.JPG",
    "images_project/image3.JPG",
    "images_project/image4.JPG"
  ];
  let current = 0;
  const imgEl = document.getElementById("slideshow-image");
  const showSlide = idx => {
    current = (idx + slides.length) % slides.length;
    imgEl.src = slides[current];
  };
  document.getElementById("prevBtn")
    .addEventListener("click", () => showSlide(current - 1));
  document.getElementById("nextBtn")
    .addEventListener("click", () => showSlide(current + 1));
  // auto-advance every 5s
  setInterval(() => showSlide(current + 1), 5000);

  /*** LIGHTBOX (gallery.html) ***/
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.querySelector(".lightbox-img");
  const lbClose = document.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lbImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });
  lbClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });

  
  const contactForm = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        response.textContent = "Please fill in all fields.";
        response.style.color = "red";
      } else {
        response.textContent = `Thanks, ${name}! Your message has been sent.`;
        response.style.color = "green";
        contactForm.reset();
      }
    });
  }
});

  
  