<template>
  <main class="px-8 w-full mx-auto max-w-7xl">
    <div class="mb-4 w-full flex justify-between md:justify-normal">
      <div v-if="store.loading" class="w-28.5 h-10 rounded-sm bg-gray-800 animate-pulse" />
      <FiltersButton v-else />
    </div>
    <div v-if="store.pagination.total" class="mb-4 w-full">
      <div v-if="store.loading" class="w-56 h-6 rounded-sm bg-gray-800 animate-pulse" />
      <p v-else class="uppercase text-cyan/15 tracking-widest">
        Results: {{ store.pagination.total }} nodes found
      </p>
    </div>
    <div v-if="store.loading" class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <CardSkelleton v-for="skelleton in 3" :key="`skelleton${skelleton}`" />
    </div>
    <div v-else class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="professional in professionals"
        :key="professional.id"
        :professional="professional"
      />
    </div>
    <div
      v-if="store.pagination.totalPages > 1 && !store.loading"
      class="w-full flex justify-center my-6"
    >
      <Pagination />
    </div>
  </main>
</template>

<script lang="ts">
import Card from '../components/listing/Card.vue'
import Pagination from '../components/listing/Pagination.vue'
import FiltersButton from '../components/listing/FiltersButton.vue'
import { useProfessionalsStore } from '@/stores/professionals'
import CardSkelleton from '../components/listing/CardSkelleton.vue'

export default {
  name: 'ProfessionalsView',

  components: {
    Card,
    Pagination,
    FiltersButton,
    CardSkelleton,
  },

  data() {
    return {}
  },

  watch: {
    '$route.query': {
      immediate: true,

      async handler() {
        console.log('caiu')
        await this.refreshListing()
      },
    },
  },

  computed: {
    store() {
      return useProfessionalsStore()
    },

    professionals() {
      return this.store.professionals
    },
  },

  methods: {
    async refreshListing() {
      this.store.setFilters(this.$route.query)

      await this.store.loadProfessionals()
    },
  },
}
</script>
