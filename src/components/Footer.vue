<script setup lang="ts">
  import { ref } from 'vue';
  import { SystemConst } from '../assets/js/const';

  import FooterAbout from './FooterAbout.vue';
  import FooterContact from './FooterContact.vue';

  // 定数読み込み
  const BtnTitle = ref(SystemConst.BtnInquiry);
  const TelInfo = ref(SystemConst.TelInfo);
  // 定数読み込み終了


</script>
<template>
  <div class="c-footer">
    <FooterContact />
    <FooterAbout :telInfo="TelInfo" />
    <ul class="c-footer-sns">
      <li><a href="" target="_blank" rel="noopener noreferer"><img src="/svg/icon_fb.svg" alt="Facebook" loading="lazy" class="c-footer-sns__icon c-footer-sns__icon--fb"></a></li>
      <li><a href="" target="_blank" rel="noopener noreferer"><img src="/svg/icon_insta.svg" alt="Instagram" loading="lazy" class="c-footer-sns__icon c-footer-sns__icon--insta"></a></li>
      <li><a href="" target="_blank" rel="noopener noreferer"><img src="/svg/icon_twitter.svg" alt="Twitter" loading="lazy" class="c-footer-sns__icon c-footer-sns__icon--twitter"></a></li>
    </ul>
    <div class="c-footer-copyright">
      &copy; SPAM EGG Co. Ltd. 2022 All right reserved. 
    </div>
  </div>
</template>

<style scoped lang="scss">
  .c-footer-sns {
    display: flex;
      justify-content: center;
      gap: 20px;

    & li {
      background-color: #6b6b6b;
      border-radius: 50%;
      display: flex;
        align-items: center;
        justify-content: center;
      width: 40px;
      height: 40px;
    }
    
    &__icon {
      &--fb {
        width: 9px;
        height: 18px;
      }
      &--insta {
        width: 19px;
        height: 19px;
      }
      &--twitter {
        width: 15px;
        height: 18px;
      }
    }
  }
  
</style>