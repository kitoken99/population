import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { usePrefectureStore } from '@/stores/prefecture'
import PrefList from '@/components/PrefList.vue'
import PrefListItem from '@/components/PrefListItem.vue'

describe('PrefListコンポーネントのテスト', () => {
  const wrapper = mount(PrefList, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })]
    }
  })

  const prefectureStore = usePrefectureStore()
  prefectureStore.prefList = new Map<number, string>([
    [1, '北海道'],
    [2, '青森県'],
    [3, '岩手県'],
    [4, '宮城県'],
    [5, '秋田県']
  ])

  it('piniaのデータ取得アクションの実行', () => {
    expect(prefectureStore.getPrefectureInfo).toHaveBeenCalledTimes(1)
  })
  it('piniaから取得したデータを表示', async () => {
    const components = wrapper.findAllComponents(PrefListItem)
    expect(components).toHaveLength(5)
  })
})
