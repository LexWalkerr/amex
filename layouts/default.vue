<template>
    <div class="site-wrapper">
        <slot/>
    </div>
</template>

<!-- <template>
  <div class="site-wrapper">
    <SiteHeader />

    <main>
      <slot />
    </main>

    <SiteFooter />
  </div>
</template> -->

<script>
export default {
  name: 'DefaultLayout'
}
</script>