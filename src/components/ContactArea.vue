<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';

  import { SystemConst } from '../assets/js/const';

 // 定数読み込み
  const TelInfo = ref(SystemConst.TelInfo);
  const ContactTime = ref(SystemConst.ContactTime);
// 定数読み込み終了

</script>

<template>
  <div class="c-contact-area">
    <div class="c-link-button-large">
      <a href="">
        <span>お気軽にお問い合わせください</span>
        <a :href="`${TelInfo.telnum_link}`">{{ TelInfo.telnum }}</a>
        <span>受付時間{{ ContactTime.contact_time }}(土・日祝除く)</span>
      </a>
    </div>
    <div class="c-link-button-large">
      <RouterLink :to="{name:'contact'} ">メールでのお問い合わせ</RouterLink>
    </div>
  </div>

</template>

<style scoped lang="scss">
  // コンタクトエリア(c-link-button-large)は使い回す可能性が高いのでここでは定義せずに
  // src/assets/sass/componentで定義するべき
</style>