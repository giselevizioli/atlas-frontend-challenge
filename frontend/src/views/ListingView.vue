<template>
  <main class="">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="professional in professionals"
        :key="professional.id"
        :professional="professional"
      />
    </div>
  </main>
</template>

<script lang="ts">
import Card from '../components/listing/Card.vue'
import professionalsApi from '@/services/professionals.ts'

export default {
  components: {
    Card,
  },

  data() {
    return {
      professionals: [],
      loading: false,
      search: '',
    }
  },

  async mounted() {
    await this.loadProfessionals()
  },

  methods: {
    async loadProfessionals() {
      this.loading = true

      try {
        // const params =
        const { data } = await professionalsApi.getProfessionals()

        this.professionals = data
        console.log('professionals: ', this.professionals)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
