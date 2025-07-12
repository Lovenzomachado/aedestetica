// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const hamburgerLines = document.querySelectorAll(".hamburger-line")

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.style.display === "block"

  if (isOpen) {
    mobileMenu.style.display = "none"
    hamburgerLines.forEach((line) => {
      line.style.transform = ""
    })
  } else {
    mobileMenu.style.display = "block"
    hamburgerLines[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    hamburgerLines[1].style.opacity = "0"
    hamburgerLines[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  }
})

// Smooth Scroll for Navigation Links
function smoothScroll(target) {
  const element = document.querySelector(target)
  if (element) {
    const headerHeight = 80
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

// Add smooth scroll to all navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const target = link.getAttribute("href")
    smoothScroll(target)

    // Close mobile menu if open
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none"
      hamburgerLines.forEach((line) => {
        line.style.transform = ""
      })
      hamburgerLines[1].style.opacity = "1"
    }
  })
})

// Header Background on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".service-card, .testimonial-card, .gallery-item")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Gallery Item Click Handler
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Add click functionality here (e.g., open lightbox)
    console.log("Gallery item clicked")
  })
})

// Contact Form Handler (if you add a form later)
function handleContactForm(event) {
  event.preventDefault()
  // Add form submission logic here
  console.log("Contact form submitted")
}

// Button Click Handlers
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!btn.getAttribute("href")) {
      e.preventDefault()
      // Add booking functionality here
      alert("Funcionalidade de agendamento será implementada em breve!")
    }
  })
})

// Parallax Effect for Hero Background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".blob")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Loading Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
  document.body.style.transition = "opacity 0.5s ease"
})

// Add loading state to body
document.body.style.opacity = "0"
