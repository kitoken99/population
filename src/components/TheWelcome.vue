<script setup lang="ts">
import { computed } from 'vue'
import { usePrefectureStore } from '@/stores/prefecture'
import type { PrefList } from '@/stores/prefecture'
const prefectureStore = usePrefectureStore()
prefectureStore.getPrefectureInfo()
const prefList = computed((): PrefList => prefectureStore.prefList)
</script>

<template>
  <section>
    <div>
      {{ prefList }}
    </div>
  </section>
</template>
