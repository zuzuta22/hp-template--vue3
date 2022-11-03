<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="l-main-inner">
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.l-main-inner {
  position: relative;
}
</style>