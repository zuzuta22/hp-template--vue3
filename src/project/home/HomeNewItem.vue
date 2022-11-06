<script setup lang="ts">
  import { ref } from 'vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  // vue3-carousel setting
  const settings = {
    itemsToShow: 1,
  }
  const breakpoints = {
    640: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    768: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    1024: {
      itemsToShow: 2.5,
      snapAlign: 'center',
    },
    1240: {
      itemsToShow: 3.5,
      snapAlign: 'center',
    }
  }
  // END of vue3-carousel setting

  // Newsアイテム
  const newGoods = ref([
    {
      'id': 1,
      'goodsTitle': 'ここにタイトルが入ります。',
      'goodsImage': '/img/placehold.png',
      'goodsNumber' : '○○○○○',
      'goodsType' : '○○○○○',
      'goodsConstitution': '○○○○○',
      'goodsYear': '2022年',
      'goodsMaker': '○○○○○',
      'goodsLink': '#',
      'goodsTags': ['NEW', 'OLD'],
    },
    {
      'id': 2,
      'goodsTitle': 'ここにタイトルが入ります。',
      'goodsImage': '/img/placehold.png',
      'goodsNumber' : '○○○○○',
      'goodsType' : '○○○○○',
      'goodsConstitution': '○○○○○',
      'goodsYear': '2022年',
      'goodsMaker': '○○○○○',
      'goodsLink': '#',
      'goodsTags': ['NEW', 'OLD'],
    },
    {
      'id': 3,
      'goodsTitle': 'ここにタイトルが入ります。',
      'goodsImage': '/img/placehold.png',
      'goodsNumber' : '○○○○○',
      'goodsType' : '○○○○○',
      'goodsConstitution': '○○○○○',
      'goodsYear': '2022年',
      'goodsMaker': '○○○○○',
      'goodsLink': '#',
      'goodsTags': ['NEW', 'OLD'],
    },
    {
      'id': 4,
      'goodsTitle': 'ここにタイトルが入ります。',
      'goodsImage': '/img/placehold.png',
      'goodsNumber' : '○○○○○',
      'goodsType' : '○○○○○',
      'goodsConstitution': '○○○○○',
      'goodsYear': '2022年',
      'goodsMaker': '○○○○○',
      'goodsLink': '#',
      'goodsTags': ['NEW', 'OLD'],
    },
    {
      'id': 5,
      'goodsTitle': 'ここにタイトルが入ります。',
      'goodsImage': '/img/placehold.png',
      'goodsNumber' : '○○○○○',
      'goodsType' : '○○○○○',
      'goodsConstitution': '○○○○○',
      'goodsYear': '2022年',
      'goodsMaker': '○○○○○',
      'goodsLink': '#',
      'goodsTags': ['NEW', 'OLD'],
    }
  ]);

</script>

<template>
  <section class="p-home-new-item c-section">
    <h2 class="title-2">NEW ITEM<span class="title-2__ja">新着商品</span></h2>
    <p>新着の〇〇〇〇〇〇〇〇をご案内いたします。</p>

    <div class="p-home-new-item-carousel">
      <Carousel :autoplay="5000" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
        <!-- 画像サイズに合わせたクラスをpropsで受け取り、v-showでSlideの配列を切り替える？ -->
        <Slide v-for="item in newGoods" :key="item.goodsImage">
          <div class="p-home-new-item-carousel__inner">
            <img :src="item.goodsImage" />
            <h3>{{ item.goodsTitle }}</h3>
            <div class="p-home-new-item-carousel__detail-wrap">
              <ul class="p-home-new-item-carousel__tags">
                <li v-for="tag in item.goodsTags ">
                  {{ tag }}
                </li>
              </ul>
              <dl class="p-home-new-item-carousel__detail">
                <dt>商品番号</dt>
                <dd>{{ item.goodsNumber }}</dd>
                <dt>型式</dt>
                <dd>{{ item.goodsType }}</dd>
                <dt>構成</dt>
                <dd>{{ item.goodsConstitution }}</dd>
                <dt>年式</dt>
                <dd>{{ item.goodsYear }}</dd>
                <dt>メーカー</dt>
                <dd>{{ item.goodsMaker }}</dd>
              </dl>
            </div>
            <div class="p-home-new-item-carousel__button"><a :href="`${item.goodsLink }`">この商品について</a></div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <!-- <Pagination /> -->
        </template>
      </Carousel>
    </div>
    <!-- ここはボタンで定義したほうが良くない？ -->
    <div class="p-home-new-item__btn-wrap"><a :href="`#`" class="c-button">新着商品一覧</a></div>
  </section>
</template>

<style scoped lang="scss">
.p-home-new-item {
  position: relative;
  &-carousel {
    position: relative;
    padding: 60px 0;

    & .carousel__slide {
      @include mq-up(xs) {
        padding: 0 1vw;
      }
    }

    &__inner {
      & h3 {
        font-size: 18px;
        padding: 20px;
      }

      & img {
        border-radius: 5px;
        min-height: 240px;
        object-fit: cover;
      }
    }

    &__detail-wrap {
      border-top: 1px solid var(--gray-4);
      border-bottom: 1px dashed var(--gray-4);
      margin-bottom: var(--margin-xs);
      padding: 20px 0 0 30px;
    }
    &__tags {
      display: flex;
        justify-content: flex-start;
        gap: 1em;

      & li {
        border: 1px solid var(--gray-4);
        border-radius: 30px;
        font-size: 14px;
        padding: 2px 10px;
      }
    }

    &__detail {
      display: flex;
        flex-wrap: wrap;
      padding: 15px 0 30px;

      & dt {
        width: 30%;
      }
      & dd {
        text-align: left;
        width: 70%;
      }
    }

    &__button {
      border: 1px solid var(--gray-6);
      border-radius: 3px;
      display: inline-block;
      padding: 15px;
      width: 210px;

      & a {
        position: relative;
      }
    }
  }
  &__btn-wrap {
    text-align: center;
    @include mq-up(s) {
      position: absolute;
      top: 90px;
      right: 3vw;
    }
  }
}
</style>

<style lang="css">
.p-home-new-item-carousel .carousel__prev,
.p-home-new-item-carousel .carousel__next {
  background: var(--color-base-dark);
  border-radius: var(--radius-l);
  color: #fff;
  top: 52%;
}
</style>