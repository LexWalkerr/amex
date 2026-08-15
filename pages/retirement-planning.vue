<template>
  <div class="service-page">

    <section class="service-hero retirement-hero">

      <div class="hero-grid"></div>

      <div class="container service-hero-content">

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          Retirement Planning
        </span>

        <h1>
          Plan for the life
          <br>
          <span>after the paycheck.</span>
        </h1>

        <p>
          Retirement planning is about creating a financial framework
          that can support the lifestyle, priorities and choices you
          want in the years ahead.
        </p>

      </div>

    </section>

    <section class="section">

      <div class="container service-intro">

        <div>

          <span class="section-number">
            RETIREMENT PLANNING / 01
          </span>

          <h2>
            Retirement is
            <br>
            more than a date.
          </h2>

        </div>

        <div class="service-intro-copy">

          <p class="large">
            Leaving the workforce changes how you interact with your
            finances. Income sources, spending, investments and
            financial priorities can all take on new roles.
          </p>

          <p>
            We help you think through the transition before it arrives,
            including the resources available to you, your expected
            lifestyle and the financial decisions that may influence
            your future flexibility.
          </p>

          <p>
            For those already retired, the focus can shift toward
            sustainable cash flow, portfolio management, changing
            priorities and maintaining a clear view of the years ahead.
          </p>

        </div>

      </div>

    </section>

    <section class="retirement-timeline">

      <div class="container">

        <span class="section-number">
          THE RETIREMENT JOURNEY
        </span>

        <div class="retirement-grid">

          <div class="retirement-stage">

            <div class="stage-number">
              01
            </div>

            <span>BUILD</span>

            <h3>
              Accumulation
            </h3>

            <p>
              Build the financial resources that can support your
              future objectives while balancing today's priorities.
            </p>

          </div>

          <div class="retirement-stage active">

            <div class="stage-number">
              02
            </div>

            <span>TRANSITION</span>

            <h3>
              Preparation
            </h3>

            <p>
              Evaluate income needs, spending expectations and
              the decisions that become important as retirement
              approaches.
            </p>

          </div>

          <div class="retirement-stage">

            <div class="stage-number">
              03
            </div>

            <span>LIVE</span>

            <h3>
              Retirement
            </h3>

            <p>
              Manage resources with your desired lifestyle and
              longer-term financial objectives in view.
            </p>

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <span class="section-number">
            KEY CONSIDERATIONS
          </span>

          <h2>
            The questions
            <br>
            worth asking early.
          </h2>

        </div>

        <div class="retirement-questions">

          <div>
            <span>01</span>
            <h3>What will retirement cost?</h3>
            <p>
              Develop a realistic view of future spending and the
              lifestyle you want your resources to support.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Where will income come from?</h3>
            <p>
              Identify potential income sources and consider how
              they may fit together throughout retirement.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>How should assets be managed?</h3>
            <p>
              Consider investment strategy, liquidity and the
              balance between growth needs and financial stability.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>What could change?</h3>
            <p>
              Consider how health, family circumstances, markets
              and other life events could influence the plan.
            </p>
          </div>

        </div>

      </div>

    </section>

    <section class="service-dark-cta">

      <div class="container">

        <span class="section-number">
          YOUR NEXT CHAPTER
        </span>

        <h2>
          Retirement should be
          <br>
          planned with intention.
        </h2>

        <NuxtLink
          to="/about#contact"
          class="button button-primary"
        >
          Start retirement planning
          <span>↗</span>
        </NuxtLink>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'RetirementPlanningPage',

  head() {
    return {
      title: 'Retirement Planning | Northbridge Financial Advisory',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Thoughtful retirement planning focused on income, lifestyle, investments and long-term financial objectives.'
        }
      ]
    }
  }
}
</script>