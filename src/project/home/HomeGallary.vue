<script setup lang="ts">

</script>

<template>
  <section class="p-home-gallary">
    <h2>Gallary<span>ギャラリー</span></h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quia ipsam fugiat soluta saepe voluptatibus illum dicta nulla libero sit? Quos reprehenderit veniam alias beatae quod, iusto consequuntur fuga saepe.</p>
    <ul class="p-home-gallary-panel">
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
  .p-home-gallary {

    &-panel {
      display: flex;
        flex-wrap: wrap;
      gap: 5px; // TODO: これ仮で入れてるだけ。ちゃんと調整する。
    }
  }
</style>1860 780