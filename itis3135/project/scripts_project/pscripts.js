document.addEventListener("DOMContentLoaded", () => {
    const accButtons = document.querySelectorAll(".accordion-btn");
    accButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const panel = btn.nextElementSibling;
        const isOpen = panel.style.display === "block";
        
        
        document.querySelectorAll(".accordion-panel").forEach(p => p.style.display = "none");
  
        
        if (!isOpen) {
          panel.style.display = "block";
        }
      });
    });
  });

  
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const response = document.getElementById("formResponse");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        if (!name || !email || !message) {
          response.textContent = "Please fill in all fields.";
          response.style.color = "red";
          return;
        }
  
        // Simulate success
        response.textContent = `Thanks, ${name}! Your message has been sent.`;
        response.style.color = "green";
        contactForm.reset();
      });
    }
  });
  
  