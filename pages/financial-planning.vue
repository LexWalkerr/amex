<template>
  <div class="service-page">

    <!-- HERO -->
    <section class="service-hero financial-planning-hero">

      <div class="hero-grid"></div>

      <div class="container service-hero-content">

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          Financial Planning
        </span>

        <h1>
          A financial plan
          <br>
          <span>built around your life.</span>
        </h1>

        <p>
          A thoughtful financial plan connects your current financial
          position with the goals, priorities and possibilities that
          matter most to you.
        </p>

      </div>

    </section>

    <!-- INTRO -->
    <section class="section">

      <div class="container service-intro">

        <div>

          <span class="section-number">
            FINANCIAL PLANNING / 01
          </span>

          <h2>
            See the whole
            <br>
            financial picture.
          </h2>

        </div>

        <div class="service-intro-copy">

          <p class="large">
            Financial planning is more than deciding how much to save.
            It is about understanding how today's choices can influence
            tomorrow's possibilities.
          </p>

          <p>
            We look at the important elements of your financial life
            together—from cash flow and savings to investments,
            retirement objectives, protection needs and major future
            decisions.
          </p>

          <p>
            The result is a framework designed to help you prioritize
            what matters, identify important decisions and move forward
            with greater clarity.
          </p>

        </div>

      </div>

    </section>

    <!-- AREAS -->
    <section class="service-feature-section">

      <div class="container">

        <span class="section-number">
          WHAT WE CONSIDER
        </span>

        <h2>
          Connecting the
          <br>
          important pieces.
        </h2>

        <div class="service-feature-grid">

          <article>
            <span>01</span>
            <h3>Cash Flow</h3>
            <p>
              Understand how income, spending, savings and liquidity
              interact with your longer-term financial objectives.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Goals</h3>
            <p>
              Translate important life objectives into financial
              priorities that can be evaluated and monitored.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Risk</h3>
            <p>
              Consider the financial risks that could affect your
              plans and the resources available to manage them.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Investments</h3>
            <p>
              Consider your investment strategy within the context
              of your overall financial plan rather than in isolation.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Retirement</h3>
            <p>
              Evaluate how today's savings and investment decisions
              relate to your desired future lifestyle.
            </p>
          </article>

          <article>
            <span>06</span>
            <h3>Major Decisions</h3>
            <p>
              Prepare financially for significant events such as
              buying a home, changing careers or selling a business.
            </p>
          </article>

        </div>

      </div>

    </section>

    <!-- PROCESS -->
    <section class="section">

      <div class="container">

        <div class="service-process-heading">

          <span class="section-number">
            OUR APPROACH
          </span>

          <h2>
            From information
            <br>
            to direction.
          </h2>

        </div>

        <div class="service-process">

          <div>
            <span>01</span>
            <h3>Understand</h3>
            <p>
              We begin by understanding your financial circumstances,
              priorities and objectives.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Organize</h3>
            <p>
              We bring the relevant financial information together
              to create a clearer picture.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Prioritize</h3>
            <p>
              We identify the decisions and opportunities that
              deserve the most attention.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Review</h3>
            <p>
              Your plan can evolve as your circumstances and
              priorities change.
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class="service-dark-cta">

      <div class="container">

        <span class="section-number">
          START WITH CLARITY
        </span>

        <h2>
          Your financial life
          <br>
          deserves a plan.
        </h2>

        <NuxtLink
          to="/about#contact"
          class="button button-primary"
        >
          Discuss your financial plan
          <span>↗</span>
        </NuxtLink>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'FinancialPlanningPage',

  head() {
    return {
      title: 'Financial Planning | Northbridge Financial Advisory',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Personalized financial planning designed to connect your goals, resources and long-term priorities.'
        }
      ]
    }
  }
}
</script>