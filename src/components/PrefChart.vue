<script setup lang="ts">
import { computed } from 'vue'
import { usePrefectureStore } from '@/stores/prefecture'
import { usePopulationStore } from '@/stores/population'
import type {  PrefPopulationList } from '@/stores/population'
const prefectureStore = usePrefectureStore()
const populationStore = usePopulationStore()
prefectureStore.getPrefectureInfo()
const populationList = computed((): PrefPopulationList => populationStore.populationList)

</script>

<template>
  <section>
    {{ populationList }}
  </section>
</template>
<style scoped>

</style>
