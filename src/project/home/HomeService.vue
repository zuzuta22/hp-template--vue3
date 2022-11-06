<script setup lang="ts">
</script>

<template>
  <section class="p-home-service c-section c-section--secondary">
    <h2 class="title-2">SERVICE<span class="title-2__ja">サービス案内</span></h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam soluta dolore minus ducimus, perspiciatis atque enim placeat suscipit, saepe culpa, non abdelectus deleniti sunt assumenda fugiat rerum tenetur incidunt.
    </p>
    <ul class="p-home-service__items">
      <li class="p-home-service__item">
        <div class="p-home-service__img p-home-service__img--1">
          <img src="/img/placehold.png" alt="" width="460" height="260" loading="lazy">
        </div>
        <dl class="p-home-service__detail">
          <dt>サービス案内</dt>
          <dd>サービス案内が入ります。サービス案内が入ります。サービス案内が入ります。</dd>
        </dl>
      </li>
      <li class="p-home-service__item">
        <div class="p-home-service__img p-home-service__img--2">
          <img src="/img/placehold.png" alt="" width="460" height="260" loading="lazy">
        </div>
        <dl class="p-home-service__detail">
          <dt>サービス案内</dt>
          <dd>サービス案内が入ります。サービス案内が入ります。サービス案内が入ります。</dd>
        </dl>
      </li>
      <li class="p-home-service__item">
        <div class="p-home-service__img p-home-service__img--3">
          <img src="/img/placehold.png" alt="" width="460" height="260" loading="lazy">
        </div>
        <dl class="p-home-service__detail">
          <dt>サービス案内</dt>
          <dd>サービス案内が入ります。サービス案内が入ります。サービス案内が入ります。</dd>
        </dl>
      </li>
      <li class="p-home-service__item">
        <div class="p-home-service__img p-home-service__img--4">
          <img src="/img/placehold.png" alt="" width="460" height="260" loading="lazy">
        </div>
        <dl class="p-home-service__detail">
          <dt>サービス案内</dt>
          <dd>サービス案内が入ります。サービス案内が入ります。サービス案内が入ります。</dd>
        </dl>
      </li>
      <li class="p-home-service__item">
        <div class="p-home-service__img p-home-service__img--5">
          <img src="/img/placehold.png" alt="" width="460" height="260" loading="lazy">
        </div>
        <dl class="p-home-service__detail">
          <dt>サービス案内</dt>
          <dd>サービス案内が入ります。サービス案内が入ります。サービス案内が入ります。</dd>
        </dl>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
  .p-home-service {
    &__items {
      display: flex;
        flex-wrap: wrap;
        justify-content: center;
      gap: 50px 2vw;
      padding: 50px 0 0;

      @include mq-up(s) {
        padding: 65px 0 0;
      }
    }
    &__item {
      width: 100%;
      position: relative;

      @include mq-up(xs) {
        width: 48%;
      }
      @include mq-up(m) {
        width: 30%;
      }
    }

    &__img {
      border-radius: 5px;
      display: block;
      position: relative;

      &:before {
        color: #aaa;
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 30px;
        position: absolute;
        top: -15px;
        left: 5%;
      }
      &--1:before {content: '01';}
      &--2:before {content: '02';}
      &--3:before {content: '03';}
      &--4:before {content: '04';}
      &--5:before {content: '05';}

      & img {
        width: 100%;
      }

    }

    &__detail {
      padding: 15px 0;
      @include mq-up(s) {
        padding: 30px 0;
      }

      & dt {
        font-size: 18px;
        margin-bottom: 25px;
        text-align: center;
        
        
      }
      & dd {
        font-size: 14px;
        text-align: center;
      }
    }
  }


</style>