<template>
  <header
    class="w-full flex justify-center h-20 md:h-21.25 bg-dark-blue border-b border-b-cyan/20 mb-6 shadow-[0_0_5px_0px_cyan]"
  >
    <div class="max-w-7xl px-8 w-full h-full flex items-center">
      <HeaderSearch v-if="showSearch" />
      <button
        v-else
        class="flex items-center gap-1 cursor-pointer"
        @click="goBack"
      >
        <IconsArrow />
        <span class="text-cyan/90 uppercase text-lg">Voltar</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
  export default {
    props: {
      showSearch: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      goBack() {
        if (history.state?.back) {
          this.$router.back();
        } else {
          navigateTo('/professionals');
        }
      }
    }
  };
</script>
