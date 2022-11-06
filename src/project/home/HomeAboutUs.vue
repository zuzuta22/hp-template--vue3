<script setup lang="ts">
</script>

<template>
  <section class="p-home-about-us c-section c-section--third">
    <div class="p-home-about-us__inner">
      <hgroup class="p-home-about-us__title-wrap">
        <h2 class="title-2 title-2--white">ABOUT US<span class="title-2__ja">マルマルまるまるについて</span></h2>
        <h3 class="p-home-about-us__catch">Make A Difference</h3>
        <div class="p-home-about-us__catch-sub"><span>Stay Foolish, Stay Hungry</span></div>
      </hgroup>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aliquid veniam neque quo blanditiis a, culpa sunt, nihil, totam iusto delectus. Eveniet iure maxime sit minus labore suscipit vero! Hic.</p>
      <img src="/img/placehold.png" alt="" width="910" height="480" class="p-home-about-us__cover">
    </div>
    <div class="p-home-about-us__btn-wrap">
      <!-- TODO: リンクボタンは共通パーツとしてcomponetsとして実行して表示名とURLはpropで渡す -->
      <a href="#" class="c-button c-button--white">サービス案内について</a>
      <a href="#" class="c-button c-button--white">会社概要</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.p-home-about-us {
  position: relative;

  @include mq-up(m) {
    margin-top: 190px;
  }

  &__inner {
    color: var(--color-above-dark);
    @include mq-up(m) {
      width: 530px;
    }
  }

  &__title-wrap {
    padding: 20px 0 30px;
    @include mq-up(m) {
      padding: 50px 0;
    }
  }
  &__catch {
    font-size: clamp(30px, 3.083vw, 48px);
    font-weight: 700;
  }
  &__catch-sub span {
    font-size: 16px;
    font-weight: 500;
    padding: 0 1em;
    position: relative;

    &::before,
    &::after {
      content: '〜';
      position: absolute;
      top: 0;
      bottom: 0;
    }

    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }
  &__cover {
    display: block;
    margin: 30px auto 0;
    @include mq-up(m) {
      margin-bottom: 0;
      object-fit: cover;
      position: absolute;
      top: -110px;
      right: 0;
      max-width: 46vw;
      min-height: 480px;
    }
  }
  &__btn-wrap {
    display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    padding: 50px 0 40px;
  }
}
</style>