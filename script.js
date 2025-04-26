// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a nav link
  const links = document.querySelectorAll(".nav-links a")
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "0.7rem 0"
      header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.padding = "1rem 0"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  })

  // Skill bars animation
  const skillBars = document.querySelectorAll(".skill-progress")

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Function to animate skill bars when in viewport
  function animateSkillBars() {
    skillBars.forEach((bar) => {
      if (isInViewport(bar)) {
        bar.style.width = bar.style.width || bar.getAttribute("style").split("width:")[1].trim()
      }
    })
  }

  // Initial check and add scroll event listener
  animateSkillBars()
  window.addEventListener("scroll", animateSkillBars)

  // Form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`)

      // Reset form
      contactForm.reset()
    })
  }
})
