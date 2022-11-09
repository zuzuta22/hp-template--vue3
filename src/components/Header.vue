<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
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

  // グローバルナビ表示切替判定
  const isShow:boolean = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  })

  const onScroll = () => {
    const scrollY = window.scrollY;
    if(scrollY <= 160) {
      isShow.value = false;
    } else {
      isShow.value = true;
    }
  }
  // グローバルナビ表示切替判定終了

</script>

<template>
  <transition name="fade">
    <header v-show="isShow" class="c-header">
      <div class="c-header__inner">
        <div class="c-header__left">
          <Logo />
        </div>
        <div class="c-header__right">
          <MainNav />
          <HeaderTel :telInfo="TelInfo" />
          <ButtonInquiry :btnTitle="BtnTitle" />
        </div>
        <!-- ここにハンバーガー入れる -->
      </div>
    </header>
  </transition>
</template>

<style scoped lang="scss">
  .c-header {
    background-color: #fff;
    // display: none;
    // スクロールしたら表示させるようにする。
    opacity: .8;
    width: 100%;
    max-width: var(--max-width);
    position: fixed;
    top: 0;
    z-index: 100000;

    &__inner {
      display: flex;
        justify-content: space-between;
      padding: 20px 4vw;

      @include mq-dn(m) {
        padding: 10px 2vw;
      }
    }
    &__left {
      min-width: 250px;
    }
    &__right {
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,.fade-leave-to {
    opacity: 0;
  }
</style>