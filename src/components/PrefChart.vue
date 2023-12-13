<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePopulationStore } from '@/stores/population'

const populationStore = usePopulationStore()
const mode = ref('総人口')
const populationList = computed(() => populationStore.getPopulationList(mode.value))
const categories = computed(() => populationStore.getCategories(mode.value))
setInterval(() => {
  console.log(categories.value)
}, 5000)
const chartOptions = ref({
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1960,
      pointInterval: 5
    }
  },
  series: populationList
})
</script>
<template>
  <section>
    <highcharts :options="chartOptions"></highcharts>
  </section>
</template>
<style scoped></style>
