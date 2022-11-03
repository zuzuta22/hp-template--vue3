<script setup lang="ts">

</script>

<template>
  <div class="p-home-latest">
    <article>
      <a href="">
        yyyy.mm.dd<span class="under">ホームページリニューアルのお知らせ</span>
      </a>
    </article>
  </div>

</template>

<style scoped lang="scss">
  .p-home-latest {
    padding: 60px 10vw;

    @include mq-dn(s) {
      padding: 40px 5vw;
    }

    & article {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 25px 0 20px;
      text-align: center;

      @include mq-dn(s) {
        padding: 2vh 1vw;
      }

      & a {
        text-align: center;
      }
    }

    & .under {
      margin-left: 1em;
      padding-bottom: 5px;
      border-bottom: 1px solid #000;
    }
  }
</style>