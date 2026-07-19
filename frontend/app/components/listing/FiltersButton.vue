<template>
  <div>
    <button
      class="flex items-center gap-2 px-3 h-10 border border-cyan/25 rounded-sm cursor-pointer hover:shadow-[0_0_5px_0px_cyan] transition-shadow"
      @click="store.setOpenedModal('filters')"
    >
      <IconsFilters />
      <span class="text-white">FILTROS</span>
    </button>
    <teleport to="#teleports">
      <LazyListingFiltersModal v-if="store.openedModal === 'filters'" />
    </teleport>
  </div>
</template>

<script lang="ts">
  import { useFiltersStore } from '@/stores/filters';

  export default {
    computed: {
      store() {
        return useFiltersStore();
      }
    }
  };
</script>
