import React from 'react'

import Script from 'dangerous-html/react'

import './skills.css'

const Skills = (props) => {
  return (
    <div className="skills-container1">
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-title-underline"></div>
          </div>
          <div className="skills-grid">
            <div data-skill="lua" className="skills-pill">
              <span className="skills-icon">
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
                  <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"></path>
                </svg>
              </span>
              <span className="skills-name">Lua Scripting</span>
            </div>
            <div data-skill="studio" className="skills-pill">
              <span className="skills-icon">
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
                  <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  <path d="m10 9-3 3 3 3m4 0 3-3-3-3"></path>
                </svg>
              </span>
              <span className="skills-name">Roblox Studio</span>
            </div>
            <div data-skill="ui" className="skills-pill">
              <span className="skills-icon">
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
                  <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  <path d="M3 9h18M9 21V9"></path>
                </svg>
              </span>
              <span className="skills-name">UI Design</span>
            </div>
            <div data-skill="systems" className="skills-pill">
              <span className="skills-icon">
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
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </span>
              <span className="skills-name">Game Systems</span>
            </div>
            <div data-skill="data" className="skills-pill">
              <span className="skills-icon">
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
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
              </span>
              <span className="skills-name">DataStores</span>
            </div>
            <div data-skill="remote" className="skills-pill">
              <span className="skills-icon">
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
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </span>
              <span className="skills-name">Remote Events</span>
            </div>
            <div data-skill="module" className="skills-pill">
              <span className="skills-icon">
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
                  <path d="M12 3v18M3 12h18M12 8l8 4-8 4-8-4 8-4z"></path>
                </svg>
              </span>
              <span className="skills-name">Module Scripts</span>
            </div>
            <div data-skill="anim" className="skills-pill">
              <span className="skills-icon">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="M8 11h8M12 7v8"></path>
                </svg>
              </span>
              <span className="skills-name">Animation</span>
            </div>
            <div data-skill="phys" className="skills-pill">
              <span className="skills-icon">
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
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"></path>
                </svg>
              </span>
              <span className="skills-name">Physics</span>
            </div>
            <div data-skill="opti" className="skills-pill">
              <span className="skills-icon">
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </span>
              <span className="skills-name">Performance Optimization</span>
            </div>
          </div>
        </div>
        <div className="skills-bg-glow"></div>
      </section>
      <div className="skills-container2">
        <div className="skills-container3">
          <Script
            html={`<script defer data-name="skills-interaction">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const pills = document.querySelectorAll(".skills-pill")

    // Subtle magnetic effect for pills
    pills.forEach((pill) => {
      pill.addEventListener("mousemove", (e) => {
        const rect = pill.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const deltaX = (x - centerX) / 10
        const deltaY = (y - centerY) / 5

        pill.style.transform = \`translate(\${deltaX}px, \${deltaY - 5}px) scale(1.02)\`
      })

      pill.addEventListener("mouseleave", () => {
        pill.style.transform = ""
      })
    })

    // Intersection Observer for scroll animation reset if needed
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
        }
      })
    }, observerOptions)

    pills.forEach((pill) => observer.observe(pill))
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="skills-container4">
        <div className="skills-container5">
          <Script
            html={`<style>
        @keyframes skillsFadeIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Skills
