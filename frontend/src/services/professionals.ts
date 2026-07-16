import http from '@/services/http'
import type { ProfessionalsResponse } from '@/types/ProfessionalsResponse'

export default {
  // tipar params
  async getProfessionals(params): Promise<ProfessionalsResponse> {
    const response = await http.get<ProfessionalsResponse>('/professionals')

    return response.data
  },

  getProfessional(id: number) {
    return http.get(`/professionals/${id}`)
  },
}
