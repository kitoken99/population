<script setup lang="ts">
import { computed } from 'vue'
import { usePrefectureStore } from '@/stores/prefecture'
import type { PrefList, PrefInfo } from '@/stores/prefecture'
const prefectureStore = usePrefectureStore()
prefectureStore.getPrefectureInfo()
const prefList = computed((): PrefList => prefectureStore.prefList)
const onChangedCheckbox = (prefCode: PrefInfo['prefCode'], event: Event): void => {
  const target = event.target as HTMLInputElement;
  console.log(target.checked)
}
</script>

<template>
  <section>
    <h2>都道府県</h2>
    <div v-for="[prefCode, prefName] in prefList"
      v-bind:key = prefCode>
      <input type="checkbox" :id="prefName" :name="prefName" v-on:change="onChangedCheckbox(prefCode, $event)"/>
      <label :for="prefName">{{ prefName }}</label>
    </div>
  </section>
</template>
