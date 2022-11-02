<script setup lang="ts">
</script>

<template>
  <section class="p-home-recruit">
    <div>
      <h2>RECRUIT<span>お知らせ</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque assumenda dolorum facere aut, incidunt quia vero sit vitae, nulla pariatur totam nisi culpa cumque labore temporibus cum necessitatibus repellendus.</p>
    </div>
    <div class="p-home-recruit-gallary">
      <img src="/img/placehold.png" alt="">
      <img src="/img/placehold.png" alt="">
      <img src="/img/placehold.png" alt="">
      <img src="/img/placehold.png" alt="">
      <img src="/img/placehold.png" alt="">
      <img src="/img/placehold.png" alt="">
    </div>
  </section>


</template>

<style scoped lang="scss">
  .p-home-recruit {
    display: flex;

    &-gallary {
      display: grid;
      gap: 5px;  // TODO: 仮の余白設定
    }
  }
</style>