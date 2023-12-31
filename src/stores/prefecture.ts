import { defineStore } from 'pinia'
import axios from 'axios'

export interface PrefInfo {
  prefCode: number
  prefName: string
}

export type PrefList = Map<PrefInfo['prefCode'], PrefInfo['prefName']>

interface State {
  prefList: PrefList
}

export const usePrefectureStore = defineStore({
  id: 'prefecture',
  state: (): State => {
    return {
      prefList: new Map<number, string>()
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
        prefList.forEach((prefInfo: PrefInfo) => {
          this.prefList.set(prefInfo.prefCode, prefInfo.prefName)
        })
      }
    }
  }
})
