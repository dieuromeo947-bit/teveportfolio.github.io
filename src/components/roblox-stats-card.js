import React from 'react'

import Script from 'dangerous-html/react'

import './roblox-stats-card.css'

const RobloxStatsCard = (props) => {
  return (
    <div className="roblox-stats-card-container1">
      <section className="roblox-stats-card">
        <div className="roblox-stats-card__container">
          <div className="roblox-stats-card__panel">
            <div className="roblox-stats-card__glow"></div>
            <header className="roblox-stats-card__header">
              <div className="roblox-stats-card__icon-wrapper">
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
                  <path d="M6 11h4M8 9v4m7-1h.01M18 10h.01m-.69-5H6.68a4 4 0 0 0-3.978 3.59l-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258q-.01-.075-.017-.151A4 4 0 0 0 17.32 5"></path>
                </svg>
              </div>
              <h2 className="roblox-stats-card__title">Live Game Analytics</h2>
            </header>
            <div className="roblox-stats-card__grid">
              <div className="roblox-stats-card__stat-item">
                <span className="roblox-stats-card__stat-label">
                  Total Visits
                </span>
                <div
                  id="stats-visits"
                  className="roblox-stats-card__stat-value"
                >
                  <span>1.2M visits</span>
                </div>
                <div className="roblox-stats-card__stat-progress"></div>
              </div>
              <div className="roblox-stats-card__stat-item">
                <span className="roblox-stats-card__stat-label">
                  Current CCU
                </span>
                <div id="stats-ccu" className="roblox-stats-card__stat-value">
                  <span>847 CCU</span>
                </div>
                <div className="roblox-stats-card__stat-indicator">
                  <span className="roblox-stats-card__pulse"></span>
                  <span>
                    {' '}
                    Live Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="roblox-stats-card__action-area">
              <div className="roblox-stats-card__input-group">
                <label
                  htmlFor="roblox-game-id"
                  className="roblox-stats-card__input-label"
                >
                  Connect Your Experience
                </label>
                <div className="roblox-stats-card__input-wrapper">
                  <input
                    type="text"
                    id="roblox-game-id"
                    aria-label="Roblox game link or ID"
                    placeholder="Paste your Roblox game link or ID here"
                    className="roblox-stats-card__input"
                  />
                  <button
                    id="update-stats-btn"
                    className="roblox-stats-card__btn"
                  >
                    <span>Update Stats</span>
                  </button>
                </div>
              </div>
              <p className="roblox-stats-card__disclaimer">
                <svg
                  fill="none"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <line x1="12" x2="12" y1="16" y2="12"></line>
                  <line x1="12" x2="12.01" y1="8" y2="8"></line>
                </svg>
                <span>
                  {' '}
                  Note: live stats require a backend proxy due to Roblox API
                  restrictions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="roblox-stats-card__footer-btn">
              <button className="roblox-stats-card__btn roblox-stats-card__btn--outline">
                Connect Game
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="roblox-stats-card-container2">
        <div className="roblox-stats-card-container3">
          <Script
            html={`<script defer data-name="roblox-stats-card-logic">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const updateBtn = document.getElementById("update-stats-btn")
    const inputField = document.getElementById("roblox-game-id")
    const visitsDisplay = document.getElementById("stats-visits")
    const ccuDisplay = document.getElementById("stats-ccu")

    // Simple animation for the stats update
    const animateValue = (element, start, end, duration, suffix = "") => {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const currentVal = Math.floor(progress * (end - start) + start)
        element.innerHTML = currentVal.toLocaleString() + suffix
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }

    updateBtn.addEventListener("click", () => {
      const value = inputField.value.trim()

      if (!value) {
        inputField.style.borderColor = "#ef4444"
        setTimeout(() => (inputField.style.borderColor = ""), 2000)
        return
      }

      // Visual feedback for "updating"
      updateBtn.innerText = "Syncing..."
      updateBtn.disabled = true
      updateBtn.style.opacity = "0.7"

      setTimeout(() => {
        // Simulation of fetching new data
        // In a real scenario, this would call a backend proxy
        const randomVisits = (Math.random() * 5 + 1).toFixed(1)
        const randomCCU = Math.floor(Math.random() * 2000 + 500)

        visitsDisplay.style.opacity = "0.5"
        ccuDisplay.style.opacity = "0.5"

        setTimeout(() => {
          visitsDisplay.innerHTML = \`\${randomVisits}M visits\`
          ccuDisplay.innerHTML = \`\${randomCCU} CCU\`
          visitsDisplay.style.opacity = "1"
          ccuDisplay.style.opacity = "1"

          updateBtn.innerText = "Update Stats"
          updateBtn.disabled = false
          updateBtn.style.opacity = "1"
        }, 400)
      }, 1200)
    })

    // Add subtle mouse move effect to the panel
    const panel = document.querySelector(".roblox-stats-card__panel")
    panel.addEventListener("mousemove", (e) => {
      const rect = panel.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 30
      const rotateY = (centerX - x) / 30

      panel.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`
    })

    panel.addEventListener("mouseleave", () => {
      panel.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="roblox-stats-card-container4">
        <div className="roblox-stats-card-container5">
          <Script
            html={`<style>
        @keyframes rotateGlow {from {transform: rotate(0deg);}
to {transform: rotate(360deg);}}@keyframes pulseStat {0% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);}
70% {transform: scale(1);
box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);}
100% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);}}
        </style> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default RobloxStatsCard
