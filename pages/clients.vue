<template>
  <div class="inner-page clients-page">

    <section class="inner-hero client-hero">

      <div class="hero-grid"></div>

      <div class="container inner-hero-content">

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          For Clients
        </span>

        <h1>
          Your goals are
          <br>
          <span>the starting point.</span>
        </h1>

        <p>
          We work with people at different stages of life, helping
          them bring structure and intention to their financial
          decisions.
        </p>

      </div>

    </section>

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <span class="section-number">
            WHO WE SERVE
          </span>

          <h2>
            Different lives.
            <br>
            Different priorities.
          </h2>

          <p>
            Our approach adapts to where you are today and where
            you want your financial life to take you.
          </p>

        </div>

        <div class="client-types">

          <article>
            <span>01</span>
            <h3>Individuals</h3>
            <p>
              Build a financial foundation that supports the life
              you want today while keeping tomorrow in view.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Families</h3>
            <p>
              Coordinate financial decisions around changing family
              priorities, education, protection and long-term goals.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Business Owners</h3>
            <p>
              Connect business decisions with personal financial
              planning and long-term wealth objectives.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Pre-Retirees</h3>
            <p>
              Prepare for the transition from earning an income
              toward using your accumulated resources.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Retirees</h3>
            <p>
              Create a thoughtful approach to managing assets,
              income needs and changing priorities in retirement.
            </p>
          </article>

          <article>
            <span>06</span>
            <h3>Professionals</h3>
            <p>
              Navigate compensation, savings, investments and
              long-term financial decisions with greater clarity.
            </p>
          </article>

        </div>

      </div>

    </section>

    <section class="client-journey">

      <div class="container">

        <div class="client-journey-heading">

          <span class="section-number">
            THE CLIENT EXPERIENCE
          </span>

          <h2>
            From uncertainty
            <br>
            to a clearer path.
          </h2>

        </div>

        <div class="journey-grid">

          <div class="journey-step">

            <div class="journey-icon">
              01
            </div>

            <h3>
              Discovery
            </h3>

            <p>
              We start with a conversation about your current
              financial picture, priorities and goals.
            </p>

          </div>

          <div class="journey-step">

            <div class="journey-icon">
              02
            </div>

            <h3>
              Strategy
            </h3>

            <p>
              We identify the key decisions and develop a
              strategy aligned with your objectives.
            </p>

          </div>

          <div class="journey-step">

            <div class="journey-icon">
              03
            </div>

            <h3>
              Action
            </h3>

            <p>
              We help turn your strategy into practical next
              steps while keeping the bigger picture in view.
            </p>

          </div>

          <div class="journey-step">

            <div class="journey-icon">
              04
            </div>

            <h3>
              Ongoing guidance
            </h3>

            <p>
              We revisit the plan as your life, priorities and
              financial circumstances evolve.
            </p>

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="container">

        <div class="client-quote">

          <div class="quote-mark">
            “
          </div>

          <blockquote>
            The best financial plan isn't the one that looks
            impressive on paper. It's the one that helps you
            make better decisions in real life.
          </blockquote>

          <div class="quote-line"></div>

          <span>
            Northbridge Financial Advisory
          </span>

        </div>

      </div>

    </section>

    <section class="section final-cta">

      <div class="container">

        <div class="final-cta-card">

          <span class="section-number">
            START HERE
          </span>

          <h2>
            Let's talk about
            <br>
            what's important to you.
          </h2>

          <NuxtLink
            to="/about#contact"
            class="button button-primary"
          >
            Schedule a consultation
            <span>↗</span>
          </NuxtLink>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'ClientsPage',

  head() {
    return {
      title: 'For Clients | Northbridge Financial Advisory',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Learn how Northbridge Financial Advisory works with individuals, families, business owners, professionals and retirees.'
        }
      ]
    }
  }
}
</script>