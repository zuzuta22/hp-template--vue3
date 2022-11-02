<script setup lang="ts">
  import AboutTitle from '@/project/about/AboutTitle.vue';
  import AboutPrologue from '@/project/about/AboutPrologue.vue';
  import AboutDetail from '@/project/about/AboutDetail.vue';
  import AboutFeature from '@/project/about/AboutFeature.vue';
  import AboutTable from '@/project/about/AboutTable.vue';
  import AboutCommentary from '@/project/about/AboutCommentary.vue';
import AboutAttraction from '@/project/about/AboutAttraction.vue';
</script>

<template>
  <div class="view-about">
    <!-- AboutTitleはいづれcomponentsにPageTitle.vueを作ってProp(Routerからもってきたい)を渡して読み込む -->
    <AboutTitle />
    <!-- ここにパンくず入れたい -->
    <AboutPrologue />
    <AboutDetail />
    <AboutFeature />
    <AboutTable />
    <AboutCommentary />
    <AboutAttraction />
  </div>
</template>

<style scoped lang="scss">
</style>