<template>
  <header
    class="site-header"
    :class="{ scrolled: scrolled }"
  >
    <div class="header-container">

      <NuxtLink to="/" class="brand">
        <div class="brand-mark">
          <span></span>
          <span></span>
        </div>

        <div class="brand-text">
          <strong>Northbridge</strong>
          <small>FINANCIAL ADVISORY</small>
        </div>
      </NuxtLink>

      <nav
        class="desktop-nav"
        :class="{ open: mobileOpen }"
      >
        <NuxtLink
          to="/"
          exact
          active-class="nav-active"
          @click.native="closeMenu"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/advantage"
          active-class="nav-active"
          @click.native="closeMenu"
        >
          Advantage
        </NuxtLink>

        <NuxtLink
          to="/clients"
          active-class="nav-active"
          @click.native="closeMenu"
        >
          For Clients
        </NuxtLink>

        <NuxtLink
          to="/about"
          active-class="nav-active"
          @click.native="closeMenu"
        >
          About Us
        </NuxtLink>

        <NuxtLink
          to="/about#contact"
          class="mobile-consultation"
          @click.native="closeMenu"
        >
          Schedule a Consultation
        </NuxtLink>
      </nav>

      <div class="header-actions">
        <NuxtLink
          to="/about#contact"
          class="header-cta"
        >
          <span>Schedule a consultation</span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4 10h11M11 5l5 5-5 5"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>

        <button
          class="menu-button"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span :class="{ rotate1: mobileOpen }"></span>
          <span :class="{ hide: mobileOpen }"></span>
          <span :class="{ rotate2: mobileOpen }"></span>
        </button>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',

  data() {
    return {
      mobileOpen: false,
      scrolled: false
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    toggleMenu() {
      this.mobileOpen = !this.mobileOpen
    },

    closeMenu() {
      this.mobileOpen = false
    },

    handleScroll() {
      this.scrolled = window.scrollY > 30
    }
  }
}
</script>