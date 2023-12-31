import { defineStore } from 'pinia'
import axios from 'axios'
import { usePrefectureStore } from './prefecture'
import type { PrefInfo } from './prefecture'
import type { Series, Category } from '@/interfaces'

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
  categories: Category[]
  selected_category: Category
  populationList: PrefPopulationList
  pointStart: number
  pointInterval: number
}

export const usePopulationStore = defineStore({
  id: 'population',
  state: (): State => {
    return {
      categories: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
      selected_category: '総人口',
      populationList: new Map<PrefInfo['prefCode'], PrefPopulation>(),
      pointStart: 1960,
      pointInterval: 5
    }
  },
  getters: {
    getPopulationList: (state) => {
      const populationStore = usePrefectureStore()
      const series: Series = []
      state.populationList.forEach((data, prefCode): void => {
        const name = populationStore.prefList.get(prefCode)
        const categorised_data = data.get(state.selected_category)
        if (name && categorised_data) {
          series.push({ name: name, data: categorised_data.map((item) => item.value) })
        }
      })
      return series
    }
  },
  actions: {
    switchSelectedCategory(category: Category) {
      this.selected_category = category
    },
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
