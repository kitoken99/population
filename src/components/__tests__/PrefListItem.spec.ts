import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import PrefListItem from '@/components/PrefListItem.vue'

describe('PrefListItemコンポーネントのテスト', () => {
  const props = {
    prefCode: 1,
    prefName: '北海道'
  }

  const wrapper = mount(PrefListItem, {
    props: props,
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })]
    }
  })

  it('初期画面表示', () => {
    expect(wrapper.text()).contain(props.prefName)
    const checkbox = wrapper.find('input[type="checkbox"]').element as HTMLInputElement
    expect(checkbox.checked).toBe(false)
  })
  it('チェックボックスのテスト', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]').element as HTMLInputElement
    await wrapper.find('label').trigger('click')
    expect(checkbox.checked).toBe(true)
    await wrapper.find('label').trigger('click')
    expect(checkbox.checked).toBe(false)
  })
})
