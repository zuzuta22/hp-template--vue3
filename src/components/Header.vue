<script setup lang="ts">
  import { ref } from 'vue';
  // import { RouterLink, RouterView } from 'vue-router'

  import Logo from './Logo.vue';
  import MainNav from './MainNav.vue';
  import ButtonInquiry from './ButtonInquiry.vue';
  import HeaderTel from './HeaderTel.vue';

  import { SystemConst } from '../assets/js/const';

  // 定数読み込み
  const BtnTitle = ref(SystemConst.BtnInquiry);
  const TelInfo = ref(SystemConst.TelInfo);
  // 定数読み込み終了

</script>

<template>
  <header class="c-header">
    <div class="c-header--left">
      <Logo />
    </div>
    <div class="c-header--right">
      <MainNav />
      <HeaderTel :telInfo="TelInfo" />
      <ButtonInquiry :btnTitle="BtnTitle" />
    </div>
</header>
</template>

<style scoped lang="scss">
  .c-header {
    display: flex;
      justify-content: space-between;
    padding: 20px 4vw;
   
    &--left {
      min-width: 250px;
    }
    &--right {
      display: flex;
        justify-content: flex-end;
        gap: 2%;
        padding-left: 1vw;
      width: calc(100vw - 250px);
    }
    & p {
      margin-bottom: 0;
    }
  }
  
</style>