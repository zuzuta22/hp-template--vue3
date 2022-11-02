<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <main>
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<style scoped lang="scss">
  .content {
    padding: 0 2vw;
  }
</style>