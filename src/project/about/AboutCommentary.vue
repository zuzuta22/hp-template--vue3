<script setup lang="ts">
  import Box2Way from '@/components/Box2Way.vue';
</script>

<template>
  <section class="p-about-commentary c-2way-view"> <!-- c-2way-viewのスタイルはsassのcomponentで定義 -->
    <div class="c-2way-view__image">
      <img src="/img/placehold.png" alt="">
    </div>
    <div>
      <Box2Way />
      <Box2Way />
    </div>
  </section>

</template>

<style scoped lang="scss">
</style>