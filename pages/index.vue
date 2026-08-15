<template>
  <div class="home-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-orb orb-one"></div>
      <div class="hero-orb orb-two"></div>

      <div class="hero-grid"></div>

      <div class="container hero-container">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            Financial clarity for what comes next
          </div>

          <h1>
            Your wealth.
            <br />

            <span>Thoughtfully planned.</span>
          </h1>

          <p class="hero-description">
            We help individuals, families and business owners make confident
            financial decisions through personalized planning, thoughtful
            strategy and long-term guidance.
          </p>

          <div class="hero-buttons">
            <NuxtLink to="/about#contact" class="button button-primary">
              Start a conversation

              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>

            <NuxtLink to="/advantage" class="button button-secondary">
              Discover our approach
            </NuxtLink>
          </div>
        </div>

        <!-- HERO CARD -->
        <div class="hero-visual">
          <div class="hero-card">
            <div class="hero-card-top">
              <span>Financial outlook</span>

              <div class="status-pill">
                <span></span>
                Long-term
              </div>
            </div>

            <div class="chart-area">
              <div class="chart-label">
                <small>Illustrative planning view</small>
                <strong>Clarity over time</strong>
              </div>

              <svg
                class="hero-chart"
                viewBox="0 0 500 230"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-opacity=".28" />
                    <stop offset="100%" stop-opacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 205
                     C40 195 65 185 95 190
                     C125 195 145 170 175 174
                     C205 178 220 140 250 148
                     C280 156 300 115 330 126
                     C360 137 382 90 410 99
                     C440 108 460 55 500 35
                     L500 230
                     L0 230Z"
                  fill="url(#chartFill)"
                />

                <path
                  d="M0 205
                     C40 195 65 185 95 190
                     C125 195 145 170 175 174
                     C205 178 220 140 250 148
                     C280 156 300 115 330 126
                     C360 137 382 90 410 99
                     C440 108 460 55 500 35"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  vector-effect="non-scaling-stroke"
                />
              </svg>

              <div class="chart-years">
                <span>Today</span>
                <span>5 years</span>
                <span>10 years</span>
                <span>Future</span>
              </div>
            </div>

            <div class="hero-card-footer">
              <div>
                <small>Planning principle</small>
                <strong>Purpose before performance</strong>
              </div>

              <div class="circle-arrow">↗</div>
            </div>
          </div>

          <div class="floating-note">
            <span class="floating-icon">✦</span>

            <div>
              <strong>Built around you</strong>
              <small>Not a one-size-fits-all plan</small>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-bottom">
        <div class="container hero-trust">
          <span>FINANCIAL PLANNING</span>
          <span>WEALTH STRATEGY</span>
          <span>RETIREMENT</span>
          <span>INVESTMENT GUIDANCE</span>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="section intro-section">
      <div class="container">
        <div class="section-heading split-heading">
          <div>
            <span class="section-number">01 / OUR PHILOSOPHY</span>

            <h2>
              Money is a tool.
              <br />
              <em>Your life is the goal.</em>
            </h2>
          </div>

          <div class="heading-side-copy">
            <p>
              Financial planning should begin with the things that matter to
              you—not a spreadsheet.
            </p>

            <NuxtLink to="/about" class="text-link">
              Learn about us
              <span>↗</span>
            </NuxtLink>
          </div>
        </div>

        <div class="philosophy-grid">
          <div class="philosophy-large">
            <div class="number">01</div>

            <h3>Understand</h3>

            <p>
              We start by listening. Your goals, priorities, responsibilities
              and concerns create the foundation for everything that follows.
            </p>
          </div>

          <div class="philosophy-card">
            <div class="number">02</div>

            <h3>Plan</h3>

            <p>
              We organize the moving pieces into a clear strategy designed
              around your financial life.
            </p>
          </div>

          <div class="philosophy-card">
            <div class="number">03</div>

            <h3>Guide</h3>

            <p>
              We remain alongside you as circumstances change, helping you make
              informed decisions along the way.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="section services-section" id="services">
      <div class="container">
        <div class="section-heading">
          <span class="section-number"> 02 / WHAT WE DO </span>

          <h2>
            A clearer view of
            <br />
            your financial picture.
          </h2>

          <p>
            Our planning approach brings important financial decisions together
            so you can see the bigger picture.
          </p>
        </div>

        <div class="services-grid">
          <NuxtLink to="/financial-planning"
            ><div class="service-card featured">
              <span class="service-number">01</span>

              <div class="service-icon">↗</div>

              <h3>Financial Planning</h3>

              <p>
                A comprehensive view of your income, expenses, investments,
                protection needs and long-term goals.
              </p>

              <span class="service-link">
                Explore planning
                <span>→</span>
              </span>
            </div>
          </NuxtLink>

          <NuxtLink to="/wealth-strategy"
            ><div class="service-card">
              <span class="service-number">02</span>

              <div class="service-icon">◇</div>

              <h3>Wealth Strategy</h3>

              <p>
                Thoughtful strategies designed to connect your investments with
                your broader financial objectives.
              </p>

              <span class="service-link">
                Explore strategy
                <span>→</span>
              </span>
            </div>
          </NuxtLink>

          <NuxtLink to="/retirement-planning"
            ><div class="service-card">
              <span class="service-number">03</span>

              <div class="service-icon">○</div>

              <h3>Retirement Planning</h3>

              <p>
                Prepare for the transition from building wealth to using it with
                greater confidence.
              </p>

              <span class="service-link">
                Explore retirement
                <span>→</span>
              </span>
            </div>
          </NuxtLink>

          <NuxtLink to="/investment-guidance"
            ><div class="service-card">
              <span class="service-number">04</span>

              <div class="service-icon">+</div>

              <h3>Investment Guidance</h3>

              <p>
                Investment decisions considered in the context of your goals,
                timeline and overall financial plan.
              </p>

              <span class="service-link">
                Explore investments
                <span>→</span>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ADVANTAGE CTA -->
    <section class="dark-cta">
      <div class="container dark-cta-container">
        <div>
          <span class="section-number"> THE NORTHBRIDGE ADVANTAGE </span>

          <h2>
            Financial advice
            <br />
            with a wider lens.
          </h2>
        </div>

        <div>
          <p>
            We look beyond individual accounts and individual decisions to
            understand how everything fits together.
          </p>

          <NuxtLink to="/advantage" class="button button-light">
            Explore the advantage
            <span>↗</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section stats-section">
      <div class="container stats-grid">
        <div class="stat-item">
          <strong>01</strong>
          <span>Personalized<br />strategy</span>
        </div>

        <div class="stat-item">
          <strong>02</strong>
          <span>Long-term<br />perspective</span>
        </div>

        <div class="stat-item">
          <strong>03</strong>
          <span>Clear<br />communication</span>
        </div>

        <div class="stat-item">
          <strong>04</strong>
          <span>Ongoing<br />guidance</span>
        </div>
      </div>
    </section>

    <!-- CLIENT CTA -->
    <section class="client-home-cta">
      <div class="container">
        <div class="client-cta-card">
          <div class="client-cta-glow"></div>

          <div class="client-cta-content">
            <span class="section-number"> FOR CLIENTS </span>

            <h2>
              Your financial life
              <br />
              deserves a clear plan.
            </h2>

            <p>
              Whether you're building wealth, preparing for retirement or
              navigating a major transition, we're here to help you see what's
              next.
            </p>

            <NuxtLink to="/clients" class="button button-primary">
              See how we work with clients
              <span>↗</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  head() {
    return {
      title:
        "Northbridge Financial Advisory | Your Wealth. Thoughtfully Planned.",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Personalized financial planning, wealth strategy and retirement guidance for individuals, families and business owners.",
        },
      ],
    };
  },
};
</script>