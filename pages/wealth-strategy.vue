<template>
  <div class="service-page">

    <section class="service-hero wealth-strategy-hero">

      <div class="hero-grid"></div>

      <div class="container service-hero-content">

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          Wealth Strategy
        </span>

        <h1>
          Make your wealth
          <br>
          <span>work with purpose.</span>
        </h1>

        <p>
          Wealth strategy is about more than managing investments.
          It is about understanding what your capital needs to
          accomplish and building a disciplined framework around it.
        </p>

      </div>

    </section>

    <section class="section">

      <div class="container service-intro">

        <div>

          <span class="section-number">
            WEALTH STRATEGY / 01
          </span>

          <h2>
            Strategy before
            <br>
            activity.
          </h2>

        </div>

        <div class="service-intro-copy">

          <p class="large">
            Wealth can create opportunities, but managing it can also
            introduce increasingly complex decisions.
          </p>

          <p>
            Our approach starts with the role your wealth needs to
            play in your broader financial life. From there, we
            consider how investments, liquidity, diversification,
            taxes and long-term objectives interact.
          </p>

          <p>
            The objective is not to chase every opportunity. It is
            to establish a strategy that is understandable, disciplined
            and aligned with your circumstances.
          </p>

        </div>

      </div>

    </section>

    <section class="service-feature-section">

      <div class="container">

        <span class="section-number">
          WEALTH STRATEGY
        </span>

        <h2>
          A framework for
          <br>
          growing and preserving wealth.
        </h2>

        <div class="service-feature-grid">

          <article>
            <span>01</span>
            <h3>Asset Allocation</h3>
            <p>
              Consider how different asset classes can fit within
              a portfolio according to objectives, time horizon
              and risk considerations.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Diversification</h3>
            <p>
              Evaluate concentration and diversification across
              investments, sectors, geographies and other exposures.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Liquidity</h3>
            <p>
              Keep near-term financial needs in view while
              considering longer-term capital objectives.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Wealth Preservation</h3>
            <p>
              Consider how your financial structure can support
              the preservation of wealth across different stages.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Tax Awareness</h3>
            <p>
              Where appropriate, incorporate tax considerations
              into financial and investment decisions alongside
              qualified tax professionals.
            </p>
          </article>

          <article>
            <span>06</span>
            <h3>Legacy</h3>
            <p>
              Consider how today's wealth decisions may influence
              future family and legacy objectives.
            </p>
          </article>

        </div>

      </div>

    </section>

    <section class="wealth-principles">

      <div class="container">

        <span class="section-number">
          OUR PERSPECTIVE
        </span>

        <div class="wealth-principles-grid">

          <div>
            <span>01</span>
            <h3>Purpose</h3>
            <p>
              Capital should have a role within the larger financial
              plan rather than existing as a collection of disconnected
              accounts.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Discipline</h3>
            <p>
              A well-defined strategy can provide a framework for
              making decisions when markets or circumstances change.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Perspective</h3>
            <p>
              Long-term wealth management requires separating
              meaningful signals from short-term market noise.
            </p>
          </div>

        </div>

      </div>

    </section>

    <section class="service-dark-cta">

      <div class="container">

        <span class="section-number">
          WEALTH WITH PURPOSE
        </span>

        <h2>
          Let's build a strategy
          <br>
          around what matters.
        </h2>

        <NuxtLink
          to="/about#contact"
          class="button button-primary"
        >
          Discuss your wealth strategy
          <span>↗</span>
        </NuxtLink>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'WealthStrategyPage',

  head() {
    return {
      title: 'Wealth Strategy | Northbridge Financial Advisory',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A disciplined wealth strategy connecting investments, liquidity, diversification and long-term financial objectives.'
        }
      ]
    }
  }
}
</script>