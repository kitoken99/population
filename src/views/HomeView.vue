<script setup lang="ts">
  import PrefList from '@/components/PrefList.vue'
  import CategoryCheckBoxes from '@/components/CategoryCheckBoxes.vue'
  import PrefChart from '@/components/PrefChart.vue'
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <div>
          <PrefList />
          <CategoryCheckBoxes />
          <PrefChart />
        </div>
      </template>
    </Suspense>
  </main>
</template>
