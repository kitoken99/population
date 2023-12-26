<script setup lang="ts">
  import type { PrefInfo } from '@/stores/prefecture'
  import { usePopulationStore } from '@/stores/population'
  defineProps(['prefCode', 'prefName'])
  const populationStore = usePopulationStore()
  const onChangedCheckbox = (prefCode: PrefInfo['prefCode'], event: Event): void => {
    const target = event.target as HTMLInputElement
    if (target.checked) populationStore.getPopulation(prefCode)
    else populationStore.deletePopulation(prefCode)
  }
</script>
<template>
  <div>
    <input
      type="checkbox"
      :id="prefName"
      :name="prefName"
      v-on:change="onChangedCheckbox(prefCode, $event)"
    />
    <label :for="prefName">{{ prefName }}</label>
  </div>
</template>
<style scoped></style>
