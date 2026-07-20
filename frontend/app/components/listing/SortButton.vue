<template>
  <div class="relative">
    <button
      class="flex items-center gap-2 px-3 h-10 border border-cyan/25 rounded-sm cursor-pointer hover:shadow-[0_0_5px_0px_cyan] transition-shadow"
      @click="store.setOpenedModal('sort')"
    >
      <IconsSort />
      <span class="text-white">Ordenar</span>
    </button>
    <Transition
      enter-active-class="transition-all duration-75 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="store.openedModal === 'sort'">
        <teleport to="#teleports">
          <div
            class="w-full h-full bg-black/80 fixed top-0 left-0"
            @click.self="store.setOpenedModal('')"
          />
        </teleport>
        <div
          class="absolute w-max bg-petroleum-blue rounded-sm right-0 flex flex-col z-10"
        >
          <button
            v-for="field in sortFields"
            :key="field.name"
            class="text-gray font-medium w-full py-3 px-4 uppercase cursor-pointer not-last:border-b not-last:border-b-cyan/10 hover:bg-cyan/8 transition-colors"
            :class="{ 'bg-cyan/8': isSelected(field) }"
            @click="sort(field)"
          >
            {{ field.name }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
  import { useFiltersStore } from '@/stores/filters';
  import { updateRouteQuery } from '@/helpers/updateRouteQuery';
  import type { SortFieldObject } from '@/types/professional';

  export default {
    data() {
      return {
        sortFields: [
          { sort: 'price', order: 'asc', name: 'Salário: menor ao maior' },
          { sort: 'price', order: 'desc', name: 'Salário: maior ao menor' },
          { sort: 'rating', order: 'asc', name: 'Avaliação: menor à maior' },
          { sort: 'rating', order: 'desc', name: 'Avaliação: maior à menor' }
        ]
      };
    },

    watch: {
      showSort() {
        if (this.showSort) {
          document.body.style.overflow = 'hidden';
          return;
        }

        document.body.style.overflow = '';
      }
    },

    computed: {
      store() {
        return useFiltersStore();
      }
    },

    methods: {
      isSelected(field: SortFieldObject) {
        return (
          this.store.sort === field.sort && this.store.order === field.order
        );
      },
      sort(field: SortFieldObject) {
        document.body.style.overflow = '';

        updateRouteQuery({
          sort: field.sort,
          order: field.order
        });

        this.store.setOpenedModal('');
      }
    }
  };
</script>
