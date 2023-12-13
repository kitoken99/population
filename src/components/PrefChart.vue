<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePopulationStore } from '@/stores/population'


const populationStore = usePopulationStore()
const mode = ref('総人口')
const populationList = computed(() => populationStore.getPopulationList(mode.value))
const chartOptions = ref({
  series: populationList
})
</script>
<template>
  <section>
    <highcharts :options="chartOptions"></highcharts>
    {{ populationList }}
  </section>
</template>
<style scoped></style>
