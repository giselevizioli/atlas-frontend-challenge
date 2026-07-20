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
      <Transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-2"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="duration-150 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-2"
      >
        <LazyListingFiltersModal v-if="store.openedModal === 'filters'" />
      </Transition>
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
