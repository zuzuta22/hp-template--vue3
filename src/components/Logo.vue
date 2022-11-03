<script setup lang="ts">
</script>

<template>
  <div class="c-Logo">
    <p class="c-Logo__sub">〇〇の〇〇･〇〇･〇〇･〇〇なら</p>
    <h1 class="c-Logo__title"><span>株式会社</span>マルマルまるまる</h1>
  </div>
</template>

<style lang="scss">
.c-Logo {
  min-width: 250px;
  &__sub {
    font-size: 10px;

    @include mq-dn(s) {
      display: none;
    }
  }
  &__title {
    font-size: 24px;
    font-size: clamp(16px, 2.5vw, 24px);
    font-weight: 700;
    line-height: 1.8;
    & span {
      font-size: 12px;
    }
  }
}
</style>