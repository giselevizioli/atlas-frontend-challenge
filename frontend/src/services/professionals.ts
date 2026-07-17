import http from '@/services/http'
import type { ProfessionalsResponse, ProfessionalsFilters } from '@/types/ProfessionalsResponse'

export default {
  // tipar params
  async getProfessionals(params: ProfessionalsFilters): Promise<ProfessionalsResponse> {
    const response = await http.get<ProfessionalsResponse>('/professionals', { params })

    return response.data
  },

  getProfessional(id: number) {
    return http.get(`/professionals/${id}`)
  },
}
