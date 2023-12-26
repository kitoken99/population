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
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
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
      },
      accessibility: {
        description: '年度'
      }
    },
    tooltip: {
      valueSuffix: '%',
      stickOnContact: true
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
    accessibility: {
      keyboardNavigation: {
        focusBorder: {
          style: {
            lineWidth: 3,
            color: '#aa1111',
            borderRadius: 5
          },
          margin: 4
        }
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
