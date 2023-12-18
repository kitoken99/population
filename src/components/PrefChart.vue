<script setup lang="ts">
  import { Chart as highcharts } from 'highcharts-vue'
  import { computed, ref, watch } from 'vue'
  import { usePopulationStore } from '@/stores/population'

  const populationStore = usePopulationStore()
  const selected_category = computed(() => populationStore.selected_category)
  const populationList = computed(() => populationStore.getPopulationList)
  const pointStart = computed(() => populationStore.pointStart)
  const pointInterval = computed(() => populationStore.pointInterval)
  const chartOptions = ref({
    title: {
      text: selected_category.value
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
      }
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
        pointInterval: pointInterval.value
      }
    },
    series: populationList,
    responsive: {
      rules: [
        {
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
        }
      ]
    }
  })
  watch(selected_category, () => {
    chartOptions.value.title.text = selected_category.value
  })
</script>
<template>
  <section>
    <highcharts :options="chartOptions"></highcharts>
  </section>
</template>
<style scoped></style>
