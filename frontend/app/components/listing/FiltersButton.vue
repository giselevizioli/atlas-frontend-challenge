<template>
  <div>
    <button
      class="flex items-center gap-2 px-3 h-10 border border-cyan/25 rounded-sm cursor-pointer hover:shadow-[0_0_5px_0px_cyan] transition-shadow"
      @click="toggleModal"
    >
      <IconFilters />
      <span class="text-white">FILTROS</span>
    </button>
    <teleport to="body">
      <FiltersModal v-if="showModal" @closeModal="showModal = false" />
    </teleport>
  </div>
</template>

<script lang="ts">
  import IconFilters from '@/components/icons/IconFilters.vue';
  import FiltersModal from '@/components/listing/FiltersModal.vue';
  export default {
    components: {
      IconFilters,
      FiltersModal
    },

    data() {
      return {
        showModal: false
      };
    },

    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      }
    }
  };
</script>
