<template>
  <div class="service-page">

    <section class="service-hero investment-hero">

      <div class="hero-grid"></div>

      <div class="container service-hero-content">

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          Investment Guidance
        </span>

        <h1>
          Invest with
          <br>
          <span>purpose and perspective.</span>
        </h1>

        <p>
          Investment decisions are most meaningful when they are
          connected to a broader financial plan. We help put portfolio
          decisions into context.
        </p>

      </div>

    </section>

    <section class="section">

      <div class="container service-intro">

        <div>

          <span class="section-number">
            INVESTMENT GUIDANCE / 01
          </span>

          <h2>
            A portfolio is
            <br>
            not the whole plan.
          </h2>

        </div>

        <div class="service-intro-copy">

          <p class="large">
            Investing involves uncertainty. A thoughtful strategy
            begins by understanding what your portfolio needs to
            accomplish and what risks you are able and willing to take.
          </p>

          <p>
            We consider your objectives, time horizon, financial
            circumstances and risk considerations when evaluating
            investment decisions.
          </p>

          <p>
            Rather than reacting to every market movement, our
            approach emphasizes a disciplined framework and regular
            review as your circumstances evolve.
          </p>

        </div>

      </div>

    </section>

    <section class="investment-framework">

      <div class="container">

        <div class="investment-framework-heading">

          <span class="section-number">
            OUR INVESTMENT FRAMEWORK
          </span>

          <h2>
            Five questions behind
            <br>
            every strategy.
          </h2>

        </div>

        <div class="investment-steps">

          <div>
            <span>01</span>
            <h3>Purpose</h3>
            <p>
              What is this capital intended to accomplish?
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Time</h3>
            <p>
              When might these resources need to be available?
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Risk</h3>
            <p>
              What level of investment risk is appropriate for the
              objective and financial circumstances?
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Structure</h3>
            <p>
              How should assets be organized to support the strategy?
            </p>
          </div>

          <div>
            <span>05</span>
            <h3>Review</h3>
            <p>
              What has changed and does the strategy still make sense?
            </p>
          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="container">

        <div class="investment-columns">

          <div>

            <span class="section-number">
              RISK & DISCIPLINE
            </span>

            <h2>
              Perspective matters
              <br>
              when markets move.
            </h2>

          </div>

          <div>

            <p class="large">
              Market volatility can make short-term decisions feel
              urgent. A clear investment framework provides context
              for determining whether action is actually necessary.
            </p>

            <p>
              We help clients understand the relationship between
              risk, return expectations, diversification, liquidity
              and their financial objectives.
            </p>

            <p>
              Investment recommendations should always be evaluated
              in light of the individual's circumstances, objectives
              and applicable regulatory requirements.
            </p>

          </div>

        </div>

      </div>

    </section>

    <section class="investment-note">

      <div class="container">

        <div class="investment-note-card">

          <div class="note-symbol">
            ✦
          </div>

          <div>

            <span class="section-number">
              OUR BELIEF
            </span>

            <h2>
              Good investing isn't
              <br>
              about predicting everything.
            </h2>

            <p>
              It is about having a thoughtful strategy, understanding
              the risks involved and staying focused on the objectives
              that matter.
            </p>

          </div>

        </div>

      </div>

    </section>

    <section class="service-dark-cta">

      <div class="container">

        <span class="section-number">
          INVEST WITH PERSPECTIVE
        </span>

        <h2>
          Let's put your investments
          <br>
          into context.
        </h2>

        <NuxtLink
          to="/about#contact"
          class="button button-primary"
        >
          Discuss your investment strategy
          <span>↗</span>
        </NuxtLink>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'InvestmentGuidancePage',

  head() {
    return {
      title: 'Investment Guidance | Northbridge Financial Advisory',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Thoughtful investment guidance based on objectives, time horizon, risk considerations and a broader financial plan.'
        }
      ]
    }
  }
}
</script>