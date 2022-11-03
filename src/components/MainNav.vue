<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="c-MainNavWrapper">
    <nav class="c-MainNav">
      <RouterLink to="/">Home<span>ホーム</span></RouterLink>
      <RouterLink to="/about">About<span>私達について</span></RouterLink>
      <RouterLink to="/about">Works<span>事例紹介</span></RouterLink>
      <RouterLink to="/faq">FAQ<span>よくある質問</span></RouterLink>
      <RouterLink to="/contact">Contact<span>お問い合わせ</span></RouterLink>
    </nav>
  </div>

</template>

<style scoped lang="scss">
  .c-MainNavWrapper {
    display: flex;
      align-items: center;
    @include mq-dn(s) {
      display: none;
    }
  }
  .c-MainNav {
    display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    font-size: 18px;

    & a {
      line-height: 1;
      text-align: center;
    }

    & span {
      display: block;
      font-size: 12px;
      margin-top: 8px;
    }
  }
</style>