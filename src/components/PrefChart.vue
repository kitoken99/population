<script setup lang="ts">
import { Chart as highcharts } from 'highcharts-vue'
import { computed, ref } from 'vue'
import { usePopulationStore } from '@/stores/population'

const populationStore = usePopulationStore()
const mode = ref('総人口')
const populationList = computed(() => populationStore.getPopulationList(mode.value))
const pointStart = computed(() => populationStore.pointStart)
const pointInterval = computed(() => populationStore.pointInterval)
const chartOptions = ref({
  title: {
        text: mode.value,
    },
    yAxis: {
        title: {
            text: '人口数'
        },
        accessibility: {
            description: '人口数'
        }
    },
    xAxis: {
        title: {
            text: '年度'
        },
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: pointStart.value,
      pointInterval: pointInterval.value,
    }
  },
  series: populationList,
  responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
})
</script>
<template>
  <section>
    <highcharts :options="chartOptions"></highcharts>
  </section>
</template>
<style scoped></style>
