import { defineStore } from 'pinia'

import professionalsService from '@/services/professionals'
import advancedFiltersService from '@/services/advancedFilters'

export const useProfessionalsStore = defineStore('professionals', {
  state: () => ({
    professionals: [],
    pagination: {
      page: 1,
      perPage: 12,
      total: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    },
    search: '',
    sort: 'rating',
    order: 'desc',
    loading: false,
    professions: [],
    selectedProfessions: [],
    cities: [],
    selectedCities: [],
  }),

  getters: {},

  actions: {
    async setFilters(query) {
      this.search = query.search ?? ''
      this.selectedProfessions = query.professionSlug ? String(query.professionSlug).split(',') : []
      this.selectedCities = query.citySlug ? String(query.citySlug).split(',') : []
      this.sort = query.sort ?? 'rating'
      this.order = query.order ?? 'desc'
      this.pagination.page = Number(query.page ?? 1)
      this.pagination.perPage = Number(query.perPage ?? 12)
    },

    async loadProfessionals() {
      this.loading = true

      try {
        const response = await professionalsService.getProfessionals({
          search: this.search,
          professionSlug: this.selectedProfessions.join(','),
          citySlug: this.selectedCities.join(','),
          sort: this.sort,
          order: this.order,
          page: this.pagination.page,
          perPage: this.pagination.perPage,
        })

        this.professionals = response.data
        this.pagination = response.pagination
      } finally {
        this.loading = false
      }
    },

    async loadProfessions() {
      if (this.professions.length) {
        return
      }

      this.professions = await advancedFiltersService.getProfessions()
    },

    async loadCities() {
      if (this.cities.length) {
        return
      }

      this.cities = await advancedFiltersService.getCities()
    },
  },
})
