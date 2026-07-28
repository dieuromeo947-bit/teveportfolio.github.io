import React from 'react'

import Script from 'dangerous-html/react'

import './social-links.css'

const SocialLinks = (props) => {
  return (
    <div className="social-links-container1">
      <section className="social-links">
        <div className="social-links__container">
          <a href="#" className="social-links-link1">
            <div
              aria-label="Join our Telegram"
              className="social-links__button social-links__button--telegram"
            >
              <span className="social-links__icon">
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
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </span>
              <span className="social-links__text">Telegram</span>
              <span className="social-links__glint"></span>
            </div>
          </a>
          <a href="#" className="social-links-link2">
            <div
              aria-label="Join our Discord"
              className="social-links__button--discord social-links__button"
            >
              <span className="social-links__icon">
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
                  <circle r="1" cx="9" cy="12"></circle>
                  <circle r="1" cx="15" cy="12"></circle>
                  <path d="M7.5 7.1c2.1-.7 4.9-.7 7 0"></path>
                  <path d="M7.1 13.1c.4 2.1 1.7 3.9 3.4 5.1"></path>
                  <path d="M13.5 18.2c1.7-1.2 3-3 3.4-5.1"></path>
                  <path d="M16.9 7.1c1.3.8 2.1 2.2 2.1 3.7v2c0 2-1.6 3.6-3.6 3.6h-6.8C6.6 16.4 5 14.8 5 12.8v-2c0-1.5.8-2.9 2.1-3.7"></path>
                </svg>
              </span>
              <span className="social-links__text">Discord</span>
              <span className="social-links__glint"></span>
            </div>
          </a>
        </div>
      </section>
      <div className="social-links-container2">
        <div className="social-links-container3">
          <Script
            html={`<script defer data-name="social-links-interaction">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".social-links__button")

    buttons.forEach((button) => {
      button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        button.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) translateY(-4px)\`
      })

      button.addEventListener("mouseleave", () => {
        button.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
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

export default SocialLinks
