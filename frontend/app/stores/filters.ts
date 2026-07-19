import { defineStore } from 'pinia';
import advancedFiltersService from '@/services/advancedFilters';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    pagination: {
      page: 1,
      perPage: 12,
      total: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false
    },
    search: '',
    sort: 'rating',
    order: 'desc',
    professions: [],
    selectedProfessions: [],
    cities: [],
    selectedCities: [],
    openedModal: ''
  }),

  getters: {},

  actions: {
    setOpenedModal(modalName: string) {
      this.openedModal = modalName;
    },

    async setFilters(query) {
      this.search = query.search ?? '';
      this.selectedProfessions = query.professionSlug
        ? String(query.professionSlug).split(',')
        : [];
      this.selectedCities = query.citySlug
        ? String(query.citySlug).split(',')
        : [];
      this.sort = query.sort ?? 'rating';
      this.order = query.order ?? 'desc';
      this.pagination.page = Number(query.page ?? 1);
      this.pagination.perPage = Number(query.perPage ?? 12);
    },

    async loadProfessions() {
      if (this.professions.length) {
        return;
      }

      this.professions = await advancedFiltersService.getProfessions();
    },

    async loadCities() {
      if (this.cities.length) {
        return;
      }

      this.cities = await advancedFiltersService.getCities();
    }
  }
});
