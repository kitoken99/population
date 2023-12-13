<script setup lang="ts">
import { computed } from 'vue'
import { usePrefectureStore } from '@/stores/prefecture'
import type { PrefList, PrefInfo } from '@/stores/prefecture'
import { usePopulationStore } from '@/stores/population'
const prefectureStore = usePrefectureStore()
const populationStore = usePopulationStore()
prefectureStore.getPrefectureInfo()
const prefList = computed((): PrefList => prefectureStore.prefList)
const onChangedCheckbox = (prefCode: PrefInfo['prefCode'], event: Event): void => {
  const target = event.target as HTMLInputElement;
  if(target.checked)populationStore.getPopulation(prefCode)
  else populationStore.deletePopulation(prefCode)
}
</script>

<template>
  <section>
    <h2>都道府県</h2>
    <div class="pref-list">
      <div 
      class="pref-item"
      v-for="[prefCode, prefName] in prefList"
      v-bind:key = prefCode
      >
      <input type="checkbox" :id="prefName" :name="prefName" v-on:change="onChangedCheckbox(prefCode, $event)"/>
      <label :for="prefName">{{ prefName }}</label>
    </div>
    </div>
  </section>
</template>
<style scoped>
.pref-list {
  display: flex;
  flex-wrap: wrap;
}
.pref-item{
  padding: 0 5px 5px 0;
}
</style>