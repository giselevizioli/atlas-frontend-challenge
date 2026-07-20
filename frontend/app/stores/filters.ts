import { defineStore } from 'pinia';
import advancedFiltersService from '@/services/advancedFilters';
import type { FiltersState, SortField, SortOrder } from '@/types';
import type { LocationQuery } from 'vue-router';

export const useFiltersStore = defineStore('filters', {
  state: (): FiltersState => ({
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

    async setFilters(query: LocationQuery) {
      this.search = String(query.search ?? '');
      this.selectedProfessions = query.professionSlug
        ? String(query.professionSlug).split(',')
        : [];
      this.selectedCities = query.citySlug
        ? String(query.citySlug).split(',')
        : [];
      this.sort = String(query.sort ?? 'rating') as SortField;
      this.order = String(query.order ?? 'desc') as SortOrder;
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
