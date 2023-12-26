import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import PrefListSection from '@/components/PrefListSection.vue'
import PrefList from '@/components/PrefList.vue'

describe('PrefListSectionコンポーネントのテスト', () => {
  const wrapper = mount(PrefListSection, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })]
    }
  })

  it('セクション名表示', () => {
    expect(wrapper.text()).contain('都道府県')
  })
  it('PrefListコンポーネントの表示', async () => {
    const components = wrapper.findAllComponents(PrefList)
    expect(components).toHaveLength(1)
  })
})
