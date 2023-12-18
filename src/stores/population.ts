import { defineStore } from 'pinia'
import axios from 'axios'
import type { PrefInfo } from './prefecture'

export interface PopulationDataPerYear {
  year: number
  value: number
  rate?: number
}

export interface PopulationData {
  label: string
  data: PopulationDataPerYear[]
}

export type PrefPopulation = Map<string, PopulationDataPerYear[]>

export type PrefPopulationList = Map<PrefInfo['prefCode'], PrefPopulation>

interface State {
  populationList: PrefPopulationList
}

export const usePopulationStore = defineStore({
  id: 'population',
  state: (): State => {
    return {
      populationList: new Map<PrefInfo['prefCode'], PrefPopulation>()
    }
  },
  getters: {},
  actions: {
    async getPopulation(prefCode: number) {
      const key = import.meta.env.VITE_APIKEY
      const populationInfoUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`
      const response = await axios({
        url: populationInfoUrl,
        method: 'get',
        headers: {
          'X-API-KEY': key
        }
      })
      if (response.status === 200) {
        const data = response.data.result.data
        const prefPopulation = new Map<string, PopulationDataPerYear[]>()
        data.forEach((value: PopulationData) => {
          prefPopulation.set(value.label, value.data)
        })
        this.populationList.set(prefCode, prefPopulation)
      }
    },
    deletePopulation(prefCode: number) {
      this.populationList.delete(prefCode)
    }
  }
})
