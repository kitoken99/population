<script setup lang="ts">
  import PrefListSection from '@/components/PrefListSection.vue'
  import CategoryButtons from '@/components/CategoryButtons.vue'
  import PrefChart from '@/components/PrefChart.vue'
</script>

<template>
  <main>
    <h1>日本の人口統計</h1>
    <PrefListSection />
    <CategoryButtons />
    <PrefChart />
  </main>
</template>
<style scoped>
  h1 {
    text-align: center;
  }
</style>
