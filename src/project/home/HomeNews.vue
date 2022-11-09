<script setup lang="ts">
import { ref } from 'vue';

const news = ref([
  {
    'title': 'お知らせタイトルが入ります。',
    'category': 'カテゴリー',
    'published': '2022.01.01',
    'link': '#',
  },
  {
    'title': 'お知らせタイトルが入ります。',
    'category': 'カテゴリー',
    'published': '2021.01.01',
    'link': '#',
  },
  {
    'title': 'お知らせタイトルが入ります。',
    'category': 'カテゴリー',
    'published': '2020.01.01',
    'link': '#',
  }
]);

</script>

<template>
  <section class="p-home-news c-section">
    <div class="p-home-news__header">
      <h2 class="title-2">News<span class="title-2__ja">お知らせ</span></h2>
      <div class="p-home-news__btn-wrap">
        <a href="" class="c-button">お知らせ一覧へ</a>
      </div>
    </div>
    
    <div class="p-home-news__content">

      <ul class="p-home-news__list">
        <li v-for="item in news">
          <a href="{{ item.link}}">
            <span class="p-home-news__list-date">{{ item.published }}</span>
            <span class="p-home-news__list-category">{{ item.category }}</span>
            <span class="p-home-news__list-title">{{ item.title}}</span>
          </a>
        </li>
      </ul>
      
    </div>
  </section>
</template>

<style scoped lang="scss">
  .p-home-news {
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
    &__content {
      @include mq-up(m) {
        margin-bottom: 0;
        width: 63%;
      }
    }
    &__btn-wrap {
      display: block;
      
      @include mq-dn(m) {
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
    &__list {
      @include mq-dn(m) {
        padding: 0 0 30px;
      }
      & li {
        border-bottom: 1px solid var(--color-border);
        padding: 25px;
        &:first-child {
          border-top: 1px solid var(--color-border);
        }
      }
      &-date {
        font-size: 12px;
      }
      &-category {
        border: 1px solid var(--gray-8);
        border-radius: 3px;
        font-size: 10px;
        margin: 0 30px 0 20px;
        padding: 5px 8px;
        min-width: 70px;
      }
      &-title {
        @include mq-dn(xs) {
          display: block;
          margin-top: .5em;
        }
      }
    }
  }
</style>