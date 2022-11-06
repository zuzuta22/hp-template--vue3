<script setup lang="ts">

</script>

<template>
  <section class="p-home-gallery c-section">
    <h2 class="title-2">Gallary<span class="title-2__ja">ギャラリー</span></h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia ipsam fugiat soluta saepe voluptatibus illum dicta nulla libero sit?<br>Quos reprehenderit veniam alias beatae quod, iusto consequuntur fuga saepe.</p>
    <ul class="p-home-gallery__panel">
      <li><img src="/img/placehold.png" alt="" width="485" height="240"></li>
      <li><img src="/img/placehold.png" alt="" width="485" height="240"></li>
      <li><img src="/img/placehold.png" alt="" width="485" height="240"></li>
      <li><img src="/img/placehold.png" alt="" width="485" height="240"></li>
      <li><img src="/img/placehold.png" alt="" width="485" height="240"></li>
      <li><img src="/img/placehold.png" alt="" width="485" height="240"></li>
    </ul>
  </section>

</template>

<style scoped lang="scss">
  .p-home-gallery {

    &__panel {
      display: flex;
        flex-wrap: wrap;
      padding-top: 60px;
      gap: 5px;
      width: 100%;

      & li {
        width: 100%;
        min-height: 240px;
        @include mq-up(xs) {
          width: calc((100% - 5px) / 2);
        }
        @include mq-up(m) {
          width: calc((100% - 10px) / 3);
        }

        & img {
          object-fit: cover;
          width: auto;
          height: 100%;
        }
      }
    }
  }
</style>