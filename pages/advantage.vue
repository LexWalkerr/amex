<template>
  <div class="inner-page advantage-page">

    <section class="inner-hero dark-section">

      <div class="hero-grid"></div>

      <div class="container inner-hero-content">

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          The Northbridge Advantage
        </span>

        <h1>
          A broader view.
          <br>
          <span>A better conversation.</span>
        </h1>

        <p>
          Financial decisions rarely exist in isolation. We bring
          the important pieces together so your strategy reflects
          the whole picture.
        </p>

      </div>

    </section>

    <section class="section">

      <div class="container">

        <div class="section-heading split-heading">

          <div>
            <span class="section-number">
              WHY NORTHBRIDGE
            </span>

            <h2>
              Advice designed
              <br>
              around real life.
            </h2>
          </div>

          <p>
            Markets change. Goals evolve. Businesses grow. Families
            change. A meaningful financial strategy needs enough
            flexibility to move with you.
          </p>

        </div>

        <div class="advantage-grid">

          <article class="advantage-card">

            <span>01</span>

            <h3>
              Personalized
              <br>
              planning
            </h3>

            <p>
              Your circumstances are unique. We begin with your
              objectives and build from there rather than fitting
              you into a predetermined solution.
            </p>

          </article>

          <article class="advantage-card dark-card">

            <span>02</span>

            <h3>
              A connected
              <br>
              strategy
            </h3>

            <p>
              Investments, retirement, cash flow and other financial
              considerations are evaluated as parts of one larger
              picture.
            </p>

          </article>

          <article class="advantage-card">

            <span>03</span>

            <h3>
              Long-term
              <br>
              perspective
            </h3>

            <p>
              We focus on decisions that support your broader
              objectives instead of reacting to every short-term
              change in the market.
            </p>

          </article>

          <article class="advantage-card">

            <span>04</span>

            <h3>
              Clear
              <br>
              communication
            </h3>

            <p>
              Financial advice should be understandable. We explain
              the reasoning behind recommendations so you can make
              informed decisions.
            </p>

          </article>

        </div>

      </div>

    </section>

    <section class="advantage-process">

      <div class="container">

        <span class="section-number">
          OUR PROCESS
        </span>

        <h2>
          Simple in principle.
          <br>
          Thoughtful in practice.
        </h2>

        <div class="process-list">

          <div class="process-row">
            <span>01</span>
            <div>
              <h3>Listen</h3>
              <p>
                We learn where you are, where you want to go and
                what matters most along the way.
              </p>
            </div>
          </div>

          <div class="process-row">
            <span>02</span>
            <div>
              <h3>Understand</h3>
              <p>
                We organize the financial details and identify
                the opportunities, priorities and decisions ahead.
              </p>
            </div>
          </div>

          <div class="process-row">
            <span>03</span>
            <div>
              <h3>Plan</h3>
              <p>
                We develop a strategy that connects your financial
                decisions to your goals.
              </p>
            </div>
          </div>

          <div class="process-row">
            <span>04</span>
            <div>
              <h3>Guide</h3>
              <p>
                We continue the conversation as your circumstances,
                priorities and financial environment change.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section class="section final-cta">

      <div class="container">

        <div class="final-cta-card">

          <span class="section-number">
            READY WHEN YOU ARE
          </span>

          <h2>
            Let's make your
            <br>
            next decision clearer.
          </h2>

          <NuxtLink
            to="/about#contact"
            class="button button-primary"
          >
            Start a conversation
            <span>↗</span>
          </NuxtLink>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'AdvantagePage',

  head() {
    return {
      title: 'The Northbridge Advantage | Northbridge Financial Advisory',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Discover the personalized, connected and long-term approach behind Northbridge Financial Advisory.'
        }
      ]
    }
  }
}
</script>