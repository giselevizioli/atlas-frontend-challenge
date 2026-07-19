import type { Profession, City } from '@/types/profession';

export default {
  async getProfessions(): Promise<Profession[]> {
    const config = useRuntimeConfig();
    return await $fetch<Profession[]>('/professions', {
      baseURL: config.public.apiBase
    });
  },

  async getCities(): Promise<Profession[]> {
    const config = useRuntimeConfig();
    return await $fetch<City[]>('/cities', { baseURL: config.public.apiBase });
  }
};
