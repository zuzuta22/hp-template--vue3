<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    telInfo: Object,
  });
  
</script>

<template>
  <div class="c-footer-about">
    <section class="c-footer-office">
      <h2><span>株式会社</span>マルマルまるまる</h2>
      <dl>
        <dt>Office</dt>
        <dd>〒000-0000</dd>
        <dd>○○県○○市○○区○○町○-○-○○</dd>
      </dl>
      <dl>
        <dt>TEL</dt>
        <dd><a :href="telInfo.telnum_link">{{ telInfo.telnum }}</a></dd>
      </dl>
    </section>
    <section class="c-footer-link">
      <nav class="">
        <RouterLink to="/">Home<span>ホーム</span></RouterLink>
        <RouterLink to="/about">About<span>私達について</span></RouterLink>
        <RouterLink to="/faq">FAQ<span>よくある質問</span></RouterLink>
        <RouterLink to="/about">Works<span>事例紹介</span></RouterLink>
        <RouterLink to="/about">Contact<span>お問い合わせ</span></RouterLink>
      </nav>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .c-footer-about {
    display: flex;
    justify-content: space-between;
  }
  .c-footer-office {
    width: 50%;
  }
  .c-footer-link {
    width: 50%;
  }
</style>