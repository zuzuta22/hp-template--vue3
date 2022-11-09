<script setup lang="ts">
</script>

<template>
  <section class="p-home-recruit c-section">
    <div class="p-home-recruit__header">
      <h2 class="title-2">RECRUIT<span class="title-2__ja">採用情報</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque assumenda dolorum facere aut, incidunt quia vero sit vitae, nulla pariatur totam nisi culpa cumque labore temporibus cum necessitatibus repellendus.</p>
      <div class="p-home-recruit__btn-wrap">
        <a href="" class="c-button">採用情報</a>
      </div>
    </div>
    <div class="p-home-recruit__gallary">
      <div class="p-home-recruit__gallary-item p-home-recruit__gallary-item--1"><img src="/img/placehold.png" alt=""></div>
      <div class="p-home-recruit__gallary-item p-home-recruit__gallary-item--2"><img src="/img/placehold.png" alt=""></div>
      <div class="p-home-recruit__gallary-item p-home-recruit__gallary-item--3"><img src="/img/placehold.png" alt=""></div>
      <div class="p-home-recruit__gallary-item p-home-recruit__gallary-item--4"><img src="/img/placehold.png" alt=""></div>
      <div class="p-home-recruit__gallary-item p-home-recruit__gallary-item--5"><img src="/img/placehold.png" alt=""></div>
    </div>
  </section>


</template>

<style scoped lang="scss">
  .p-home-recruit {
    display: flex;
      flex-direction: column;
      justify-content: space-between;
    position: relative;
    @include mq-up(m) {
      flex-direction: row;
    }
    @include mq-dn(xs) {
      margin-bottom: 50px;
    }

    &__header {
      @include mq-up(m) {
        width: 35%;
      }
    }

    &__btn-wrap {
      display: block;
      margin-top: 35px;
      
      @include mq-dn(m) {
        margin-top: 0;
        position: absolute;
        top: 50px;
        right: 2vw;
      }
      @include mq-dn(xs) {
        text-align: center;
        top: unset;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    &__gallary {
      display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
      margin-top: 30px;
      margin-bottom: 30px;
      @include mq-up(m) {
        display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(5, 1fr);
          grid-column-gap: 10px;
          grid-row-gap: 10px;
        margin: 0;  
        width: 62%;  
      }
      &-item {
        width: calc((100% - 10px) / 2);
        @include mq-up(m) {
          width: auto ;
        }
        & img {
          height: 100%;
          width: auto;
          object-fit: cover;
        }
        &--1 {grid-area: 1 / 1 / 6 / 2;}
        &--2 {grid-area: 1 / 2 / 4 / 3;}
        &--3 {grid-area: 4 / 2 / 6 / 3;}
        &--4 {grid-area: 1 / 3 / 3 / 4;}
        &--5 {grid-area: 3 / 3 / 6 / 4;}
      }
    }
  }
</style>