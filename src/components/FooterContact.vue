<script setup lang="ts">
  import { ref } from 'vue';
  import ContactArea from './ContactArea.vue';
  
  import { SystemConst } from '../assets/js/const.ts';
  
  // 定数読み込み
  const TelInfo = ref(SystemConst.TelInfo);
  const TelLink = ref(SystemConst.telnum_link)
  const ContactTime = ref(SystemConst.contact_time)
  // 定数読み込み終了

  const UrlToContact = ref('contact');

</script>

<template>
  <section class="c-footer-contact">
    <div class="c-footer-contact__greeting">
      <div>Contact</div>
      <h2>お問い合わせ</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia laboriosam odio ipsum corrupti eum! Hic labore vero distinctio non ipsum accusantium, ipsam unde saepe earum sint architecto in. Asperiores.</p>
    </div>
    <div class="c-footer-contact__contact-link">
      <div>お問い合わせ</div>
      <ContactArea />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .c-footer-contact {
    display: flex;
    
    &__greeting {
      width: 50%;
    }

    &__contact-link {
      width: 50%;
    }
  }

</style>