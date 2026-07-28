import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div id="page-container" className="home-container10">
      <Helmet>
        <title>Watchful Juicy Mouse</title>
        <meta property="og:title" content="Watchful Juicy Mouse" />
        <link
          rel="canonical"
          href="https://watchful-juicy-mouse-o7fqn3.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://watchful-juicy-mouse-o7fqn3.teleporthq.app/"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="home-thq-navbar-interactive-elm">
        <div
          data-thq="thq-navbar-nav"
          className="home-thq-desktop-menu-elm thq-desktop-menu-elm"
        >
          <nav className="home-thq-links-elm1">
            <a href="#home" className="home-link10 text10">
              Home
            </a>
            <a href="#portfolio" className="home-link11 text11">
              Projects
            </a>
            <a href="#about" className="home-link12 text12">
              About
            </a>
            <a href="#skills" className="home-link13 text13">
              Skills
            </a>
            <a href="#contact" className="home-link14 text14">
              Contact
            </a>
          </nav>
          <div className="home-thq-buttons-elm1">
            <a
              href="#contact"
              className="home-thq-register-elm thq-register-elm1 button"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          data-action="toggle-menu"
          className="home-thq-burger-menu-elm thq-burger-menu-elm"
        >
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          data-state="closed"
          className="thq-mobile-menu-elm"
        >
          <div className="home-thq-nav-elm">
            <div className="home-thq-top-elm">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-thq-logo-elm"
              />
              <div
                data-thq="thq-close-menu"
                data-action="close-menu"
                className="home-thq-close-menu-elm"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="thq-links-elm2">
              <a href="#home" className="home-link15">
                Home
              </a>
              <a href="#portfolio" className="home-link16">
                Projects
              </a>
              <a href="#about" className="home-link17">
                About
              </a>
              <a href="#skills" className="home-link18">
                Skills
              </a>
              <a href="#contact" className="home-link19">
                Contact
              </a>
            </nav>
            <div className="home-thq-buttons-elm2">
              <a
                href="#contact"
                className="home-thq-login-elm thq-register-elm1 button"
              >
                Hire Me
              </a>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<div class="language-switcher"><button class="language-switcher__toggle" aria-expanded="false" aria-haspopup="listbox"><span class="language-switcher__current">EN</span><svg class="language-switcher__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><ul class="language-switcher__dropdown" role="listbox"><li class="language-switcher__item" role="option" data-lang="en"><span class="language-switcher__flag">🇺🇸</span><span class="language-switcher__label">English</span></li><li class="language-switcher__item" role="option" data-lang="es"><span class="language-switcher__flag">🇪🇸</span><span class="language-switcher__label">Español</span></li><li class="language-switcher__item" role="option" data-lang="fr"><span class="language-switcher__flag">🇫🇷</span><span class="language-switcher__label">Français</span></li><li class="language-switcher__item" role="option" data-lang="de"><span class="language-switcher__flag">🇩🇪</span><span class="language-switcher__label">Deutsch</span></li></ul></div>`}
          ></Script>
        </div>
      </div>
      <section id="home" className="home-thq-portfolio-hero-elm portfolio-hero">
        <div className="portfolio-hero__container">
          <div className="portfolio-hero__content">
            <div className="portfolio-hero__intro">
              <span className="portfolio-hero__greeting">Hi, I&apos;m</span>
              <h2 className="portfolio-hero__name">Teve</h2>
              <h1 className="home-thq-portfolio-herotitle-elm portfolio-hero__title">
                Roblox Scripter &amp; Game Developer
              </h1>
            </div>
            <div className="portfolio-hero__socials">
              <a href="#" className="home-link20">
                <div aria-label="GitHub" className="portfolio-hero__social-btn">
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
                    <path
                      d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="home-link21">
                <div
                  aria-label="Discord"
                  className="portfolio-hero__social-btn"
                >
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="home-link22">
                <div
                  aria-label="Telegram"
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
                    <path d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="portfolio-hero__actions">
              <a href="#contact" className="home-link23">
                <div className="home-thq-portfolio-herobtn-elm1 portfolio-hero__btn portfolio-hero__btn--primary">
                  <span>Hire Me</span>
                </div>
              </a>
              <a href="#portfolio" className="home-link24">
                <div className="home-thq-portfolio-herobtn-elm2 portfolio-hero__btn portfolio-hero__btn--outline">
                  <span>Portfolio</span>
                </div>
              </a>
            </div>
            <div className="portfolio-hero__stats">
              <div className="portfolio-hero__stat-item">
                <span className="home-thq-portfolio-herostat-number-elm1 portfolio-hero__stat-number">
                  3+
                </span>
                <span className="portfolio-hero__stat-label">
                  Years Scripting
                </span>
              </div>
              <div className="portfolio-hero__stat-divider"></div>
              <div className="portfolio-hero__stat-item">
                <span className="home-thq-portfolio-herostat-number-elm2 portfolio-hero__stat-number">
                  15+
                </span>
                <span className="portfolio-hero__stat-label">Clients</span>
              </div>
              <div className="portfolio-hero__stat-divider"></div>
              <div className="portfolio-hero__stat-item">
                <span className="home-thq-portfolio-herostat-number-elm3 portfolio-hero__stat-number">
                  30M+
                </span>
                <span className="portfolio-hero__stat-label">Total Visits</span>
              </div>
            </div>
          </div>
          <div className="portfolio-hero__visual">
            <div className="portfolio-hero__circle-bg"></div>
            <div className="home-thq-portfolio-heroimage-wrapper-elm portfolio-hero__image-wrapper">
              <img
                alt="Slideshow image 1"
                src="/renderbux-1785250896780-1500h.png"
                className="home-thq-portfolio-heroslide-elm1 portfolio-hero__slide"
              />
              <img
                alt="Slideshow image 2"
                src="/renderbux-1785250810027-1500h.png"
                className="portfolio-hero__slide"
              />
              <img
                alt="Slideshow image 3"
                src="/renderbux-1784904340006-1500h.png"
                className="portfolio-hero__slide"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" data-section="about" className="portfolio-section">
        <div className="portfolio-section__container">
          <div className="portfolio-about__grid">
            <div className="portfolio-about__images">
              <div className="portfolio-about__image-wrapper">
                <img
                  alt="About workspace"
                  src="/external/pastedimage-v7p-1400w.png"
                  className="portfolio-about__image"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-ihhb-1400w.png"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-v7p-1400w.png"
                />
              </div>
              <div className="portfolio-about__image-wrapper">
                <img
                  alt="Creative process"
                  src="/external/pastedimage-pgxm-1400w.png"
                  className="portfolio-about__image"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-pgxm-1400w.png"
                />
              </div>
            </div>
            <div>
              <h2 className="portfolio-section__title">About Me</h2>
              <p className="portfolio-about__text">
                I&apos;m a Roblox scripter (Luau) who has explored various areas
                of programming, including Minecraft plugin development, website
                building, and AI automation. However, Roblox has truly captured
                my interest, and I&apos;ve decided to pursue it more
                professionally. My favorite areas are AI for NPCs and backend
                development, but I&apos;m also comfortable working on the
                frontend using React!
              </p>
              <div className="portfolio-about__stats-row">
                <div className="portfolio-about__stat">
                  <span className="portfolio-about__stat-number">15+</span>
                  <span className="portfolio-about__stat-label">Clients</span>
                </div>
                <div className="home-thq-portfolio-aboutstat-elm2 portfolio-about__stat"></div>
                <div className="portfolio-about__stat">
                  <span className="portfolio-about__stat-number">30M+</span>
                  <span className="portfolio-about__stat-label">
                    Total Visits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        data-section="portfolio"
        className="portfolio-section"
      >
        <div className="portfolio-section__container">
          <h2 className="portfolio-section__title--center portfolio-section__title">
            Contribution &amp; Works
          </h2>
          <div className="home-thq-portfolio-worksgrid-elm1 portfolio-works__grid">
            <a
              href="https://www.roblox.com/games/107179467815495/Kidnapper"
              data-role="game-card"
              className="home-link25"
            >
              <div
                target="_blank"
                rel="noopener noreferrer"
                className="home-thq-portfolio-work-card-elm1 portfolio-work-card"
              >
                <div className="portfolio-work-card__image-wrapper">
                  <img
                    alt="Fantasy Quest RPG game thumbnail"
                    src="https://tr.rbxcdn.com/180DAY-f33dab42ce36e55f90b128a3a115c0c4/768/432/Image/Webp/noFilter"
                    className="portfolio-work-card__image"
                  />
                </div>
                <div className="portfolio-work-card__content">
                  <h3 className="portfolio-work-card__title">Kidnapper</h3>
                  <p className="portfolio-work-card__desc">
                    A horror story game. You are in the main role, your goal is
                    to survive and not fall into the hands of a kidnapper.
                  </p>
                  <span className="portfolio-work-card__link">
                    View Project →
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.roblox.com/games/113542795538738/During-Dark"
              data-role="game-card"
              className="home-link26"
            >
              <div
                target="_blank"
                rel="noopener noreferrer"
                className="home-thq-portfolio-work-card-elm2 portfolio-work-card"
              >
                <div className="portfolio-work-card__image-wrapper">
                  <img
                    alt="Space Defender game thumbnail"
                    src="https://tr.rbxcdn.com/180DAY-62b1bb7bc5ecbf229da079d9a29ff975/256/256/Image/Webp/noFilter"
                    className="portfolio-work-card__image"
                  />
                </div>
                <div className="portfolio-work-card__content">
                  <h3 className="portfolio-work-card__title">During Dark</h3>
                  <p className="portfolio-work-card__desc">
                    A multiplayer mafia-like game. In the game, your task is to
                    survive the night or kill everyone. Easy concept - an
                    interesting implementation
                  </p>
                  <span className="portfolio-work-card__link">
                    View Project →
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.roblox.com/games/87759656997703/Evergreen-Roleplay"
              data-role="game-card"
              className="home-link27"
            >
              <div
                target="_blank"
                rel="noopener noreferrer"
                className="home-thq-portfolio-work-card-elm3 portfolio-work-card"
              >
                <div className="portfolio-work-card__image-wrapper">
                  <img
                    alt="Mystery Manor game thumbnail"
                    src="https://tr.rbxcdn.com/180DAY-4959c466587ab11a97f31ebe10b41d9f/768/432/Image/Webp/noFilter"
                    className="portfolio-work-card__image"
                  />
                </div>
                <div className="portfolio-work-card__content">
                  <h3 className="portfolio-work-card__title">
                    Evergreen Roleplay
                  </h3>
                  <p className="portfolio-work-card__desc">
                    A huge role-playing game with a huge number of mechanics.
                    Lead Developer
                  </p>
                  <span className="portfolio-work-card__link">
                    View Project →
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="portfolio-works__grid">
            <div
              data-role="video-card"
              data-video-id="nKOri4JLbYU"
              className="portfolio-work-card"
            >
              <div className="portfolio-work-card__image-wrapper">
                <img
                  alt="Smooth Building System Video Thumbnail"
                  src="https://img.youtube.com/vi/nKOri4JLbYU/maxresdefault.jpg"
                  className="portfolio-work-card__image"
                />
              </div>
              <div className="portfolio-work-card__content">
                <h3 className="portfolio-work-card__title">
                  Smooth Building System
                </h3>
                <p className="portfolio-work-card__desc">
                  The building system that I made for the sandbox game. It
                  turned out to be very soft
                </p>
                <span className="portfolio-work-card__link">
                  Watch Showcase ▶
                </span>
              </div>
            </div>
            <div
              data-role="video-card"
              data-video-id="pPhJNAfx9R0"
              className="portfolio-work-card"
            >
              <div className="portfolio-work-card__image-wrapper">
                <img
                  alt="Smooth Camera System Video Thumbnail"
                  src="https://img.youtube.com/vi/pPhJNAfx9R0/maxresdefault.jpg"
                  className="portfolio-work-card__image"
                />
              </div>
              <div className="portfolio-work-card__content">
                <h3 className="portfolio-work-card__title">
                  Smooth Camera System
                </h3>
                <p className="portfolio-work-card__desc">
                  Custom camera system. Designed for a shiftlock and natural
                  look.
                </p>
                <span className="portfolio-work-card__link">
                  Watch Showcase ▶
                </span>
              </div>
            </div>
            <div
              data-role="video-card"
              data-video-id="uIZ6S_Bdo-8"
              className="portfolio-work-card"
            >
              <div className="portfolio-work-card__image-wrapper">
                <img
                  alt="Smooth UI Video Thumbnail"
                  src="https://img.youtube.com/vi/uIZ6S_Bdo-8/maxresdefault.jpg"
                  className="portfolio-work-card__image"
                />
              </div>
              <div className="portfolio-work-card__content">
                <h3 className="portfolio-work-card__title">Smooth UI</h3>
                <p className="portfolio-work-card__desc">
                  One of my attempts is to remake the interface from a single
                  game. It turned out cool
                </p>
                <span className="portfolio-work-card__link">
                  Watch Showcase ▶
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        data-role="video-modal"
        data-active="false"
        className="portfolio-video-modal"
      >
        <div className="portfolio-video-modal__inner">
          <button
            data-action="close-modal"
            className="portfolio-video-modal__close button"
          >
            &amp;times;
          </button>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-role="video-iframe"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div id="hire"></div>
      <footer id="contact" className="home-thq-portfolio-footer-elm">
        <div className="home-thq-portfolio-footercontainer-elm">
          <div className="portfolio-footer__grid">
            <div>
              <h3 className="home-thq-portfolio-footerbrand-elm">Teve</h3>
              <p className="home-thq-portfolio-footertext-elm">
                Roblox Scripter &amp; Game Developer crafting immersive
                experiences that millions of players enjoy.
              </p>
            </div>
            <div>
              <h4 className="portfolio-footer__heading">Quick Links</h4>
              <nav className="portfolio-footer__nav">
                <Link to="/" className="home-navlink">
                  <div className="home-thq-portfolio-footerlink-elm1 portfolio-footer__link">
                    <span>Home</span>
                  </div>
                </Link>
                <a href="#projects" className="home-link28">
                  <div className="home-thq-portfolio-footerlink-elm2 portfolio-footer__link">
                    <span>Projects</span>
                  </div>
                </a>
                <a href="#about" className="home-link29">
                  <div className="home-thq-portfolio-footerlink-elm3 portfolio-footer__link">
                    <span>About</span>
                  </div>
                </a>
                <a href="#contact" className="home-link30">
                  <div className="home-thq-portfolio-footerlink-elm4 portfolio-footer__link">
                    <span>Contact</span>
                  </div>
                </a>
              </nav>
            </div>
            <div id="skills">
              <div id="skills"></div>
              <h4 className="portfolio-footer__heading">Skills</h4>
              <nav className="portfolio-footer__nav">
                <a href="#" className="home-link31">
                  <div className="portfolio-footer__link">
                    <span>Lua Scripting</span>
                  </div>
                </a>
                <a href="#" className="home-link32">
                  <div className="portfolio-footer__link">
                    <span>Roblox Studio</span>
                  </div>
                </a>
                <a href="#" className="home-link33">
                  <div className="portfolio-footer__link">
                    <span>Game Systems</span>
                  </div>
                </a>
                <a href="#" className="home-link34">
                  <div className="portfolio-footer__link">
                    <span>UI Design</span>
                  </div>
                </a>
              </nav>
            </div>
            <div>
              <div id="contact"></div>
              <h4 className="portfolio-footer__heading">Contact</h4>
              <div className="home-thq-portfolio-contactbuttons-elm">
                <a href="#" className="home-link35">
                  <div className="portfolio-contact__btn portfolio-contact__btn--discord">
                    <svg
                      fill="currentColor"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path>
                    </svg>
                    <span>Discord</span>
                  </div>
                </a>
                <a href="#" className="home-link36">
                  <div className="portfolio-contact__btn portfolio-contact__btn--telegram">
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
                      <path d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"></path>
                    </svg>
                    <span>Telegram</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="home-thq-portfolio-footerbottom-elm">
            <p className="home-thq-portfolio-footercopyright-elm">
              © 2026 Teve. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <div id="hire"></div>
      <div className="home-container17">
        <div className="home-container18">
          <Script
            html={`<script>
        ;(function () {
          ;(function () {
            var burger = document.querySelector('[data-action="toggle-menu"]')
            var closeBtn = document.querySelector('[data-action="close-menu"]')
            var mobileMenu = document.querySelector('[data-thq="thq-mobile-menu"]')
            if (burger && mobileMenu) {
              burger.addEventListener("click", function () {
                var isOpen = mobileMenu.getAttribute("data-state") === "open"
                mobileMenu.setAttribute("data-state", isOpen ? "closed" : "open")
              })
            }
            if (closeBtn && mobileMenu) {
              closeBtn.addEventListener("click", function () {
                mobileMenu.setAttribute("data-state", "closed")
              })
            }
            var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('[data-action="scroll-link"]') : []
            mobileLinks.forEach(function (link) {
              link.addEventListener("click", function (e) {
                e.preventDefault()
                var targetId = link.getAttribute("href")
                var targetEl = document.querySelector(targetId)
                if (targetEl) {
                  targetEl.scrollIntoView({ behavior: "smooth" })
                }
                mobileMenu.setAttribute("data-state", "closed")
              })
            })
          })()
          // Video modal for trailer cards
          // Smooth scroll for navigation links
          ;(function () {
            var scrollLinks = document.querySelectorAll('[data-action="scroll-link"]')
            scrollLinks.forEach(function (link) {
              link.addEventListener("click", function (e) {
                e.preventDefault()
                var targetId = link.getAttribute("href")
                var targetEl = document.querySelector(targetId)
                if (targetEl) {
                  targetEl.scrollIntoView({ behavior: "smooth" })
                }
              })
            })
          })()
          ;(function () {
            var modal = document.querySelector('[data-role="video-modal"]')
            var iframe = document.querySelector('[data-role="video-iframe"]')
            var closeBtn = document.querySelector('[data-action="close-modal"]')
            var trailerCards = document.querySelectorAll('[data-role="video-card"]')
            function openModal(videoId) {
              if (modal && iframe) {
                iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1"
                modal.setAttribute("data-active", "true")
                document.body.style.overflow = "hidden"
              }
            }
            function closeModal() {
              if (modal && iframe) {
                iframe.src = ""
                modal.setAttribute("data-active", "false")
                document.body.style.overflow = ""
              }
            }
            trailerCards.forEach(function (card) {
              card.addEventListener("click", function () {
                var videoId = card.getAttribute("data-video-id")
                if (videoId) openModal(videoId)
              })
            })
            if (closeBtn) {
              closeBtn.addEventListener("click", function (e) {
                e.stopPropagation()
                closeModal()
              })
            }
            if (modal) {
              modal.addEventListener("click", function (e) {
                if (e.target === modal) closeModal()
              })
            }
            document.addEventListener("keydown", function (e) {
              if (e.key === "Escape" && modal.getAttribute("data-active") === "true") {
                closeModal()
              }
            })
          })()
        })()
      </script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container20">
          <Script
            html={`<style>
@media (max-width: 1023px) {
.thq-desktop-menu-elm {
  display: none;
}
.thq-burger-menu-elm {
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-hero {
  padding: 60px 24px;
  min-height: auto;
}
.portfolio-hero__container {
  gap: 40px;
  grid-template-columns: 1fr;
  text-align: center;
}
.portfolio-hero__content {
  order: 2;
  align-items: center;
}
.portfolio-hero__visual {
  order: 1;
  margin: 0 auto;
  max-width: 350px;
}
.portfolio-hero__socials, .portfolio-hero__actions, .portfolio-hero__stats {
  justify-content: center;
}
.portfolio-hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
}
.portfolio-section {
  padding: 60px 24px;
}
.portfolio-section__title {
  font-size: 2rem;
  margin-bottom: 36px;
}
.portfolio-about__grid {
  grid-template-columns: 1fr;
  gap: 40px;
}
.portfolio-about__images {
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.portfolio-about__stats-row {
  gap: 32px;
  justify-content: center;
}
.portfolio-services__grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.portfolio-service-card {
  padding: 28px 20px;
}
.portfolio-works__grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.portfolio-contact__grid {
  grid-template-columns: 1fr;
  gap: 40px;
}
.portfolio-contact__info {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.portfolio-contact__form-row {
  grid-template-columns: 1fr 1fr;
}
.portfolio-footer__grid {
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
}

@media (max-width: 1023px) {
.thq-desktop-menu-elm {
  display: none !important;
}
.thq-burger-menu-elm {
  display: flex !important;
}
}

@media (min-width: 1024px) {
.thq-burger-menu-elm {
  display: none !important;
}
.thq-mobile-menu-elm {
  display: none !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link37">
        <div aria-label="Sign up to TeleportHQ" className="home-container21">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon30"
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
          <span className="home-text22">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
