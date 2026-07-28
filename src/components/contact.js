import React from 'react'

import Script from 'dangerous-html/react'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container1">
      <section id="contact" className="contact-section">
        <div className="contact-background-glow"></div>
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-content-wrapper">
              <div className="contact-header">
                <span className="contact-badge">Get in Touch</span>
                <h2 className="contact-title">
                  <span>
                    {' '}
                    Let&apos;s build something
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="contact-thq-contact-title-accent-elm">
                    extraordinary
                  </span>
                  <span>
                    {' '}
                    together.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h2>
                <p className="contact-description">
                  Have a project in mind or just want to chat about the latest
                  in tech? Drop me a message and I&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Call me</span>
                    <span className="contact-info-value">
                      +1 (555) 000-0000
                    </span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Email me</span>
                    <span className="contact-info-value">
                      hello@portfolio.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form
                id="portfolioContactForm"
                data-form-id="42136004-43cb-4534-867f-6f13d63f6ba8"
                className="contact-form"
              >
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-label">
                    Full Name
                  </label>
                  <div className="contact-input-container">
                    <input
                      type="text"
                      id="name"
                      name="true"
                      required
                      placeholder="John Doe"
                      data-form-field-id="name"
                      className="contact-input"
                    />
                    <div className="contact-input-focus-border"></div>
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-label">
                    Email Address
                  </label>
                  <div className="contact-input-container">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      data-form-field-id="email"
                      className="contact-input"
                    />
                    <div className="contact-input-focus-border"></div>
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-label">
                    Your Message
                  </label>
                  <div className="contact-input-container">
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      data-form-field-id="message"
                      className="contact-textarea"
                    ></textarea>
                    <div className="contact-input-focus-border"></div>
                  </div>
                </div>
                <button
                  id="contactSubmitBtn"
                  name="button"
                  type="submit"
                  data-form-field-id="contactSubmitBtn"
                  className="contact-submit-btn"
                >
                  <span className="contact-btn-text">Send Message</span>
                  <span className="contact-btn-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </span>
                  <div className="contact-thq-contact-btn-glow-elm"></div>
                </button>
                <div
                  id="contactStatus"
                  className="contact-status-message"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-container2">
        <div className="contact-container3">
          <Script
            html={`<script defer data-name="contact-form-handler">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("portfolioContactForm")
    const statusMessage = document.getElementById("contactStatus")
    const submitBtn = document.getElementById("contactSubmitBtn")
    const btnText = submitBtn.querySelector(".contact-btn-text")

    if (contactForm) {
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        // Visual feedback: Loading state
        const originalText = btnText.textContent
        btnText.textContent = "Sending..."
        submitBtn.disabled = true
        submitBtn.style.opacity = "0.7"
        submitBtn.style.cursor = "not-allowed"

        // Simulate API Call
        try {
          const formData = new FormData(contactForm)
          const data = Object.fromEntries(formData.entries())

          // Simulate network delay
          await new Promise((resolve) => setTimeout(resolve, 1500))

          // Success Logic
          statusMessage.textContent = "Message sent successfully! I will get back to you soon."
          statusMessage.className = "contact-status-message visible contact-status-success"
          contactForm.reset()

          // Reset button
          btnText.textContent = originalText
          submitBtn.disabled = false
          submitBtn.style.opacity = "1"
          submitBtn.style.cursor = "pointer"

          // Clear status after 5 seconds
          setTimeout(() => {
            statusMessage.classList.remove("visible")
          }, 5000)
        } catch (error) {
          // Error Logic
          statusMessage.textContent = "Oops! Something went wrong. Please try again."
          statusMessage.className = "contact-status-message visible contact-status-error"

          btnText.textContent = originalText
          submitBtn.disabled = false
          submitBtn.style.opacity = "1"
          submitBtn.style.cursor = "pointer"
        }
      })
    }

    // Input interaction effects
    const inputs = document.querySelectorAll(".contact-input, .contact-textarea")
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.parentElement.querySelector(".contact-label").style.color = "var(--portfolio-accent)"
      })

      input.addEventListener("blur", () => {
        if (!input.value) {
          input.parentElement.parentElement.querySelector(".contact-label").style.color = "var(--portfolio-text-muted)"
        }
      })
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Contact
