<template>
  <div class="flex gap-2">
    <button
      v-for="page in visiblePages"
      :key="page"
      class="flex items-center justify-center size-9 rounded-sm cursor-pointer text-white border border-cyan/20 transition-shadow hover:shadow-[0_0_5px_0px_cyan]"
      :class="{ 'bg-cyan/13': page === pagination.page }"
      :aria-label="`Ir para a página ${page}`"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script lang="ts">
  import { useProfessionalsStore } from '@/stores/professionals';
  import { updateRouteQuery } from '@/helpers/updateRouteQuery';

  export default {
    computed: {
      store() {
        return useProfessionalsStore();
      },
      pagination() {
        return this.store.pagination;
      },

      visiblePages() {
        const totalPages = this.pagination.totalPages;
        const currentPage = this.pagination.page;
        const maxButtons = 5;

        if (totalPages <= maxButtons) {
          return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        let start = currentPage - Math.floor(maxButtons / 2);
        let end = currentPage + Math.floor(maxButtons / 2);

        if (start < 1) {
          start = 1;
          end = maxButtons;
        }

        if (end > totalPages) {
          end = totalPages;
          start = totalPages - maxButtons + 1;
        }

        const pages = [];

        for (let page = start; page <= end; page++) {
          pages.push(page);
        }

        return pages;
      }
    },

    methods: {
      changePage(page: number) {
        updateRouteQuery({
          page
        });
      }
    }
  };
</script>
