<script setup lang="ts">
</script>

<template>
  <section class="p-about-table c-2pain"> <!-- c-2pain はsassで定義 使い回せるように。 -->
    <div class="c-2pain__header">
      <h2>タイトル</h2>
    </div>
    <div class="c-2pain__content">
      <table class="c-3column-table">
        <colgroup>
          <col class="c-3column-table__col1">
          <col class="c-3column-table__col2">
          <col class="c-3column-table__col3">
        </colgroup>
        <thead>
          <tr>
            <th>列A</th>
            <th>列B</th>
            <th>列C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>アイテム1</th>
            <td>テキストが入ります。テキストが入ります。</td>
            <td>テキスト</td>
          </tr>
          <tr>
            <th>アイテム2</th>
            <td>テキストが入ります。テキストが入ります。</td>
            <td>テキスト</td>
          </tr>
          <tr>
            <th>アイテム3</th>
            <td>テキストが入ります。テキストが入ります。</td>
            <td>テキスト</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped lang="scss">
</style>