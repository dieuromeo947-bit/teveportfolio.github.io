import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container1">
      <Helmet>
        <title>Home1 - Watchful Juicy Mouse</title>
        <meta property="og:title" content="Home1 - Watchful Juicy Mouse" />
        <link
          rel="canonical"
          href="https://watchful-juicy-mouse-o7fqn3.teleporthq.app/home1"
        />
        <meta
          property="og:url"
          content="https://watchful-juicy-mouse-o7fqn3.teleporthq.app/home1"
        />
      </Helmet>
      <section className="portfolio-hero">
        <div className="portfolio-hero__container">
          <div className="portfolio-hero__content">
            <div className="portfolio-hero__intro">
              <span className="portfolio-hero__greeting">Hi I am</span>
              <h2 className="portfolio-hero__name">Mahmood Fazile</h2>
              <h1 className="portfolio-hero__title">UI/UX designer</h1>
            </div>
            <div className="portfolio-hero__socials">
              <a href="#" className="home1-link1">
                <div
                  aria-label="Instagram"
                  className="portfolio-hero__social-btn"
                >
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
                    <rect
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                      width="20"
                      height="20"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </a>
              <a href="#" className="home1-link2">
                <div
                  aria-label="LinkedIn"
                  className="portfolio-hero__social-btn"
                >
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle r="2" cx="4" cy="4"></circle>
                  </svg>
                </div>
              </a>
              <a href="#" className="home1-link3">
                <div
                  aria-label="Dribbble"
                  className="portfolio-hero__social-btn"
                >
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.13 5.5m3.08 8.22c5.66-1.22 9.54-4.05 14.28-8.77"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="home1-link4">
                <div
                  aria-label="Behance"
                  className="portfolio-hero__social-btn"
                >
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
                    <path d="M9 12H4.5M9 6H4.5M9 18H4.5M14 12h7M14 9h7M14 15h7"></path>
                    <path d="M13 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="portfolio-hero__actions">
              <a href="#" className="home1-link5">
                <div className="portfolio-hero__btn portfolio-hero__btn--primary">
                  <span>Hire Me</span>
                </div>
              </a>
              <a href="#" className="home1-link6">
                <div className="portfolio-hero__btn portfolio-hero__btn--outline">
                  <span>Download CV</span>
                </div>
              </a>
            </div>
            <div className="portfolio-hero__stats">
              <div className="portfolio-hero__stat-item">
                <span className="portfolio-hero__stat-number">5+</span>
                <span className="portfolio-hero__stat-label">Experiences</span>
              </div>
              <div className="portfolio-hero__stat-divider"></div>
              <div className="portfolio-hero__stat-item">
                <span className="portfolio-hero__stat-number">20+</span>
                <span className="portfolio-hero__stat-label">Project done</span>
              </div>
              <div className="portfolio-hero__stat-divider"></div>
              <div className="portfolio-hero__stat-item">
                <span className="portfolio-hero__stat-number">80+</span>
                <span className="portfolio-hero__stat-label">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
          <div className="portfolio-hero__visual">
            <div className="portfolio-hero__circle-bg"></div>
            <div className="portfolio-hero__image-wrapper">
              <img
                alt="Mahmood Fazile - UI/UX Designer"
                src="https://images.pexels.com/photos/28446956/pexels-photo-28446956.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
                className="portfolio-hero__image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="home1-container2">
        <div className="home1-container3">
          <Script
            html={`<script defer data-name="portfolio-hero-logic">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".portfolio-hero")
    const image = document.querySelector(".portfolio-hero__image-wrapper")
    const circle = document.querySelector(".portfolio-hero__circle-bg")

    // Subtle Parallax Effect on Mouse Move
    heroSection.addEventListener("mousemove", (e) => {
      if (window.innerWidth > 991) {
        const mouseX = e.clientX / window.innerWidth - 0.5
        const mouseY = e.clientY / window.innerHeight - 0.5

        // Move image slightly
        image.style.transform = \`translate3d(\${mouseX * 30}px, \${mouseY * 30}px, 0)\`

        // Move circle background in opposite direction
        circle.style.transform = \`translate3d(\${-mouseX * 50}px, \${-mouseY * 50}px, 0)\`
      }
    })

    // Reveal Animation on Load
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".portfolio-hero__intro, .portfolio-hero__socials, .portfolio-hero__actions, .portfolio-hero__stats, .portfolio-hero__visual")
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = "1"
              el.style.transform = "translateY(0)"
            }, index * 200)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Initialize styles for animation
    const animElements = heroSection.querySelectorAll(".portfolio-hero__intro, .portfolio-hero__socials, .portfolio-hero__actions, .portfolio-hero__stats, .portfolio-hero__visual")
    animElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
    })

    observer.observe(heroSection)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home1-container4">
        <div className="home1-container5">
          <Script
            html={`<style>
        @keyframes pulseCircle {0%,100% {transform: scale(1);}
50% {transform: scale(1.05);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home1-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home1-icon24"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home1-text3">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home1
