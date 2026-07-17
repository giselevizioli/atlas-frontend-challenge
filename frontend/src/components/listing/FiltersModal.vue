<template>
  <div
    class="w-full h-full bg-black/80 fixed top-0 left-0 flex justify-center items-center"
    @click.self="closeModal"
  >
    <div class="absolute bg-petroleum-blue w-full h-full md:max-w-150 md:max-h-150 md:rounded-sm">
      <div class="bg-cyan/5 h-16 w-full flex px-4 items-center justify-between">
        <h2 class="text-white font-semibold">FILTROS AVANÇADOS</h2>
        <button aria-label="Fechar modal de filtros" class="cursor-pointer" @click="closeModal">
          <IconClose width="24" height="24" />
        </button>
      </div>
      <div class="p-4 w-full overflow-y-auto md:h-115 flex flex-col gap-4 scrollbar">
        <section v-if="professions && professions.length > 0" class="professions-section">
          <p class="uppercase text-bluish-gray font-medium">profissão:</p>
          <div
            v-for="profession in professions"
            :key="profession.slug"
            class="flex items-center gap-1"
          >
            <input
              :id="profession.slug"
              type="checkbox"
              :value="profession.slug"
              v-model="selectedProfessions"
              class="accent-cyan"
            />
            <label :for="profession.slug" class="text-gray text-sm">{{ profession.name }}</label>
          </div>
        </section>
        <section v-if="cities && cities.length > 0" class="cities-section">
          <p class="uppercase text-bluish-gray font-medium">cidade:</p>
          <div v-for="city in cities" :key="city.citySlug" class="flex items-center gap-1">
            <input
              :id="city.citySlug"
              type="checkbox"
              :value="city.citySlug"
              v-model="selectedCities"
              class="accent-cyan"
            />
            <label :for="city.citySlug" class="text-gray text-sm"
              >{{ city.city }} - {{ city.state }}</label
            >
          </div>
        </section>
      </div>
      <div class="p-4 absolute gap-4 bottom-0 w-full flex justify-between md:justify-end">
        <button
          class="cursor-pointer bg-cyan/5 text-white border border-white h-10.5 px-3 rounded-sm hover:shadow-[0_0_5px_0px_cyan]"
          @click="cleanFilters"
        >
          LIMPAR FILTROS
        </button>
        <button
          class="cursor-pointer bg-cyan/13 text-cyan border border-cyan/13 h-10.5 px-3 rounded-sm hover:shadow-[0_0_5px_0px_cyan]"
          @click="handleSearch"
        >
          BUSCAR
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useProfessionalsStore } from '@/stores/professionals'
import { updateRouteQuery } from '@/helpers/updateRouteQuery'
import IconClose from '../icons/IconClose.vue'

export default {
  components: {
    IconClose,
  },

  data() {
    return {
      selectedProfessions: [],
      selectedCities: [],
    }
  },

  watch: {},

  computed: {
    store() {
      return useProfessionalsStore()
    },
    professions() {
      return this.store.professions
    },
    cities() {
      return this.store.cities
    },
  },

  mounted() {
    this.getAdvancedFilters()
    this.selectedProfessions = [...this.store.selectedProfessions]
    this.selectedCities = [...this.store.selectedCities]
    document.body.style.overflow = 'hidden'
  },

  beforeUnmount() {
    document.body.style.overflow = ''
  },

  methods: {
    async getAdvancedFilters() {
      await this.store.loadProfessions()
      await this.store.loadCities()
    },

    closeModal() {
      this.$emit('closeModal')
    },

    handleSearch() {
      const filteredProfessions = this.selectedProfessions.join(',')

      updateRouteQuery(
        {
          professionSlug: this.selectedProfessions.join(','),
          citySlug: this.selectedCities.join(','),
        },
        {
          resetPage: true,
        },
      )

      this.closeModal()
    },

    cleanFilters() {
      updateRouteQuery(
        {
          professionSlug: '',
          citySlug: '',
        },
        {
          resetPage: true,
        },
      )
      this.closeModal()
    },
  },
}
</script>
