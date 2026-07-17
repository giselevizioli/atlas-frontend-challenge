<template>
  <header
    class="w-full flex justify-center h-20 md:h-21.25 bg-dark-blue border-b border-b-cyan/20 mb-6 shadow-[0_0_5px_0px_cyan]"
  >
    <div class="max-w-7xl px-8 w-full h-full flex items-center">
      <Search />
    </div>
  </header>
</template>

<script lang="ts">
  import Search from '@/components/header/Search.vue';
  export default {
    components: {
      Search
    }
  };
</script>
