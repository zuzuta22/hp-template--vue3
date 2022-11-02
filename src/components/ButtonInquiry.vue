<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    btnTitle: String
  })
</script>

<template>
    <RouterLink to="/contact" class="c-ButtonInquiry">
      <font-awesome-icon icon="fa-thin fa-envelope-open" /><span>{{ btnTitle }}</span>
    </RouterLink>
</template>

<style scoped lang="scss">
  .c-ButtonInquiry {
    background-color: var(--btn-primary-bg);
    border-radius: 3px;
    color: #fff;
    font-size: 13px;
    padding: 23.5px 40px;
    text-align: center;
    min-width: 195px;

    @include mq-dn(l) {
      display: none;
    }

    &:hover {
      background-color: var(--btn-primary-bg);
    }

    & span {
      padding-left: 5px;
    }
  }
</style>