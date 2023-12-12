import { defineStore } from 'pinia'
import axios from 'axios'

export interface Prefecture {
  prefName: string
}

interface State {
  prefList: Map<number, Prefecture>
}

export const usePrefectureStore = defineStore({
  id: 'prefecture',
  state: (): State => {
    return {
      prefList: new Map<number, Prefecture>()
    }
  },
  getters: {},
  actions: {
    async getPrefectureInfo() {
      const key = import.meta.env.VITE_APIKEY
      const prefectureInfoUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
      const response = await axios({
        url: prefectureInfoUrl,
        method: 'get',
        headers: {
          'X-API-KEY': key
        }
      })
      if (response.status === 200) {
        const prefList = response.data.result
        prefList.forEach((prefInfo) => {
          this.prefList.set(prefInfo.prefCode, prefInfo.prefName)
        })
      }
    }
  }
})
