<script setup lang="ts">
  import { computed } from 'vue'
  import { usePrefectureStore } from '@/stores/prefecture'
  import type { PrefList } from '@/stores/prefecture'
  import PrefListItem from '@/components/PrefListItem.vue'
  const prefectureStore = usePrefectureStore()
  await prefectureStore.getPrefectureInfo()
  const prefList = computed((): PrefList => prefectureStore.prefList)
</script>

<template>
  <div class="pref-list">
    <PrefListItem
      class="pref-item"
      v-for="[prefCode, prefName] in prefList"
      v-bind:key="prefCode"
      :prefCode="prefCode"
      :prefName="prefName"
    />
  </div>
</template>
<style scoped>
  .pref-list {
    display: flex;
    flex-wrap: wrap;
  }
  .pref-item {
    padding: 0 5px 5px 0;
  }
</style>
