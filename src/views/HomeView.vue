<script setup lang="ts">
  import PrefListSection from '@/components/PrefListSection.vue'
  import CategoryCheckBoxes from '@/components/CategoryCheckBoxes.vue'
  import PrefChart from '@/components/PrefChart.vue'
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <div>
          <PrefListSection />
          <CategoryCheckBoxes />
          <PrefChart />
        </div>
      </template>
    </Suspense>
  </main>
</template>
