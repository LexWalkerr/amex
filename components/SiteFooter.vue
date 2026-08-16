<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand-column">
        <NuxtLink to="/" class="brand footer-brand">
          <div class="brand-mark">
            <span></span>
            <span></span>
          </div>

          <div class="brand-text">
            <strong>Northbridge</strong>
            <small>FINANCIAL ADVISORY</small>
          </div>
        </NuxtLink>

        <p>
          Clear financial thinking for the decisions that matter most. We help
          individuals, families and business owners plan with greater clarity
          and confidence.
        </p>

        <NuxtLink to="/about#contact" class="footer-link-arrow">
          Start a conversation
          <span>↗</span>
        </NuxtLink>
      </div>

      <div class="footer-column">
        <h4>Explore</h4>

        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/advantage">Advantage</NuxtLink>
        <NuxtLink to="/clients">For Clients</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
      </div>

      <div class="footer-column">
        <h4>Focus</h4>

        <NuxtLink to="/financial-planning"> Financial Planning </NuxtLink>

        <NuxtLink to="/wealth-strategy"> Wealth Strategy </NuxtLink>

        <NuxtLink to="/retirement-planning"> Retirement Planning </NuxtLink>

        <NuxtLink to="/investment-guidance"> Investment Guidance </NuxtLink>
      </div>

      <div class="footer-column">
        <h4>Connect</h4>

        <!-- <a href="mailto:hello@northbridgeadvisory.com">
          hello@northbridgeadvisory.com
        </a>

        <a href="tel:+18005550184"> +1 (800) 555-0184 </a> -->

        <p>
          Monday – Friday<br />
          9:00 AM – 5:00 PM
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <span>
        © {{ new Date().getFullYear() }} Northbridge Financial Advisory. All
        rights reserved.
      </span>

      <div>
        <a href="#">Privacy</a>
        <a href="#">Disclosures</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>