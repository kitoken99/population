<script setup lang="ts">
  import { computed } from 'vue'
  import { usePopulationStore } from '@/stores/population'
  import type { Category } from '@/interfaces'
  const populationStore = usePopulationStore()
  const categories = computed(() => populationStore.categories)
  const selected_category = computed(() => populationStore.selected_category)
  const onChangedCheckbox = (event: Event): void => {
    const target = event.target as HTMLInputElement
    const id = target.id as Category
    populationStore.switchSelectedCategory(id)
  }
</script>

<template>
  <section>
    <div class="pref-list">
      <div
        class="pref-item"
        v-for="category in categories"
        v-bind:key="category"
      >
        <input
          type="radio"
          :id="category"
          name="category"
          :checked="category === selected_category"
          v-on:change="onChangedCheckbox"
        />
        <label :for="category">{{ category }}</label>
      </div>
    </div>
  </section>
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
