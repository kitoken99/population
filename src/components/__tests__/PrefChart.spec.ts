import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import PrefChart from '@/components/PrefChart.vue'
import { usePopulationStore } from '@/stores/population'

describe('PrefChartコンポーネントのテスト', () => {
  const wrapper = mount(PrefChart, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })]
    }
  })
  const populationStore = usePopulationStore()
  it('タイトル名表示', () => {
    expect(wrapper.find('.highcharts-title').text()).toBe(populationStore.selected_category)
  })
  it('タイトルの再レンダリング', async () => {
    for (const category of populationStore.categories) {
      populationStore.selected_category = category
      await flushPromises()
      expect(wrapper.find('.highcharts-title').text()).toBe(category)
    }
  })
})
