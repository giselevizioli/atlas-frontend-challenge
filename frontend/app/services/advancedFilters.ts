import http from '@/services/http'
import type { Profession, City } from '@/types/profession'

export default {
  async getProfessions(): Promise<Profession[]> {
    const response = await http.get<Profession[]>('/professions')

    return response.data
  },

  async getCities(): Promise<Profession[]> {
    const response = await http.get<City[]>('/cities')

    return response.data
  },
}
