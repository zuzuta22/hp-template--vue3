<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  const slides_pc = ref([
    '/img/carousel_01.png',
    '/img/carousel_02.png',
    '/img/carousel_01.png',
    '/img/carousel_02.png',
  ]);
  const slides_sp = ref([
    '/img/carousel_01_sp.png',
    '/img/carousel_02_sp.png',
    '/img/carousel_01_sp.png',
    '/img/carousel_02_sp.png',
  ])

  onMounted(() => {
    window.addEventListener('resize', switchHomeCarousel); 
  });

  // 画面サイズ取得とSlideコンポーネント切替

  // 画面サイズが640px以下だったらcarousel--spに切り替える
  const carouselType: string = ref("carousel--pc");

  const switchHomeCarousel = () => {
    const windowX = window.innerWidth;
    if(windowX <= 640) {
      carouselType.value = "carousel--sp";
    } else {
      carouselType.value = "carousel--pc";
    }
  }

</script>

<template>
  <div class="p-home-top-carousel">
    <!-- PC用カルーセル -->
    <Carousel :autoplay="5000" :wrap-around="true" v-if="carouselType == 'carousel--pc'">
      <!-- 画像サイズに合わせたクラスをpropsで受け取り、v-showでSlideの配列を切り替える？ -->
      <Slide v-for="slide in slides_pc" :key="slide">
        <img :src="slide" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <!-- PC用カルーセル終了 -->

    <!-- SP用カルーセル -->
    <Carousel :autoplay="5000" :wrap-around="true" v-if="carouselType == 'carousel--sp'">
      <!-- 画像サイズに合わせたクラスをpropsで受け取り、v-showでSlideの配列を切り替える？ -->
      <Slide v-for="slide in slides_sp" :key="slide">
        <img :src="slide" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <!-- SP用カルーセル終了 -->
  </div>
</template>

<style lang="scss">
.p-home-top-carousel {
  
  & img {
    width: auto;
    height: 100vh;
  }

  & .carousel__pagination {
    margin: auto;
    position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
  }
}
</style>