import React from 'react'

import Script from 'dangerous-html/react'

import './live-game-stats.css'

const LiveGameStats = (props) => {
  return (
    <div className="live-game-stats-container1">
      <section className="live-game-stats-container">
        <div className="live-game-stats-glow-orb"></div>
        <div className="live-game-stats-wrapper">
          <h2 className="live-game-stats-title">Live Game Stats</h2>
          <div className="live-game-stats-card">
            <div className="live-game-stats-grid">
              <div className="live-game-stats-item">
                <div className="live-game-stats-value">
                  <span>1.2M</span>
                </div>
                <div className="live-game-stats-label">
                  <span>Total Visits</span>
                </div>
                <div className="live-game-stats-progress-bar">
                  <div className="live-game-stats-thq-live-game-stats-progress-fill-elm live-game-stats-progress-fill"></div>
                </div>
              </div>
              <div className="live-game-stats-item">
                <div className="live-game-stats-value">
                  <span>847</span>
                </div>
                <div className="live-game-stats-label">
                  <span>Current CCU</span>
                </div>
                <div className="live-game-stats-pulse-container">
                  <span className="live-game-stats-pulse-dot"></span>
                  <span className="live-game-stats-pulse-text">Live Now</span>
                </div>
              </div>
            </div>
            <form
              onsubmit="return false;"
              data-form-id="0e3c7c1c-f9c0-4e19-b926-386806597083"
              className="live-game-stats-form"
            >
              <div className="live-game-stats-input-group">
                <input
                  type="text"
                  id="thq_textinput_30sT"
                  name="textinput"
                  aria-label="Roblox game link or ID"
                  placeholder="Paste your Roblox game link or ID here"
                  data-form-field-id="thq_textinput_30sT"
                  className="live-game-stats-input"
                />
                <div className="live-game-stats-input-focus-border"></div>
              </div>
              <button
                id="thq_button_c5VU"
                name="button"
                type="submit"
                data-form-field-id="thq_button_c5VU"
                className="live-game-stats-button"
              >
                <span>Connect Game</span>
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
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </form>
            <p className="live-game-stats-disclaimer">
              Live stats require a backend proxy. Roblox API restricts direct
              browser calls.
            </p>
          </div>
        </div>
      </section>
      <div className="live-game-stats-container2">
        <div className="live-game-stats-container3">
          <Script
            html={`<script defer data-name="live-game-stats-handler">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".live-game-stats-form")
    const input = document.querySelector(".live-game-stats-input")
    const button = document.querySelector(".live-game-stats-button")

    if (form && input && button) {
      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const val = input.value.trim()
        if (!val) {
          input.style.borderColor = "#ef4444"
          setTimeout(() => {
            input.style.borderColor = ""
          }, 2000)
          return
        }

        // Visual feedback for interaction
        const originalContent = button.innerHTML
        button.disabled = true
        button.innerHTML = "<span>Connecting...</span>"
        button.style.opacity = "0.7"

        // Simulate connection delay
        setTimeout(() => {
          button.innerHTML = "<span>Success!</span>"
          button.style.backgroundColor = "#10b981"

          setTimeout(() => {
            button.innerHTML = originalContent
            button.disabled = false
            button.style.backgroundColor = ""
            button.style.opacity = ""
            input.value = ""
          }, 2000)
        }, 1500)
      })

      // Subtle 3D tilt effect on card
      const card = document.querySelector(".live-game-stats-card")
      if (window.innerWidth > 991) {
        document.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const xc = rect.width / 2
            const yc = rect.height / 2
            const dx = x - xc
            const dy = y - yc

            card.style.transform = \`perspective(1000px) rotateX(\${dy / -20}deg) rotateY(\${dx / 20}deg) translateY(-8px)\`
          } else {
            card.style.transform = ""
          }
        })
      }
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="live-game-stats-container4">
        <div className="live-game-stats-container5">
          <Script
            html={`<style>
        @keyframes live-stats-pulse {0% {transform: scale(1);
opacity: 0.8;}
100% {transform: scale(2.5);
opacity: 0;}}@keyframes live-stats-slide {from {transform: translateX(-100%);}
to {transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default LiveGameStats
