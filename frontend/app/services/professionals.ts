import type {
  ProfessionalsFilters,
  ProfessionalsResponse,
  Professional
} from '@/types/ProfessionalsResponse';

export default {
  async getProfessionals(params: ProfessionalsFilters) {
    const config = useRuntimeConfig();

    return $fetch<ProfessionalsResponse>('/professionals', {
      baseURL: config.public.apiBase,
      query: params
    });
  },

  async getProfessional(id: number) {
    const config = useRuntimeConfig();

    return $fetch<Professional>(`/professionals/${id}`, {
      baseURL: config.public.apiBase
    });
  }
};
