<template>
  <div class="flex items-center gap-2 w-full">
    <div
      class="flex items-center gap-2 rounded-sm border border-cyan w-full h-10.5 px-3 md:max-w-87.5 transition-shadow transition-200"
      :class="{ 'shadow-[0_0_5px_0px_cyan]': isFocused }"
    >
      <IconsSearch />
      <input
        v-model="search"
        type="text"
        placeholder="SEARCH_QUERY://"
        class="w-full focus:outline-none py-2 text-sm text-cyan/70 placeholder:text-gray-600"
        @keydown.enter="handleSearch"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
    </div>
    <button
      class="cursor-pointer bg-cyan/13 text-cyan border border-cyan/13 h-10.5 px-3 rounded-sm hover:shadow-[0_0_5px_0px_cyan]"
      @click="handleSearch"
    >
      BUSCAR
    </button>
  </div>
</template>

<script lang="ts">
  import { useFiltersStore } from '@/stores/filters';
  import { updateRouteQuery } from '@/helpers/updateRouteQuery';

  export default {
    data(): {
      isFocused: boolean;
    } {
      return {
        isFocused: false
      };
    },

    computed: {
      store() {
        return useFiltersStore();
      },

      search: {
        get() {
          return this.store.search;
        },

        set(value: string) {
          this.store.search = value;
        }
      }
    },

    methods: {
      handleInputFocus() {
        this.isFocused = true;
      },
      handleInputBlur() {
        this.isFocused = false;
      },
      handleSearch() {
        updateRouteQuery(
          {
            search: this.search
          },
          {
            resetPage: true
          }
        );
      }
    }
  };
</script>
