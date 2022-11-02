<script setup lang="ts">
</script>

<template>
  <section class="p-about-detail c-2way-view"> <!-- propsでクラスを受け取り、画像左右振り分け -->
    <div class="c-2way-view__image">
      <img src="/img/placehold.png" alt="">
    </div>
    <div class="c-2way-view__content">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto soluta dignissimos atque, necessitatibus voluptatibus libero voluptate neque tempore dolorem rem eveniet numquam sunt accusamus consequuntur, quaerat ipsum placeat voluptates enim.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, optio? Reiciendis soluta, cupiditate magni fuga aperiam culpa voluptatum accusantium ducimus quae molestiae, cum natus quaerat quas iste at consectetur explicabo?</p>
      <div>
        <a href="">ボタンが入ります。</a> <!-- ここはcomponetsで作る予定のボタンを作る。リンク表示名とリンクURLはpropsで受け取る -->
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
</style>