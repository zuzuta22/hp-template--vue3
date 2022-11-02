<script setup lang="ts">
  const props = defineProps({
    telInfo: Object, 
  })
</script>

<template>
  <div class="c-header-contact-wrapper">
    <div class="c-header-contact">
      <p>お気軽にお問い合わせください</p>
      <div class="c-header-contact__telnum">{{ telInfo.telnum }}</div>
      <div class="c-header-contact__time">受付時間 9:00~17:30 (土・日・祝除く)</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .c-header-contact-wrapper {
    @include mq-dn(m) {
      display: none;
    }
  }
  .c-header-contact {
    font-size: 12px;
    text-align: right;

    &__telnum {
      font-size: 22px;
      line-height: 1.6;
    }

    &__time {
      font-size: 10px;
    }
  }
</style>