import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { usePopulationStore } from '@/stores/population'
import CategoryButtons from '@/components/CategoryButtons.vue'

describe('CategoryButtonsコンポーネントのテスト', () => {
  const wrapper = mount(CategoryButtons, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })]
    }
  })

  const populationStore = usePopulationStore()

  it('ラジオボタン表示テスト', () => {
    const radioButtons = wrapper.findAll('input[type="radio"]')
    expect(radioButtons).toHaveLength(populationStore.categories.length)
  })
  it('ラジオボタンラベルテスト', () => {
    populationStore.categories.forEach((category) => {
      expect(wrapper.find(`label[for=${category}]`).text()).toBe(category)
      expect(wrapper.find(`input[id=${category}]`).exists()).toBe(true)
    })
  })
  it('ラジオボタンクリックテスト', async () => {
    for (const clicked_category of populationStore.categories) {
      await wrapper.find(`label[for=${clicked_category}]`).trigger('click')
      await flushPromises()
      for (const category of populationStore.categories) {
        const radiobutton = wrapper.find(`input[id=${category}]`).element as HTMLInputElement
        if (category === clicked_category) {
          expect(radiobutton.checked).toBe(true)
        } else {
          expect(radiobutton.checked).toBe(false)
        }
      }
    }
  })
})
